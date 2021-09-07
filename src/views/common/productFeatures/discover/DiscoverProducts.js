import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCard from 'src/components/products/ProductCard'
import { CRow, CCol } from '@coreui/react'
//action
import { getDiscoverProducts } from 'src/service/apiActions/productAction/productAction'
//modal
import ProductDetialsModal from 'src/components/modals/product/ProductDetialsModal'
export class DiscoverProducts extends Component {
    state = {
        message: '',
        products: [],

    }
    componentDidMount() {
        this.props.getDiscoverProducts().catch(() => {
            let failMessage = this.props.messageResponse
            this.setState({
                loading: false,
                message: failMessage.data.message
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageProductResponse(prevProps, prevState);
    }
    manageProductResponse = (prevProps, prevState) => {
        if (prevProps.productResponser !== this.props.productResponser) {
            let { status, action, data } = this.props.productResponser;
            if (status === 200 && action === "DISCOVER") {
                this.setState({
                    products: data.products
                })
            }
        }
    }

    render() {
        let { message, products } = this.state;
        return (
            <>
                <ProductDetialsModal />
                {message && (
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CRow>
                    {products.map((product, index) => {
                        return (
                            <CCol xs="6" sm="6" md="4" lg="3" key={index}>
                                <ProductCard product={product} fileImage={product.fileImages} iconModal="eye" imageLink={true} />

                            </CCol>

                        )
                    })}
                </CRow>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        productResponser: state.productResponser,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    getDiscoverProducts
})(DiscoverProducts)