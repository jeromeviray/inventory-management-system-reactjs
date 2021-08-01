import React, { Component } from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import "./scss/style.scss"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"))

// Pages
const Login = React.lazy(() => import("./views/public/login/Login"))
const Register = React.lazy(() => import("./views/public/register/Register"))
const Page404 = React.lazy(() => import("./views/public/page404/Page404"))
const Page500 = React.lazy(() => import("./views/public/page500/Page500"))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
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
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Admin"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App
