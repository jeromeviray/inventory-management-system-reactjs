import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CCreateNavItem,
  CSidebarFooter,
} from "@coreui/react"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"

// import { sideBarChange } from "../"
import { sideBarChange } from "../../service/apiActions/changeStateAction"

// sidebar nav config
import navigation from "../../_nav"

// react icons
import * as BiIcons from "react-icons/bi"
import Routings from "src/_helper/Routings"
import { logout } from "src/service/apiActions/userAction/userAction"
import eventBus from "src/_helper/EventBus"
// import { history } from "src/_helper/history"

class AppSidebar extends Component {
  state = {
    sidebarShow: false,
    nav: [],
    roles: ''
  }

  componentDidMount() {
    this.handleAllowedRoutes();
    eventBus.on("logout", () => {
      this.logOut();
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.changeStateResponse !== this.props.changeStateResponse) {
      this.setState({
        sidebarShow: this.props.changeStateResponse.state.sidebarState,
      })
    }
    eventBus.remove("logout")
  }

  handleAllowedRoutes = () => {
    let roles = '';
    let roleName = this.props.userResponse.credentials.roles.roleName;
    if (!roleName) {
      roles = this.props.userResponse.credentials.roles
    } else {
      roles = roleName;
    }
    const allowedRoutes = Routings.getAllowedRoutes(navigation, roles);
    this.setState({
      nav: allowedRoutes
    })

  }
  handleLogOut = () => {
    this.props.logout();
    window.location.reload();

  }
  render() {
    const { sidebarShow, nav, roles } = this.state
    const { userResponse } = this.props;
    console.log(roles)
    return (

      <CSidebar
        position="fixed"
        selfHiding="md"
        unfoldable={false}
        show={sidebarShow}
        // onShow={() => console.log("show")}?
        onHide={() => {
          this.props.sideBarChange(!sidebarShow)
        }}
      >
        <CSidebarBrand className=" d-md-flex" to="/">
          Welcome, {userResponse.credentials.username}
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <CCreateNavItem items={nav} />
          </SimpleBar>
        </CSidebarNav>
        {/* <CSidebarToggler
          className=" d-lg-flex"
          onClick={() => this.props.sidebarUnfoldChange(!sidebarUnfoldable)}
        /> */}
        <CSidebarFooter
          className="d-flex justify-content-between "
          onClick={this.handleLogOut} style={{ cursor: "pointer" }}>

          <span className="font-weight-lighter">Log out</span>
          <BiIcons.BiLogOut size={20} />
        </CSidebarFooter>
      </CSidebar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    changeStateResponse: state.changeStateResponse,
    userResponse: state.userResponse,
  }
}

export default withRouter(
  connect(mapStateToProps, {
    sideBarChange,
    logout
  })(AppSidebar),
)
