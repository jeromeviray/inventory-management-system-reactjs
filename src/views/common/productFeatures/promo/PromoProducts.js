import React, { Component } from "react"
import { CButton, CRow, CCol } from "@coreui/react"
import ProductCard from "src/components/products/ProductCard"
import * as IoIcons from "react-icons/io5"
import { history } from "src/_helper/history"
import { connect } from "react-redux"
import { getProductsWithPromo } from "src/service/apiActions/productAction/productAction"
import ReactPaginate from "react-paginate"
export class PromoProducts extends Component {
  state = {
    products: {
      data: [],
      totalPages: 0,
    },
    message: "",
    visible: false,
    page: 0,
    limit: 10,
    query: "",
    status: "ONGOING",
  }
  componentDidMount() {
    const { query, page, limit, status } = this.state
    this.getProductsWithPromo(status, query, page, limit)
  }
    getProductsWithPromo = (status, query, page, limit) => {
    this.props.getProductsWithPromo(status, query, page, limit)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProdoctsResponse(prevProps, prevState)
  }
  manageProdoctsResponse = (prevProps, prevState) => {
    if (prevProps.productResponse !== this.props.productResponse) {
      const { action, status, data } = this.props.productResponse
      if (action === "GET_PRODUCTS_WITH_PROMO" && status === 200) {
        this.setState({
          products: data.products,
        })
      }
    }
  }
  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query, status } = this.state
    this.getProductsWithPromo(status, query, page, limit)
  }
  render() {
    const { products } = this.state
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
        <CRow className="mb-4">
          {products &&
            products.data.map((item, index) => {
              return (
                <CCol xs="6" sm="6" md="4" lg="3" key={item.product.id}>
                  <ProductCard
                    product={item}
                    fileImage={item.product.fileImages}
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
    productResponse: state.productResponser,
  }
}
export default connect(mapStateToProps, {
  getProductsWithPromo,
})(PromoProducts)
