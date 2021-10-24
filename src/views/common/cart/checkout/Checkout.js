import React, { Component } from "react"
import {
  CRow,
  CCol,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CImage,
  CFormCheck,
  CCloseButton,

  CBadge,
  CContainer,
} from "@coreui/react"
import { connect } from "react-redux"
import { BsDash, BsPlus } from "react-icons/bs";
//action
import {
  getCart,
  removeCartItem, quantityAction
} from "src/service/apiActions/cartAction/cartAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getOrderItems } from "src/service/apiActions/orderAction/orderAction"
import config from "../../../../config";

import { NO_IMAGE_BASE64 } from "src/service/redux/constants"

//icon
// import * as IoIcons from "react-icons/io5";

export class Checkout extends Component {
  state = {
    // isLoggedIn: false,
    // permission: '',
    token: "",
    message: "",
    cart: [],
    cartItems: [],

    checked: [],
    pendingItem: [],
    totalAmount: 0,
    quantity: 0,
  }
  componentDidMount() {
    this.retrieveCartItems()
  }

  retrieveCartItems = () => {
    this.props.getCart()
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageCartItemsResponse(prevProps, prevState)
  }
  manageCartItemsResponse = (prevProps, prevState) => {
    if (prevProps.cartResponse !== this.props.cartResponse) {
      let { action, status, data } = this.props.cartResponse
      if (action === "CARTITEMS" && status === 200) {
        this.setState({
          checked: new Array(data.cart.cartItems.length).fill(false),
          cart: data.cart,
          cartItems: data.cart.cartItems,
          items: [],
          pendingItem: []
        })
      }
    }
  }
  handOnRemoveItem = (id) => {
    let { token } = this.state
    this.props
      .removeCartItem(id)
      .then(() => {
        this.retrieveCartItems(token)
      })
  }
  handleOnChange = (position) => {
    let { checked, pendingItem, cartItems, totalAmount } = this.state
    let check = checked.map((item, index) => {
      return index === position ? !item : item
    })

    let find = pendingItem.indexOf(cartItems[position])

    if (find > -1) {
      pendingItem.splice(find, 1)
    } else {
      pendingItem.push(cartItems[position])
    }

    let totalPrice = check.reduce((sum, currentState, index) => {
      if (currentState === true) {
        let status = cartItems[index].product.promo && cartItems[index].product.promo.status
        console.log(cartItems[index])
        let amount
        if (status === "ONGOING") {
          const { product } = cartItems[index]
          let percentage = product.promo.percentage
          let discount = (product.product.productPrice * percentage) / 100
          let price = product.product.productPrice - discount
          amount = cartItems[index].quantity * price
        } else {
          amount = cartItems[index].amount
        }
        return sum + amount
      }
      return sum
    }, 0)

    let quantity = check.reduce((quantity, currentState, index) => {
      if (currentState === true) {
        return quantity + cartItems[index].quantity
      }
      return quantity
    }, 0)

    this.setState({
      checked: check,
      totalAmount: totalPrice,
      quantity: quantity,
    })
    this.props.paymentDetailsOnChange(pendingItem, quantity, totalPrice * quantity)
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
  incrementValue = (index) => {
    const { cartItems } = this.state;
    const productId = cartItems[index].product.product.id
    this.props.quantityAction("increase", productId).then(() => {
      this.retrieveCartItems()
    })

  }

  decrementValue = (index) => {
    const { cartItems } = this.state;
    const productId = cartItems[index].product.product.id
    this.props.quantityAction("decrease", productId).then(() => {
      this.retrieveCartItems()
    })

  }
  handleQuantityOnChange = (event) => {
    event.preventDefault();

    let { value, max, min } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    this.setState({
      quantity: value
    })

  }
  render() {
    let { cartItems, checked } = this.state
    const headerStyle = {
      fontWeight: "800",
    }
    return (
      <>
        <CContainer>

          <CCard className="mb-3 border-0">
            <CCardHeader>
              <div className="d-flex justify-content-between">
                <div>
                  <span style={{ ...headerStyle }}>Select</span>
                </div>
                <div>
                  <span style={{ ...headerStyle }}>Item</span>
                </div>
                <div>
                  <span style={{ ...headerStyle }}>Price</span>
                </div>
                <div>
                  <span style={{ ...headerStyle }}>Quantity</span>
                </div>
                <div>
                  <span style={{ ...headerStyle }}>Action</span>
                </div>
              </div>
            </CCardHeader>

            <CCardBody>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => {
                  const { quantity, addedAt, } = item
                  const { product, inventory, promo } = item.product
                  let percentage = 0
                  let discount = 0
                  let price = 0
                  let amount = item.amount
                  let status = promo && promo.status;


                  if (status === "ONGOING") {
                    percentage = promo && promo.percentage
                    discount = (product.productPrice * percentage) / 100
                    price = product.productPrice - discount
                    amount = quantity * (price)
                  } else {
                    amount = quantity * product.productPrice
                  }

                  let maxQuantity = status === "ONGOING" ? promo.quantity : inventory.totalStock
                  let disabled = status === "ONGOING" ? false : inventory.totalStock <= 0 ? true : false;
                  if (!disabled && quantity > maxQuantity) {
                    disabled = true;
                    inventory.status = "INSUFFICIENT STOCK"
                  }
                  return (
                    <CCard
                      key={index}
                      className={
                        checked[index] ? "border border-success mb-3" : "mb-3"
                      }
                    >
                      <CCardBody>
                        <div className="d-flex align-items-start">
                          <div className="me-3">
                            <CFormCheck
                              color="success"
                              name="checked"
                              id="flexCheckChecked"
                              checked={checked[index]}
                              value={item}
                              onChange={() => this.handleOnChange(index)}
                              disabled={disabled}
                            />
                          </div>

                          <CImage
                            rounded
                            src={
                              product.fileImages.length > 0
                                ? config.api.private.baseUrl + "/api/v1/products/getImages/bytesArrays/" +
                                product.fileImages[0].path +
                                product.fileImages[0].fileName
                                : NO_IMAGE_BASE64
                            }
                            width={100}
                            height={100}
                          />
                          <div className="ms-2  w-100">
                            <CRow className="d-flex justify-content-between">
                              <CCol className="ps-4 text-dark">
                                {product.productName}
                              </CCol>
                              <CCol className="text-dark d-flex flex-column align-items-center">
                                <span>
                                  &#8369;{status === "ONGOING" ? (
                                    <>
                                      <span
                                        className="text-muted text-decoration-line-through me-2"
                                        style={{ fontSize: "16px" }}
                                      >
                                        {product.productPrice.toFixed(2)}
                                      </span>
                                      <span>{price.toFixed(2)}</span><br />
                                      <span
                                        className="text-muted "
                                        style={{ fontSize: "16px" }}
                                      >
                                        {percentage + "%"} discount
                                      </span>
                                    </>
                                  ) : (
                                    product.productPrice.toFixed(2)
                                  )}
                                </span>
                              </CCol>
                              <CCol className="text-dark d-flex flex-column align-items-center">
                                <div className="quantity-container">
                                  <CButton
                                    className="decrement-btn"
                                    type="button"
                                    disabled={quantity === 1 ? true : false}
                                    onClick={() => this.decrementValue(index)}
                                  >
                                    <BsDash />

                                  </CButton>
                                  <input
                                    type="text"
                                    className="input-quantity"
                                    value={quantity}
                                    pattern="[0-9]*"
                                    onChange={this.handleQuantityOnChange}
                                    max={status === "ONGOING" ? promo.quantity : inventory.totalStock}
                                    min={1}
                                    readOnly={true}

                                  />
                                  <CButton className="increment-btn"
                                    disabled={quantity === maxQuantity ? true : maxQuantity <= 0 ? true : false}
                                    onClick={() => this.incrementValue(index)} >
                                    <BsPlus />
                                  </CButton>
                                </div>
                              </CCol>
                              <CCol className="text-dark  d-flex justify-content-end">
                                <span>
                                  <CCloseButton
                                    onClick={() =>
                                      this.handOnRemoveItem(item.id)
                                    }
                                  />
                                </span>
                              </CCol>
                            </CRow>
                          </div>
                        </div>
                      </CCardBody>
                      <CCardFooter
                        className={
                          checked[index] ? "bg-success text-white" : ""
                        }
                      >
                        <div className="d-flex justify-content-between align-items-center w-100 ">
                          <span className="text-muted font-style">
                            <div>
                              {addedAt}
                            </div>
                            <div>
                              Stock: <span className="me-2">{status === "ONGOING" ? promo.quantity : inventory.totalStock}</span>{disabled ? this.manageStatus(inventory.status) : ""}
                            </div>
                          </span>
                          <div className="d-flex align-items-center">
                            <span className="text-muted font-style me-2">
                              Amount
                            </span>
                            <span style={{ fontWeight: "500" }}>
                              &#8369;{amount.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </CCardFooter>
                    </CCard>
                  )
                })
              ) : (
                <CCard className="mb-3 border-0">
                  <CCardBody className="text-center">
                    No Cart Item Added
                  </CCardBody>
                </CCard>
              )}
            </CCardBody>
          </CCard>
        </CContainer>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
    cartResponse: state.cartResponse,
  }
}
export default connect(mapStateToProps, {
  getCart,
  removeCartItem,
  clearMessage,
  getOrderItems,
  quantityAction
})(Checkout)
