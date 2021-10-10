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
} from "@coreui/react"
import { Link } from "react-router-dom"
import Barcode from "react-barcode"
import { markIncomingSuppliesAsDelivered } from "src/service/apiActions/incomingSupplyAction/incomingSupplyAction"
import { connect } from "react-redux"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setSupplyModal } from "src/service/apiActions/modalAction/modalAction"

import * as MdIcons from "react-icons/md"

export class IncomingSuppliesCard extends Component {
  markIncomingSuppliesAsDelivered = (id) => {
    this.props
      .markIncomingSuppliesAsDelivered(id)
      .then(() => {
        const { data, status } = this.props.messageResponse
      })
      .catch(() => {
        let { status, data } = this.props.messageResponse

        if (status > 400 && status <= 403) {
          setInterval(() => {
            this.props.logout()
            this.props.clearMessage()
          }, 1000)
        }
      })
  }
  renderIncomingAction(orderStatus, incomingSupply) {
    let orderButton = <></>
    switch (orderStatus.toLowerCase()) {
      case "pending":
        orderButton = (
          <>
            <CButton
              color="info"
              className="me-2"
              variant="ghost"
              // onClick={() =>
              //   this.props.addBrandModal(
              //     !visible,
              //     "Edit",
              //     brand,
              //     <MdIcons.MdModeEdit size="20" className="me-2" />,
              //   )
              // }
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
            <CButton
              onClick={() => {
                this.markIncomingSuppliesAsDelivered(incomingSupply.id)
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
                          {supplier.name}
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
                            pathname: "/app/supply/" + id,
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
  logout,
  clearMessage,
  markIncomingSuppliesAsDelivered,
  setSupplyModal,
})(IncomingSuppliesCard)
