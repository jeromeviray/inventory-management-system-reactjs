import React, { Component } from "react"
import { connect } from "react-redux"
import ProductCard from "src/components/products/ProductCard"
import { CRow, CCol, CButton } from "@coreui/react"
import * as IoIcons from "react-icons/io5"

import { history } from "src/_helper/history"
//action
import { getDiscoverProducts } from "src/service/apiActions/productAction/productAction"
//modal
import ReactPaginate from "react-paginate"
import { withRouter } from "react-router"
export class DiscoverProducts extends Component {
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
        <CButton
          onClick={() => history.goBack()}
          variant="ghost"
          color="secondary"
          className="d-flex align-items-center"
        >
          <IoIcons.IoChevronBack size={20} />
          <span className="ms-2">back</span>
        </CButton>
        <CRow className="mb-4" key={new Date()}>
          <h4>Discover Products</h4>
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
    productResponser: state.productResponser,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  getDiscoverProducts,
})(withRouter(DiscoverProducts))
