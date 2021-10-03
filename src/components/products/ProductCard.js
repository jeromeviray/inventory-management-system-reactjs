import React, { Component } from "react"
import { CCard, CCardBody, CCardTitle, CBadge } from "@coreui/react"
import ReactStars from "react-rating-stars-component"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import { connect } from "react-redux"
import {
  setProductModal,
  editProductModal,
  setProductDetailsModal,
} from "src/service/apiActions/modalAction/modalAction"
import ProductDetialsModal from "../modals/product/ProductDetialsModal"
import {
  getProduct,
  getProductDetails,
} from "src/service/apiActions/productAction/productAction"
import { logout } from "src/service/apiActions/userAction/userAction"

import { NO_IMAGE_BASE64 } from "src/service/redux/constants"

export class ProductCard extends Component {
  state = {
    iconModal: "eye",
    product: this.props.product,
    fileImage: this.props.fileImage,
    imageLink: false,
    visible: false,
    action: "",
    message: "",
  }
  componentDidMount = () => {
    this.handleIconModal()
    this.handleImageLink()
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
  }

  handleIconModal = () => {
    this.setState({
      iconModal: this.props.iconModal,
    })
  }
  handleImageLink = () => {
    this.setState({
      imageLink: this.props.imageLink,
    })
  }

  manageProductResponse(prevProps, prevState) {
    const { visible } = this.state

    if (prevProps.productResponse !== this.props.productResponse) {
      let response = this.props.productResponse

      if (response.action === "GETBYID") {
        if (response.status >= 200 && response.status <= 300) {
          this.props.editProductModal(
            !visible,
            "Edit",
            response.data.product,
            <FaIcons.FaEdit size={20} />,
          )
        }
      } else if (response.action === "DETAILS") {
        if (response.status === 200) {
          this.props.setProductDetailsModal(
            !visible,
            "PRODUCTDETAILS",
            response.data.product,
          )
        }
      } else if (response.status < 400) {
        this.props.logout()
        window.location.reload()
      }
    }
  }
  handleGetProduct = (id) => {
    this.props.getProduct(id).catch(() => {
      console.log(this.props.messageResponse)
      const { status, message } = this.props.messageResponse
      // const message = this.props.messaegResponse.data.message
      console.log(status > 400 && status <= 403)
      if (status > 400 && status <= 403) {
        this.props.logout()
        window.location.reload()
      }
      this.setState({
        message: message,
      })
    })
  }
  handleProductDetails = (id) => {
    this.props.getProductDetails(id).catch(() => {
      const { status, message } = this.props.messageResponse
      // const message = this.props.messaegResponse.data.message
      this.setState({
        message: message,
      })
    })
  }
  manageStatus = (status) => {
    switch (status) {
      case "OK":
        return (
          <CBadge color="success" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case "LOW":
        return (
          <CBadge color="warning" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case "OUT_OF_STOCK":
        return (
          <CBadge color="danger" shape="rounded-pill">
            OUT OF STOCK
          </CBadge>
        )
      default:
        return (
          <CBadge color="danger" shape="rounded-pill">
            {status}
          </CBadge>
        )
    }
  }

  renderAlert = () => {}
  render() {
    let { iconModal, product, imageLink, fileImage, visible } = this.state
    const { productName, productPrice, id } = product.product
    return (
      <>
        <ProductDetialsModal />
        <CCard className="inner-card-container shadow-sm">
          <div className="img-container">
            {imageLink ? (
              <a href="/#" className="link-product-content">
                <div className="inner-img-container">
                  <img
                    className="border"
                    variant="top"
                    src={
                      fileImage.length > 0
                        ? "/images/products/" +
                          fileImage[0].path +
                          fileImage[0].fileName
                        : NO_IMAGE_BASE64
                    }
                    alt="product"
                  />
                </div>
              </a>
            ) : (
              <div className="inner-img-container">
                <img
                  className="border"
                  variant="top"
                  src={
                    fileImage.length > 0
                      ? "/images/products/" +
                        fileImage[0].path +
                        fileImage[0].fileName
                      : NO_IMAGE_BASE64
                  }
                  alt="product"
                />
              </div>
            )}
            <div className="eye-btn">
              <span onClick={() => this.handleProductDetails(id)}>
                <BsIcons.BsEye />
              </span>
              {/* {iconModal === "eye" ? (
                <span onClick={() => this.handleProductDetails(id)}>
                  <BsIcons.BsEye />
                </span>
              ) : (
                <span>
                  <FaIcons.FaEdit
                    size={14}
                    onClick={() => {
                      this.handleGetProduct(product.id)
                    }}
                  />
                </span>
              )} */}
            </div>
          </div>
          <CCardBody>
            <CCardTitle>{productName}</CCardTitle>
            <div className="card-label-price">
              <CCardTitle>&#8369;{productPrice.toFixed(2)}</CCardTitle>
              <div className="product-stock-container">
                <span className="stock-label">Stock: </span>
                {product.inventory.totalStock > 0 ? (
                  <span className="stock-label-value">
                    {product.inventory.totalStock}
                  </span>
                ) : (
                  this.manageStatus(product.inventory.status)
                )}
              </div>
            </div>
            <ReactStars
              count={5}
              value={3.5}
              size={24}
              isHalf={true}
              edit={false}
            />
          </CCardBody>
        </CCard>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productResponse: state.productResponser,
    userResponse: state.userResponse,
    modalVisibleResponse: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  setProductModal,
  setProductDetailsModal,
  editProductModal,
  getProduct,
  getProductDetails,
  logout,
})(ProductCard)
