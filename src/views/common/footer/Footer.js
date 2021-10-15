import React, { Component } from 'react'
import { CCardTitle, CContainer, CRow, CCol } from '@coreui/react'
import { connect } from 'react-redux'
import { getStoreInformation } from 'src/service/apiActions/storeAction/StoreInformationAction'
import config from 'src/config'
import { Link } from 'react-router-dom'
export class Footer extends Component {
    state = {
        storeInfo: [],
    }
    componentDidMount() {
        this.props.getStoreInformation();
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
        const { storeInfo } = this.state;
        const margin = {
            marginBottom: "5px",
        }
        return (
            <div className="bg-dark p-3 border-red text-white">
                <CContainer>
                    <CRow className="align-items-center justify-content-center mb-3">
                        <CCol>
                            <h5>Contact Us: </h5>
                            <div className="font-style d-flex text-light">
                                <div className="font-style d-flex flex-column align-items-start ">

                                    <h6 className="m-0 pe-3 mb-2">Contact #:</h6>
                                    <h6 className="m-0 pe-3 mb-2">Email:</h6>
                                    <h6 className="m-0 pe-3 mb-2">Location:</h6>
                                </div>
                                <div className="font-style d-flex flex-column align-items-start ">
                                    <strong style={{ ...margin }}>
                                        {storeInfo.contactNumber ? (
                                            <>
                                                <span>{storeInfo.contactNumber}</span>
                                            </>
                                        ) : (
                                            <span>09458144695</span>
                                        )}
                                    </strong>
                                    <strong style={{ ...margin }}>
                                        {storeInfo.email ? (
                                            <>
                                                <span>{storeInfo.email}</span>
                                            </>
                                        ) : (
                                            <span >jeromeviray4@gmail.com</span>
                                        )}
                                    </strong>
                                    <strong style={{ ...margin }}>
                                        {storeInfo.location ? (
                                            <>
                                                <span>{storeInfo.location}</span>
                                            </>
                                        ) : (
                                            <span>San Agustin Concepcion Tarlac</span>
                                        )}
                                    </strong>
                                </div>
                            </div>
                        </CCol>
                        <CCol>
                            <h5>Terms and Condition </h5>
                            <Link
                                className="nav-link "
                                to={config.api.private.prefixFrontendUrl + "#"}
                                style={{ cursor: "pointer" }}
                            >
                                Terms and Conditions
                            </Link>
                        </CCol>
                        <CCol>
                            <h5>Contact Us: </h5>
                            <div className="font-style d-flex text-light">
                                <div className="font-style d-flex flex-column align-items-start ">

                                    <h6 className="m-0 pe-3 mb-2">Contact #:</h6>
                                    <h6 className="m-0 pe-3 mb-2">Email:</h6>
                                    <h6 className="m-0 pe-3 mb-2">Location:</h6>
                                </div>
                                <div className="font-style d-flex flex-column align-items-start ">
                                    <strong style={{ ...margin }}>
                                        {storeInfo.contactNumber ? (
                                            <>
                                                <span>{storeInfo.contactNumber}</span>
                                            </>
                                        ) : (
                                            <span>09458144695</span>
                                        )}
                                    </strong>
                                    <strong style={{ ...margin }}>
                                        {storeInfo.email ? (
                                            <>
                                                <span>{storeInfo.email}</span>
                                            </>
                                        ) : (
                                            <span >jeromeviray4@gmail.com</span>
                                        )}
                                    </strong>
                                    <strong style={{ ...margin }}>
                                        {storeInfo.location ? (
                                            <>
                                                <span>{storeInfo.location}</span>
                                            </>
                                        ) : (
                                            <span>San Agustin Concepcion Tarlac</span>
                                        )}
                                    </strong>
                                </div>
                            </div>
                        </CCol>
                    </CRow>
                </CContainer>
                <CContainer className="text-center">
                    <CCardTitle>
                        <Link
                            className="nav-link text-white"
                            to={config.api.private.prefixFrontendUrl + "/home"}
                            style={{ cursor: "pointer" }}
                        >
                            {storeInfo.storeName && (
                                <strong style={{ ...margin }}>
                                    {storeInfo.storeName.toUpperCase()}
                                </strong>
                            )}
                        </Link>
                    </CCardTitle>
                </CContainer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        storeInformationResponse: state.storeInformationResponse
    }
}
export default connect(mapStateToProps, {
    getStoreInformation
})(Footer)
