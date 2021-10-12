import React, { Component } from "react"
import { CCard, CCardBody, CCardTitle, CBadge, CCardFooter, CButton, CSpinner } from "@coreui/react"
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

import { NO_IMAGE_BASE64 } from "src/service/redux/constants"
import { Link, withRouter } from "react-router-dom"
import { deleteWishlist, saveWishlist } from "src/service/apiActions/wishlistAction/wishlistAction"
import { addToCart } from "src/service/apiActions/cartAction/cartAction"

export class ProductCard extends Component {
  state = {
    iconModal: "eye",
    product: this.props.product,
    fileImage: this.props.fileImage,
    imageLink: false,
    visible: false,
    action: "",
    message: "",
    loading: false
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
  handleAddToCart = (event) => {
    let { product } = this.state.product
    let { isLoggedIn, credentials } = this.props.userResponse
    this.setState({
      loading: true,
    })
    if (!isLoggedIn) {
      this.setState({
        loading: false,
      })
      this.props.history.push("/login")

    } else {
      let token = credentials.type + credentials.accessToken
      this.props
        .addToCart(product.id, token)
        .then(() => {
          this.setState({
            loading: false,
          })
        })
        .catch(() => {
          let { status, action } = this.props.messageResponse
          this.setState({
            loading: false,
          })
        })
    }
  }
  handleAddToWishlist(productId) {
    let { product } = this.state
    let { isLoggedIn, credentials } = this.props.userResponse
    this.setState({
      loading: true,
    })
    if (!isLoggedIn) {
      this.setState({
        loading: false,
      })
      this.props.history.push("/login")
      return;
    }
    const wishlist = product.wishlist;
    if (wishlist && wishlist.id > 0) {
      this.props.deleteWishlist(wishlist.id).then(() => {
        product.wishlist = null;
        this.setState({ product: product, loading: false })
      }).catch(() => {
        this.setState({
          loading: false
        })
      })
    } else {
      this.props.saveWishlist({ id: productId }).then(() => {
        product.wishlist = this.props.wishlistResponse.data;
        this.setState({ product: product, loading: false })
      }).catch(() => {
        this.setState({
          loading: false
        })
      })
    }
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
      }
    }
  }
  handleGetProduct = (id) => {
    this.props.getProduct(id)
  }
  handleProductDetails = (id) => {
    this.props.getProductDetails(id)
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

  renderAlert = () => { }
  render() {
    let { product, fileImage, loading } = this.state
    const { productName, productPrice, id } = product.product
    const { inventory, wishlist } = product
    const status = product.promo && product.promo.status
    const percentage = product.promo && product.promo.percentage
    let discount = (productPrice * percentage) / 100
    let price = productPrice - discount
    // console.log(product)
    return (
      <>
        <ProductDetialsModal />
        <CCard className="inner-card-container shadow-sm">
          <div className="img-container">
            <Link
              to={{
                pathname: "/products/product/" + productName,
                state: id,
              }}
              className="link-product-content"
            >
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
            </Link>
          </div>
          <CCardBody>
            <Link
              to={{
                pathname: "/products/product/" + productName,
                state: id,
              }}
              className="nav-link text-dark p-0"
            >
              <CCardTitle>{productName}</CCardTitle>
            </Link>

            <div className="card-label-price">
              <CCardTitle>
                &#8369;
                {status === "ONGOING" ? (
                  <>
                    <span
                      className="text-muted text-decoration-line-through me-2"
                      style={{ fontSize: "16px" }}
                    >
                      {productPrice.toFixed(2)}
                    </span>
                    <span>{price.toFixed(2)}</span>
                    <span
                      className="text-muted "
                      style={{ fontSize: "16px", float: "right" }}
                    >
                      {percentage + "%"}
                    </span>
                  </>
                ) : (
                  productPrice.toFixed(2)
                )}
              </CCardTitle>
              <div className="product-stock-container">
                <span className="stock-label">Stock: </span>
                {product.promo ?
                  <span className="">
                    <span className="stock-label-value">
                      {product.promo.quantity}
                    </span>

                  </span> :
                  product.inventory.totalStock > 0 ? (
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
          <CCardFooter>
            {status ?
              <CButton
                type="button"
                color="info"
                className="d-flex justify-content-center align-items-center w-100"
                onClick={this.handleAddToCart}
                disabled={loading}
              >
                {loading ? (
                  <CSpinner size="sm" />
                ) : (
                  <span className="d-flex align-items-center login-icon me-2">
                    <FaIcons.FaCartPlus />
                  </span>
                )}
                <span className="ms-2">Add To Cart</span>
              </CButton>
              : inventory.status != 'OUT_OF_STOCK' ?
                <CButton
                  type="button"
                  color="info"
                  className="d-flex justify-content-center align-items-center w-100"
                  onClick={this.handleAddToCart}
                  disabled={loading}
                >
                  {loading ? (
                    <CSpinner size="sm" />
                  ) : (
                    <span className="d-flex align-items-center login-icon me-2">
                      <FaIcons.FaCartPlus />
                    </span>
                  )}
                  <span className="ms-2">Add To Cart</span>
                </CButton>
                :
                <CButton
                  type="button"
                  color="info"
                  className="d-flex justify-content-center align-items-center w-100"
                  onClick={() => { this.handleAddToWishlist(id) }}
                  disabled={loading}
                  style={{ background: "pink" }}
                >
                  {loading ? (
                    <CSpinner size="sm" />
                  ) : (
                    <span className="d-flex align-items-center login-icon me-2">
                      {wishlist ? <FaIcons.FaHeart /> : <FaIcons.FaRegHeart />}

                    </span>
                  )}
                  <span className="ms-2">{wishlist ? 'Remove Wishlist' : 'Add To Wishlist'}</span>
                </CButton>
            }
          </CCardFooter>
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
    wishlistResponse: state.wishlistResponse,
  }
}
export default connect(mapStateToProps, {
  setProductModal,
  setProductDetailsModal,
  editProductModal,
  getProduct,
  getProductDetails,
  deleteWishlist,
  saveWishlist,
  addToCart
})(withRouter(ProductCard))
