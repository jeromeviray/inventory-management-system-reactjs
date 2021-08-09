import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { ACCESS_TOKEN, USERNAME, REFRESH_TOKEN } from "../redux/constants"
import queryString from "query-string"

export class RedirectSuccessHandler extends Component {
  render() {
    let params = queryString.parse(this.props.location.search)

    const token = params.accessToken
    const refreshToken = params.refreshToken
    const username = params.username
    const error = params.error
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token)
      localStorage.setItem(ACCESS_TOKEN, token)
      localStorage.setItem(USERNAME, username)
      localStorage.setItem(REFRESH_TOKEN, refreshToken)

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
