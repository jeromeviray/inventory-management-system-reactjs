import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
  CSpinner,
  CForm,
  CFormFloating,
  CFormControl,
  CFormLabel,
  CCol,
  CRow,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
  CFormSelect,
  CFormCheck,
} from "@coreui/react"
//action
import { addAccountModal } from "src/service/apiActions/modalAction/modalAction"
import {
  saveEmployee,
  changePassword,
} from "src/service/apiActions/accountAction/accountAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
//icons
import * as FaIcons from "react-icons/fa"
import { connect } from "react-redux"

export class AccountModal extends Component {
  state = {
    visible: false,
    icon: "",
    action: "",
    employee: this.employeeState,
    loading: false,
    type: "password",
    toast: "",
    edit: false,
    checked: false,
    changePassword: this.changePasswordState,
    changePasswordLoading: false,
  }
  employeeState = {
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    username: "",
    phoneNumber: "",
    password: "",
  }
  changePasswordState = {
    accountId: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  }
  onResetChangePasswordValue = () => {
    this.setState(() => this.changePasswordState)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageEmployeeModal(prevProps, prevState)
  }
  manageEmployeeModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, employee, icon } = this.props.modalVisible
      if (action === "Add") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
          edit: false,
        })
      } else if (action === "Edit") {
        let { firstName, lastName, phoneNumber, account } = employee
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
          edit: true,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          username: account.username,
          role: account.roles[0].roleName,
          email: account.email,
          accountId: account.id,
        })
      } else {
        this.setState({
          visible: visible,
          edit: false,
          checked: false,
        })
        this.onResetChangePasswordValue()
      }
    }
  }
  handleOnChange = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }
  handleShowPassword = (event) => {
    console.log(event)
    const { type } = this.state
    this.setState({
      type: type === "password" ? "text" : "password",
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    let { firstName, lastName, email, phoneNumber, username, password, role } =
      this.state
    let { type, accessToken } = this.props.userResponse.credentials
    let token = type + accessToken
    this.setState({
      loading: true,
    })
    this.props
      .saveEmployee(
        firstName,
        lastName,
        email,
        phoneNumber,
        username,
        password,
        token,
        role,
      )
      .then(() => {
        let { status } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            loading: false,
          })
        }
        setInterval(() => {
          this.props.clearMessage()
          window.location.reload()
        }, 1000)
      })
      .catch(() => {
        this.setState({
          loading: false,
        })
      })
  }

  handleOnChecked = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }
  handleOnChangePassword = (event) => {
    let { currentPassword, newPassword, confirmPassword, accountId } =
      this.state
    this.setState({
      changePasswordLoading: true,
    })
    event.preventDefault()
    this.props
      .changePassword(accountId, currentPassword, newPassword, confirmPassword)
      .then(() => {
        let { status } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            loading: false,
          })
        }
        this.onResetChangePasswordValue()
        this.setState({
          changePasswordLoading: false,
        })
      })
      .catch(() => {
        let { status } = this.props.messageResponse
        this.setState({
          changePasswordLoading: false,
        })
      })
  }
  render() {
    let {
      visible,
      firstName,
      lastName,
      type,
      email,
      username,
      password,
      phoneNumber,
      icon,
      action,
      loading,
      toast,
      edit,
      role,
      checked,
      newPassword,
      currentPassword,
      confirmPassword,
      changePasswordLoading,
    } = this.state
    return (
      <div>
        <CToaster push={toast} placement="top-end" />

        <CModal visible={visible} size="lg">
          <CModalHeader
            onDismiss={() =>
              this.props.addEmployeeModal(false, "close", "", "")
            }
          >
            <CModalTitle>
              <div className="d-flex align-items-center">
                {icon}
                {action + " Employee Account"}
              </div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm onSubmit={this.handleOnSubmit} id="employee">
              <div className="mb-3">
                <CRow>
                  <CCol sm="12" lg="6">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="firstName"
                        value={firstName}
                        onChange={this.handleOnChange}
                        type="text"
                        id="floatingFirstNameInput"
                        placeholder="Enter First Name"
                      />
                      <CFormLabel htmlFor="floatingFirstNameInput">
                        First name
                      </CFormLabel>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12" lg="6">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="lastName"
                        value={lastName}
                        onChange={this.handleOnChange}
                        type="text"
                        id="floatingLastNameInput"
                        placeholder="Enter Last Name"
                      />
                      <CFormLabel htmlFor="floatingLastNameInput">
                        Last name
                      </CFormLabel>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12" lg="6">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleOnChange}
                        type="number"
                        id="floatingNumberInput"
                        placeholder="Enter First Name"
                      />
                      <CFormLabel htmlFor="floatingNumberInput">
                        Phone Number
                      </CFormLabel>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12" md="6" lg>
                    <CFormFloating className="mb-3">
                      <CFormSelect
                        value={role}
                        onChange={this.handleOnChange}
                        name="role"
                        id="floatingSelectRole"
                        aria-label="Role Select"
                        disabled={edit}
                      >
                        <option>Choose Role</option>
                        <option value="SUPER_ADMIN">Super Admin</option>
                        <option value="ADMIN">Admin</option>
                      </CFormSelect>
                      <CFormLabel htmlFor="floatingSelectRole">Role</CFormLabel>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12" lg="6">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="username"
                        value={username}
                        onChange={this.handleOnChange}
                        type="text"
                        id="floatingUsernameInput"
                        placeholder="Enter Username"
                        disabled={edit}
                      />
                      <CFormLabel htmlFor="floatingUsernameInput">
                        Username
                      </CFormLabel>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12" lg="6">
                    <CFormFloating className="text-dark position-relative">
                      <CFormControl
                        name="password"
                        type={type}
                        id="floatingPassword"
                        autoCorrect="false"
                        placeholder="Password"
                        onChange={this.handleOnChange}
                        value={password}
                        required
                        disabled={edit}
                      />
                      <CFormLabel htmlFor="exampleFormControlTextarea1 ">
                        <span>Password</span>
                      </CFormLabel>
                      <span
                        onClick={this.handleShowPassword}
                        className="position-absolute top-50 end-0 translate-middle-y ps-4 pe-4"
                      >
                        {type === "password" ? (
                          <FaIcons.FaEyeSlash size={20} />
                        ) : (
                          <FaIcons.FaEye size={20} />
                        )}
                      </span>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12" lg="12">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="email"
                        value={email}
                        onChange={this.handleOnChange}
                        type="email"
                        id="floatingemailInput"
                        placeholder="Enter email"
                        disabled={edit}
                      />
                      <CFormLabel htmlFor="floatingemailInput">
                        Email
                      </CFormLabel>
                    </CFormFloating>
                  </CCol>
                </CRow>
              </div>
            </CForm>
            <CCol sm="12" lg="12" className={edit ? "d-block" : "d-none"}>
              <CFormCheck
                id="changePasswordCheckBox"
                label="Change Password"
                checked={checked}
                name="checked"
                onChange={this.handleOnChecked}
              />
            </CCol>
            <CForm
              onSubmit={this.handleOnChangePassword}
              id="changePassowrd"
              className={checked ? "d-block" : "d-none"}
            >
              <CRow className={checked ? "d-block" : "d-none"}>
                <CCol sm="12" lg="6" className="mt-3">
                  <CFormFloating className="text-dark position-relative">
                    <CFormControl
                      name="currentPassword"
                      type={type}
                      id="floatingCurrentPassword"
                      autoCorrect="false"
                      placeholder="Current Password"
                      onChange={this.handleOnChange}
                      value={currentPassword}
                      required
                    />
                    <CFormLabel htmlFor="floatingCurrentPassword ">
                      <span>Current Password</span>
                    </CFormLabel>
                    <span
                      onClick={this.handleShowPassword}
                      className="position-absolute top-50 end-0 translate-middle-y ps-4 pe-4"
                    >
                      {type === "password" ? (
                        <FaIcons.FaEyeSlash size={20} />
                      ) : (
                        <FaIcons.FaEye size={20} />
                      )}
                    </span>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" lg="6" className="mt-3">
                  <CFormFloating className="text-dark position-relative">
                    <CFormControl
                      name="newPassword"
                      type={type}
                      id="floatingNewPassword"
                      autoCorrect="false"
                      placeholder="New Password"
                      onChange={this.handleOnChange}
                      value={newPassword}
                      required
                    />
                    <CFormLabel htmlFor="floatingNewPassword ">
                      <span>New Password</span>
                    </CFormLabel>
                    <span
                      onClick={this.handleShowPassword}
                      className="position-absolute top-50 end-0 translate-middle-y ps-4 pe-4"
                    >
                      {type === "password" ? (
                        <FaIcons.FaEyeSlash size={20} />
                      ) : (
                        <FaIcons.FaEye size={20} />
                      )}
                    </span>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" lg="6" className="mt-3">
                  <CFormFloating className="text-dark position-relative">
                    <CFormControl
                      name="confirmPassword"
                      type={type}
                      id="floatingConfirmPassword"
                      autoCorrect="false"
                      placeholder="Confirm Password"
                      onChange={this.handleOnChange}
                      value={confirmPassword}
                      required
                    />
                    <CFormLabel htmlFor="floatingConfirmPassword ">
                      <span>Confirm Password</span>
                    </CFormLabel>
                    <span
                      onClick={this.handleShowPassword}
                      className="position-absolute top-50 end-0 translate-middle-y ps-4 pe-4"
                    >
                      {type === "password" ? (
                        <FaIcons.FaEyeSlash size={20} />
                      ) : (
                        <FaIcons.FaEye size={20} />
                      )}
                    </span>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" lg="12" className="mt-3">
                  <CButton
                    type="submit"
                    form="changePassowrd"
                    disabled={changePasswordLoading}
                  >
                    {changePasswordLoading && (
                      <CSpinner size="sm" className="ms-1" />
                    )}
                    Change Password
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() =>
                this.props.addEmployeeModal(false, "close", "", "")
              }
            >
              Close
            </CButton>
            <CButton
              color="primary"
              type="submit"
              form="employee"
              disabled={loading}
            >
              {loading && <CSpinner size="sm" className="ms-1" />}
              Save {action === "Edit" ? "Changes" : "Empolyee"}
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
    userResponse: state.userResponse,
  }
}
export default connect(mapStateToProps, {
  addEmployeeModal: addAccountModal,
  saveEmployee,
  logout,
  clearMessage,
  changePassword,
})(AccountModal)
