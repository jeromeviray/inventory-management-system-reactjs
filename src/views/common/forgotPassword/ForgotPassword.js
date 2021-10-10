import React, { Component } from "react"
import {
  CContainer,
  CFormFloating,
  CFormControl,
  CFormLabel,
  CRow,
  CCol,
  CHeader,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CButton,
  CForm,
  CCard,
  CCardGroup,
  CCardBody,
  CInputGroup,
  CFormFeedback,
  CSpinner,
} from "@coreui/react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Roles from "src/router/config"
//icons
import * as FaIcons from "react-icons/fa"
import * as FiIcons from "react-icons/fi"
import * as BsIcons from "react-icons/bs"
import { Link } from "react-router-dom"
import { DotLoader } from "react-spinners"
//action
import {
  forgotPassword,
  validateToken,
  resetPassword,
} from "src/service/apiActions/accountAction/accountAction"
const style = {
  marginRight: "10px",
}
const spinner = (
  <div className="d-flex justify-content-center align-items-center">
    <DotLoader color="#36D7B7" size={100} />
  </div>
)
export class ForgotPassword extends Component {
  state = {
    type: "password",
    loading: false,
    validation: false,
    message: "",
    permission: "",
    isLoggedIn: false,
    email: "",
    token: "",
    sentEmail: false,
    validToken: false,
    alertColor: "",
    responseToken: [],
    password: "",
    confirmPassword: "",
    successfull: false,
  }
  componentDidMount() {
    this.redirectSuccessAuthentication()
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
  redirectSuccessAuthentication() {
    const isLoggedIn = this.props.userResponse.isLoggedIn
    if (isLoggedIn) {
      let roleName = this.props.userResponse.credentials.roles.roleName
      let permission = roleName
        ? roleName
        : this.props.userResponse.credentials.roles

      this.setState({
        isLoggedIn: isLoggedIn,
        permission: permission,
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageAccountResponse(prevProps, prevState)
  }
  manageAccountResponse = (prevProps, prevState) => {
    if (prevProps.accountResponse !== this.props.accountResponse) {
      const { action, status, data } = this.props.accountResponse
      if (action === "VALIDATE_TOKEN" && status === 200) {
        this.setState({
          responseToken: data.tokenResponse,
        })
      }
    }
  }
  handleForgotPassword = (event) => {
    event.preventDefault()
    this.setState({
      validation: true,
      loading: true,
    })
    const { email } = this.state
    this.props
      .forgotPassword(email)
      .then(() => {
        const { status, data } = this.props.messageResponse
        this.handleAlertColor(status)

        this.setState({
          loading: false,
          validated: false,
          sentEmail: true,
          message: data.message,
        })
      })
      .catch(() => {
        const { status, data } = this.props.messageResponse
        this.handleAlertColor(status)
        this.setState({
          loading: false,
          validated: false,
          message: data.message,
        })
      })
  }
  handleValidateToken = (event) => {
    event.preventDefault()
    this.setState({
      validation: true,
      loading: true,
    })
    const { token } = this.state
    this.props
      .validateToken(token)
      .then(() => {
        const { status, data } = this.props.messageResponse
        this.handleAlertColor(status)

        this.setState({
          validated: false,
          validToken: true,
          message: data.message,
        })

        setInterval(() => {
          this.setState({ loading: false })
        }, 1000)
      })
      .catch(() => {
        const { status, data } = this.props.messageResponse
        this.handleAlertColor(status)
        this.setState({
          loading: false,
          validated: false,
          message: data.message,
        })
      })
  }
  handleResetPassword = (event) => {
    event.preventDefault()
    this.setState({
      validation: true,
      loading: true,
    })
    const { responseToken, password, confirmPassword } = this.state
    console.log(responseToken)
    this.props
      .resetPassword(
        responseToken.accountId,
        responseToken.token,
        password,
        confirmPassword,
      )
      .then(() => {
        const { status, data } = this.props.messageResponse
        this.handleAlertColor(status)

        this.setState({
          validated: false,
          message: data.message,
          password: "",
          confirmPassword: "",
          successfull: true,
        })

        setInterval(() => {
          this.setState({ loading: false })
        }, 1000)
      })
      .catch(() => {
        const { status, data } = this.props.messageResponse
        this.handleAlertColor(status)
        this.setState({
          validated: false,
          message: data.message,
        })
        setInterval(() => {
          this.setState({ loading: false })
        }, 1000)
      })
  }
  handleAlertColor = (status) => {
    if (status === 200) {
      console.log(status)
      this.setState({
        alertColor: "alert alert-success",
      })
    } else if (status >= 400 && status <= 404) {
      this.setState({
        alertColor: "alert alert-danger",
      })
    } else if (status > 405 && status <= 500) {
      this.setState({
        alertColor: "alert alert-warning",
      })
    } else {
      this.setState({
        alertColor: "alert alert-success",
      })
    }
  }
  render() {
    let {
      type,
      validation,
      loading,
      message,
      permission,
      isLoggedIn,
      sentEmail,
      validToken,
      email,
      token,
      alertColor,
      password,
      confirmPassword,
      successfull,
    } = this.state

    if (isLoggedIn) {
      if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
        return <Redirect to="/app" />
      } else {
        return <Redirect to="/home" />
      }
    }
    return (
      <>
        <CHeader position="sticky">
          <CContainer>
            <Link className="nav-link" to="/home" style={{ cursor: "pointer" }}>
              <h2 className="nav-item">Logo</h2>
            </Link>

            <CHeaderNav className="ms-3 ">
              <CNavItem>
                <CNavLink href="/login">
                  <FiIcons.FiLogIn size={20} style={style} />
                  Login
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/register">
                  <FaIcons.FaUserPlus size={20} style={style} />
                  Register
                </CNavLink>
              </CNavItem>
            </CHeaderNav>
          </CContainer>
        </CHeader>
        <div className="min-vh-100 d-flex flex-row align-items-center text-dark ">
          <CContainer className="w-50 ">
            <CRow className="justify-content-center ">
              <CCol md="12" lg="8">
                <CCardGroup className="shadow-lg ">
                  <CCard className="p-4 m-0 left-to-right form-container border-0">
                    <CCardBody>
                      {successfull ? (
                        <></>
                      ) : validToken ? (
                        loading ? (
                          spinner
                        ) : (
                          <CForm
                            noValidate
                            validated={validation}
                            onSubmit={this.handleResetPassword}
                            id="reset-password-form"
                          >
                            <CCol
                              sm="12"
                              md="12"
                              lg="12"
                              className="d-flex justify-content-center p-3"
                            >
                              <h2 className="text-dark">Forgot Password</h2>
                            </CCol>
                            <CInputGroup className="mb-3">
                              <CCol xs="12" sm="12" md="12" lg="12">
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
                                    <span className="ps-2">New Password</span>
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
                            </CInputGroup>
                            <CInputGroup>
                              <CCol xs="12" sm="12" md="12" lg="12">
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
                                    className="rounded-pill ps-4 pe-4"
                                  />
                                  <CFormLabel
                                    htmlFor="floatingConfirmPassword "
                                    className="ps-4 pe-4"
                                  >
                                    <FaIcons.FaLock size={18} />
                                    <span className="ps-2">
                                      Confirm Password
                                    </span>
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

                            <CCol
                              sm="12"
                              md="12"
                              lg="12"
                              className="d-flex flex-column justify-content-center"
                            >
                              <CButton
                                form="reset-password-form"
                                type="submit"
                                color="info"
                                size="lg"
                                style={{ margin: "20px auto" }}
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

                                <span className="label-btn ">
                                  Change Password
                                </span>
                              </CButton>
                            </CCol>
                          </CForm>
                        )
                      ) : sentEmail ? (
                        loading ? (
                          spinner
                        ) : (
                          <CForm
                            noValidate
                            validated={validation}
                            onSubmit={this.handleValidateToken}
                            id="validate-token-form"
                          >
                            <CCol
                              sm="12"
                              md="12"
                              lg="12"
                              className="d-flex justify-content-center p-3"
                            >
                              <h2 className="text-dark">Forgot Password</h2>
                            </CCol>
                            <CInputGroup>
                              <CCol xs="12" sm="12" md="12" lg="12">
                                <CFormFloating className="mb-3 text-dark ">
                                  <CFormControl
                                    name="token"
                                    type="text"
                                    autoCorrect="false"
                                    id="floatingInputToken"
                                    placeholder="email"
                                    onChange={this.handleOnChange}
                                    value={token}
                                    required
                                    className="rounded-pill  ps-4 pe-4"
                                  />
                                  <CFormLabel
                                    htmlFor="floatingInputToken "
                                    className="ps-4 pe-4"
                                  >
                                    <FaIcons.FaKey size={18} />
                                    <span className="ps-2">
                                      Enter the Token
                                    </span>
                                  </CFormLabel>
                                  <CFormFeedback invalid>
                                    Please provide a valid Token
                                  </CFormFeedback>
                                </CFormFloating>
                              </CCol>
                            </CInputGroup>
                            <CCol
                              sm="12"
                              md="12"
                              lg="12"
                              className="d-flex flex-column justify-content-center"
                            >
                              <CButton
                                form="validate-token-form"
                                type="submit"
                                color="info"
                                size="lg"
                                style={{ margin: "20px auto" }}
                                className="d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn"
                                disabled={loading}
                              >
                                {loading ? <CSpinner size="sm" /> : <></>}

                                <span className="label-btn ">Continue</span>
                              </CButton>
                            </CCol>
                          </CForm>
                        )
                      ) : loading ? (
                        spinner
                      ) : (
                        <CForm
                          noValidate
                          validated={validation}
                          onSubmit={this.handleForgotPassword}
                          id="forgot-password-form"
                        >
                          <CCol
                            sm="12"
                            md="12"
                            lg="12"
                            className="d-flex justify-content-center p-3"
                          >
                            <h2 className="text-dark">Forgot Password</h2>
                          </CCol>
                          <CInputGroup>
                            <CCol xs="12" sm="12" md="12" lg="12">
                              <CFormFloating className="mb-3 text-dark ">
                                <CFormControl
                                  name="email"
                                  type="text"
                                  autoCorrect="false"
                                  id="floatingInputEmail"
                                  placeholder="email"
                                  onChange={this.handleOnChange}
                                  value={email}
                                  required
                                  className="rounded-pill  ps-4 pe-4"
                                />
                                <CFormLabel
                                  htmlFor="floatingInputEmail "
                                  className="ps-4 pe-4"
                                >
                                  <FaIcons.FaEnvelope size={18} />
                                  <span className="ps-2">Email</span>
                                </CFormLabel>
                                <CFormFeedback invalid>
                                  Please provide a valid Email
                                </CFormFeedback>
                              </CFormFloating>
                            </CCol>
                          </CInputGroup>
                          <CCol
                            sm="12"
                            md="12"
                            lg="12"
                            className="d-flex flex-column justify-content-center"
                          >
                            <CButton
                              form="forgot-password-form"
                              type="submit"
                              color="info"
                              size="lg"
                              style={{ margin: "20px auto" }}
                              className="d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn"
                              disabled={loading}
                            >
                              {loading ? (
                                <CSpinner size="sm" />
                              ) : (
                                <span className="d-flex align-items-center login-icon me-2">
                                  <BsIcons.BsSearch size={20} />
                                </span>
                              )}

                              <span className="label-btn ">Reset Password</span>
                            </CButton>
                          </CCol>
                        </CForm>
                      )}
                      {message && (
                        <div className="form-group">
                          <div className={alertColor} role="alert">
                            {message}
                          </div>
                          {sentEmail ? (
                            <>
                              <div className="alert alert-info" role="alert">
                                <strong>Note: </strong>
                                <span>
                                  If you not Found the Email Message in your
                                  inbox, Try to look in your Spam. Thankyou!
                                </span>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      )}
                      <Link to="/login">Back Login</Link>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
    accountResponse: state.accountResponse,
  }
}
export default connect(mapStateToProps, {
  forgotPassword,
  validateToken,
  resetPassword,
})(ForgotPassword)
