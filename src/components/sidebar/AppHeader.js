import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"

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

import { AppHeaderDropdown } from "./index"

import { sideBarChange } from "../../service/apiActions/changeStateAction"

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
          {/* <CHeaderBrand className="mx-auto nav-link" to="/home" style={{ cursor: "pointer" }}> */}
          <Link className="nav-link" to="/home" style={{ cursor: "pointer" }}>
            <h2 className="nav-item">Logo</h2>
          </Link>
          {/* </CHeaderBrand> */}

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
