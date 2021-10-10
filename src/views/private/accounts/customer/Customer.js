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
  CForm,
} from "@coreui/react"
//action
import { getCustomers } from "src/service/apiActions/accountAction/accountAction"
import { setAlertModal } from "src/service/apiActions/modalAction/modalAction"
import { addAccountModal } from "src/service/apiActions/modalAction/modalAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
//icons
import * as MdIcons from "react-icons/md"
import * as BiIcons from "react-icons/bi"
import * as FaIcons from "react-icons/fa"

//modal
import AlertModal from "src/components/modals/alert/AlertModal"
import AccountModal from "src/components/modals/account/AccountModal"
import ReactPaginate from "react-paginate"

export class Customer extends Component {
  state = {
    message: "",
    customers: {
      data: [],
      totalPages: 0,
    },
    visible: false,
    query: "",
    page: 0,
    limit: 10,
  }
  componentDidMount() {
    const { query, page, limit } = this.state
    this.getCustomers(query, page, limit)
  }
  getCustomers = (query, page, limit) => {
    this.props.getCustomers(query, page, limit)
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
  renderAlerModal() {
    return <AlertModal />
  }
  renderEmployeeModal() {
    return <AccountModal />
  }
  handleSearch = (event) => {
    const { page, limit } = this.state
    this.getCustomers(event.target.value, page, limit)
    this.setState({ query: event.target.value })
  }

  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query } = this.state
    this.getCustomers(query, page, limit)
  }
  render() {
    let { customers, message, visible, query } = this.state
    return (
      <>
        {this.renderAlerModal()}
        {this.renderEmployeeModal()}
        <div className="d-flex justify-content-end mb-2">
          <CForm className="w-50">
            <CInputGroup>
              <CFormControl
                type="text"
                id="floatingInput"
                placeholder="Search"
                className="p-2"
                value={query}
                onChange={this.handleSearch}
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
            List of Brand: <b>{customers.totalItems}</b>
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
            {customers.data.length > 0 ? (
              <>
                {customers.data.map((customer, index) => {
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
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={customers.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
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
  setAlertModal,
  addEmployeeModal: addAccountModal,
  clearMessage,
})(Customer)
