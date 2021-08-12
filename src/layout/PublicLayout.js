import React, { Component } from 'react'
import { BottomNavBar, Navbar } from 'src/components/navBar/index'
import { PublicContent } from 'src/components/public/index'

export default class PublicLayout extends Component {
     render() {
          return (
               <>
                    <Navbar />
                    <BottomNavBar />
                    <div className="body" style={{ marginTop: "70px" }}>
                         <PublicContent />
                    </div>
               </>
          )
     }
}
