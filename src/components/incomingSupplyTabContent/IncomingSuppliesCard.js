import React, { Component } from "react"
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CRow,
  CCol,
  CContainer,
  CImage,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
} from "@coreui/react"
import { Link } from "react-router-dom"
import Barcode from "react-barcode"
export class IncomingSuppliesCard extends Component {
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
                        Supplier Name:
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                        className="text-bold ms-2"
                      >
                        {supplier.name}
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

                      {/*   {message && (
                                    <CTableRow className="text-center">
                                      <CTableDataCell colSpan="4">
                                        <div
                                          className="alert alert-danger"
                                          role="alert"
                                        >
                                          {message}
                                        </div>
                                      </CTableDataCell>
                                    </CTableRow>
                                  )} */}
                    </CTableBody>
                  </CTable>
                </CCardBody>
                <CCardFooter className="p-4">
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex flex-column">
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

                      {/* {permission === Roles.SUPER_ADMIN ||
                                                permission === Roles.ADMIN ?
                                                <CButton>Confirm Order</CButton> :
                                                <></>
                                            } */}
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

export default IncomingSuppliesCard
