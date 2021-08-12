import React, { Component, Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { Route, Switch, Redirect } from 'react-router'
import { publicRoutes } from 'src/routes'

export class PublicContent extends Component {
    render() {
        return (
            <>
                <CContainer>
                    <Suspense fallback={<CSpinner color="primary" />}>
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
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </Suspense>
                </CContainer>
            </>
        )
    }
}

export default React.memo(PublicContent)
