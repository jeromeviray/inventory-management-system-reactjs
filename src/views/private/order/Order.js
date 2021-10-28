import React, { Component, Suspense } from "react"
import { connect } from "react-redux"
import Roles from "src/router/config"

import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CSpinner,
  CForm,
  CInputGroup,
  CButton,
  CBadge,
  CFormControl,
} from "@coreui/react"
import { DotLoader } from "react-spinners"

// icon
// import * as FiIcons from 'react-icons/fi'
//component tab
import * as FaIcons from "react-icons/fa"

const Orders = React.lazy(() => import("src/components/orderTabContent/Orders"))

export class Order extends Component {
  state = {
    orderStatus: "pending",
    activeKey: 1,
    totalCounts: {
      PENDING: 0,
      CONFIRMED: 0,
      SHIPPED: 0,
      DELIVERED: 0,
      CANCEL: 0,
      REQUEST_REFUND: 0,
      REFUNDED: 0,
    },
  }

  constructor(props) {
    super(props)
    this.totalCountChange = this.totalCountChange.bind(this)
    let { roles } = this.props.userResponse.credentials
    this.state.permission = roles.roleName ? roles.roleName : roles
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageorderRepsonse(prevProps, prevState)
  }

  manageorderRepsonse = (prevProps, prevState) => {
    if (prevProps.orderResponse !== this.props.orderResponse) {
      let { status, action, data } = this.props.orderResponse
      console.log(data)
      if (status === 200 && action === "GET_ORDERS") {
        this.setState({
          totalCounts: data.orderStatusCount,
        })
      }
    }
  }

  totalCountChange(totalCounts) {
    this.setState({
      totalCounts: totalCounts,
    })
  }

  render() {
    const { orderStatus, activeKey, totalCounts, permission } = this.state
    const tabStyle = {
      margin: "10px 0",
      padding: "12px 16px",
      overflow: "hidden",
    }
    return (
      <>

        <CNav
          variant="pills"
          role="tablist"
          layout="fill"

        // className="flex-column flex-sm-row"
        >
          <CNavItem>
            <CNavLink
              href="#pending"
              active={activeKey === 1}
              onClick={() => {
                this.setState({ activeKey: 1, orderStatus: "pending" })
              }}
            >
              Pending{" "}
              <CBadge color="warning">
                {totalCounts.PENDING ? totalCounts.PENDING : 0}
              </CBadge>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#confirmed"
              active={activeKey === 2}
              onClick={() => {
                this.setState({ activeKey: 2, orderStatus: "confirmed" })
              }}
            >
              Confirmed{" "}
              <CBadge color="warning">
                {totalCounts.CONFIRMED ? totalCounts.CONFIRMED : 0}
              </CBadge>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#shipped"
              active={activeKey === 3}
              onClick={() => {
                this.setState({ activeKey: 3, orderStatus: "shipped" })
              }}
            >
              Shipped{" "}
              <CBadge color="warning">
                {totalCounts.SHIPPED ? totalCounts.SHIPPED : 0}
              </CBadge>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#delivered"
              active={activeKey === 4}
              onClick={() => {
                this.setState({ activeKey: 4, orderStatus: "delivered" })
              }}
            >
              Delivered{" "}
              <CBadge color="warning">
                {totalCounts.DELIVERED ? totalCounts.DELIVERED : 0}
              </CBadge>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#refund"
              active={activeKey === 5}
              onClick={() => {
                this.setState({ activeKey: 5, orderStatus: "request_refund" })
              }}
            >
              Request Refund{" "}
              <CBadge color="warning">
                {totalCounts.REQUEST_REFUND ? totalCounts.REQUEST_REFUND : 0}
              </CBadge>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#refund"
              active={activeKey === 6}
              onClick={() => {
                this.setState({ activeKey: 6, orderStatus: "refunded" })
              }}
            >
              Refunded{" "}
              <CBadge color="warning">
                {totalCounts.REFUNDED ? totalCounts.REFUNDED : 0}
              </CBadge>
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent style={tabStyle}>
          <CTabPane
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={true}
          >
            <Suspense
              fallback={
                <div className="d-flex justify-content-center align-items-center  position-fixed spinner">
                  <DotLoader color="#36D7B7" size={100} />
                </div>
              }
            >
              <Orders
                key={orderStatus}
                status={orderStatus}
                totalCounts={totalCounts}
                totalCountChange={this.totalCountChange}
              />
            </Suspense>
          </CTabPane>
        </CTabContent>

        {/* </CContainer> */}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    orderResponse: state.orderResponse,
    userResponse: state.userResponse,
  }
}
export default connect(mapStateToProps, {})(Order)
