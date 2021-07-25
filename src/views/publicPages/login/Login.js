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
} from "@coreui/react"
import React, { Component } from "react"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"

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
            <CNavbarBrand href="#">Navbar</CNavbarBrand>
          </CContainer>
        </CNavbar>
        <div
          className="d-flex justify-content-between  text-dark"
          style={{ height: "95vh" }}
        >
          <CContainer
            fluid
            className="d-none 
            d-lg-flex
            flex-column
            justify-content-center
            align-items-center
            "
          >
            <h1 className="mb-5 mt-5">Welcome Back!</h1>
            <h5 style={{ textAlign: "center" }}>
              Before accessing our services you need to login your personal
              account.
            </h5>
          </CContainer>
          <CContainer className=" d-flex justify-content-center align-items-center">
            <CRow className="pt-5 pb-5 rounded-3 shadow-lg form-container">
              <CCol
                sm="12"
                md="12"
                lg="12"
                style={{ textAlign: "center", padding: "20px 0" }}
              >
                <h1 className="text-dark">Login</h1>
              </CCol>
              <CCol sm="12" md="12" lg="12">
                <CForm
                  className="row"
                  noValidate
                  validated={validated}
                  onSubmit={this.handleSubmit}
                >
                  <CCol
                    sm="12"
                    md="12"
                    lg="12"
                    style={{ width: "75%", margin: "0 auto" }}
                  >
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
                      />
                      <CFormLabel
                        htmlFor="floatingInput "
                        className="d-flex align-items-center "
                      >
                        <FaIcons.FaUserCircle size={18} />
                        <span className="ps-2">Username</span>
                      </CFormLabel>
                    </CFormFloating>
                    <CFormFeedback invalid htmlFor="username">
                      Try again
                    </CFormFeedback>
                  </CCol>
                  <CCol
                    sm="12"
                    md="12"
                    lg="12"
                    style={{ width: "75%", margin: "0 auto" }}
                  >
                    <CFormFloating className="text-dark d-flex align-items-center position-relative">
                      <CFormControl
                        name="password"
                        type={type}
                        id="floatingPassword"
                        autoCorrect="false"
                        placeholder="Password"
                        onChange={this.handleOnChange}
                        value={password}
                        required
                      />
                      <CFormLabel htmlFor="exampleFormControlTextarea1 ">
                        <FaIcons.FaLock size={18} />
                        <span className="ps-2">Password</span>
                      </CFormLabel>
                      <span
                        onClick={this.handleShowPassword}
                        className="p-3  position-absolute end-0"
                      >
                        {type === "password" ? (
                          <FaIcons.FaEyeSlash size={20} />
                        ) : (
                          <FaIcons.FaEye size={20} />
                        )}
                      </span>
                    </CFormFloating>
                  </CCol>
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
                      style={{ width: "40%", margin: "20px auto" }}
                      className="d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn"
                    >
                      <span className=" d-flex align-items-center position-absolute login-icon">
                        <BsIcons.BsFillPersonFill size={25} />
                      </span>
                      <span className="label-btn">Login</span>
                    </CButton>
                    <CButton color="link" shape="rounded-0">
                      Forgot Password
                    </CButton>
                  </CCol>
                </CForm>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </>
    )
  }
}

export default Login
