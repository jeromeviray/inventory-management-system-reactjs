import React, { Component } from 'react'
import {
     CTable,
     CTableHead,
     CTableRow,
     CTableHeaderCell,
     CTableDataCell,
     CTableBody,
     CTableCaption,
     CButton,
     CForm,
     CInputGroup,
     CFormControl,
} from "@coreui/react"
import * as FaIcons from "react-icons/fa"

export class IncomingPurchases extends Component {
     state = {
          incomingPurchases: []
     }
     render() {
          let { incomingPurchases } = this.state;

          return (
               <>
                    <div className="d-flex justify-content-between mb-2">
                         <CButton
                              shape="rounded-pill"
                              color="primary"
                              variant="ghost"
                              className="d-flex justify-content-center align-items-center"
                         // onClick={() =>
                         //      this.props.setProductModal(
                         //           !visible,
                         //           "Add",
                         //           <FaIcons.FaPlus size={20} />,
                         //      )
                         // }
                         >
                              <FaIcons.FaPlus size={20} />
                              <span style={{ marginLeft: "10px" }}>Add Product</span>
                         </CButton>
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
                    <CTable
                         striped
                         hover
                         className="shadow-sm "
                         responsive="md"
                         bordered
                         align="middle"
                    >
                         <CTableCaption>
                              List of Brand: <b>{incomingPurchases.length}</b>
                         </CTableCaption>

                         <CTableHead color="dark">
                              <CTableRow className="text-center">
                                   <CTableHeaderCell scope="col">Date of Purchase</CTableHeaderCell>
                                   <CTableHeaderCell scope="col">Product</CTableHeaderCell>
                                   <CTableHeaderCell scope="col">Number Received</CTableHeaderCell>
                                   <CTableHeaderCell scope="col">Supplier</CTableHeaderCell>
                              </CTableRow>
                         </CTableHead>
                         <CTableBody className="text-center" color="light">
                              {/* {message && (
                                   <CTableRow className="text-center">
                                        <CTableDataCell colSpan="8">
                                             <div className="alert alert-danger" role="alert">
                                                  {message}
                                             </div>
                                        </CTableDataCell>
                                   </CTableRow>
                              )} */}
                         </CTableBody>
                    </CTable>
               </>
          )
     }
}

export default IncomingPurchases
