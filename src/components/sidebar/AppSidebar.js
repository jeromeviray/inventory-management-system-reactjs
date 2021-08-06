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
import { sideBarChange } from "../apiActions/changeStateAction"

// sidebar nav config
import navigation from "../../_nav"

// react icons
import * as BiIcons from "react-icons/bi"

class AppSidebar extends Component {
  state = {
    sidebarShow: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.changeStateResponse !== this.props.changeStateResponse) {
      this.setState({
        sidebarShow: this.props.changeStateResponse.state.sidebarState,
      })
    }
  }

  render() {
    const { sidebarShow } = this.state
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
          Welcome, JC.
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <CCreateNavItem items={navigation} />
          </SimpleBar>
        </CSidebarNav>
        {/* <CSidebarToggler
          className=" d-lg-flex"
          onClick={() => this.props.sidebarUnfoldChange(!sidebarUnfoldable)}
        /> */}
        <CSidebarFooter className="d-flex justify-content-between ">
          <span className="font-weight-lighter ">Log out</span>
          <BiIcons.BiLogOut size={20} />
        </CSidebarFooter>
      </CSidebar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    changeStateResponse: state.changeStateResponse,
  }
}

export default withRouter(
  connect(mapStateToProps, {
    sideBarChange,
    // sidebarUnfoldChange,
  })(AppSidebar),
)
