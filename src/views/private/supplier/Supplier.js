import React, { Component } from "react"
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
import { connect } from "react-redux"
//icons
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
//action
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getSuppliers } from "src/service/apiActions/supplierAction/supplierAction"
import { setAlertModal } from "src/service/apiActions/modalAction/modalAction"
import { setSupplierModal } from "src/service/apiActions/modalAction/modalAction"
//modal
import SupplierModal from "src/components/modals/supplier/SupplierModal"
import AlertModal from "src/components/modals/alert/AlertModal"

export class Supplier extends Component {
  state = {
    message: "",
    suppliers: [],
    visible: false,
  }
  componentDidMount() {
    this.getSuppliers()
  }
  getSuppliers = () => {
    this.props.getSuppliers().catch(() => {
      let { status, data } = this.props.messageResponse
      if (status > 400 && status <= 403) {
        this.props.logout()
        this.props.clearMessage()
      }
      this.setState({
        message: data.message,
      })
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageSupplierResponse(prevProps, prevState)
    //     this.manageSupplierModal(prevProps, prevState)
  }
  manageSupplierResponse = (prevProps, prevState) => {
    if (prevProps.supplierResponse !== this.props.supplierResponse) {
      let { status, action, data } = this.props.supplierResponse
      if (action === "GET_SUPPLIERS" && status === 200) {
        this.setState({
          suppliers: data.suppliers,
        })
      }
    }
  }
  render() {
    let { suppliers, message, visible } = this.state
    return (
      <>
        <SupplierModal />
        <AlertModal />
        <div className="d-flex justify-content-between mb-2">
          <CButton
            shape="rounded-pill"
            color="primary"
            variant="ghost"
            className="d-flex justify-content-center align-items-center mb-3"
            onClick={() =>
              this.props.setSupplierModal(
                !visible,
                "Add",
                "",
                <FaIcons.FaPlus size={20} className="me-2" />,
              )
            }
          >
            <FaIcons.FaPlus size={20} />
            <span style={{ marginLeft: "10px" }}>Create Supplier</span>
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
            List of Brand: <b>{suppliers.length}</b>
          </CTableCaption>
          <CTableHead color="dark">
            <CTableRow className="text-center">
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Created Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="text-center" color="light">
            {suppliers.length > 0 ? (
              suppliers.map((supplier, index) => {
                return (
                  <CTableRow className="text-center" key={index}>
                    <CTableDataCell>{supplier.name}</CTableDataCell>
                    <CTableDataCell>{supplier.createdAt}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        className="me-2"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          this.props.setSupplierModal(
                            !visible,
                            "Edit",
                            supplier,
                            <MdIcons.MdModeEdit size="20" className="me-2" />,
                          )
                        }
                      >
                        <MdIcons.MdModeEdit size="20" />
                      </CButton>
                      {/* {permission === Roles.SUPER_ADMIN ? ( */}
                      <CButton
                        color="danger"
                        className="ms-2"
                        variant="ghost"
                        onClick={() =>
                          this.props.setAlertModal(
                            !visible,
                            "DELETESUPPLIER",
                            "SUPPLIER",
                            supplier.id,
                          )
                        }
                        size="sm"
                      >
                        <MdIcons.MdDelete size="20" />
                      </CButton>
                    </CTableDataCell>
                    {/* <CTableDataCell className="text-center w-25" colSpan="1">
                      <CButton
                        color="info"
                        className="me-2"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          this.props.addBrandModal(
                            !visible,
                            "Edit",
                            brand,
                            <MdIcons.MdModeEdit size="20" className="me-2" />,
                          )
                        }
                      >
                        <MdIcons.MdModeEdit size="20" />
                      </CButton>
                      {permission === Roles.SUPER_ADMIN ? (
                        <CButton
                          color="danger"
                          className="ms-2"
                          variant="ghost"
                          onClick={() =>
                            this.props.setAlertModal(
                              !visible,
                              "DELETEBRAND",
                              "BRAND",
                              brand.id,
                            )
                          }
                          size="sm"
                        >
                          <MdIcons.MdDelete size="20" />
                        </CButton>
                      ) : null}
                    </CTableDataCell> */}
                  </CTableRow>
                )
              })
            ) : (
              <CTableRow>
                <CTableDataCell colSpan="4">No data</CTableDataCell>
              </CTableRow>
            )}
            {message && (
              <CTableRow className="text-center">
                <CTableDataCell colSpan="4">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </CTableDataCell>
              </CTableRow>
            )}
          </CTableBody>
        </CTable>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    supplierResponse: state.supplierResponse,
    messageResponse: state.messageResponse,
    modalVisible: state.modalVisibleResponse,
  }
}
export default connect(mapStateToProps, {
  logout,
  clearMessage,
  getSuppliers,
  setSupplierModal,
  setAlertModal,
})(Supplier)
