import React, { Component } from "react"
import {
  CRow,
  CCol,
  CButton,
  CForm,
  CInputGroup,
  CFormControl,
} from "@coreui/react"
import * as IoIcons from "react-icons/io5"
import ProductCard from "src/components/products/ProductCard"
import ProductDetialsModal from "src/components/modals/product/ProductDetialsModal"
import { connect } from "react-redux"
import { getProductsByCategoryName } from "src/service/apiActions/productAction/productAction"
import ReactPaginate from "react-paginate"
import { history } from "src/_helper/history"
export class ProductsCategory extends Component {
  state = {
    products: {
      data: [],
      totalPages: 0,
    },
    categoryName: "",
    message: "",
    query: "",
    page: 0,
    limit: 12,
    hasError: false,
  }
  componentDidMount() {
    const categoryName = this.props.location.state
    this.setState({
      categoryName: categoryName,
    })
    const { query, page, limit } = this.state
    this.getProductsByCategoryName(categoryName, query, page, limit)
  }
  getProductsByCategoryName = (categoryName, query, page, limit) => {
    this.props
      .getProductsByCategoryName(categoryName, query, page, limit)
      .catch(() => {
        this.setState({
          hasError: true,
        })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
  }
  manageProductResponse = (prevProps, prevState) => {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { action, status, data } = this.props.productResponse
      if (action === "GET_PRODUCT_BY_CATEGORY_NAME" && status === 200) {
        this.setState({
          products: data.products,
        })
      }
    }
  }
  handleSearch = (event) => {
    event.preventDefault()
    const { page, limit, categoryName } = this.state
    this.getProductsByCategoryName(
      categoryName,
      event.target.value,
      page,
      limit,
    )
    this.setState({ query: event.target.value })
  }
  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query, categoryName } = this.state
    this.getProductsByCategoryName(categoryName, query, page, limit)
  }
  render() {
    const { products, hasError, message, query } = this.state
    return (
      <>
        {message && (
          <div className="form-group d-flex justify-content-center align-items-center">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <ProductDetialsModal />
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
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  getProductsByCategoryName,
})(ProductsCategory)
