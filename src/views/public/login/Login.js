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
  CFormFeedback,
  CCard,
  CCardGroup,
  CCardBody,
  CInputGroup,
} from "@coreui/react"

import React, { Component, lazy } from "react"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"

const RightFormCard = lazy(() =>
  import("../../../components/public/RightFormCard.js")
)

export class Login extends Component {
  state = {
    type: "password",
    validated: false,
    username: "",
    password: "",
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
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    this.setState({
      validated: true,
    })
  }
  render() {
    let { type, validated, username, password } = this.state

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
              <CCol md="8">
                <CCardGroup className="shadow-lg ">
                  <CCard className="p-4 m-0 left-to-right form-container border-0">
                    <CCardBody>
                      <CForm
                        noValidate
                        validated={validated}
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
                              <CFormFeedback invalid className="ps-3"> Try again</CFormFeedback>
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
                              <CFormFeedback invalid className="ps-3">Try again</CFormFeedback>
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
                          >
                            <span className="d-flex align-items-center login-icon me-2">
                              <BsIcons.BsFillPersonFill size={20} />
                            </span>
                            <span className="label-btn ">Login</span>
                          </CButton>

                          <CButton color="link" shape="rounded-0">
                            Forgot Password
                          </CButton>
                        </CCol>
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

export default Login
