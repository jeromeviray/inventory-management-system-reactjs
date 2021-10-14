import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import queryString from "query-string"
import { history } from "src/_helper/history"
import config from "../../config"
export class RedirectSuccessHandler extends Component {
  render() {
    let params = queryString.parse(this.props.location.search)
    const token = params.accessToken
    const refreshToken = params.refreshToken
    const username = params.username
    const authorities = params.roles.replace(/[\[\]']+/g, "")

    const currentUser = {
      type: "Bearer ",
      username: username,
      accessToken: token,
      refreshToken: refreshToken,
      roles: authorities,
    }
    const error = params.error

    if (currentUser) {
      localStorage.setItem("credentials", JSON.stringify(currentUser))
      history.push(config.api.private.prefixFrontendUrl + "/home")
      window.location.reload()
      // return (
      //     <Redirect
      //         to={{
      //             pathname: "/",
      //             state: { from: this.props.location },

      //         }}
      //     />
      // )
    } else {
      return (
        <Redirect
          to={{
            pathname: config.api.private.prefixFrontendUrl + "/login",
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
