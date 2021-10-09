import React, { Component } from "react"
import {
  CButton,
  // CRow,
  CCol,
  CFormFloating,
  CFormLabel,
  CFormControl,
  CForm,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CSpinner,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from "@coreui/react"
import { connect } from "react-redux"
//action
import { setAddressModal } from "src/service/apiActions/modalAction/modalAction"
import { saveAddress } from "src/service/apiActions/addressAction/addressAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
export class AddressModal extends Component {
  state = {
    visible: false,
    icon: "",
    address: this.addressStates,
    loading: false,
    action: "",
    toast: "",
  }
  addressStates = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    region: "",
    city: "",
    province: "",
    barangay: "",
    street: "",
    postalCode: "",
  }
  componentDidUpdate(prevPros, prevState) {
    this.manageModalVisible(prevPros, prevState)
  }
  manageModalVisible = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, address, icon } = this.props.modalVisible
      if (action === "Add") {
        this.setState({
          visible: visible,
          icon: icon,
          action: action,
        })
      } else if (action === "Edit") {
        this.setState({
          visible: visible,
          icon: icon,
          action: action,
        })
      } else {
        this.setState({
          visible: visible,
          icon: "",
          action: "",
        })
      }
    }
  }
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    this.setState({
      loading: true,
    })
    let {
      action,
      firstName,
      lastName,
      phoneNumber,
      region,
      city,
      province,
      barangay,
      street,
      postalCode,
    } = this.state

    let address = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      region: region,
      city: city,
      province: province,
      barangay: barangay,
      street: street,
      postalCode: postalCode,
    }
    if (action === "Add") {
      this.handleSaveAddress(address)
    } else if (action === "Edit") {
    }
  }
  onResetValue = () => {
    this.setState(() => this.addressStates)
  }
  handleSaveAddress = (address) => {
    this.props
      .saveAddress(address)
      .then(() => {
        let { status } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            loading: false,
          })
          this.onResetValue()
        }
      })
      .catch(() => {
        let { status, data } = this.props.messageResponse
        this.setState({
          loading: false,
        })
      })
  }

  render() {
    let {
      visible,
      firstName,
      lastName,
      phoneNumber,
      region,
      city,
      province,
      barangay,
      street,
      postalCode,
      loading,
      action,
      toast,
    } = this.state
    return (
      <>
        <CToaster push={toast} placement="top-end" />
        <CModal size="lg" visible={visible}>
          <CModalHeader
            onDismiss={() => this.props.setAddressModal(false, "close", "", "")}
          >
            <CModalTitle>Customer Address</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3"
              id="address-form"
              onSubmit={this.handleOnSubmit}
            >
              <CCol md={6}>
                <CFormFloating className="mb-3">
                  <CFormControl
                    name="firstName"
                    type="text"
                    id="floatingFirstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={this.handleOnChange}
                    required
                  />
                  <CFormLabel htmlFor="floatingFirstName">
                    First name
                  </CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={6}>
                <CFormFloating>
                  <CFormControl
                    name="lastName"
                    type="text"
                    id="floatingLastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={this.handleOnChange}
                    required
                  />
                  <CFormLabel htmlFor="floatingLastName">Last name</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={6}>
                <CFormFloating>
                  <CFormControl
                    name="phoneNumber"
                    type="tel"
                    required
                    // pattern="^(09|\+639)\d{9}$"
                    id="floatingPhoneNumber"
                    placeholder="Last name"
                    value={phoneNumber}
                    onChange={this.handleOnChange}
                  />
                  <CFormLabel htmlFor="floatingPhoneNumber">
                    Phone number
                  </CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={6}>
                <CFormFloating className="mb-3">
                  <CFormControl
                    name="region"
                    type="text"
                    id="floatingRegion"
                    placeholder="Region"
                    value={region}
                    onChange={this.handleOnChange}
                    required
                  />
                  <CFormLabel htmlFor="floatingRegion">Region</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={5}>
                <CFormFloating>
                  <CFormControl
                    name="city"
                    type="text"
                    id="floatingCity"
                    placeholder="City"
                    value={city}
                    onChange={this.handleOnChange}
                    required
                  />
                  <CFormLabel htmlFor="floatingCity">City</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={4}>
                <CFormFloating>
                  <CFormControl
                    name="province"
                    type="text"
                    id="floatingProvince"
                    placeholder="Province"
                    value={province}
                    onChange={this.handleOnChange}
                    required
                  />
                  <CFormLabel htmlFor="floatingProvince">Province</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={3}>
                <CFormFloating>
                  <CFormControl
                    name="postalCode"
                    type="number"
                    id="floatingPostalCode"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={this.handleOnChange}
                    required
                  />
                  <CFormLabel htmlFor="floatingPostalCode">
                    Postal code
                  </CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={12} className="mt-4 pt-2">
                <CFormFloating>
                  <CFormControl
                    name="barangay"
                    type="text"
                    id="floatingBarangay"
                    placeholder="Barangay"
                    value={barangay}
                    onChange={this.handleOnChange}
                    required
                  />
                  <CFormLabel htmlFor="floatingBarangay">Barangay</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={12} className="mt-4 pt-2">
                <CFormFloating>
                  <CFormControl
                    name="street"
                    type="text"
                    id="floatingStreet"
                    placeholder="Street"
                    value={street}
                    onChange={this.handleOnChange}
                    required
                  />
                  <CFormLabel htmlFor="floatingStreet">1234 Main St</CFormLabel>
                </CFormFloating>
              </CCol>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() => {
                this.props.setAddressModal(false, "close", "", "")
                // this.props.clearMessage();
              }}
            >
              Close
            </CButton>
            <CButton
              color="info"
              disabled={loading}
              type="submit"
              form="address-form"
            >
              {loading && <CSpinner size="sm" className="ms-1" />}
              Save {action === "Edit" ? "Changes" : "Branch"}
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  setAddressModal,
  saveAddress,
  logout,
  clearMessage,
})(AddressModal)
