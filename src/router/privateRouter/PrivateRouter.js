import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router'

import config from "../../config"
const PrivateRouter = ({ component: Component, roles, name, ...rest }) => {
    const isLoggedIn = useSelector((state) => state.userResponse.isLoggedIn);
    return (
        <Route {...rest} render={props => (
            isLoggedIn ? <Component {...props} />
                : <Redirect to={config.api.private.prefixFrontendUrl + "/login"} />
        )} />
    )

}

export default PrivateRouter

