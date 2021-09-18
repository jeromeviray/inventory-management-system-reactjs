import React, { Component } from 'react'
import {
    CHeader,
    CContainer,
    CHeaderNav,
    CNavItem,
    CNavLink,
    CHeaderDivider,
    CForm,
    CFormControl,
    CButton,
    CFormFloating,
    CFormLabel,
    CInputGroup,
    CInputGroupText
} from '@coreui/react'
import { Link } from 'react-router-dom'
// import { AppHeaderDropdown } from '../sidebar'
import { AppHeaderDropdown } from 'src/components/header'
//icons
import * as FaIcons from "react-icons/fa"
import * as FiIcons from "react-icons/fi"

import { connect } from 'react-redux'
const style = {
    marginRight: "10px"
}
export class NavHeader extends Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return (
            <CHeader position="sticky" >
                <CContainer>
                    <Link className="nav-link" to="/home" style={{ cursor: "pointer" }}>
                        <h2 className="nav-item">Logo</h2>
                    </Link>
                    {isLoggedIn ?
                        <CHeaderNav className="ms-3" >
                            <div className="d-flex justify-content-center">

                                <CNavItem>
                                    <CNavLink href="/cart">
                                        <FaIcons.FaShoppingCart size={25} />
                                    </CNavLink>
                                </CNavItem>

                                <AppHeaderDropdown />
                            </div>

                        </CHeaderNav> :
                        <CHeaderNav className="ms-3 ">
                            <CNavItem>
                                <CNavLink href="/login">
                                    <FiIcons.FiLogIn size={20} style={style} />
                                    Login
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="/register">
                                    <FaIcons.FaUserPlus size={20} style={style} />
                                    Register
                                </CNavLink>
                            </CNavItem>
                        </CHeaderNav>
                    }
                </CContainer>
                <CHeaderDivider />
                <CContainer className="d-flex justify-content-center align-items-center">

                    <CForm className="w-50">
                        <CInputGroup>
                            <CFormControl type="text" id="floatingInput" placeholder="Search" className="p-2" />
                            <CButton type="button" color="info" variant="outline" id="button-addon2" className="">
                                <FaIcons.FaSearch />
                            </CButton>
                        </CInputGroup>
                    </CForm>
                </CContainer>
            </CHeader>
        )
    }
}


const mapStateToProps = (state) => {
    const { isLoggedIn, credentials } = state.userResponse;
    return {
        isLoggedIn,
        credentials
    }
}
export default connect(mapStateToProps, {
})(NavHeader)
