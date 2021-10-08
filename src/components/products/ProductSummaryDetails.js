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
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from "@coreui/react"
import * as IoIcons from "react-icons/io"
import { Carousel } from "react-responsive-carousel"
import ReactStars from "react-rating-stars-component"
import { NO_IMAGE_BASE64 } from "src/service/redux/constants"
import * as FaIcons from "react-icons/fa"
import { addToCart } from "src/service/apiActions/cartAction/cartAction"
import { connect } from "react-redux"
import { setLoginModal } from "src/service/apiActions/modalAction/modalAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import LoginModal from "../modals/shortcut/LoginModal"
export class ProductSummaryDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: this.props.product,
      loading: false,
      toast: '',
      button: this.props.button
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
            toast: this.toastComponent(),
            loading: false,
          })
        })
        .catch(() => {
          let { status, action } = this.props.messageResponse
          if (status > 400 && status <= 403) {
            this.setState({
              toast: this.toastComponent(),
              loading: false,
            })
            setInterval(() => {
              this.props.logout()
              window.location.reload()
            }, 1000)
          }
          this.setState({
            toast: this.toastComponent(),
            loading: false,
          })
        })
    }
  }
  toastComponent() {
    let { data, status } = this.props.messageResponse
    let color = ""
    if (status === 200) {
      color = "success"
    } else if (status > 400 && status <= 403) {
      color = "danger"
    } else if (status > 405 && status <= 500) {
      color = "warning"
    } else {
      color = "warning"
    }
    return (
      <CToast
        color={color}
        className="text-white align-items-center"
        delay={3000}
      >
        <div className="d-flex">
          <CToastBody>{data && data.message}</CToastBody>
          <CToastClose className="me-2 m-auto" white />
        </div>
      </CToast>
    )
  }
  render() {
    const { product, inventory } = this.state.product
    const { loading, toast, button } = this.state
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
        <LoginModal />
        <CToaster push={toast} placement="top-end" />

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
                  <ReactStars
                    count={5}
                    value={3.5}
                    size={24}
                    isHalf={true}
                    edit={false}
                  />
                  <span className="text-black-50 ms-3">4.4</span>
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
                    &#8369;{product.productPrice.toFixed(2)}
                  </h5>
                  <span style={{ ...fontStyle }} className="peso-price">
                    {inventory.totalSold ? inventory.totalSold : 0} <span className="text-muted">sold</span>
                  </span>
                </div>
                <hr />

              </CCardBody>
              {button ?
                <CCardFooter className="bg-transparent">
                  <div className="d-flex justify-content-end ">
                    {inventory.status != 'OUT_OF_STOCK' ?
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
                        onClick={this.handleAddToWishlist}
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
                        <span className="ms-2">Add To Wishlist</span>
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
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  setLoginModal,
  logout,
  addToCart,
})(ProductSummaryDetails)
