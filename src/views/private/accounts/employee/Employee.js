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
  CInputGroup,
  CFormControl,
  CForm,
  CTooltip,
} from "@coreui/react"
//icons
import * as MdIcons from "react-icons/md"
import * as BiIcons from "react-icons/bi"
import * as FaIcons from "react-icons/fa"
import { connect } from "react-redux"
// action
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import {
  setAlertModal,
  addAccountModal,
} from "src/service/apiActions/modalAction/modalAction"
import { getUsersAccount } from "src/service/apiActions/accountAction/accountAction"
//component modal
import AlertModal from "src/components/modals/alert/AlertModal"
import AccountModal from "src/components/modals/account/AccountModal"
import ReactPaginate from "react-paginate"

export class Employee extends Component {
  state = {
    employee: {
      data: [],
      totalPages: 0,
    },
    visible: false,
    token: "",
    message: "",
    action: "",
    status: "",
    query: "",
    page: 0,
    limit: 10,
    role: "ADMIN",
  }
  componentDidMount() {
    let { type, accessToken } = this.props.userResponse.credentials
    let token = type + accessToken
    this.setState({
      token: token,
    })
    const { query, role, page, limit } = this.state
    this.getUsersAccount(query, role, page, limit)
  }

  getUsersAccount = (query, role, page, limit) => {
    this.props.getUsersAccount(query, role, page, limit)
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageEmployeeResponse(prevProps, prevState)
  }

  manageEmployeeResponse = (prevProps, prevState) => {
    if (prevProps.employeeResponse !== this.props.employeeResponse) {
      let { status, action, data } = this.props.employeeResponse
      if (status === 200 && action === "USERSACCOUNT") {
        this.setState({
          employee: data.accounts,
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
    const { page, limit, role } = this.state
    this.getUsersAccount(event.target.value, role, page, limit)
    this.setState({ query: event.target.value })
  }

  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query, role } = this.state
    this.getUsersAccount(query, role, page, limit)
  }
  render() {
    let { employee, visible, message, query } = this.state

    return (
      <div>
        {this.renderAlerModal()}
        {this.renderEmployeeModal()}
        <div className="d-flex justify-content-between mb-2">
          <CButton
            shape="rounded-pill"
            color="primary"
            variant="ghost"
            className="d-flex justify-content-center align-items-center mb-3"
            onClick={() =>
              this.props.addEmployeeModal(
                !visible,
                "Add",
                "",
                <FaIcons.FaPlus size={20} className="me-2" />,
              )
            }
          >
            <FaIcons.FaPlus size={20} />
            <span style={{ marginLeft: "10px" }}>Add Employee Account</span>
          </CButton>
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
          responsive
          bordered
          align="middle"
        >
          <CTableCaption>
            List of Brand: <b>{employee.totalItems}</b>
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
            {employee.data.length > 0 ? (
              <>
                {employee.data.map((employee, index) => {
                  let { firstName, lastName, phoneNumber, account } = employee
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
                        <CTooltip content="Edit Account">
                          <CButton
                            color="info"
                            className="me-2"
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              this.props.addEmployeeModal(
                                !visible,
                                "Edit",
                                employee,
                                <MdIcons.MdModeEdit
                                  size="20"
                                  className="me-2"
                                />,
                              )
                            }
                          >
                            <MdIcons.MdModeEdit size="20" />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="Delete Account">
                          <CButton
                            color="danger"
                            className="ms-2"
                            variant="ghost"
                            onClick={() =>
                              this.props.setAlertModal(
                                !visible,
                                "DELETEEMPLOYEE",
                                "EMPLOYEE",
                                account.id,
                              )
                            }
                            size="sm"
                          >
                            <MdIcons.MdDelete size="20" />
                          </CButton>
                        </CTooltip>
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
          pageCount={employee.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.modalVisibleResponse,
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
    employeeResponse: state.accountResponse,
  }
}
export default connect(mapStateToProps, {
  setAlertModal,
  addEmployeeModal: addAccountModal,
  getUsersAccount,
  clearMessage,
})(Employee)
