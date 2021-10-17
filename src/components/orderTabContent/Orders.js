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

import config from "../../config"

export class Orders extends Component {
  state = {
    message: "",
    status: "",
    action: "",
    orders: [],
    token: "",
    permission: "",
    path: "",
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

    this.props.getOrders(this.state.status)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageorderRepsonse(prevProps, prevState)
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
    this.props.updateOrderStatus(orderId, orderStatus).then(() => {
      let orders = this.state.orders
      const order = this.props.orderResponse.data
      const index = orders.findIndex((o) => o.orderId == orderId)
      orders.splice(index, 1)
      if (orders.length == 0) {
        this.props.getOrders(this.state.status, 0, 10)
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

  renderOrderAction(orderStatus, order) {
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
              this.handleOrder(order, "shipped")
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
          >
            Mark as Payment Received
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
        orderId: order.id,
      })
    }
    this.props.saveComments(formattedReviews).then(() => {
      for (var key in orderReviews) {
        this.orderReviews[order.orderId][key].submitted = true
      }
    })
  }

  handleOrderReview(orderId, item, rating, comment) {
    const { orders } = this.state
    let orderIndex = orders.findIndex((ctt2) => ctt2.orderId == orderId)
    const { comments } = orders[orderIndex]

    let submitted = false

    if (typeof this.orderReviews[orderId] == "undefined") {
      this.orderReviews[orderId] = {
        [item.product.id]: {
          rating: rating,
          comment: comment,
          submitted: false,
        },
      }
    }

    console.log(comments)
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

  render() {
    let { message, orders, permission, path } = this.state
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "400",
    }
    console.log(orders)
    return (
      <>
        {orders.length === 0 ? (
          <CCard>
            <CCardBody>
              <div className="text-center">No Order Data</div>
            </CCardBody>
          </CCard>
        ) : (
          orders.map((order, index) => {
            let hasPendingReview = order.comments.findIndex(
              (comment) => comment.order_id == order.id,
            )

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
                  </CRow>
                </CCardHeader>
                <CCardBody>
                  <CForm
                    onSubmit={(event) => {
                      this.handleOrderView(event, order)
                    }}
                  >
                    <CContainer>
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
                    {hasPendingReview >= 0 && canReview && (
                      <CButton type="submit" style={{ float: "right" }}>
                        Submit Product Review
                      </CButton>
                    )}
                  </CForm>
                </CCardBody>
                <CCardFooter className="p-4">
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex align-items-bottom">
                      {/* {order.orderItems.map((item, index) => {
                                                return (

                                                )

                                            })} */}
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

                      {permission === Roles.SUPER_ADMIN ||
                        permission === Roles.ADMIN ? (
                        this.renderOrderAction(this.state.status, order)
                      ) : (
                        <></>
                      )}
                    </div>
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
                        <span style={fontStyle} className="text-black-50 me-2">
                          Payment Method:
                        </span>
                        <span style={{ fontWeight: "500" }}>
                          {order.paymentMethod.paymentMethod}
                        </span>
                      </div>
                      <div style={fontStyle} className="mt-2">
                        <span style={fontStyle} className="text-black-50 me-2">
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
                        <span style={fontStyle} className="text-black-50 me-2">
                          Total Amount
                        </span>
                        <span style={{ fontWeight: "500" }}>
                          &#8369;{order.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CCardFooter>
              </CCard>
            )
          })
        )}
        {/* <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    // pageCount={inventories.totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    // onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                /> */}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    orderResponse: state.orderResponse,
    messageResponse: state.messageResponse,
    userResponse: state.userResponse,
  }
}
export default connect(mapStateToProps, {
  getOrders,
  clearMessage,
  updateOrderStatus,
  saveComments,
})(Orders)
