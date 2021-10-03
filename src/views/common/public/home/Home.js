import React, { Component, Suspense } from "react"
import { CContainer, CRow, CCol } from "@coreui/react"
import { DotLoader } from "react-spinners"

// import { HeroCarousel } from 'src/components/carousel/index'

import { connect } from "react-redux"
// import { NewArrivalProducts, PopularProducts } from 'src/components/public'
// action
import { getDiscoverProducts } from "src/service/apiActions/productAction/productAction"
// import ProductDetialsModal from 'src/components/modals/product/ProductDetialsModal'
const HeroCarousel = React.lazy(() =>
  import("src/components/carousel/HeroCarousel"),
)
const NewArrivalProducts = React.lazy(() =>
  import(
    "src/components/public/productFeatures/newArrivalProducts/NewArrivalProducts"
  ),
)
const PopularProducts = React.lazy(() =>
  import(
    "src/components/public/productFeatures/popularProducts/PopularProducts"
  ),
)
const ProductDetialsModal = React.lazy(() =>
  import("src/components/modals/product/ProductDetialsModal"),
)
const CategoryList = React.lazy(() =>
  import("src/components/category/CategoryList"),
)

export class Home extends Component {
  // state = {
  //   loading: false,
  //   message: "",
  // }
  // componentDidMount() {
  //   this.props.getDiscoverProducts().catch(() => {
  //     let failMessage = this.props.messageResponse
  //     console.log(failMessage)
  //     if (failMessage.data && failMessage.data.message) {
  //       this.setState({
  //         loading: false,
  //         message: failMessage.data.message,
  //       })
  //     }
  //   })
  // }
  state = {
    loading: false,
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
    this.getDiscoverProducts()
  }
  getDiscoverProducts = () => {
    let { page, limit, query } = this.state
    this.props.getDiscoverProducts(query, page, limit).catch(() => {
      let { status, data } = this.props.messageResponse
      console.log(this.props.messageResponse)
      this.setState({
        loading: false,
        message: data.message,
      })
    })
  }

  render() {
    let { message } = this.state
    return (
      <>
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center  position-fixed ">
              <DotLoader color="#36D7B7" size={100} />
            </div>
          }
        >
          <ProductDetialsModal />

          <CContainer>
            <CRow>
              <CCol xs="12" sm="12" md="12" lg="4">
                <CategoryList />
              </CCol>
              <CCol xs="12" sm="12" md="12" lg="8">
                <HeroCarousel />
              </CCol>
            </CRow>
            {/* <div className="border d-flex justify-content-between align-items-center"></div> */}
          </CContainer>
          <CContainer className="mt-4">
            {message && (
              <div className="form-group d-flex justify-content-center align-items-center">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <PopularProducts />
            <NewArrivalProducts />
          </CContainer>
        </Suspense>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  getDiscoverProducts,
})(Home)
