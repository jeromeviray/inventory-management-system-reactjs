import React, { Component } from "react"
import { connect } from "react-redux"
import { CRow, CCol } from "@coreui/react"
import ProductCard from "src/components/products/ProductCard"
import { withRouter } from "react-router-dom"
//action
import { getDiscoverProducts } from "src/service/apiActions/productAction/productAction"
//modal
import ProductDetialsModal from "src/components/modals/product/ProductDetialsModal"
import ReactPaginate from "react-paginate"
export class ProductsSearchResult extends Component {
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
    this.setState({ query: this.props.location.state })
    const { page, limit } = this.state
    this.getDiscoverProducts(this.props.location.state, page, limit)
  }
  getDiscoverProducts = (query, page, limit) => {
    console.log(query)
    this.props.getDiscoverProducts(query, page, limit).catch(() => {
      let { data } = this.props.messageResponse
      if (data) {
        this.setState({
          loading: false,
          message: data.message,
        })
      }
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
  }
  manageProductResponse = (prevProps, prevState) => {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { status, action, data } = this.props.productResponse
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
    let { message, products } = this.state
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
  getDiscoverProducts,
})(withRouter(ProductsSearchResult))
