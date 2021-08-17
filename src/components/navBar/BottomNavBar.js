import React, { Component } from 'react'
import {
    CNavbar,
    CContainer,
    CNavbarNav,
    CNavItem,

} from '@coreui/react'
import { Link } from 'react-router-dom'
import { bottomItems } from "./items"

export class Navbar extends Component {
    state = {
        visible: false
    }

    render() {
        return (
            <>
                <CNavbar expand="lg" colorScheme="dark" className="bg-dark d-lg-none d-md-block" placement="fixed-bottom">
                    <CContainer fluid >
                        <CNavbarNav className="d-flex flex-row justify-content-evenly w-100 ">
                            {bottomItems.map((item, idx) => {
                                return <CNavItem key={idx}>
                                    <Link className="nav-link d-flex  justify-content-center align-items-center" to={item.pathName}>
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                </CNavItem>
                            })}
                        </CNavbarNav>
                    </CContainer>
                </CNavbar>
            </>
        )
    }
}

export default Navbar
