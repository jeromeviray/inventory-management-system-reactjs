import React, { Component, Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { Route, Switch, Redirect } from 'react-router'
import { publicRoutes } from 'src/router/config/routes'

const Page404 = React.lazy(() => import("../../views/common/public/page404/Page404"))

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
                            <Route path="/" exact render={() => {
                                return (
                                    <Redirect to="/home" />
                                )
                            }} />
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

export default React.memo(PublicContent)
