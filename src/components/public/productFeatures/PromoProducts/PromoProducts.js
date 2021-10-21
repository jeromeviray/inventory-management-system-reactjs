import React, { Component } from "react"
import { CRow, CCol } from "@coreui/react"
import { connect } from "react-redux"
//action
import { getProductsWithPromo } from "src/service/apiActions/productAction/productAction"
import ProductCard from "src/components/products/ProductCard"
import { Link } from "react-router-dom"
export class PromoProducts extends Component {
  state = {
    message: "",
    products: {
      data: [],
      totalPages: 0,
    },
    page: 0,
    limit: 10,
    query: ''
  }
  componentDidMount() {
    const { page, limit, query } = this.state
    this.getProductsWithPromo("ONGOING", query, page, limit)
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
  render() {
    let { message, products } = this.state

    return (
      <>
        {products.length > 0 ? <CRow className=" pt-2 pb-2 mb-4">
          <h4>Product Sale</h4>
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
          <CCol> <Link className="nav-link text-end mt-2" to="/products/all/promo"> View More</Link></CCol>
        </CRow>
          : <></>}
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
  getProductsWithPromo,
})(PromoProducts)
