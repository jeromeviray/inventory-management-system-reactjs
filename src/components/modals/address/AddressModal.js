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
  CFormSelect,
} from "@coreui/react"
import { connect } from "react-redux"
//action
import { setAddressModal } from "src/service/apiActions/modalAction/modalAction"
import {
  saveAddress,
  updateAddress,
} from "src/service/apiActions/addressAction/addressAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"

import {
  regions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address"

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
    regionId: "",
    id: "",
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
      let regionsData = []
      regions.map((region) => {
        regionsData[region.id] = {
          name: region.region_name,
          code: region.region_code,
        }
      })
      this.setState({
        regionsData: regionsData,
      })
    })
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
          id: address.id,
        })
        this.handleOnEditSetState(address)
      } else {
        this.setState({
          visible: visible,
          icon: "",
          action: "",
          regionId: "",
          provinceId: "",
          cityId: "",
          baranggayId: "",
        })
        this.onResetValue()
      }
    }
  }
  handleOnEditSetState = (address) => {
    const {
      firstName,
      lastName,
      phoneNumber,
      region,
      city,
      province,
      barangay,
      street,
    } = address
    const { regionsData } = this.state
    const regionIndex = regionsData.findIndex(
      (item) => item && item.name === region,
    )
    this.getProvince(regionsData[regionIndex].code, province)

    this.setState({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      region: region,
      city: city,
      province: province,
      barangay: barangay,
      street: street,
      regionId: regionIndex,
    })
  }
  getProvince = (code, province) => {
    provinces(code).then((provinces) => {
      let provincesData = []
      provinces.map((dt, index) => {
        provincesData[index] = {
          name: dt.province_name,
          code: dt.province_code,
        }
      })
      let provinceIndex = provincesData.findIndex(
        (item) => item && item.name === province,
      )
      this.setState({
        provinceId: provinceIndex,
        provincesData: provincesData,
      })
      this.getCity(provincesData[provinceIndex].code)
    })
  }
  getCity = (code) => {
    const { city } = this.state
    cities(code).then((item) => {
      let citiesData = []
      item.map((dt, index) => {
        citiesData[index] = {
          name: dt.city_name,
          code: dt.city_code,
        }
      })
      let cityIndex = citiesData.findIndex((item) => item && item.name === city)
      this.setState({
        citiesData: citiesData,
        cityId: cityIndex,
      })
      this.getBarangay(citiesData[cityIndex].code)
    })
  }
  getBarangay = (code) => {
    console.log(code)
    const { barangay } = this.state
    barangays(code).then((item) => {
      let baranggaysData = []
      item.map((dt, index) => {
        baranggaysData[index] = {
          name: dt.brgy_name,
          code: dt.brgy_code,
        }
      })
      let barangayIndex = baranggaysData.findIndex(
        (item) => item && item.name === barangay,
      )
      this.setState({
        baranggaysData: baranggaysData,
        baranggayId: barangayIndex,
      })
    })
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
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
      id,
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
      this.handleUpdateAddress(id, address)
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
            regionId: "",
            provinceId: "",
            cityId: "",
            baranggayId: "",
          })
          this.onResetValue()
          this.props.setAddressModal(false, "close", "", "")
        }
      })
      .catch(() => {
        this.setState({
          loading: false,
        })
      })
  }

  handleUpdateAddress = (id, address) => {
    console.log(id)
    this.props
      .updateAddress(id, address)
      .then(() => {
        let { status } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            loading: false,
            regionId: "",
            provinceId: "",
            cityId: "",
            baranggayId: "",
          })
          this.onResetValue()
          this.props.setAddressModal(false, "close", "", "")
        }
      })
      .catch(() => {
        this.setState({
          loading: false,
        })
      })
  }
  onRegionChanged = (event) => {
    const regionsData = this.state.regionsData

    if (event.target.value == "") {
      return
    }

    const data = regionsData[event.target.value]
    this.setState({
      regionId: event.target.value,
      region: data.name,
    })

    provinces(data.code).then((province) => {
      let provincesData = []
      province.map((dt, index) => {
        provincesData[index] = {
          name: dt.province_name,
          code: dt.province_code,
        }
      })
      this.setState({
        provincesData: provincesData,
      })
    })
  }

  onProvinceChanged = (event) => {
    const provincesData = this.state.provincesData

    if (event.target.value == "") {
      return
    }

    const data = provincesData[event.target.value]

    this.setState({
      provinceId: event.target.value,
      province: data.name,
    })

    cities(data.code).then((city) => {
      let citiesData = []
      city.map((dt, index) => {
        citiesData[index] = {
          name: dt.city_name,
          code: dt.city_code,
        }
      })
      this.setState({
        citiesData: citiesData,
      })
    })
  }

  onCityChanged = (event) => {
    const citiesData = this.state.citiesData

    if (event.target.value == "") {
      return
    }
    const data = citiesData[event.target.value]

    this.setState({
      cityId: event.target.value,
      city: data.name,
    })
    barangays(data.code).then((barangay) => {
      let baranggaysData = []
      barangay.map((dt, index) => {
        baranggaysData[index] = {
          name: dt.brgy_name,
          code: dt.brgy_code,
        }
      })
      this.setState({
        baranggaysData: baranggaysData,
      })
    })
  }

  onBaranggayChanged = (event) => {
    const baranggaysData = this.state.baranggaysData

    if (event.target.value == "") {
      return
    }
    const data = baranggaysData[event.target.value]

    this.setState({
      baranggayId: event.target.value,
      barangay: data.name,
    })
  }

  render() {
    let {
      visible,
      firstName,
      lastName,
      phoneNumber,
      street,
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
    } = this.state
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
              <CCol md={6}></CCol>
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
                    <option value="" disabled>
                      -- Choose Region --
                    </option>
                    {regionsData.map((region, index) => {
                      return (
                        <option value={index} key={index}>
                          {region.name}
                        </option>
                      )
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
                    <option value="" disabled>
                      -- Choose Province --
                    </option>
                    {provincesData.map((region, index) => {
                      return (
                        <option value={index} key={region.name}>
                          {region.name}
                        </option>
                      )
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
                    <option value="" disabled>
                      -- Choose City --
                    </option>
                    {citiesData.map((region, index) => {
                      return (
                        <option value={index} key={index}>
                          {region.name}
                        </option>
                      )
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
                    <option value="" disabled>
                      -- Choose Barangay --
                    </option>
                    {baranggaysData.map((region, index) => {
                      return (
                        <option value={index} key={index}>
                          {region.name}
                        </option>
                      )
                    })}
                  </CFormSelect>
                  <CFormLabel htmlFor="floatingBarangay">Barangay</CFormLabel>
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
  updateAddress,
})(AddressModal)
