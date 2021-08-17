import {
  CContainer,
  CFormFloating,
  CFormControl,
  CFormLabel,
  CRow,
  CCol,
  CNavbar,
  CNavbarBrand,
  CButton,
  CForm,
  CCard,
  CCardGroup,
  CCardBody,
  CInputGroup,
  CFormFeedback,
  CSpinner
} from "@coreui/react"
import { connect } from "react-redux"
import { authenticateUser } from "src/service/apiActions/userAction/userAction.js"

import React, { Component, lazy } from "react"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import { Redirect } from "react-router-dom"

//validations

// import Form from "react-validation"

const RightFormCard = lazy(() =>
  import("../../../../components/public/RightFormCard.js")
)

export class Login extends Component {
  state = {
    type: "password",
    username: "",
    password: "",
    loading: false,
    validation: false
  }

  handleOnChange = (event) => {
    const name = event.target.name
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
  handleSubmit = (event) => {
    const { history } = this.props;
    const { username, password } = this.state;
    // const form = event.currentTarget
    event.preventDefault()
    this.setState({
      validation: true,
      loading: true
    })
    if (username.length !== 0 && password.length !== 0) {
      console.log(username, password)
      this.props.authenticateUser(username, password)
        .then(() => {
          history.push("/home");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    let { type, username, password, validation, loading } = this.state
    const message = this.props.messageResponse.message;
    const isLoggedIn = this.props.userResponse.isLoggedIn;

    if (isLoggedIn) {
      return <Redirect to="/home" />
    }

    return (
      <>
        <CNavbar colorScheme="dark" className="bg-dark" placement="sticky-top">
          <CContainer fluid className="ps-3 pe-3">
            <CNavbarBrand href="/">Navbar</CNavbarBrand>
          </CContainer>
        </CNavbar>
        <div className="min-vh-100 d-flex flex-row align-items-center text-dark ">
          <CContainer >
            <CRow className="justify-content-center ">
              <CCol md="12" lg="8">
                <CCardGroup className="shadow-lg ">
                  <CCard className="p-4 m-0 left-to-right form-container border-0">
                    <CCardBody>
                      <CForm
                        noValidate
                        validated={validation}
                        onSubmit={this.handleSubmit}
                      >
                        <CCol
                          sm="12"
                          md="12"
                          lg="12"
                          className="d-flex justify-content-center p-3"
                        >
                          <h2 className="text-dark">Login</h2>
                        </CCol>
                        <CInputGroup>
                          <CCol xs="12" sm="12" md="12" lg="12">
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
                              <CFormFeedback invalid>Please provide a valid username</CFormFeedback>
                            </CFormFloating>
                          </CCol>
                        </CInputGroup>
                        <CInputGroup>
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
                              <CFormFeedback invalid>Please provide a valid password</CFormFeedback>
                            </CFormFloating>
                          </CCol>
                          <CCol xs="12" sm="12" md="12" lg="12">

                          </CCol>
                        </CInputGroup>

                        <CCol
                          sm="12"
                          md="12"
                          lg="12"
                          className="d-flex flex-column justify-content-center"
                        >
                          <CButton
                            type="submit"
                            color="info"
                            size="lg"
                            style={{ margin: "20px auto", width: "50%" }}
                            className="d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn"
                            disabled={loading}
                          >
                            {loading ? <CSpinner size="sm" /> :
                              <span className="d-flex align-items-center login-icon me-2">
                                <BsIcons.BsFillPersonFill size={20} />
                              </span>
                            }

                            <span className="label-btn ">Login</span>
                          </CButton>

                          <CButton color="link" shape="rounded-0">
                            Forgot Password
                          </CButton>
                        </CCol>
                        {message && (
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                              {message}
                            </div>
                          </div>
                        )}
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <RightFormCard button="register" />
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
    messageResponse: state.messageResponse
  }
}
export default connect(mapStateToProps, { authenticateUser })(Login)
