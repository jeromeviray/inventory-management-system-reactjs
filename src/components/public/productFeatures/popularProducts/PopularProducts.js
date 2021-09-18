import React, { Component } from 'react'
import { CRow, CCol } from '@coreui/react'
import { connect } from 'react-redux'
//action
import { getDiscoverProducts } from 'src/service/apiActions/productAction/productAction'
import ProductCard from 'src/components/products/ProductCard'
import ProductDetialsModal from 'src/components/modals/product/ProductDetialsModal'

export class PopularProducts extends Component {
    state = {
        message: '',
        products: [],

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
                {/* <ProductDetialsModal /> */}



                <CRow className=" pt-2 pb-2 mb-4">
                    <h4>Popular Product</h4>
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
})(PopularProducts)
