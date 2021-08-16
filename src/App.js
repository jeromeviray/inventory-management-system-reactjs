import React, { Component, lazy } from "react"
import {
  BrowserRouter as Router,
  Redirect,
  // HashRouter,
  Route,
  Switch
} from "react-router-dom"
import "./scss/style.scss"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { connect } from "react-redux";
import PrivateRouter from "./router/privateRouter/PrivateRouter";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"))
const PublicLayout = React.lazy(() => import("./layout/PublicLayout"))


// Pages
const Login = React.lazy(() => import("./views/common/public/login/Login"))
const Register = React.lazy(() => import("./views/common/public/register/Register"))
const Page404 = React.lazy(() => import("./views/common/public/page404/Page404"))
const Page500 = React.lazy(() => import("./views/common/public/page500/Page500"))
const RedirectSuccessHandler = lazy(() => import("./components/redirectSuccessHandler/RedirectSuccessHandler"))

class App extends Component {
  render() {
    // const credentials = this.props.credentials;
    return (
      <>
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
              <PrivateRouter path="/app" component={DefaultLayout} />
              {/* <PrivateRoutes /> */}
              <Route
                path="/"
                name="public"
                render={(props) => <PublicLayout {...props} />}
              />
              {/* <Route exact path="/" render={() => (
                <Redirect to="/home" />
              )} /> */}

              <Route
                path="*"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              />

            </Switch>
          </React.Suspense>
        </Router>
      </>

    )
  }
}
const mapStateToProps = (state) => {
  const isLoggedIn = state.userResponse.isLoggedIn;
  const credentials = state.userResponse.credentials;
  return {
    isLoggedIn,
    credentials,

  }
}
export default connect(mapStateToProps)(App)
