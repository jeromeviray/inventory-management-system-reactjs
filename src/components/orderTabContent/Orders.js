import React, { Component } from "react"
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CRow,
  CContainer,
  CButton,
  CForm,
  CCol,
  CFormControl,
  CInputGroup
} from "@coreui/react"
import { Link } from "react-router-dom"
//action
import { saveComments } from "src/service/apiActions/commentAction/commentAction"
import {
  getOrders,
  updateOrderStatus,
} from "src/service/apiActions/orderAction/orderAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { connect } from "react-redux"
import OrderCard from "./OrderCard"
import Roles from "src/router/config"
import ReactPaginate from "react-paginate"
import TrackingInfoModal from "../modals/order/TrackingInfoModal"
import { setTrackingInfoModal } from "src/service/apiActions/modalAction/modalAction"
import config from "../../config"
import * as FaIcons from 'react-icons/fa'
export class Orders extends Component {
  state = {
    message: "",
    status: "",
    action: "",
    orders: [],
    token: "",
    permission: "",
    path: "",
    updated: false,
    visible: false,
    query: ''
  }

  orderReviews = {}

  constructor(props) {
    super(props)
    this.state.status = props.status
    this.handleOrderReview = this.handleOrderReview.bind(this)
  }
  componentDidMount() {
    let { type, accessToken, roles } = this.props.userResponse.credentials
    let token = type + accessToken
    let roleName = roles.roleName
    let getPermission = roleName ? roleName : roles
    let href = this.manageHrefLinkBasedInPermission(getPermission)

    this.setState({
      token: token,
      permission: roles.roleName ? roles.roleName : roles,
      path: href,
    })
    const { query } = this.state
    this.props.getOrders(this.state.status, query, 0, 10)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageorderRepsonse(prevProps, prevState)
  }

  manageTrackingInfoModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { action } = this.props.modalVisible

      if (action === "close") {
        this.props.getOrders(this.state.status, this.state.query, 0, 10)
      }
    }
  }
  manageorderRepsonse = (prevProps, prevState) => {
    if (prevProps.orderResponse !== this.props.orderResponse) {
      let { status, action, data } = this.props.orderResponse
      if (status === 200 && action === "GET_ORDERS") {
        this.setState({
          orders: data.orders,
        })
      }
    }
  }

  manageHrefLinkBasedInPermission = (permission) => {
    if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
      return "/app/order/"
    } else {
      return "/user/order/"
    }
  }

  handleOrder(orderData, orderStatus) {
    let orderId = orderData.orderId
    this.props.updateOrderStatus(orderId, orderStatus, '', '').then(() => {
      let orders = this.state.orders
      const order = this.props.orderResponse.data
      const index = orders.findIndex((o) => o.orderId == orderId)
      const { status, query } = this.state

      orders.splice(index, 1)
      if (orders.length == 0) {
        this.props.getOrders(status, query, 0, 10)
      } else {
        let totalCounts = this.props.totalCounts
        if (typeof totalCounts[orderStatus.toUpperCase()] == "undefined") {
          totalCounts[orderStatus.toUpperCase()] = 0
        }
        if (orderStatus == "payment_received") {
          totalCounts[orderData.orderStatus.toUpperCase()]--
          totalCounts[orderStatus.toUpperCase()]++
          this.props.totalCountChange(totalCounts)
          this.setState({
            orders: orders,
          })
        }
      }
    })
  }
  renderCustomerAction = (orderStatus, order, paymentStatus) => {
    console.log(paymentStatus)
    let orderButton = <></>
    switch (orderStatus.toLowerCase()) {
      case "pending":
        orderButton = (
          <CButton
            onClick={() => {
              this.handleOrder(order, "cancel")
            }}
          >
            Cancel Order
          </CButton>
        )
        break
      case "delivered":
        orderButton =
          paymentStatus === "Paid" ? (
            <CButton
              onClick={() => {
                this.handleOrder(order, "request_refund")
              }}
            >
              Request Refund
            </CButton>
          ) : (
            <></>
          )
        break
    }
    return orderButton
  }
  renderOrderAction(orderStatus, order, paymentStatus) {
    const { visible } = this.state
    let orderButton = <></>
    switch (orderStatus.toLowerCase()) {
      case "pending":
        orderButton = (
          <CButton
            onClick={() => {
              this.handleOrder(order, "confirmed")
            }}
          >
            Confirm Order
          </CButton>
        )
        break
      case "confirmed":
        orderButton = (
          <CButton
            onClick={() => {
              this.props.setTrackingInfoModal(!visible, "MarkAsShipped", order, "")
            }}
          >
            Mark as Shipped
          </CButton>
        )
        break
      case "shipped":
        orderButton = (
          <CButton
            onClick={() => {
              this.handleOrder(order, "delivered")
            }}
          >
            Mark as Delivered
          </CButton>
        )
        break
      case "delivered":
        orderButton = (
          <CButton
            onClick={() => {
              this.handleOrder(order, "payment_received")
            }}
            disabled={paymentStatus === "Paid" ? true : false}
          >
            {paymentStatus === "Paid"
              ? "Payment Recieved"
              : "Mark as Payment Received"}
          </CButton>
        )
        break
      case "request_refund":
        orderButton = (
          <CButton
            onClick={() => {
              this.handleOrder(order, "accept_refund")
            }}
          >
            Accept Refund
          </CButton>
        )
        break
    }
    return orderButton
  }

  handleOrderView(event, order) {
    event.preventDefault()

    let formattedReviews = []
    let orderReviews = this.orderReviews[order.orderId]
    for (var key in orderReviews) {
      let value = orderReviews[key]
      formattedReviews.push({
        rating: value.rating,
        message: value.comment,
        anonymous: true,
        published: 0,
        product: {
          id: parseInt(key),
        },
      })
      this.orderReviews[order.orderId][key].submitted = true
    }
    this.props.saveComments(order.orderId, formattedReviews)
    this.setState({ update: true })
  }

  handleOrderReview(orderId, item, rating, comment) {
    const { orders } = this.state
    let orderIndex = orders.findIndex((ctt2) => ctt2.orderId == orderId)
    let { comments } = orders[orderIndex]

    let submitted = false

    if (typeof this.orderReviews[orderId] == "undefined") {
      this.orderReviews[orderId] = {
        [item.product.id]: {
          rating: rating,
          comment: comment,
          submitted: false,
        },
      }
    } else if (
      typeof this.orderReviews[orderId][item.product.id] !== "undefined" &&
      this.orderReviews[orderId][item.product.id].submitted
    ) {
      comment = this.orderReviews[orderId][item.product.id].comment
      submitted = this.orderReviews[orderId][item.product.id].submitted
    }

    let index =
      comments && comments.findIndex((ctt) => ctt.product.id == item.product.id)

    if (index >= 0) {
      const ct = comments[index]
      rating = ct.rating
      comment = ct.message
      submitted = true
    }

    this.orderReviews[orderId][item.product.id] = {
      rating: rating,
      comment: comment,
      submitted: submitted,
    }
  }
  handleOnSearch = (event) => {
    const { status, query } = this.state
    this.props.getOrders(status, query, 0, 10)
    this.setState({
      query: event.target.value
    })
  }
  render() {
    let { message, orders, permission, path, query } = this.state
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "400",
    }
    return (
      <>
        <TrackingInfoModal />
        <div className="d-flex justify-content-end mb-2">
          <CForm className="w-50">
            <CInputGroup>
              <CFormControl
                type="text"
                id="floatingInput"
                placeholder="Search"
                className="p-2"
                value={query}
                onChange={this.handleOnSearch}
              />
              <CButton
                type="button"
                color="info"
                variant="outline"
                id="button-addon2"
                className=""
              >
                <FaIcons.FaSearch />
              </CButton>
            </CInputGroup>
          </CForm>
        </div>
        {orders.length === 0 ? (
          <CCard>
            <CCardBody>
              <div className="text-center">No Order Data</div>
            </CCardBody>
          </CCard>
        ) : (
          orders.map((order, index) => {
            let hasPendingReview =
              order.orderItems.length != order.comments.length

            if (hasPendingReview && this.orderReviews[order.orderId]) {
              hasPendingReview = false
              for (var key in this.orderReviews[order.orderId]) {
                if (this.orderReviews[order.orderId][key].submitted == false) {
                  hasPendingReview = true
                }
              }
            }

            const canReview =
              (order.orderStatus == "DELIVERED" ||
                order.orderStatus == "PAYMENT_RECEIVED") &&
              permission !== Roles.SUPER_ADMIN &&
              permission !== Roles.ADMIN
            const canViewReview =
              (order.orderStatus == "DELIVERED" ||
                order.orderStatus == "PAYMENT_RECEIVED") &&
              (permission == Roles.SUPER_ADMIN || permission == Roles.ADMIN)

            const {
              firstName,
              lastName,
              street,
              barangay,
              province,
              region,
              city,
              phoneNumber,
            } = order.customerAddress
            let paymentStatus = "Payment Pending"
            switch (order.paymentStatus) {
              case 1:
                paymentStatus = "Paid"
                break
              case 2:
                paymentStatus = "Failed"
                break
              case 3:
                paymentStatus = "Refunded"
                break
            }
            return (
              <CCard className="mb-3" key={index}>
                <CCardHeader>
                  <CRow className="p-2">
                    <span
                      style={{ fontSize: "14px", fontWeight: "400" }}
                      className="text-black-50"
                    >
                      Order ID: {order.orderId}
                    </span>
                    <span
                      style={{ fontSize: "14px", fontWeight: "400" }}
                      className="text-black-50"
                    >
                      Customer Name: {firstName + " " + lastName}
                    </span>
                    <span
                      style={{ fontSize: "14px", fontWeight: "400" }}
                      className="text-black-50"
                    >
                      Mobile: {phoneNumber}
                    </span>
                    <span
                      style={{ fontSize: "14px", fontWeight: "400" }}
                      className="text-black-50"
                    >
                      Address:{" "}
                      {street +
                        " " +
                        " " +
                        barangay +
                        ", " +
                        city +
                        ", " +
                        province}
                    </span>
                    {order.orderStatus === "SHIPPED" ?
                      <>

                        <span
                          style={{ fontSize: "14px", fontWeight: "400" }}
                          className="text-black-50"
                        >
                          Tracking Number: {order.trackingNumber}
                        </span>
                        <span
                          style={{ fontSize: "14px", fontWeight: "400" }}
                          className="text-black-50"
                        >
                          Tracking Url: {order.trackingUrl}
                        </span>
                      </> :
                      <></>}
                  </CRow>
                </CCardHeader>
                <CCardBody>
                  <CForm
                    onSubmit={(event) => {
                      this.handleOrderView(event, order)
                    }}
                  >
                    <CContainer key={new Date()}>
                      {order.orderItems.map((item, index) => {
                        this.handleOrderReview(order.orderId, item, 5, "")
                        const { rating, comment, submitted } =
                          this.orderReviews[order.orderId][item.product.id]
                        return (
                          <OrderCard
                            item={item}
                            canReview={canReview}
                            canViewReview={canViewReview}
                            orderId={order.orderId}
                            comment={comment}
                            rating={rating}
                            key={index}
                            submitted={submitted}
                            handleOrderReview={this.handleOrderReview}
                          />
                        )
                      })}
                    </CContainer>
                    {hasPendingReview && canReview && (
                      <CButton type="submit" style={{ float: "right" }}>
                        Submit Product Review
                      </CButton>
                    )}
                  </CForm>
                </CCardBody>
                <CCardFooter className="p-4">
                  <CRow className="">
                    <CCol sm="12" lg="6">
                      <div className="d-flex flex-column">
                        <div style={fontStyle} className="mt-2">
                          <span className="text-black-50 me-2">
                            Date of Ordered:
                          </span>
                          <span style={{ fontWeight: "500" }}>
                            {order.orderedAt}
                          </span>
                        </div>

                        <div style={fontStyle} className="mt-2">
                          <span
                            style={fontStyle}
                            className="text-black-50 me-2"
                          >
                            Payment Method:
                          </span>
                          <span style={{ fontWeight: "500" }}>
                            {order.paymentMethod.paymentMethod}
                          </span>
                        </div>
                        <div style={fontStyle} className="mt-2">
                          <span
                            style={fontStyle}
                            className="text-black-50 me-2"
                          >
                            Payment Status:
                          </span>
                          <span style={{ fontWeight: "500" }}>
                            {paymentStatus}
                          </span>
                        </div>
                        <div style={fontStyle} className="mt-2">
                          <span
                            style={fontStyle}
                            className="text-black-50 me-2"
                          >
                            Order Status:
                          </span>
                          <span
                            className="text-danger"
                            style={{ fontWeight: "500" }}
                          >
                            {order.orderStatus}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span
                            style={fontStyle}
                            className="text-black-50 me-2"
                          >
                            Total Amount
                          </span>
                          <span style={{ fontWeight: "500" }}>
                            &#8369;{order.totalAmount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <div className="d-flex align-items-end  h-100 justify-content-end mt-3">
                        {permission === Roles.SUPER_ADMIN ||
                          permission === Roles.ADMIN
                          ? this.renderOrderAction(
                            this.state.status,
                            order,
                            paymentStatus,
                          )
                          : this.renderCustomerAction(
                            this.state.status,
                            order,
                            paymentStatus,
                          )}
                        <Link
                          to={{
                            pathname:
                              config.api.private.prefixFrontendUrl +
                              path +
                              order.orderId,
                            state: order.orderId,
                          }}
                          className="m-2"
                        >
                          View More
                        </Link>
                      </div>
                    </CCol>
                  </CRow>
                </CCardFooter>
              </CCard>
            )
          })
        )}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    orderResponse: state.orderResponse,
    messageResponse: state.messageResponse,
    userResponse: state.userResponse,
    modalVisible: state.modalVisibleResponse,

  }
}
export default connect(mapStateToProps, {
  getOrders,
  clearMessage,
  updateOrderStatus,
  saveComments,
  setTrackingInfoModal
})(Orders)
