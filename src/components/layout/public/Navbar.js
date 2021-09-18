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
// import { AppHeaderDropdown } from '../sidebar'
import { AppHeaderDropdown } from 'src/components/header'
import * as FaIcons from "react-icons/fa"
import { connect } from 'react-redux'


export class Navbar extends Component {
    state = {
        visible: false
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
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
                        {isLoggedIn &&
                            <CNavbarNav>
                                <CNavItem>
                                    <CNavLink href="/cart">
                                        <FaIcons.FaShoppingCart size={25} />
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
    const { isLoggedIn, credentials } = state.userResponse;
    return {
        isLoggedIn,
        credentials
    }
}
export default connect(mapStateToProps, {})(Navbar)
