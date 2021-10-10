import React, { Component } from "react"
import {
  CButton,
  CRow,
  CCol,
  CCard,
  CCardTitle,
  CFormCheck,
  // CCardHeader,
  CCardBody,
  CAlert,
  // CCardFooter,
  // CFormFloating,
  // CFormLabel,
  // CFormControl,
  // CForm
} from "@coreui/react"
// import { CButton } from "@coreui/react"

import { connect } from "react-redux"
//icons
import * as FaIcons from "react-icons/fa"
// modal
import AddressModal from "src/components/modals/address/AddressModal"
//action
import { getAdress } from "src/service/apiActions/addressAction/addressAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setAddressModal } from "src/service/apiActions/modalAction/modalAction"
//history
import { history } from "src/_helper/history"

export class CustomerAddress extends Component {
  state = {
    message: "",
    action: "",
    addresses: [],
    addressId: "",
    visible: false,
  }
  componentDidMount() {
    if (!this.props.userResponse.isLoggedIn) {
      history.push("/login")
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
  handleOnChange = (event) => {
    let value = event.target.value
    this.setState({
      addressId: value,
    })
    this.props.checkValueOnChange(value)
  }

  render() {
    let { message, addresses, visible } = this.state
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
          <span style={{ marginLeft: "10px" }}>Add Branch</span>
        </CButton>
        <CRow>
          {addresses.map((address, index) => {
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
                      <CFormCheck
                        type="radio"
                        name="check"
                        id={"address" + address.id}
                        style={cursorStyle}
                        value={address.id}
                        defaultChecked={
                          this.props.getValue !== undefined ? checked : false
                        }
                        onChange={this.handleOnChange}
                      />

                      <CCardTitle className="ps-4">
                        {address.firstName + " " + address.lastName}
                      </CCardTitle>
                    </div>

                    <div className="ps-5">{address.city}</div>
                  </CCardBody>
                </CCard>
              </CCol>
            )
          })}
          <CCol className="m-3 text-center" style={{ fontStyle: "italic" }}>
            <CAlert color="warning">
              To Proceed to the next step Select or Add your Address Information
            </CAlert>
          </CCol>
        </CRow>
        {message && (
          <div className="form-group d-flex justify-content-center align-items-center">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
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
})(CustomerAddress)
