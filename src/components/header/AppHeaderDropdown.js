import React from "react"
import {
  CAvatar,
  // CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react"

import * as BiIcons from "react-icons/bi"
// import * as MdIcons from "react-icons/md"
import * as VscIcons from "react-icons/vsc"
import * as IoIcons from "react-icons/io5"

import { Component } from "react"
import { connect } from "react-redux"

import eventBus from "src/_helper/EventBus"
import Roles from "src/router/config"
import { logout } from "src/service/apiActions/userAction/userAction"

const style = {
  marginRight: "10px",
}
class AppHeaderDropdown extends Component {
  state = {
    hrefLink: "",
    permission: "",
    isLoggedIn: false,
  }
  componentDidMount() {
    let { isLoggedIn, credentials } = this.props.userResponse
    let roleName = credentials.roles.roleName
    let getPermission = roleName
      ? roleName
      : this.props.userResponse.credentials.roles
    if (isLoggedIn) {
      let href = this.manageHrefLinkBasedInPermission(getPermission)
      this.setState({
        hrefLink: href,
      })
    }
    eventBus.on("logout", () => {
      this.logOut()
    })
  }
  componentDidUpdate() {
    eventBus.remove("logout")
  }
  handleLogOut = () => {
    window.location.reload()
    this.props.logout()
  }
  manageHrefLinkBasedInPermission = (permission) => {
    if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
      return "/app/"
    } else {
      return "/user/"
    }
  }
  render() {
    let { hrefLink } = this.state
    return (
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <CAvatar src="/avatars/8.jpg" size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">
            Account
          </CDropdownHeader>
          <CDropdownItem href={hrefLink + "profile"}>
            <VscIcons.VscAccount style={style} size={20} />
            Profile
          </CDropdownItem>
          <CDropdownItem href={hrefLink + "order"}>
            <IoIcons.IoBagCheck style={style} size={20} />
            Order
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem onClick={this.handleLogOut}>
            <BiIcons.BiLogOut size={20} style={style} />
            Log Out
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
  }
}
export default connect(mapStateToProps, {
  logout,
})(AppHeaderDropdown)
