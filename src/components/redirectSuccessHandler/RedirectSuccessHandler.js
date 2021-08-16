import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import queryString from "query-string"

export class RedirectSuccessHandler extends Component {
    render() {
        let params = queryString.parse(this.props.location.search)

        const token = params.accessToken
        const refreshToken = params.refreshToken
        const username = params.username

        const currentUser = {
            username: username,
            access_token: token,
            refresh_token: refreshToken,
        }
        const error = params.error

        if (currentUser) {
            localStorage.setItem("credentials", JSON.stringify(currentUser))
            return (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: this.props.location },
                    }}
                />
            )
        } else {
            return (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            from: this.props.location,
                            error: error,
                        },
                    }}
                />
            )
        }
    }
}

export default RedirectSuccessHandler
