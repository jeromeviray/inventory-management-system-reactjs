import React, { Component } from "react"
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CButton,
  CTooltip,
} from "@coreui/react"
import { Link } from "react-router-dom"
import Barcode from "react-barcode"
import {
  markIncomingSuppliesAsDelivered,
  getIncomingSupplies,
} from "src/service/apiActions/incomingSupplyAction/incomingSupplyAction"
import { connect } from "react-redux"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setSupplyModal } from "src/service/apiActions/modalAction/modalAction"

import * as MdIcons from "react-icons/md"

import config from "../../config"

export class IncomingSuppliesCard extends Component {
  handleIncomingSupplyItem(incomingItem, status) {
    this.props
      .markIncomingSuppliesAsDelivered(incomingItem.id)
      .then(() => {
        let supplies = this.props.supplies
        let incomingSupplies = this.props.incomingSupplyResponse.data
        const index = supplies.findIndex((o) => o.id === incomingItem.id)

        supplies.splice(index, 1)
        if (supplies.length === 0) {
          this.props.getIncomingSupplies("", status, 0, 10)
        } else {
          let totalCounts = this.props.totalCounts
          if (typeof totalCounts[status.toUpperCase()] == "undefined") {
            totalCounts[status.toUpperCase()] = 0
          }
          totalCounts[incomingItem.incomingSupplyStatus.toUpperCase()]--
          totalCounts[status.toUpperCase()]++
          this.props.totalCountChange(totalCounts)
          // this.setState({
          //   orders: orders
          // });
        }
      })
      .catch(() => {
        let { status, data } = this.props.messageResponse

        if (status > 400 && status <= 403) {
          setInterval(() => {
            this.props.clearMessage()
          }, 1000)
        }
      })
    // let orderId = orderData.orderId;
    // this.props.updateOrderStatus(orderId, orderStatus).then(() => {
    //   let orders = this.state.orders;
    //   const order = this.props.orderResponse.data;
    //   const index = orders.findIndex((o) => o.orderId == orderId);
    //   orders.splice(index, 1);
    //   if (orders.length == 0) {
    //     this.props.getOrders(this.state.status, 0, 10);
    //   } else {
    //     let totalCounts = this.props.totalCounts;
    //     if (typeof totalCounts[orderStatus.toUpperCase()] == 'undefined') {
    //       totalCounts[orderStatus.toUpperCase()] = 0;
    //     }
    //     totalCounts[orderData.orderStatus.toUpperCase()]--;
    //     totalCounts[orderStatus.toUpperCase()]++;
    //     this.props.totalCountChange(totalCounts);
    //     this.setState({
    //       orders: orders
    //     });
    //   }
    // })
  }
  renderIncomingAction(orderStatus, incomingSupply) {
    let orderButton = <></>
    switch (orderStatus.toLowerCase()) {
      case "pending":
        orderButton = (
          <>
            <CTooltip content="Edit Incoming Supplies">
              <CButton
                color="info"
                className="me-2"
                variant="ghost"
                onClick={() =>
                  this.props.setSupplyModal(
                    !false,
                    "Edit",
                    incomingSupply,
                    <MdIcons.MdModeEdit size="20" className="me-2" />,
                  )
                }
              >
                <MdIcons.MdModeEdit size="20" />
              </CButton>
            </CTooltip>

            <CButton
              onClick={() => {
                this.handleIncomingSupplyItem(incomingSupply, "pending")
              }}
            >
              Mask as Delivered
            </CButton>
          </>
        )
        break
    }
    return orderButton
  }
  render() {
    let supplies = this.props.supplies
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "400",
    }
    return (
      <>
        {supplies.length === 0 ? (
          <CCard>
            <CCardBody>
              <div className="text-center">No Pending Supplies</div>
            </CCardBody>
          </CCard>
        ) : (
          supplies.map((supply, index) => {
            let {
              incomingSupplyItems,
              deliveredAt,
              purchasedAt,
              id,
              incomingSupplyStatus,
              supplier,
              updatedAt,
              supplyReference,
            } = supply
            console.log(supply)
            return (
              <CCard className="mb-3" key={index}>
                <CCardHeader>
                  <div className="d-flex justify-content-between ">
                    <div className="p-2">
                      <span
                        className="text-black-50"
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Supply Reference #:
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                        className="text-bold ms-2"
                      >
                        {supplyReference}
                      </span>
                    </div>
                    <div className="p-2">
                      <span
                        className="text-black-50"
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Product Items:
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                        className="text-bold ms-2"
                      >
                        {incomingSupplyItems.length}
                      </span>
                    </div>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <CTable
                    striped
                    hover
                    className="shadow-sm "
                    responsive="md"
                    bordered
                    align="middle"
                  >
                    <CTableHead color="dark">
                      <CTableRow className="text-center">
                        <CTableHeaderCell scope="col">
                          Product Name
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          Product Barcode
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          Qunatity Recieved
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody className="text-center" color="light">
                      {incomingSupplyItems.length > 0 ? (
                        incomingSupplyItems.slice(0, 5).map((item, index) => {
                          return (
                            <CTableRow className="text-center" key={index}>
                              <CTableDataCell>
                                {item.product.name}
                              </CTableDataCell>
                              <CTableDataCell>
                                <Barcode
                                  value={String(item.product.barcode)}
                                  height={50}
                                  width={1}
                                  fontSize={14}
                                  margin={7}
                                  background="#f5f5f548"
                                />
                              </CTableDataCell>
                              <CTableDataCell>
                                {item.numberReceived}
                              </CTableDataCell>
                            </CTableRow>
                          )
                        })
                      ) : (
                        <CTableRow>
                          <CTableDataCell colSpan="4">No data</CTableDataCell>
                        </CTableRow>
                      )}
                    </CTableBody>
                  </CTable>
                </CCardBody>
                <CCardFooter className="p-4">
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex flex-column">
                      <div style={fontStyle} className="mt-2">
                        <span className="text-black-50 me-2">
                          Supplier Name:
                        </span>
                        <span style={{ fontWeight: "500" }}>
                          {supplier && supplier.name}
                        </span>
                      </div>
                      <div style={fontStyle} className="mt-2">
                        <span className="text-black-50 me-2">
                          Purchased Date:
                        </span>
                        <span style={{ fontWeight: "500" }}>{purchasedAt}</span>
                      </div>

                      <div style={fontStyle} className="mt-2">
                        <span style={fontStyle} className="text-black-50 me-2">
                          Last Update:
                        </span>
                        <span style={{ fontWeight: "500" }}>{updatedAt}</span>
                      </div>
                      {deliveredAt && (
                        <div style={fontStyle} className="mt-2">
                          <span
                            style={fontStyle}
                            className="text-black-50 me-2"
                          >
                            Delivered Date:
                          </span>
                          <span
                            className="text-danger"
                            style={{ fontWeight: "500" }}
                          >
                            {deliveredAt}
                          </span>
                        </div>
                      )}
                      <div style={fontStyle} className="mt-2">
                        <span style={fontStyle} className="text-black-50 me-2">
                          Supply Status:
                        </span>
                        <span
                          className="text-danger"
                          style={{ fontWeight: "500" }}
                        >
                          {incomingSupplyStatus}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className={
                          incomingSupplyItems.length > 2
                            ? "d-flex align-items-bottom"
                            : "d-none  "
                        }
                      >
                        <Link
                          to={{
                            pathname:
                              config.api.private.prefixFrontendUrl +
                              "/app/supply/" +
                              id,
                            state: id,
                          }}
                          className="m-2"
                        >
                          View More
                        </Link>
                      </div>
                      {this.renderIncomingAction(this.props.status, supply)}
                    </div>
                  </div>
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
    incomingSupplyResponse: state.incomingSupplyResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  clearMessage,
  markIncomingSuppliesAsDelivered,
  setSupplyModal,
  getIncomingSupplies,
})(IncomingSuppliesCard)
