import React, { Component, lazy } from "react"
import {
  BrowserRouter as Router,
  // HashRouter,
  Route,
  Switch,
} from "react-router-dom"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

import { connect } from "react-redux"
import PrivateRouter from "./router/privateRouter/PrivateRouter"
import { DotLoader } from "react-spinners"

import { logout } from "src/service/apiActions/userAction/userAction"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./scss/style.scss"

const loading = (
  <div className="d-flex justify-content-center align-items-center  position-fixed ">
    <DotLoader color="#36D7B7" size={100} />
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"))
const PublicLayout = React.lazy(() => import("./layout/PublicLayout"))

// Pages
const Login = React.lazy(() => import("./views/common/public/login/Login"))
const Register = React.lazy(() =>
  import("./views/common/public/register/Register"),
)
const Page404 = React.lazy(() =>
  import("./views/common/public/page404/Page404"),
)
const Page500 = React.lazy(() =>
  import("./views/common/public/page500/Page500"),
)
const RedirectSuccessHandler = lazy(() =>
  import("./components/redirectSuccessHandler/RedirectSuccessHandler"),
)
const ForgotPassword = React.lazy(() =>
  import("src/views/common/forgotPassword/ForgotPassword"),
)
// customer layou
const CustomerLayout = React.lazy(() => import("src/layout/CustomerLayout"))

class App extends Component {
  componentDidUpdate(prevProps, prevState) {
    this.manageResponse(prevProps, prevState)
  }

  manageResponse(prevProps, prevState) {
    if (this.props.messageResponse != prevProps.messageResponse) {
      let failMessage = this.props.messageResponse
      if (failMessage.status > 400 && failMessage.status <= 403) {
        setTimeout(() => {
          toast("Session Expired" + failMessage.data.message)
          this.props.logout()
        }, 1000)
      } else if (failMessage.data && failMessage.data.message) {
        toast(failMessage.data.message)
      }
    }
  }
  render() {
    // const credentials = this.props.credentials;
    return (
      <>
        {/* <div className="bg-light "> */}
        <Router>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route
                exact
                path="/oauth2/redirect"
                name="success handler"
                render={(props) => <RedirectSuccessHandler {...props} />}
              />
              <Route
                exact
                path="/login"
                name="Login Page"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/password/forgot"
                name="Forgot password"
                render={(props) => <ForgotPassword {...props} />}
              />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />
              <Route
                exact
                path="/500"
                name="Page 500"
                render={(props) => <Page500 {...props} />}
              />
              <Route
                exact
                path="/400"
                name="Page 400"
                render={(props) => <Page404 {...props} />}
              />
              <PrivateRouter path="/app" component={DefaultLayout} />
              <PrivateRouter path="/user" component={CustomerLayout} />
              <Route
                path="/"
                name="public"
                render={(props) => <PublicLayout {...props} />}
              />
            </Switch>
          </React.Suspense>
        </Router>
        <ToastContainer />
        {/* </div> */}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  const isLoggedIn = state.userResponse.isLoggedIn
  const credentials = state.userResponse.credentials
  return {
    isLoggedIn,
    credentials,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  logout,
})(App)
