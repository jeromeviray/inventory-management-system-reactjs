import React, { Component, Suspense } from "react"
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CButton,
  CForm,
  CInputGroup,
  CFormControl,
  CBadge,
} from "@coreui/react"
import { DotLoader } from "react-spinners"
import * as FaIcons from "react-icons/fa"
import { connect } from "react-redux"
//action
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getIncomingSupplies } from "src/service/apiActions/incomingSupplyAction/incomingSupplyAction"
import { setSupplyModal } from "src/service/apiActions/modalAction/modalAction"
//mdoal
import SupplyModal from "src/components/modals/supply/SupplyModal"
const IncomingSupplies = React.lazy(() =>
  import("src/components/incomingSupplyTabContent/IncomingSupplies"),
)

export class IncomingSuppliesController extends Component {
  state = {
    message: "",
    activeKey: 1,
    visible: false,
    incomingSupplies: {
      data: [],
      totalPages: 0,
    },
    status: "PENDING",
    totalCounts: {
      PENDING: 0,
      DELIVERED: 0,
    },
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageIncomingSupplies(prevProps, prevState)
  }
  manageIncomingSupplies = (prevProps, prevState) => {
    if (
      prevProps.incomingSupplyResponse !== this.props.incomingSupplyResponse
    ) {
      let { action, status, data } = this.props.incomingSupplyResponse
      if (action === "GET_INCOMING_SUPPLIES" && status === 200) {
        this.setState({
          totalCounts: data.incomingSupplies.totalCounts,
        })
      }
    }
  }

  totalCountChange = (totalCounts) => {
    this.setState({
      totalCounts: totalCounts,
    })
  }
  render() {
    let { activeKey, visible, totalCounts, status } =
      this.state
    const tabStyle = {
      margin: "10px 0",
      padding: "12px 16px",
      overflow: "hidden",
    }
    return (
      <>
        <SupplyModal />
        <div className="d-flex justify-content-between mb-4">
          <CButton
            shape="rounded-pill"
            color="primary"
            variant="ghost"
            className="d-flex justify-content-center align-items-center"
            onClick={() =>
              this.props.setSupplyModal(
                !visible,
                "Add",
                "",
                <FaIcons.FaPlus size={20} />,
              )
            }
          >
            <FaIcons.FaPlus size={20} />
            <span style={{ marginLeft: "10px" }}>Add Incoming Supply</span>
          </CButton>
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
                this.setState({ activeKey: 1, status: "PENDING" })
              }}
            >
              Pending Supplies{" "}
              <CBadge color="warning" className="ms-2">
                {totalCounts.PENDING ? totalCounts.PENDING : 0}
              </CBadge>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#delivered"
              active={activeKey === 2}
              onClick={() => {
                this.setState({ activeKey: 2, status: "DELIVERED" })
              }}
            >
              Delivered Supplies
              <CBadge color="warning" className="ms-2">
                {totalCounts.DELIVERED ? totalCounts.DELIVERED : 0}
              </CBadge>
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent style={tabStyle}>
          <CTabPane role="tabpanel" aria-labelledby="ship-tab" visible={true}>
            <Suspense
              fallback={
                <div className="d-flex justify-content-center align-items-center  position-fixed spinner">
                  <DotLoader color="#36D7B7" size={100} />
                </div>
              }
            >
              <IncomingSupplies
                status={status}
                key={status}
                totalCounts={totalCounts}
                totalCountChange={this.totalCountChange}
              />
            </Suspense>
          </CTabPane>
        </CTabContent>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    incomingSupplyResponse: state.incomingSupplyResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  getIncomingSupplies,
  clearMessage,
  setSupplyModal,
})(IncomingSuppliesController)
