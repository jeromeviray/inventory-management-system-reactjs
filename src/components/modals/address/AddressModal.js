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
  CFormSelect
} from "@coreui/react"
import { connect } from "react-redux"
//action
import { setAddressModal } from "src/service/apiActions/modalAction/modalAction"
import { saveAddress } from "src/service/apiActions/addressAction/addressAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"

import { regions, provinces, cities, barangays } from 'select-philippines-address';

export class AddressModal extends Component {
  state = {
    visible: false,
    icon: "",
    address: this.addressStates,
    loading: false,
    action: "",
    regionsData: [],
    provincesData: [],
    citiesData: [],
    baranggaysData: [],
    baranggayId: "",
    cityId: "",
    provinceId: "",
    regionId: ""
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

  componentDidMount() {
    regions().then((regions) => {
      let regionsData = [];
      regions.map((region) => {
        regionsData[region.id] = {
          name: region.region_name,
          code: region.region_code
        };
      })
      this.setState({
        regionsData: regionsData
      })
    });
  }

  componentDidUpdate(prevPros, prevState) {
    this.manageModalVisible(prevPros, prevState);
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
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
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


  onRegionChanged = (event) => {
    const regionsData = this.state.regionsData;


    if (event.target.value == "") {
      return;
    }

    const data = regionsData[event.target.value];

    this.setState({
      regionId: event.target.value,
      region: data.name
    })

    provinces(data.code).then((province) => {
      let provincesData = [];
      province.map((dt, index) => {
        provincesData[index] = {
          name: dt.province_name,
          code: dt.province_code
        };
      })
      this.setState({
        provincesData: provincesData
      })
    });
  }

  onProvinceChanged = (event) => {
    const provincesData = this.state.provincesData;

    if (event.target.value == "") {
      return;
    }

    const data = provincesData[event.target.value];

    this.setState({
      provinceId: event.target.value,
      province: data.name
    })


    cities(data.code).then((city) => {
      let citiesData = [];
      city.map((dt, index) => {
        citiesData[index] = {
          name: dt.city_name,
          code: dt.city_code
        };
      })
      this.setState({
        citiesData: citiesData
      })
    });
  }

  onCityChanged = (event) => {
    const citiesData = this.state.citiesData;

    if (event.target.value == "") {
      return;
    }
    const data = citiesData[event.target.value];

    this.setState({
      cityId: event.target.value,
      city: data.name
    })

    barangays(data.code).then((barangay) => {
      let baranggaysData = [];
      barangay.map((dt, index) => {
        baranggaysData[index] = {
          name: dt.brgy_name,
          code: dt.brgy_code
        };
      })
      this.setState({
        baranggaysData: baranggaysData
      })
    });
  }

  onBaranggayChanged = (event) => {
    const baranggaysData = this.state.baranggaysData;

    if (event.target.value == "") {
      return;
    }
    const data = baranggaysData[event.target.value];

    this.setState({
      baranggayId: event.target.value,
      barangay: data.name
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
      regionsData,
      provincesData,
      citiesData,
      baranggaysData,
      baranggayId,
      cityId,
      regionId,
      provinceId,
    } = this.state;
    return (
      <>

        <CModal size="lg" visible={visible}>
          <CModalHeader
            onDismiss={() => this.props.setAddressModal(false, "close", "", "")}
          >
            <CModalTitle>Customer Address</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm

              className="row g-3 needs-validation"
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
                    pattern={"^(09|\\+639)\\d{9}$"}
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

              </CCol>
              <CCol md={12}>
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
                  <CFormLabel htmlFor="floatingStreet">Street</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={6}>
                <CFormFloating className="mb-3">
                  <CFormSelect
                    name="region"
                    type="text"
                    id="floatingRegion"
                    placeholder="Region"
                    value={regionId}
                    onChange={this.onRegionChanged}
                    required
                  >
                    <option value="" disabled>-- Choose Region --</option>
                    {regionsData.map((region, index) => {
                      return <option value={index} key={index}>{region.name}</option>
                    })}
                  </CFormSelect>
                  <CFormLabel htmlFor="floatingRegion">Region</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={6}>
                <CFormFloating>
                  <CFormSelect
                    name="province"
                    type="text"
                    id="floatingProvince"
                    placeholder="Province"
                    value={provinceId}
                    onChange={this.onProvinceChanged}
                    required
                  >
                    <option value="" disabled>-- Choose Province --</option>
                    {provincesData.map((region, index) => {
                      return <option value={index} key={region.name}>{region.name}</option>
                    })}
                  </CFormSelect>
                  <CFormLabel htmlFor="floatingProvince">Province</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={6}>
                <CFormFloating>
                  <CFormSelect
                    name="city"
                    type="text"
                    id="floatingCity"
                    placeholder="City"
                    value={cityId}
                    onChange={this.onCityChanged}
                    required
                  >
                    <option value="" disabled>-- Choose City --</option>
                    {citiesData.map((region, index) => {
                      return <option value={index} key={index}>{region.name}</option>
                    })}
                  </CFormSelect>
                  <CFormLabel htmlFor="floatingCity">City</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol md={6}>
                <CFormFloating>
                  <CFormSelect
                    name="barangay"
                    type="text"
                    id="floatingBarangay"
                    placeholder="Barangay"
                    value={baranggayId}
                    onChange={this.onBaranggayChanged}
                    required
                  >
                    <option value="" disabled>-- Choose Barangay --</option>
                    {baranggaysData.map((region, index) => {
                      return <option value={index} key={index}>{region.name}</option>
                    })}
                  </CFormSelect>
                  <CFormLabel htmlFor="floatingBarangay">Barangay</CFormLabel>
                </CFormFloating>
              </CCol>
              {/* <CCol md={3}>
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
              </CCol> */}
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
              Save {action === "Edit" ? "Changes" : "Address"}
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
  clearMessage,
})(AddressModal)
