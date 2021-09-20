import React, { Component } from "react"
import { connect } from "react-redux"
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CTableCaption,
  CButton,
  CInputGroup,
  CFormControl,
  CForm
} from "@coreui/react"
//action
import { getCustomers } from "src/service/apiActions/employeeAction/EmployeeAction"
import { logout } from "src/service/apiActions/userAction/userAction"
//icons
import * as MdIcons from "react-icons/md"
import * as BiIcons from "react-icons/bi"
import * as FaIcons from "react-icons/fa"

export class Customer extends Component {
  state = {
    message: "",
    customers: [],
    visible: false,
  }
  componentDidMount() {
    this.props.getCustomers().catch(() => {
      let failMessage = this.props.messageResponse
      if (failMessage.status > 400 && failMessage.status <= 403) {
        this.props.logout()
      }
      this.setState({
        message: failMessage.data.message,
      })
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageCustomerResponse(prevProps, prevState)
  }
  manageCustomerResponse = (prevProps, prevState) => {
    if (prevProps.customerResponse !== this.props.customerResponse) {
      let { status, action, customers } = this.props.customerResponse
      if (status === 200 && action === "GETCUSTOMERS") {
        this.setState({
          customers: customers,
        })
      }
    }
  }
  render() {
    let { customers, message, visible } = this.state
    console.log(message)
    return (
      <>
        <div className="d-flex justify-content-end mb-2">
          {/* <CButton
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
          </CButton> */}
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
            List of Brand: <b>{customers.length}</b>
          </CTableCaption>

          <CTableHead color="dark">
            <CTableRow className="text-center">
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
              <CTableHeaderCell scope="col">Username</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email Address</CTableHeaderCell>
              <CTableHeaderCell scope="col">Role</CTableHeaderCell>
              <CTableHeaderCell scope="col">Created Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="text-center" color="light">
            {message && (
              <CTableRow className="text-center">
                <CTableDataCell colSpan="7">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </CTableDataCell>
              </CTableRow>
            )}
            {customers.length > 0 ? (
              <>
                {customers.map((customer, index) => {
                  let { firstName, lastName, phoneNumber, account } = customer
                  return (
                    <CTableRow className="text-center" key={index}>
                      <CTableDataCell>
                        {firstName + " " + lastName}
                      </CTableDataCell>
                      <CTableDataCell>{phoneNumber}</CTableDataCell>
                      <CTableDataCell>{account.username}</CTableDataCell>
                      <CTableDataCell>{account.email}</CTableDataCell>
                      <CTableDataCell>
                        {account.roles[0].roleName}
                      </CTableDataCell>
                      <CTableDataCell>{account.created}</CTableDataCell>
                      <CTableHeaderCell className="text-center" colSpan="1">
                        <CButton
                          color="info"
                          className="me-2"
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            this.props.addEmployeeModal(
                              !visible,
                              "Edit",
                              customer,
                              <MdIcons.MdModeEdit size="20" className="me-2" />,
                            )
                          }
                        >
                          <MdIcons.MdModeEdit size="20" />
                        </CButton>
                        <CButton
                          color="danger"
                          className="ms-2"
                          variant="ghost"
                          onClick={() =>
                            this.props.setAlertModal(
                              !visible,
                              "DELETECUSTOMER",
                              "CUSTOMER",
                              account.id,
                            )
                          }
                          size="sm"
                        >
                          <MdIcons.MdDelete size="20" />
                        </CButton>
                      </CTableHeaderCell>
                    </CTableRow>
                  )
                })}
              </>
            ) : (
              <CTableRow>
                <CTableDataCell colSpan="7">No data</CTableDataCell>
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
    customerResponse: state.accountResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  getCustomers,
  logout,
})(Customer)
