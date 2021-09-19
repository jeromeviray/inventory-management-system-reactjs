import { CCard, CCardBody, CCol, CButton } from "@coreui/react"
import { Link } from "react-router-dom"
import React, { Component } from "react"
import { GOOGLE_AUTH_URL } from "../../service/redux/constants"

// icons
import * as FcIcons from "react-icons/fc"
import * as BsIcons from "react-icons/bs"
import * as FiIcons from "react-icons/fi"
import * as FaIcons from "react-icons/fa"

export class RightFormCard extends Component {
  render() {
    return (
      <CCard className="right-to-left border-0">
        <CCardBody className="text-center">
          <div className=" d-flex flex-wrap" style={{ height: "90%" }}>
            <CCol
              xs="12"
              className="d-flex justify-content-end align-items-center p-2"
            >
              <h3 className="">logo</h3>
            </CCol>
            <CCol
              xs="12"
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <span className="p-2">You can Connect with your :</span>
              <a
                href={GOOGLE_AUTH_URL}
                className="google-link 
                                btn border border-danger
                                d-flex"
              >
                <span>
                  <FcIcons.FcGoogle size={20} />
                </span>
                <span className="ps-3">Google</span>
              </a>
            </CCol>
            <span className="fancy">OR</span>
            <CCol
              xs="12"
              className="d-flex justify-content-center align-items-center mt-3"
            >
              {this.props.button === "login" ? (
                <Link
                  to="/login"
                  className="btn login-btn p-0 "
                  style={{ width: "50%" }}
                >
                  <CButton
                    size="lg"
                    color="info"
                    variant="outline"
                    style={{ width: "100%", color: "black" }}
                    className="d-flex justify-content-center align-items-center secondary-login-btn"
                  >
                    <span className="d-flex align-items-center login-icon me-2">
                      <FiIcons.FiLogIn size={20} />
                    </span>
                    <span className="label-btn">Login</span>
                  </CButton>
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="register-btn btn p-0 "
                  style={{ width: "50%" }}
                >
                  <CButton
                    variant="outline"
                    color="success"
                    size="lg"
                    className="d-flex justify-content-center align-items-center secondary-register-btn"
                    style={{ width: "100%", color: "black" }}
                  >
                    <span className="d-flex align-items-center login-icon me-2">
                      <BsIcons.BsFillPersonPlusFill size={20} />
                    </span>
                    <span className="label-btn ">Register</span>
                  </CButton>
                </Link>
              )}
            </CCol>
          </div>
        </CCardBody>
      </CCard>
    )
  }
}

export default RightFormCard
