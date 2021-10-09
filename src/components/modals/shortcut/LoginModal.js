import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalBody,
  CButton,
  CForm,
  CFormFloating,
  CFormLabel,
  CFormControl,
  CCol,
  CRow,
  CInputGroup,
  CFormFeedback,
  CSpinner,
  CContainer,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from "@coreui/react"

import { connect } from "react-redux"
//action
import { setLoginModal } from "src/service/apiActions/modalAction/modalAction"
import { authenticateUser } from "src/service/apiActions/userAction/userAction"
//icons
import * as FaIcons from "react-icons/fa"
import * as FiIcons from "react-icons/fi"
import Roles from "src/router/config"
import { history } from "src/_helper/history"

export class LoginModal extends Component {
  state = {
    visible: false,
    username: "",
    password: "",
    type: "password",
    loading: false,
    toast: "",
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageModalVisible(prevProps, prevState)
  }
  manageModalVisible = (prevProps, prevState) => {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let { action, visible } = this.props.modalVisibleResponse
      if (action === "LOGIN") {
        this.setState({
          visible: visible,
        })
      } else if (action === "loginclose") {
        this.setState({
          visible: visible,
        })
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
    const { type } = this.state
    event.preventDefault()
    this.setState({
      type: type === "password" ? "text" : "password",
    })
  }
  handleOnSubmit = (event) => {
    const { username, password } = this.state
    event.preventDefault()
    this.setState({
      loading: true,
    })
    if (username.length !== 0 && password.length !== 0) {
      this.props
        .authenticateUser(username, password)
        .then(() => {
          let { roles } = this.props.userResponse.credentials

          if (
            roles.roleName === Roles.SUPER_ADMIN ||
            roles.roleName === Roles.ADMIN
          ) {
            this.props.setLoginModal(false, "loginclose")
            setInterval(() => {
              history.push("/app/dashboard")
              window.location.reload()
            }, 1000)
          } else {
            this.props.setLoginModal(false, "loginclose")
          }
        })
        .catch(() => {
          this.setState({
            loading: false,
          })
        })
    } else {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    let { visible, username, password, type, loading, toast } = this.state
    return (
      <>
        <CToaster push={toast} placement="top-end" />
        <CModal alignment="center" visible={visible}>
          <CModalHeader
            onDismiss={() => this.props.setLoginModal(false, "loginclose")}
          >
            <CModalTitle>Login</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CContainer>
              <CForm id="loginForm" onSubmit={this.handleOnSubmit}>
                <CRow>
                  <CInputGroup className="d-flex justify-content-center">
                    <CCol>
                      <CFormFloating className="mb-3 text-dark ">
                        <CFormControl
                          name="username"
                          type="text"
                          autoCorrect="false"
                          id="floatingInput"
                          placeholder="username"
                          onChange={this.handleOnChange}
                          value={username}
                          required
                          className="rounded-pill  ps-4 pe-4"
                        />
                        <CFormLabel
                          htmlFor="floatingInput "
                          className="ps-4 pe-4"
                        >
                          <FaIcons.FaUserCircle size={18} />
                          <span className="ps-2">Username</span>
                        </CFormLabel>
                        <CFormFeedback invalid>
                          Please provide a valid username
                        </CFormFeedback>
                      </CFormFloating>
                    </CCol>
                  </CInputGroup>
                  <CInputGroup className="d-flex justify-content-center">
                    <CCol>
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
                          className="rounded-pill ps-4 pe-4"
                        />
                        <CFormLabel
                          htmlFor="exampleFormControlTextarea1 "
                          className="ps-4 pe-4"
                        >
                          <FaIcons.FaLock size={18} />
                          <span className="ps-2">Password</span>
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
                        <CFormFeedback invalid>
                          Please provide a valid password
                        </CFormFeedback>
                      </CFormFloating>
                    </CCol>
                    <CCol xs="12" sm="12" md="12" lg="12"></CCol>
                  </CInputGroup>
                </CRow>
              </CForm>
            </CContainer>
          </CModalBody>
          <CModalFooter>
            <CButton
              variant="ghost"
              color="dark"
              onClick={() => this.props.setLoginModal(false, "loginclose")}
            >
              Close
            </CButton>
            <CButton
              form="loginForm"
              type="submit"
              color="info"
              className="d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn"
              disabled={loading}
            >
              {loading ? (
                <CSpinner size="sm" />
              ) : (
                <span className="d-flex align-items-center login-icon me-2">
                  <FiIcons.FiLogIn size={20} />
                </span>
              )}

              <span className="label-btn ">Login</span>
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisibleResponse: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
    userResponse: state.userResponse,
  }
}
export default connect(mapStateToProps, {
  setLoginModal,
  authenticateUser,
})(LoginModal)
