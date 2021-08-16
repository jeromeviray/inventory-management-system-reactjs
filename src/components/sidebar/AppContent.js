import React, { Suspense, Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { intersection } from 'lodash'

// routes config
import { routes } from 'src/router/config/routes'

import { Roles } from 'src/router/config'
import Page404 from 'src/views/common/public/page404/Page404'

class AppContent extends Component {
  state = {
    nav: []
  }
  componentDidMount() {

    this.handleAllowedRoutes();
  }
  isArrayWithLength(arr) {
    return (Array.isArray(arr) && arr.length)
  }

  handleAllowedRoutes = () => {
    // const credentials = this.props.userResponse.credentials;
    const roles = [Roles.ADMIN];

    let allowed = routes.filter(({ permission }) => {
      if (!permission) return true;
      else if (!this.isArrayWithLength(permission)) return true;
      else return intersection(permission, roles).length;
    })
    this.setState({
      nav: allowed
    })
  }
  render() {
    const { nav } = this.state;
    console.log(nav)
    return (
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          <Switch>
            {nav.map((route, idx) => {
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

export default React.memo(AppContent)
