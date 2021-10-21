import React, { Component } from 'react'
import { CRow, CCol, CButton } from "@coreui/react"
import { history } from 'src/_helper/history'
import * as IoIcons from "react-icons/io5"

import { connect } from "react-redux"
//action
import { getPopularProducts } from "src/service/apiActions/productAction/productAction"
import ProductCard from "src/components/products/ProductCard"
import ReactPaginate from 'react-paginate'
export class PopularProductController extends Component {
    state = {
        message: "",
        products: {
            data: [],
            totalPages: 0,
        },
        page: 0,
        limit: 10,
        query: "",
    }
    componentDidMount() {
        this.getPopularProducts()
    }
    getPopularProducts = () => {
        let { page, limit, query } = this.state
        this.props.getPopularProducts(query, page, limit).catch(() => {
            this.setState({
                loading: false,
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageProductResponse(prevProps, prevState)
    }

    manageProductResponse = (prevProps, prevState) => {
        if (prevProps.productResponser !== this.props.productResponser) {
            let { status, action, data } = this.props.productResponser
            if (status === 200 && action === "GET_POPULAR_PRODUCT") {
                this.setState({
                    products: data.products,
                })
            }
        }
    }
    handlePageClick = (data) => {
        let page = data.selected
        this.setState({ page: page })
        const { limit, query } = this.state
        this.getPopularProducts(query, page, limit)
    }
    render() {
        let { products } = this.state
        return (
            <>
                <CButton
                    onClick={() => history.goBack()}
                    variant="ghost"
                    color="secondary"
                    className="d-flex align-items-center"
                >
                    <IoIcons.IoChevronBack size={20} />
                    <span className="ms-2">back</span>
                </CButton>
                <CRow className=" pt-2 pb-2 mb-4">
                    <h4>Popular Products</h4>
                    {products.data.map((product, index) => {
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
                </CRow>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={products.totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
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
    getPopularProducts,
})(PopularProductController)