import React, { Component } from 'react'
import {
    CHeader,
    CContainer,
    CHeaderNav,
    CNavItem,
    CNavLink,

} from '@coreui/react'
import { Link } from 'react-router-dom'
import { AppHeaderDropdown } from '../sidebar'
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
        console.log(isLoggedIn)
        return (
            <CHeader>
                <CContainer>
                    <Link className="nav-link" to="/home" style={{ cursor: "pointer" }}>
                        <h2 className="nav-item">Logo</h2>
                    </Link>
                    {isLoggedIn ?
                        <CHeaderNav className="ms-3 d-lg-none d-md-block">
                            <div className="d-flex justify-content-center">
                                <CNavItem>
                                    <CNavLink href="#">
                                        <FaIcons.FaBell size={20} />
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
            </CHeader>
        )
    }
}


const mapStateToProps = (state) => {
    const isLoggedIn = state.userResponse.isLoggedIn;
    return {
        isLoggedIn
    }
}
export default connect(mapStateToProps, {
})(NavHeader)
