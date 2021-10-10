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
} from "@coreui/react"
import { connect } from "react-redux"
import * as GrIcons from "react-icons/gr"
import * as FaIcons from "react-icons/fa"

//action
import { changePasswordModal } from "src/service/apiActions/modalAction/modalAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { changePassword } from "src/service/apiActions/accountAction/accountAction"
export class ChangePasswordModal extends Component {
  state = {
    visible: false,
    action: "",
    loading: false,
    type: "password",
    edit: false,
    changePasswordLoading: false,
    changePassword: this.changePasswordState,
  }
  changePasswordState = {
    accountId: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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
  componentDidUpdate(prevProps, prevState) {
    this.manageEmployeeModal(prevProps, prevState)
  }
  manageEmployeeModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, employee, icon } = this.props.modalVisible
      if (action === "ChangePassword") {
        console.log(this.props.modalVisible)

        this.setState({
          visible: visible,
          action: action,
          icon: icon,
          edit: true,
          accountId: employee.account.id,
        })
      } else if (action === "close") {
        this.setState({
          visible: visible,
          edit: false,
          checked: false,
        })
      }
    }
  }
  onResetChangePasswordValue = () => {
    this.setState(() => this.changePasswordState)
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
        this.props.changePasswordModal(false, "close", "", "")
      })
      .catch(() => {
        this.setState({
          changePasswordLoading: false,
        })
      })
  }

  render() {
    let {
      visible,
      type,
      action,
      loading,
      newPassword,
      currentPassword,
      confirmPassword,
      changePasswordLoading,
    } = this.state
    return (
      <>
        <CModal visible={visible}>
          <CModalHeader
            onDismiss={() =>
              this.props.changePasswordModal(false, "close", "", "")
            }
          >
            <CModalTitle>
              <div className="d-flex align-items-center">
                <GrIcons.GrUpdate size={20} />
                <span className="ms-2">Change Password</span>
              </div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm onSubmit={this.handleOnChangePassword} id="changePassowrd">
              <CRow>
                <CCol sm="12" lg="12" className="mt-3">
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
                <CCol sm="12" lg="12" className="mt-3">
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
                <CCol sm="12" lg="12" className="mt-3">
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
                {/* <CCol sm="12" lg="12" className="mt-3">
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
                </CCol> */}
              </CRow>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() =>
                this.props.changePasswordModal(false, "close", "", "")
              }
            >
              Close
            </CButton>
            <CButton
              color="primary"
              type="submit"
              form="changePassowrd"
              disabled={loading}
            >
              {loading && <CSpinner size="sm" className="ms-1" />}
              Save {action === "Edit" ? "Changes" : "Empolyee"}
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  changePasswordModal,
  changePassword,
  clearMessage,
})(ChangePasswordModal)
