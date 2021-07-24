import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react"
import * as FaIcons from 'react-icons/fa'

import { AppBreadcrumb } from "./index"

import { AppHeaderDropdown } from "./header/index"

import {
  sideBarChange,
} from "../components/apiActions/changeStateAction"

class AppHeader extends Component {
  state = {
    sidebarUnfoldable: false,
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
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ms-md-3"
            onClick={() => this.props.sideBarChange(!sidebarShow)}
          >
            <FaIcons.FaBars size={20} />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto  " to="/">
            <h2>Logo</h2>
          </CHeaderBrand>

          <CHeaderNav className="ms-3">
            <CNavItem>
              <CNavLink href="#">
                <FaIcons.FaBell size={20} />
              </CNavLink>
            </CNavItem>
            <AppHeaderDropdown />
          </CHeaderNav>
        </CContainer>
        <CHeaderDivider />
        <CContainer fluid>
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
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
  })(AppHeader),
)
