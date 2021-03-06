import React, { Component } from "react"
import { connect } from "react-redux"
import { history } from "src/_helper/history"
import Roles from "src/router/config"
import { Redirect } from "react-router-dom"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/layout/admin/index"
import config from "../config"

export class DefaultLayout extends Component {
  state = {
    isLoggedIn: false,
    permission: "",
  }

  componentDidMount() {
    console.log(this.props.messageResponse)
    if (!this.props.userResponse.isLoggedIn) {
      history.push(config.api.private.prefixFrontendUrl + "/login")
    } else {
      this.redirectUser()
    }
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
      if (
        permission === Roles.USER ||
        permission === Roles.CUSTOMER ||
        permission === Roles.ROLE_USER
      ) {
        return <Redirect to={config.api.private.prefixFrontendUrl + "/400"} />
      }
    } else if (!this.props.userResponse.isLoggedIn) {
      return <Redirect to={config.api.private.prefixFrontendUrl + "/login"} />
    }
    return (
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent isAddNotFound />
          </div>
          <AppFooter />
        </div>
      </div>
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
})(DefaultLayout)
