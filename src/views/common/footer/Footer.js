import React, { Component } from "react"
import { CCardTitle, CContainer, CRow, CCol, CFooter } from "@coreui/react"
import { connect } from "react-redux"
import config from "src/config"
import { Link } from "react-router-dom"
import * as BsIcons from "react-icons/bs"
import * as FaIcons from "react-icons/fa"
export class Footer extends Component {
  state = {
    storeInfo: [],
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageStoreInformationResponse(prevProps, prevState)
  }

  manageStoreInformationResponse = (prevProps, prevState) => {
    if (
      prevProps.storeInformationResponse !== this.props.storeInformationResponse
    ) {
      const { action, status, data } = this.props.storeInformationResponse
      if (action === "GET_STORE_INFORMATION" && status === 200) {
        this.setState({
          storeInfo: data.storeInfo,
        })
      }
    }
  }

  render() {
    const { storeInfo } = this.state
    const margin = {
      marginBottom: "5px",
    }
    return (

      <CFooter className="pt-5 bg-dark text-white">
        <CRow className=" w-100">
          <CCol className="mb-5 text-center" sm="12" md="4">
            <CCardTitle>
              <Link
                className="nav-link text-white"
                to={config.api.private.prefixFrontendUrl + "/home"}
                style={{ cursor: "pointer" }}
              >
                {storeInfo.storeName ? (
                  <strong style={{ ...margin }}>
                    {storeInfo.storeName.toUpperCase()}
                  </strong>
                ) : (
                  <>
                    <strong style={{ ...margin }}>
                      Inventory Management System
                    </strong>
                  </>
                )}
              </Link>
            </CCardTitle>
          </CCol>
          <CCol className="mb-5" sm="12" md="4">

            <h5 className="text-center mb-3">Contact Us: </h5>

            <div className="font-style d-flex flex-column w-50 " style={{ margin: "0 auto" }}>
              <strong style={{ ...margin }}>
                <BsIcons.BsTelephone size={18} />
                {storeInfo.contactNumber ? (
                  <>
                    <span className="ms-2">{storeInfo.contactNumber}</span>
                  </>
                ) : (
                  <span className="ms-2">09458144695</span>
                )}
              </strong>
              <strong style={{ ...margin }}>
                <BsIcons.BsEnvelope size={18} />
                {storeInfo.email ? (
                  <>
                    <span className="ms-2">{storeInfo.email}</span>
                  </>
                ) : (
                  <span className="ms-2">jeromeviray4@gmail.com</span>
                )}
              </strong>
              <strong style={{ ...margin }}>
                <BsIcons.BsGeoAlt size={18} />
                {storeInfo.location ? (
                  <>
                    <span className="ms-2">{storeInfo.location}</span>
                  </>
                ) : (
                  <span className="ms-2">San Agustin Concepcion Tarlac</span>
                )}
              </strong>
            </div>
          </CCol>

          <CCol className="mb-5" sm="12" md="4">

            <h5 className="text-center mb-3">Keep Connected </h5>

            <div className="w-50 text-color" style={{ margin: "0 auto" }}>
              <a className="nav-link text-white" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaIcons.FaFacebookSquare size={20} />
                <span className="ms-2">Facebook Page</span>
              </a>
              <a className="nav-link text-white" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaIcons.FaTwitterSquare size={20} />
                <span className="ms-2">Twitter</span>
              </a>
              <a className="nav-link text-white" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <BsIcons.BsInstagram size={20} />

                <span className="ms-2">Instagram</span>
              </a>
            </div>
          </CCol>

        </CRow>
        <CFooter className="text-white w-100 bg-dark ">
          <div>
            <span className="ms-1">&copy; 2021 Inventory Management System.</span>
          </div>
          <div className="ms-auto">
            <Link
              className="nav-link text-white"
              to={config.api.private.prefixFrontendUrl + "/termsandconditions"}
              style={{ cursor: "pointer" }}
            >
              <span className="ms-2">Terms & Conditions</span>
            </Link>

          </div>
        </CFooter>
      </CFooter>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    storeInformationResponse: state.storeInformationResponse,
  }
}
export default connect(mapStateToProps, {})(Footer)
