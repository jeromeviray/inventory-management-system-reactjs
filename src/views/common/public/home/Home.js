import React, { Component } from 'react'
import TabHeader from 'src/components/TabContents/TabHeader'
import { CContainer } from '@coreui/react'
import { HeroCarousel } from 'src/components/carousel/index'
import { connect } from 'react-redux'

export class Home extends Component {

    componentDidMount() {
        // console.log(this.props.userResponse.credentials.refresh_token);
    }

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
const mapStateToProps = (state) => {
    return {
        userResponse: state.userResponse
    }
}
export default connect(mapStateToProps, {})(Home)
