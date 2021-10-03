import React, { Component } from "react"
import {
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CTableCaption,
  CCallout,
} from "@coreui/react"
import Barcode from "react-barcode"
import ReactToPrint from "react-to-print"

import { history } from "src/_helper/history"
import * as IoIcons from "react-icons/io5"
//action
import { getIncomingSupply } from "src/service/apiActions/incomingSupplyAction/incomingSupplyAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { connect } from "react-redux"
export class IncomingSuppliesDetails extends Component {
  state = {
    message: "",
    hasError: false,
    incomingSupply: [],
    status: "",
  }
  componentDidMount() {
    let supplyId = this.props.location.state
    this.props.getIncomingSupply(supplyId).catch(() => {
      let { status, data } = this.props.messageResponse
      if (status > 400 && status <= 403) {
        this.props.clearMessage()
        setInterval(() => {
          this.props.logout()
        }, 1000)
      }
      this.setState({
        message: data.message,
        hasError: true,
        status: status,
      })
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageIncomingSupplyResponse(prevProps, prevState)
  }
  manageIncomingSupplyResponse = (prevProps, prevState) => {
    if (
      prevProps.incomingSupplyResponse !== this.props.incomingSupplyResponse
    ) {
      let { action, status, data } = this.props.incomingSupplyResponse
      if (action === "GET_INCOMING_SUPPLY" && status === 200) {
        this.setState({
          incomingSupply: data.incomingSupply,
        })
      }
    }
  }
  render() {
    let { message, hasError, incomingSupply, status } = this.state
    let {
      incomingSupplyItems,
      deliveredAt,
      purchasedAt,
      id,
      incomingSupplyStatus,
      supplier,
      updatedAt,
      supplyReference,
    } = incomingSupply
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "500",
    }
    return (
      <>
        <CButton
          onClick={() => history.goBack()}
          variant="ghost"
          color="secondary"
          className="d-flex align-items-center"
        >
          <IoIcons.IoChevronBack size={20} />
          <span className="ms-2">back</span>
        </CButton>

        {message && (
          <div className="form-group d-flex justify-content-center align-items-center">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <div className={hasError ? "d-none" : "d-block"}>
          <div className="d-flex align-items-end flex-row-reverse m-2">
            <ReactToPrint
              trigger={() => (
                <CButton color="info" className="d-flex align-items-center">
                  <IoIcons.IoPrintOutline size={20} />
                </CButton>
              )}
              content={() => this.componentRef}
            />
          </div>
          {incomingSupply && (
            <div ref={(el) => (this.componentRef = el)} className="ps-4 pe-4 ">
              {/*  */}
              <CCallout color="info">
                <div className="d-flex flex-column p-3">
                  <div className="d-flex  align-items-center ">
                    <span style={fontStyle} className="text-black-50">
                      Supply Reference #:
                    </span>
                    <h6 className="ps-2 m-0">{supplier && supplyReference}</h6>
                  </div>
                  <div className="d-flex  align-items-center mt-2">
                    <span style={fontStyle} className="text-black-50">
                      Supply Name:
                    </span>
                    <h6 className="ps-2 m-0">{supplier && supplier.name}</h6>
                  </div>
                  <div style={fontStyle} className="mt-2">
                    <span className="text-black-50 me-2">Purchased Date:</span>
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
                      <span style={fontStyle} className="text-black-50 me-2">
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
                    <span className="text-danger" style={{ fontWeight: "500" }}>
                      {incomingSupplyStatus}
                    </span>
                  </div>
                </div>
              </CCallout>
              <h5 className="m-3">Product Items</h5>
              <CTable
                striped
                hover
                className="shadow-sm "
                responsive="md"
                bordered
                align="middle"
              >
                <CTableCaption>
                  List of Products:{" "}
                  <b>{incomingSupplyItems && incomingSupplyItems.length}</b>
                </CTableCaption>
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
                  {incomingSupplyItems &&
                    incomingSupplyItems.map((item, index) => {
                      return (
                        <CTableRow className="text-center" key={index}>
                          <CTableDataCell>{item.product.name}</CTableDataCell>
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
                          <CTableDataCell>{item.numberReceived}</CTableDataCell>
                        </CTableRow>
                      )
                    })}
                </CTableBody>
              </CTable>
            </div>
          )}
        </div>
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
  getIncomingSupply,
})(IncomingSuppliesDetails)
