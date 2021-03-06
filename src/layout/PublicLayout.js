import React, { Component } from 'react'
import { BottomNavBar, Navbar } from 'src/components/layout/public/index'
import { PublicContent } from 'src/components/public/index'
import NavHeader from 'src/components/layout/public/NavHeader'
const Footer = React.lazy(() => import('src/views/common/footer/Footer'))
export default class PublicLayout extends Component {
     render() {
          return (
               <>
                    <NavHeader />
                    {/* <Navbar /> */}
                    {/* <BottomNavBar /> */}
                    <div className="body" style={{ margin: "20px 0" }}>
                         <PublicContent />
                    </div>
                    <div className="">
                         <Footer />
                    </div>
               </>
          )
     }
}
