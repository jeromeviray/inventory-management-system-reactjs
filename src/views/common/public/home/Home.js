import React, { Component, Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { DotLoader } from 'react-spinners';

// import { HeroCarousel } from 'src/components/carousel/index'

import { connect } from 'react-redux'
// import { NewArrivalProducts, PopularProducts } from 'src/components/public'
// action 
import { getDiscoverProducts } from 'src/service/apiActions/productAction/productAction'
// import ProductDetialsModal from 'src/components/modals/product/ProductDetialsModal'
const HeroCarousel = React.lazy(() => import('src/components/carousel/HeroCarousel'))
const NewArrivalProducts = React.lazy(() => import('src/components/public/productFeatures/newArrivalProducts/NewArrivalProducts'))
const PopularProducts = React.lazy(() => import('src/components/public/productFeatures/popularProducts/PopularProducts'))
const ProductDetialsModal = React.lazy(() => import('src/components/modals/product/ProductDetialsModal'))

export class Home extends Component {
    state = {
        loading: false,
        message: ''
    }
    componentDidMount() {
        this.props.getDiscoverProducts().catch(() => {
            let failMessage = this.props.messageResponse
            console.log(failMessage)
            if (failMessage.data && failMessage.data.message) {
                this.setState({
                    loading: false,
                    message: failMessage.data.message
                })
            }
        })
    }

    render() {
        let { message } = this.state;
        return (
            <>
                <Suspense fallback={
                    <div className="d-flex justify-content-center align-items-center  position-fixed ">
                        <DotLoader color="#36D7B7" size={100} />
                    </div>
                }>
                    <ProductDetialsModal />

                    <CContainer>
                        <HeroCarousel />
                    </CContainer>
                    <CContainer className="mt-4">
                        {message && (
                            <div className="form-group d-flex justify-content-center align-items-center">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <PopularProducts />
                        <NewArrivalProducts />

                    </CContainer>
                </Suspense>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userResponse: state.userResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    getDiscoverProducts
})(Home)
