import React, { Component } from "react"
import { CCard, CCardBody, CCardTitle } from "@coreui/react"
import ReactStars from "react-rating-stars-component"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import { connect } from "react-redux"
import { setProductModal, editProductModal, setProductDetailsModal } from "src/service/apiActions/modalAction/modalAction"
import ProductEditorModal from "../modals/product/ProductEditorModal"
import { getProduct, getProductDetails } from "src/service/apiActions/productAction/productAction"
import { logout } from "src/service/apiActions/userAction/userAction"

import { NO_IMAGE_BASE64 } from "src/service/redux/constants"

export class ProductCard extends Component {
  state = {
    iconModal: "eye",
    product: this.props.product,
    fileImage: this.props.fileImage,
    imageLink: false,
    visible: false,
    action: '',
    message: '',
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
    const { visible, } = this.state;

    if (prevProps.productResponse !== this.props.productResponse) {
      let response = this.props.productResponse;

      if (response.action === "GETBYID") {
        if (response.status >= 200 && response.status <= 300) {
          this.props.editProductModal(!visible, "Edit", response.data.product, <FaIcons.FaEdit size={20} />)
        }
      } else if (response.action === "DETAILS") {
        if (response.status === 200) {
          this.props.setProductDetailsModal(!visible, "PRODUCTDETAILS", response.data.product);
        }
      } else if (response.status < 400) {
        this.props.logout();
        window.location.reload();
      }
    }
  }
  handleGetProduct = (id) => {
    const { accessToken, type } = this.props.userResponse.credentials
    const token = type + accessToken

    this.props.getProduct(id, token)
      .catch(() => {
        console.log(this.props.messageResponse)
        const { status, message } = this.props.messageResponse;
        // const message = this.props.messaegResponse.data.message
        console.log(status > 400 && status <= 403);
        if (status > 400 && status <= 403) {
          this.props.logout();
          window.location.reload();
        }
        this.setState({
          message: message
        })
      })
  }
  handleProductDetails = (id) => {
    this.props.getProductDetails(id)
      .catch(() => {

        const { status, message } = this.props.messageResponse;
        // const message = this.props.messaegResponse.data.message
        this.setState({
          message: message
        })
      })
  }
  renderProductModal = () => {
    <ProductEditorModal />
  }
  renderAlert = () => {

  }
  render() {
    let { iconModal, product, imageLink, fileImage, visible, } = this.state

    return (
      <>
        {this.renderProductModal()}
        <CCard className="inner-card-container shadow-sm">
          <div className="img-container">
            {imageLink ? (
              <a href="/#" className="link-product-content">
                <div className="inner-img-container">
                  <img
                    className="border"
                    variant="top"
                    src={fileImage.length > 0 ? "/images/products/" + fileImage[0].fileName : NO_IMAGE_BASE64}
                    alt="product"
                  />
                </div>
              </a>
            ) : (
              <div className="inner-img-container">
                <img
                  className="border"
                  variant="top"
                  src={fileImage.length > 0 ? "/images/products/" + fileImage[0].fileName : NO_IMAGE_BASE64}
                  alt="product"
                />
              </div>
            )}
            <div className="eye-btn">
              {iconModal === "eye" ? (
                <span onClick={() => this.handleProductDetails(product.id)}>
                  <BsIcons.BsEye />
                </span>
              ) : (
                <span>
                  <FaIcons.FaEdit
                    size={14}
                    onClick={() => {
                      this.handleGetProduct(product.id);
                    }} />
                </span>
              )}
            </div>
          </div>
          <CCardBody>
            <CCardTitle>{product.productName}</CCardTitle>
            <div className="card-label-price">
              <CCardTitle>
                <h5 className="peso-price text-dark">&#8369;{product.productPrice.toFixed(2)}</h5>
              </CCardTitle>
              <div className="product-stock-container">
                <span className="stock-label">Stock: </span>
                {product.stock ? (
                  <span className="stock-label-value">{product.stock}</span>
                ) : (
                  <span className="sold-out-label">Sold Out</span>
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
    messageResponse: state.messageResponse
  }
}
export default connect(mapStateToProps, {
  setProductModal,
  setProductDetailsModal,
  editProductModal,
  getProduct,
  getProductDetails,
  logout
})(ProductCard)
