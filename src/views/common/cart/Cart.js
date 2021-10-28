import React, { Component, Suspense } from "react"
import {
  CRow,
  CCol,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CSpinner,
} from "@coreui/react"
import { DotLoader } from "react-spinners"

import { connect } from "react-redux"
//action
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import {
  placeOrder,
  updateOrderPaymentStatus,
  validateCart
} from "src/service/apiActions/orderAction/orderAction"

import {
  setCart
} from "src/service/apiActions/cartAction/cartAction"

import config from "../../../config"

import { history } from "src/_helper/history"
import { Redirect } from "react-router-dom"
import Roles from "src/router/config"
import { getShippingFees } from "src/service/apiActions/shippingFeeAction/shippingFeeAction"
// import SuccessOrderPlace from './SuccessOrderPlace';
const Checkout = React.lazy(() =>
  import("src/views/common/cart/checkout/Checkout"),
)
const CustomerAddress = React.lazy(() =>
  import("src/views/common/cart/customerAddress/CustomerAddress"),
)
const PaymentMethod = React.lazy(() =>
  import("src/views/common/cart/payment/PaymentMethod"),
)
const SuccessOrderPlace = React.lazy(() =>
  import("src/views/common/cart/SuccessOrderPlace"),
)


export class Cart extends Component {
  state = {
    step: 1,
    items: [],
    Tquantity: 0,
    Tamount: 0,
    isLoggedIn: false,
    permission: "",
    addressId: undefined,
    paymentMethodId: undefined,
    successfull: false,
    loading: false,
    redirectUrl: "",
    clientRef: null,
    checkout: false,
    shippingFee: []
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.releaseCheckoutLock);

    if (!this.props.userResponse.isLoggedIn) {
      history.push(config.api.private.prefixFrontendUrl + "/login")
    } else {
      this.redirectUser()
    }

    if (this.props.websocketResponse) {
      this.setState({
        clientRef: this.props.websocketResponse.data.clientRef
      })
    }

    if (this.props.userResponse.isLoggedIn) {
      const { orderId, paymentStatus } = this.props.match.params
      if (paymentStatus == "success" || paymentStatus == "failed") {
        this.props.updateOrderPaymentStatus(orderId, paymentStatus)
      }
      this.setState({ successfull: paymentStatus == "success" })
    }
    this.props.getShippingFees()
  }

  componentWillUnmount() {
    this.releaseCheckoutLock();
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageShippingFeeResponse(prevProps, prevState)
    if (this.props.websocketResponse !== prevProps.websocketResponse) {
      if (this.props.websocketResponse.action == "WEBSOCKET_REF") {
        let clientRef = this.props.websocketResponse.data.clientRef;
        this.setState({
          clientRef: clientRef
        })
      } else if (this.props.websocketResponse.action == "WEBSOCKET_EVENT") {
        let { cart } = this.state;
        const receiveCheckoutEvent = this.props.websocketResponse.data.message;
        console.log(receiveCheckoutEvent)
        if (cart.accountId != receiveCheckoutEvent.accountId) {
          let cartItems = cart.cartItems;
          cartItems.forEach((item, ind) => {
            let index = receiveCheckoutEvent.items.findIndex((item2) => item2.product.id == item.product.product.id)
            cartItems[ind].product.inventory = receiveCheckoutEvent.items[index].inventory;
          })

          cart.cartItems = cartItems;
          this.props.setCart(cart)
        }
      }
    }
    this.manageCartItemsResponse(prevProps, prevState)
  }

  manageCartItemsResponse = (prevProps, prevState) => {
    if (prevProps.cartResponse !== this.props.cartResponse) {
      let { action, status, data } = this.props.cartResponse
      if (action === "CARTITEMS" && status === 200) {
        this.setState({
          cart: data.cart,
          items: [],
          Tamount: 0,
          Tquantity: 0
        })
      }
    }
  }
  manageShippingFeeResponse(prevProps, prevState) {
    if (prevProps.cartResponse !== this.props.cartResponse) {
      let { action, status, data } = this.props.shippingFeeResponse
      if (action === "GET_SHIPPING_FEES" && status === 200) {
        this.setState({
          shippingFee: data.shippingFees[0]
        })
      }
    }
  }
  redirectUser = () => {
    const isLoggedIn = this.props.userResponse.isLoggedIn
    if (isLoggedIn) {
      let roleName = this.props.userResponse.credentials.roles.roleName
      let permission = roleName
        ? roleName
        : this.props.userResponse.credentials.roles

      this.setState({
        isLoggedIn: isLoggedIn,
        permission: permission,
      })
    }
  }
  handleCartOnChange = (items, Tquantity, Tamount) => {
    console.log(Tamount)
    this.setState({
      items: items,
      Tquantity: Tquantity,
      Tamount: Tamount,
    })
  }

  handleAddressOnChange = (id) => {
    this.setState({
      addressId: id,
    })
  }

  handlePaymentMethodOnChange = (id) => {
    this.setState({
      paymentMethodId: id,
    })
  }

  handleOnNext = () => {
    let { step } = this.state;
    if (step === 1) {
      this.checkoutLock()
      const { cart, items } = this.state;
      const data = { cartId: cart.cartId, accountId: cart.accountId, items: items };
      this.props.validateCart(data).then((data) => {
        const response = this.props.orderResponse;
        if (response.data.is_invalidate) {
          return;
        }
        this.setState({
          step: ++step,
        })
      })
      return;
    } else {
      if (step === 3) return
      this.setState({
        step: ++step,
      })
    }
  }

  sendMessage = (eventType = "checkout", data = {}) => {
    this.state.clientRef.sendMessage(
      '/app/websocket/inventory',
      JSON.stringify({
        'from': "test", 'message': data, eventType: eventType
      })
    );
  }

  checkoutLock = () => {
    const { cart, items } = this.state;
    this.sendMessage("checkout", { cartId: cart.cartId, accountId: cart.accountId, items: items })
  }

  releaseCheckoutLock = () => {
    const { cart } = this.state;
    this.sendMessage("release_checkout", { cartId: cart.cartId, accountId: cart.accountId, items: cart.cartItems })
  }

  handleOnPre = () => {
    let { step } = this.state
    if (step === 1) {
      return
    } else if (step === 2) {
      this.releaseCheckoutLock();
      this.setState({
        items: []
      });
    }
    this.setState({
      step: --step,
    })
  }
  renderSteps = () => {
    let { step, addressId, paymentMethodId } = this.state
    let stepComponent = (
      <Checkout paymentDetailsOnChange={this.handleCartOnChange} />
    )
    switch (step) {
      case 1:
        stepComponent = (
          <Checkout paymentDetailsOnChange={this.handleCartOnChange} />
        )
        return stepComponent
      case 2:
        stepComponent = (
          <CustomerAddress
            checkValueOnChange={this.handleAddressOnChange}
            getValue={addressId}
          />
        )
        return stepComponent

      case 3:
        stepComponent = (
          <PaymentMethod
            paymentMethodOnChange={this.handlePaymentMethodOnChange}
            getValue={paymentMethodId}
          />
        )
        return stepComponent

      default:
        return stepComponent
    }
  }
  renderHeader = () => {
    let { step } = this.state
    let stepHeader = "Shopping Cart"
    switch (step) {
      case 1:
        return (stepHeader = "Shopping Cart")
      case 2:
        return (stepHeader = "Customer Address")

      case 3:
        return (stepHeader = "Payment Method")
      case 4:
        return (stepHeader = "")

      default:
        return stepHeader
    }
  }
  handleOnPlaceOrder = (event) => {
    let { addressId, paymentMethodId, items, shippingFee, cartId } = this.state
    let orderDetails = {
      addressId: addressId,
      paymentMethodId: paymentMethodId,
      items: items,
      shippingFee: shippingFee.id,
      cartId: cartId
    }
    this.setState({
      loading: true,
    })
    this.props
      .placeOrder(orderDetails)
      .then(() => {
        let { data } = this.props.messageResponse
        this.setState({
          successfull: true,
          loading: false,
          step: 4,
          redirectUrl: data.order.redirectUrl,
        })
      })
      .catch(() => {
        this.setState({
          successfull: false,
          loading: false,
        })
      })
  }

  render() {
    let {
      step,
      items,
      Tamount,
      Tquantity,
      isLoggedIn,
      permission,
      addressId,
      paymentMethodId,
      successfull,
      loading,
      redirectUrl,
      shippingFee
    } = this.state
    var totalAmount = shippingFee.shippingAmount;
    const headerStyle = {
      fontWeight: "800",
    }
    if (isLoggedIn) {
      if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
        return <Redirect to={config.api.private.prefixFrontendUrl + "/app"} />
      }
    } else if (!this.props.userResponse.isLoggedIn) {
      return <Redirect to={config.api.private.prefixFrontendUrl + "/login"} />
    }

    if (successfull && redirectUrl != "" && redirectUrl) {
      window.location.replace(redirectUrl)
      return <></>
    }

    return (
      <div>
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center  position-fixed spinner">
              <DotLoader color="#36D7B7" size={100} />
            </div>
          }
        >
          <CRow>
            <h3 className="mt-2 mb-4">{this.renderHeader()}</h3>
          </CRow>
          {successfull ? (
            <SuccessOrderPlace />
          ) : (
            <CRow>
              <CCol sm="12" lg="8">
                {this.renderSteps()}
              </CCol>
              <CCol sm="12" lg="4" className="mb-5">
                <CCard>
                  <CCardHeader>
                    <span
                      className=""
                      style={{ fontSize: "18px", ...headerStyle }}
                    >
                      Summary Payment
                    </span>
                  </CCardHeader>
                  <CCardBody className="border-bottom">
                    <div className="d-flex justify-content-between bg-light p-2">
                      <div>
                        <span style={{ ...headerStyle }}>Item</span>
                      </div>
                      <div>
                        <span style={{ ...headerStyle }}>Quantity</span>
                      </div>
                      <div>
                        <span style={{ ...headerStyle }}>Amount</span>
                      </div>
                      <div>
                        <span style={{ ...headerStyle }}>Sub Amount</span>
                      </div>
                    </div>

                    {items.length > 0 ? (
                      items.map((item, index) => {
                        const { promo, product } = item.product
                        const status = promo && promo.status

                        const percentage = promo && promo.percentage
                        let discount = (product.productPrice * percentage) / 100
                        let price = product.productPrice - discount
                        if (status === "ONGOING") {
                          totalAmount += price
                        } else {
                          totalAmount += product.productPrice
                        }

                        return (
                          <>
                            <div
                              key={item.id}
                              className="p-2 d-flex justify-content-between align-items-center"
                            >
                              <span
                                className="text-truncate d-inline-block"
                                style={{ maxWidth: "150px" }}
                              >
                                {product.productName}
                              </span>
                              <span>
                                {item.quantity}
                              </span>

                              <span>
                                &#8369;
                                {status === "ONGOING" ? (
                                  <>
                                    <span
                                      className="text-muted text-decoration-line-through me-2"
                                      style={{ fontSize: "16px" }}
                                    >
                                      {product.productPrice.toFixed(2)}
                                    </span>
                                    <span>{price.toFixed(2)}</span>
                                  </>
                                ) : (
                                  product.productPrice.toFixed(2)
                                )}
                              </span>
                              <span>
                                &#8369;{(product.productPrice * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </>
                        )
                      })
                    ) : (
                      <CCol
                        style={{ fontStyle: "italic", textAlign: "center" }}
                        className="p-2"
                      >
                        No Item
                      </CCol>
                    )}
                  </CCardBody>
                  <div className="p-3 ">
                    <div className="d-flex justify-content-between align-items-center pb-2">
                      <span className="text-muted font-style me-2">
                        Total Quantity
                      </span>
                      <span style={{ fontWeight: "500" }}>{Tquantity}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pb-2">
                      <span className="text-muted font-style me-2">
                        Shipping Fee (Metro Manila 3 to 5 Days, Provincial 7 to 10 Days)
                      </span>
                      <span style={{ fontWeight: "500" }}>  &#8369;{shippingFee.shippingAmount && shippingFee.shippingAmount.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pb-2">
                      <span className="text-muted font-style me-2">
                        Total Amount
                      </span>
                      <span style={{ fontWeight: "500" }}>
                        &#8369;{Tamount > 0 ? totalAmount.toFixed(2) : Tamount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <CCardFooter>
                    <div className="d-grid gap-2 mx-auto">
                      {step > 1 ? (
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <CButton
                            variant="ghost"
                            color="dark"
                            onClick={this.handleOnPre}
                            className="w-100"
                          >
                            Back
                          </CButton>
                          {step === 3 ? (
                            <CButton
                              className="w-100"
                              color="info"
                              disabled={
                                paymentMethodId === undefined ? true : false
                              }
                              onClick={this.handleOnPlaceOrder}
                            >
                              {loading && (
                                <CSpinner size="sm" className="ms-1" />
                              )}
                              Place Order
                            </CButton>
                          ) : (
                            <CButton
                              className="w-100"
                              color="info"
                              onClick={this.handleOnNext}
                              disabled={addressId === undefined ? true : false}
                            >
                              Next
                            </CButton>
                          )}
                        </div>
                      ) : (
                        <CButton
                          type="submit"
                          color="info"
                          disabled={items.length <= 0 ? true : false}
                          className="d-flex justify-content-center align-items-center"
                          onClick={this.handleOnNext}
                        >
                          {/* <IoIcons.IoBagCheckOutline size="23" /> */}
                          <span className="ms-2">Checkout</span>
                        </CButton>
                      )}
                    </div>
                  </CCardFooter>
                </CCard>
              </CCol>
            </CRow>
          )}
        </Suspense>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
    websocketResponse: state.websocketResponse,
    cartResponse: state.cartResponse,
    orderResponse: state.orderResponse,
    shippingFeeResponse: state.shippingFeeResponse
  }
}
export default connect(mapStateToProps, {
  clearMessage,
  placeOrder,
  updateOrderPaymentStatus,
  validateCart,
  setCart,
  getShippingFees
})(Cart)
