import React, { Suspense, Component } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { CContainer, CSpinner } from "@coreui/react"
import { DotLoader } from "react-spinners"

// routes config
import { routes } from "src/router/privateRouter/routes"

// import Roles from 'src/router/config'
import Page404 from "src/views/common/public/page404/Page404"

//action
import { getRoutes } from "src/service/apiActions/routesAction/routesAction"
import { connect } from "react-redux"
import Routings from "src/_helper/Routings"
import Roles from "src/router/config"

import config from "../../../config"

class AppContent extends Component {
  state = {
    getRoutes: [],
    permission: "",
  }
  componentDidMount() {
    this.handleAllowedRoutes()
  }

  handleAllowedRoutes = () => {
    let roles = ""
    let roleName = this.props.userResponse.credentials.roles.roleName
    if (!roleName) {
      roles = this.props.userResponse.credentials.roles
    } else {
      roles = roleName
    }
    this.setState({
      permission: roleName,
    })
    const allowedRoutes = Routings.getAllowedRoutes(routes, roles)
    this.props.getRoutes(allowedRoutes)
    this.setState({
      getRoutes: allowedRoutes,
    })
  }
  render() {
    const { getRoutes, roleName } = this.state
    // console.log(this.props.userResponse.credentials.roles.roleName)
    return (
      <CContainer lg>
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center  position-fixed spinner">
              <DotLoader color="#36D7B7" size={100} />
            </div>
          }
        >
          <Switch>
            {getRoutes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <>
                        <route.component {...props} />
                      </>
                    )}
                  />
                )
              )
            })}
            {this.props.userResponse.credentials.roles.roleName ===
              Roles.SUPER_ADMIN ? (
              <Route
                path="/app"
                exact
                render={() => {
                  return (
                    <Redirect
                      to={
                        config.api.private.prefixFrontendUrl + "/app/dashboard"
                      }
                    />
                  )
                }}
              />
            ) : (
              <Route
                path="/app"
                exact
                render={() => {
                  return (
                    <Redirect
                      to={config.api.private.prefixFrontendUrl + "/app/order"}
                    />
                  )
                }}
              />
            )}
            {this.props.isAddNotFound && (
              <Route>
                <Page404 />
              </Route>
            )}
          </Switch>
        </Suspense>
      </CContainer>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    routesResponse: state.routesResponse,
  }
}
export default connect(mapStateToProps, {
  getRoutes,
})(React.memo(AppContent))
