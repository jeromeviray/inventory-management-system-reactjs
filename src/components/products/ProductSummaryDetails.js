import React, { Component } from "react"
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,
  CButton,
  CCardFooter,
  CSpinner,
  CBadge

} from "@coreui/react"
import * as IoIcons from "react-icons/io"
import { Carousel } from "react-responsive-carousel"
import ReactStars from "react-rating-stars-component"
import { NO_IMAGE_BASE64 } from "src/service/redux/constants"
import * as FaIcons from "react-icons/fa"
import { addToCart } from "src/service/apiActions/cartAction/cartAction"
import { connect } from "react-redux"
import { setLoginModal } from "src/service/apiActions/modalAction/modalAction"
import LoginModal from "../modals/shortcut/LoginModal"

import { saveWishlist, deleteWishlist } from "src/service/apiActions/wishlistAction/wishlistAction"

export class ProductSummaryDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: this.props.product,
      loading: false,
      button: this.props.button,

    }
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
      this.props.setLoginModal(true, "LOGIN")
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
      this.props.setLoginModal(true, "LOGIN")
      return;
    }
    const wishlist = product.wishlist;
    if (wishlist && wishlist.id > 0) {
      this.props.deleteWishlist(wishlist.id).then(() => {
        product.wishlist = null;
        this.setState({ product: product, loading: false })
      })
    } else {
      this.props.saveWishlist({ id: productId }).then(() => {
        product.wishlist = this.props.wishlistResponse.data;
        this.setState({ product: product, loading: false })
      })
    }
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
  render() {
    const { product, inventory, wishlist, promo } = this.state.product
    const { loading, toast, button } = this.state;
    const promoStatus = promo && promo.status
    const percentage = promo && promo.percentage
    let discount = (product.productPrice * percentage) / 100
    let price = product.productPrice - discount
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
    const rating = product.rating ? product.rating : 0;
    return (
      <>
        <LoginModal />


        <CRow>

          <CCol sm="12" md="5" lg="5">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="arrow-style"
                    style={{ ...arrowStyles, left: 0 }}
                  >
                    <IoIcons.IoIosArrowBack
                      size="40"
                      style={{ color: "white" }}
                    />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="arrow-style"
                    style={{ ...arrowStyles, right: 0 }}
                  >
                    <IoIcons.IoIosArrowForward
                      size="40"
                      style={{ color: "white" }}
                    />
                  </button>
                )
              }
            >
              {product.fileImages.length > 0 ? (
                product.fileImages.map((image, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={"/images/products/" + image.path + image.fileName}
                      />
                    </div>
                  )
                })
              ) : (
                <img src={NO_IMAGE_BASE64} />
              )}
            </Carousel>
          </CCol>
          <CCol sm="12" md="7" lg="7">
            <CCard className="border-0 p-3">
              <CCardTitle>{product.productName}</CCardTitle>
              <CCardBody className=" ps-0">
                <div className="d-flex justify-content-start align-items-center">
                  {rating ?
                    <ReactStars
                      count={5}
                      value={rating ? rating : 0}
                      size={24}
                      edit={false}
                    />
                    :
                    <div style={{ padding: "5px 0px" }}>
                      <span className="text-black-50 ">No Rating</span>
                    </div>
                  }
                </div>
                {product.sku &&
                  <div className="mt-2 mb-2" style={{ ...fontStyle }}>
                    <span className="text-black-50 me-3 ">SKU</span>
                    <span className="text-black-50 me-3 ">112354879</span>
                  </div>
                }
                <div className="mt-2 mb-2" style={{ ...fontStyle }}>
                  <span className="me-3 text-black-50">Brand</span>
                  <span className="me-3">
                    {product.brand ? product.brand.brand : "No Brand"}
                  </span>
                </div>
                <div className="mt-3 mb-3  d-flex align-items-center justify-content-between">
                  <h5 className="peso-price">
                    &#8369;{promoStatus ? <>
                      <span
                        className="text-muted text-decoration-line-through me-2"
                        style={{ fontSize: "16px" }}
                      >
                        {product.productPrice.toFixed(2)}
                      </span>
                      <span>{price.toFixed(2)}</span>
                      <span
                        className="text-muted ms-3"
                        style={{ fontSize: "16px" }}
                      >
                        {percentage + "%"}
                      </span></>
                      : product.productPrice.toFixed(2)}
                  </h5>
                  {/* <span style={{ ...fontStyle }} className="peso-price">
                    {inventory.totalSold ? inventory.totalSold : 0} <span className="text-muted">sold</span>
                  </span> */}
                </div>
                <div className="product-stock-container">
                  <span className="stock-label">Stock: </span>
                  {promo ? <span className="stock-label-value">
                    {promo.quantity}
                  </span> : inventory.totalStock > 0 ? (
                    <span className="stock-label-value">
                      {inventory.totalStock}
                    </span>
                  ) : (
                    this.manageStatus(inventory.status)
                  )}
                </div>
                <hr />

              </CCardBody>
              {button ?
                <CCardFooter className="bg-transparent">
                  <div className="d-flex justify-content-end ">
                    {promoStatus ?
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
                          onClick={() => { this.handleAddToWishlist(product.id) }}
                          disabled={loading}
                          style={{ background: "pink" }}
                        >
                          {loading ? (
                            <CSpinner size="sm" />
                          ) : (
                            <span className="d-flex align-items-center login-icon me-2">
                              <FaIcons.FaHeart />
                            </span>
                          )}
                          <span className="ms-2">{wishlist ? 'Remove Wishlist' : 'Add To Wishlist'}</span>
                        </CButton>
                    }

                  </div>

                </CCardFooter> : <></>}
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisibleResponse: state.modalVisibleResponse,
    userResponse: state.userResponse,
    wishlistResponse: state.wishlistResponse,
  }
}
export default connect(mapStateToProps, {
  setLoginModal,
  addToCart,
  saveWishlist,
  deleteWishlist,
})(ProductSummaryDetails)
