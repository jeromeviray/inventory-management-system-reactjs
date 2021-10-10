import React, { Component, Suspense } from "react"
import { CContainer } from "@coreui/react"
import { DotLoader } from "react-spinners"

import { Route, Switch, Redirect } from "react-router"
import { publicRoutes } from "src/router/privateRouter/routes"
import { connect } from "react-redux"
//action
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import Roles from "src/router/config"

const Page404 = React.lazy(() =>
  import("../../views/common/public/page404/Page404"),
)

export class PublicContent extends Component {
  state = {
    isLoggedIn: false,
    permission: "",
  }
  componentDidMount() {
    this.redirectUser()
  }

  redirectUser = () => {
    const isLoggedIn = this.props.userResponse.isLoggedIn
    if (isLoggedIn) {
      let roleName = this.props.userResponse.credentials.roles.roleName
      let permission = roleName
        ? roleName
        : this.props.userResponse.credentials.roles

      this.setState({
        isLoggedIn: isLoggedIn,
        permission: permission,
      })
    }
  }
  render() {
    let { isLoggedIn, permission } = this.state
    if (isLoggedIn) {
      if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
        return <Redirect to="/app" />
      }
    }
    return (
      <>
        <CContainer>
          <Suspense
            fallback={
              <div className="d-flex justify-content-center align-items-center  position-fixed ">
                <DotLoader color="#36D7B7" size={100} />
              </div>
            }
          >
            <Switch>
              {publicRoutes.map((route, idx) => {
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
              <Route
                path="/"
                exact
                render={() => {
                  return <Redirect to="/home" />
                }}
              />
              <Route
                path="/user"
                exact
                render={() => {
                  return <Redirect to="/user/order" />
                }}
              />

              <Route
                path="*"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              />
            </Switch>
          </Suspense>
        </CContainer>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  clearMessage,
})(React.memo(PublicContent))
