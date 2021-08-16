import React, { Component } from 'react'
import TabHeader from 'src/components/TabContents/TabHeader'
import { CContainer } from '@coreui/react'
import { HeroCarousel } from 'src/components/carousel/index'

export class Home extends Component {
    render() {
        return (
            <>
                <CContainer>
                    <HeroCarousel />
                </CContainer>
                <CContainer className="mt-4">
                    <TabHeader />
                </CContainer>


            </>
        )
    }
}

export default Home
