import React, { Component, Suspense } from "react"
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CSpinner,
  CForm,
  CInputGroup,
  CFormControl,
  CButton,
} from "@coreui/react"
import { DotLoader } from "react-spinners"

// icon
// import * as FiIcons from 'react-icons/fi'
//component tab
import * as FaIcons from "react-icons/fa"

const PendingOrder = React.lazy(() =>
  import("src/components/orderTabContent/pending/PendingOrder"),
)
const ConfirmedOrder = React.lazy(() =>
  import("src/components/orderTabContent/confirmed/ConfirmedOrder"),
)
const CompletedOrder = React.lazy(() =>
  import("src/components/orderTabContent/completed/CompletedOrder"),
)
const DeliveryOrder = React.lazy(() =>
  import("src/components/orderTabContent/delivery/DeliveryOrder"),
)

export class Order extends Component {
  state = {
    activeKey: 1,
  }
  render() {
    let { activeKey } = this.state
    const tabStyle = {
      margin: "10px 0",
      padding: "12px 16px",
      overflow: "hidden",
    }

    return (
      <>
        <div className="d-flex justify-content-end mb-2">
          <CForm className="w-50">
            <CInputGroup>
              <CFormControl
                type="text"
                id="floatingInput"
                placeholder="Search"
                className="p-2"
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
                this.setState({ activeKey: 1 })
              }}
            >
              Pending
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#confirmed"
              active={activeKey === 2}
              onClick={() => {
                this.setState({ activeKey: 2 })
              }}
            >
              Confirmed
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#delivery"
              active={activeKey === 3}
              onClick={() => {
                this.setState({ activeKey: 3 })
              }}
            >
              Delivery
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#completed"
              active={activeKey === 4}
              onClick={() => {
                this.setState({ activeKey: 4 })
              }}
            >
              Completed
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent style={tabStyle}>
          <CTabPane
            role="tabpanel"
            aria-labelledby="home-tab"
            visible={activeKey === 1}
          >
            <Suspense
              fallback={
                <div className="d-flex justify-content-center align-items-center  position-fixed ">
                  <DotLoader color="#36D7B7" size={100} />
                </div>
              }
            >
              <PendingOrder />
            </Suspense>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="profile-tab"
            visible={activeKey === 2}
          >
            <Suspense
              fallback={
                <div className="d-flex justify-content-center align-items-center  position-fixed ">
                  <DotLoader color="#36D7B7" size={100} />
                </div>
              }
            >
              <ConfirmedOrder />
            </Suspense>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={activeKey === 3}
          >
            <Suspense
              fallback={
                <div className="d-flex justify-content-center align-items-center  position-fixed ">
                  <DotLoader color="#36D7B7" size={100} />
                </div>
              }
            >
              <DeliveryOrder />
            </Suspense>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={activeKey === 4}
          >
            <Suspense
              fallback={
                <div className="d-flex justify-content-center align-items-center  position-fixed ">
                  <DotLoader color="#36D7B7" size={100} />
                </div>
              }
            >
              <CompletedOrder />
            </Suspense>
          </CTabPane>
        </CTabContent>

        {/* </CContainer> */}
      </>
    )
  }
}

export default Order
