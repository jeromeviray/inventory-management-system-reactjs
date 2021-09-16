import React, { Component, Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { Route, Switch, Redirect } from 'react-router'
import { publicRoutes } from 'src/router/config/routes'
import { connect } from 'react-redux'
//action
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { history } from 'src/_helper/history'
import Roles from 'src/router/config'
const Page404 = React.lazy(() => import("../../views/common/public/page404/Page404"))

export class PublicContent extends Component {
    state = {
        isLoggedIn: false,
        permission: ''
    }
    componentDidMount() {
        if (!this.props.userResponse.isLoggedIn) {
            history.push("/login");
        } else {
            this.redirectUser();
            this.handleLogout();
        }
    }
    handleLogout = () => {
        let { status, data } = this.props.messageResponse
        if (status > 400 && status <= 403) {
            this.props.logout();
            this.props.clearMessage();
            window.location.reload();
        }
    }
    redirectUser = () => {
        const isLoggedIn = this.props.userResponse.isLoggedIn;
        if (isLoggedIn) {
            let roleName = this.props.userResponse.credentials.roles.roleName;
            let permission = roleName ? roleName : this.props.userResponse.credentials.roles;

            this.setState({
                isLoggedIn: isLoggedIn,
                permission: permission
            })
        }
    }
    render() {
        let { isLoggedIn, permission } = this.state;
        if (isLoggedIn) {
            if (permission === Roles.SUPER_ADMIN ||
                permission === Roles.ADMIN) {
                return <Redirect to="/app" />
            }
        }
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
const mapStateToProps = (state) => {
    return {
        userResponse: state.userResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    logout, clearMessage
})(React.memo(PublicContent))
