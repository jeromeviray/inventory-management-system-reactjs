import React, { Component } from 'react'
import {
    CNavbar,
    CContainer,
    CNavbarBrand,
    CNavbarToggler,
    CCollapse,
    CNavbarNav,
    CNavItem,
    CNavLink
} from '@coreui/react'
import { Link } from 'react-router-dom'
import { topItems } from './items'
import { AppHeaderDropdown } from '../sidebar'
import * as FaIcons from "react-icons/fa"
import { connect } from 'react-redux'


export class Navbar extends Component {
    state = {
        visible: false
    }

    render() {

        return (
            <>
                <CNavbar expand="lg" colorScheme="dark" className="bg-dark d-none d-lg-block" placement="sticky-top" >
                    <CContainer>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CNavbarToggler onClick={() => this.setState({
                            visible: !this.state.visible
                        })} />
                        <CCollapse className="navbar-collapse" visible={this.state.visible}>
                            <CNavbarNav>
                                {topItems.map((item, idx) => {
                                    return <CNavItem key={idx}>
                                        <Link className="nav-link d-flex justify-content-center align-items-center" to={item.pathName}>
                                            {item.icon}
                                            {item.title}
                                        </Link>
                                    </CNavItem>
                                })}
                            </CNavbarNav>
                        </CCollapse>
                        {this.props.isLoggedIn &&
                            <CNavbarNav>
                                <CNavItem>
                                    <CNavLink href="#">
                                        <FaIcons.FaBell size={20} />
                                    </CNavLink>
                                </CNavItem>
                                <AppHeaderDropdown />
                            </CNavbarNav>
                        }
                    </CContainer>
                </CNavbar>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const isLoggedIn = state.userResponse.isLoggedIn;
    return {
        isLoggedIn
    }
}
export default connect(mapStateToProps, {})(Navbar)
