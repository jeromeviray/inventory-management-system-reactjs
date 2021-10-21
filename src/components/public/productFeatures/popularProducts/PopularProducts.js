import React, { Component } from "react"
import { CRow, CCol } from "@coreui/react"
import { connect } from "react-redux"
//action
import { getPopularProducts } from "src/service/apiActions/productAction/productAction"
import ProductCard from "src/components/products/ProductCard"
import { Link } from "react-router-dom"
export class PopularProducts extends Component {
  state = {
    message: "",
    products: {
      data: [],
      totalPages: 0,
    },
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
  render() {
    let { products } = this.state
    return (
      <>
        <CRow className=" pt-2 pb-2 mb-4">
          <h4>Popular Products</h4>
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
          <CCol> <Link className="nav-link text-end mt-2" to="/products/all/popular"> View More</Link></CCol>
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
  getPopularProducts,
})(PopularProducts)
