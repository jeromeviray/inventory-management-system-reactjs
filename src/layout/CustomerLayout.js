import React, { Component } from 'react'
import NavHeader from 'src/components/layout/public/NavHeader'
import { BottomNavBar, Navbar } from 'src/components/layout/public/index'
import { CContainer } from '@coreui/react'
import { PublicContent } from 'src/components/public'

const Sidenav = React.lazy(() => import('src/components/layout/customer/Sidenav'))

export class CustomerLayout extends Component {
    render() {
        return (
            <>
                <NavHeader />
                {/* <Navbar /> */}
                {/* <BottomNavBar /> */}
                <CContainer>
                    <div className="d-flex justify-content-between mt-3 ">
                        <Sidenav />
                        <PublicContent />
                    </div>
                </CContainer>
                {/* </div> */}

            </>
        )
    }
}

export default CustomerLayout
