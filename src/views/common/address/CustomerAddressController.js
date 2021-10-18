import React, { Component } from "react"
import {
  CButton,
  CRow,
  CCol,
  CCard,
  CCardTitle,
  CCardBody,
  CAlert,
} from "@coreui/react"
import { withRouter } from "react-router"
import { getAdress } from "src/service/apiActions/addressAction/addressAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setAddressModal } from "src/service/apiActions/modalAction/modalAction"
import AddressModal from "src/components/modals/address/AddressModal"
import { connect } from "react-redux"
import * as FaIcons from "react-icons/fa"
import config from "../../../config"
export class CustomerAddressController extends Component {
  state = {
    message: "",
    action: "",
    addresses: [],
    addressId: "",
    visible: false,
    isCart: false
  }
  componentDidMount() {
    if (!this.props.userResponse.isLoggedIn) {
      this.props.history.push(config.api.private.prefixFrontendUrl + "/login")
    } else {
      this.retreiveAddressResponse()
    }
  }
  retreiveAddressResponse = () => {
    this.props.getAdress()
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageAddressResponse(prevProps, prevState)
    this.manageModalVisible(prevProps, prevState)
  }
  manageAddressResponse = (prevProps, prevState) => {
    if (prevProps.addressResponse !== this.props.addressResponse) {
      let { action, status, data } = this.props.addressResponse
      if (action === "GET_ADDRESSES" && status === 200) {
        this.setState({
          addresses: data.addresses,
        })
      }
    }
  }
  manageModalVisible = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { action } = this.props.modalVisible
      if (action === "close") {
        this.retreiveAddressResponse()
      }
    }
  }
  render() {
    let { message, addresses, visible, isCart } = this.state
    const cursorStyle = {
      cursor: "pointer",
    }
    return (
      <>
        <AddressModal />
        <CButton
          shape="rounded-pill"
          color="primary"
          variant="ghost"
          className="d-flex justify-content-center align-items-center mb-3"
          onClick={() =>
            this.props.setAddressModal(
              !visible,
              "Add",
              "",
              <FaIcons.FaPlus size={20} className="me-2" />,
            )
          }
        >
          <FaIcons.FaPlus size={20} />
          <span style={{ marginLeft: "10px" }}>Add Address</span>
        </CButton>
        <CRow>
          {addresses.map((address, index) => {
            const {
              firstName,
              lastName,
              phoneNumber,
              street,
              barangay,
              province,
              region,
              city,
              postalCode } = address;
            let checked = this.props.getValue == address.id
            return (
              <CCol key={index} md={12} className="mb-3">
                <CCard
                  className={
                    checked ? "border-envelope shadow" : "border-envelope"
                  }
                >
                  <CCardBody className="p-3 ">
                    <div className="d-flex align-items-center justify-content-start">
                      <CCardTitle>
                        {address.firstName + " " + address.lastName}
                      </CCardTitle>
                    </div>
                    <div className="ps-2">
                      Mobile #: {phoneNumber}
                    </div>
                    <div className="ps-2">
                      Address: {street + ", " + barangay + ", " + city + ", " + province + ", " + region}
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            )
          })}
          {isCart && <CCol className="m-3 text-center" style={{ fontStyle: "italic" }}>
            <CAlert color="warning">
              To Proceed to the next step Select or Add your Address Information
            </CAlert>
          </CCol>
          }
        </CRow>
        {
          message && (
            <div className="form-group d-flex justify-content-center align-items-center">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addressResponse: state.addressResponse,
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
    modalVisible: state.modalVisibleResponse,
  }
}
export default connect(mapStateToProps, {
  getAdress,
  clearMessage,
  setAddressModal,
})(withRouter(CustomerAddressController))
