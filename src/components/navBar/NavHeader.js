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
import * as FaIcons from "react-icons/fa"
import { connect } from 'react-redux'

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
                    {isLoggedIn &&
                        <CHeaderNav className="ms-3 d-lg-none d-md-block">
                            <CNavItem>
                                <CNavLink href="#">
                                    <FaIcons.FaBell size={20} />
                                </CNavLink>
                            </CNavItem>
                            <AppHeaderDropdown />
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
