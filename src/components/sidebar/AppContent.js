import React, { Suspense, Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import { routes } from 'src/router/config/routes'

// import Roles from 'src/router/config'
import Page404 from 'src/views/common/public/page404/Page404'

//action
import { getRoutes } from 'src/service/apiActions/routesAction/routesAction'
import { connect } from 'react-redux'
import Routings from 'src/_helper/Routings'


class AppContent extends Component {
  state = {
    getRoutes: []
  }
  componentDidMount() {
    this.handleAllowedRoutes();
  }

  handleAllowedRoutes = () => {
    const roles = this.props.userResponse.credentials.roles.roleName;
    const allowedRoutes = Routings.getAllowedRoutes(routes, roles)
    this.props.getRoutes(allowedRoutes)
    this.setState({
      getRoutes: allowedRoutes
    })
  }
  render() {
    const { getRoutes } = this.state;
    return (
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
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
            <Route path="/app" exact render={() => {
              return (
                <Redirect to="/app/dashboard" />
              )
            }} />
            {this.props.isAddNotFound && <Route><Page404 /></Route>}

          </Switch>
        </Suspense>
      </CContainer>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    routesResponse: state.routesResponse
  }
}
export default connect(mapStateToProps, {
  getRoutes
})(React.memo(AppContent))
