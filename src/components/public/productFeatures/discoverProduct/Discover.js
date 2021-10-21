import React, { Component } from 'react'
import ProductCard from "src/components/products/ProductCard"
import { Link, withRouter } from "react-router-dom"
import { CRow, CCol } from "@coreui/react"
import { connect } from "react-redux"
import { getDiscoverProducts } from 'src/service/apiActions/productAction/productAction'
export class Discover extends Component {
    state = {
        message: "",
        products: {
            data: [],
            totalPages: 0,
        },
        page: 0,
        limit: 12,
        query: "",
    }
    componentDidMount() {
        let { page, limit, query } = this.state
        this.getDiscoverProducts(query, page, limit)
    }
    getDiscoverProducts = (query, page, limit) => {
        this.props.getDiscoverProducts(query, page, limit).catch(() => {
            let { data } = this.props.messageResponse
            if (data) {
                this.setState({
                    loading: false,
                })
            }
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageProductResponse(prevProps, prevState)
    }

    manageProductResponse = (prevProps, prevState) => {
        if (prevProps.productResponser !== this.props.productResponser) {
            let { status, action, data } = this.props.productResponser
            console.log(data)
            if (status === 200 && action === "DISCOVER") {
                this.setState({
                    products: data.products,
                })
            }
        }
    }
    handlePageClick = (data) => {
        let page = data.selected
        const { limit, query, categoryName } = this.state
        this.setState({ page: page })
        this.getDiscoverProducts(query, page, limit)
    }
    render() {
        let { products } = this.state

        return (
            <>
                <CRow className=" pt-2 pb-2 mb-4">
                    <h4>Discover Products</h4>
                    {products.data.slice(0, 8).map((product, index) => {
                        return (
                            <CCol xs="6" sm="6" md="4" lg="3" key={index}>
                                <ProductCard
                                    product={product}
                                    fileImage={product.product.fileImages}
                                    iconModal="eye"
                                    imageLink={true}
                                />
                            </CCol>
                        )
                    })}
                    <CCol> <Link className="nav-link text-end mt-2" to="/products"> View More</Link></CCol>
                </CRow>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        productResponser: state.productResponser,
        messageResponse: state.messageResponse,
    }
}
export default connect(mapStateToProps, {
    getDiscoverProducts,
})(withRouter(Discover))
