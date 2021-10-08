import React, { Component } from "react"
import {
  CButton,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,

} from "@coreui/react"
import * as Io5Icons from "react-icons/io5"
import * as IoIcons from "react-icons/io"

//helper
import { history } from "src/_helper/history"
import { connect } from "react-redux"
//action
import { getProductDetails } from "src/service/apiActions/productAction/productAction"
import ProductSummaryDetails from "src/components/products/ProductSummaryDetails"
import ProductDescriptions from "src/components/products/ProductDescriptions"
export class ProductDetails extends Component {
  state = {
    message: "",
    product: [],
  }
  componentDidMount() {
    const id = this.props.location.state
    this.props.getProductDetails(id).catch(() => {
      const { status, message } = this.props.messageResponse
      this.setState({
        message: message,
      })
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
  }
  manageProductResponse = (prevProps, prevState) => {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { status, action, data } = this.props.productResponse
      if (action === "DETAILS" && status === 200) {
        this.setState({
          product: data,
        })
      }
    }
  }
  render() {
    const { product, message } = this.state
    const getProduct = product && product.product;
    const arrowStyles = {
      position: "absolute",
      zIndex: "2",
      top: "calc(4% - 16px)",
      // width: "30",
      height: "100%",
      cursor: "pointer",
      border: "none",
    }
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "500",
    }
    return (
      <>

        <CButton
          onClick={() => history.goBack()}
          variant="ghost"
          color="secondary"
          className="d-flex align-items-center mb-3"
        >
          <Io5Icons.IoChevronBack size={20} />
          <span className="ms-2">back</span>
        </CButton>
        {getProduct ? (<ProductSummaryDetails product={getProduct} button={true} />) :
          <></>
        }

        <CCard className="mt-2 mb-5  p-3">
          <h4 className="mb-4">Product Description</h4>
          <CCardBody className=" ps-0">
            {getProduct ? (<ProductDescriptions
              productDescription={
                getProduct.product.productDescription
              }
            />) :
              <></>
            }
          </CCardBody>
        </CCard>
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
export default connect(mapStateToProps, { getProductDetails })(ProductDetails)
