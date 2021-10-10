import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CContainer,
  CRow,
  CCol,
  CFormFloating,
  CFormControl,
  CFormLabel,
  CForm,
  CSpinner,


  CFormSelect,
  CInputGroup,
  CFormFeedback,
  CCallout,
} from "@coreui/react"
import { connect } from "react-redux"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import * as BiIcons from "react-icons/bi"
import * as GrIcons from "react-icons/gr"
//action
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setPromoModal } from "src/service/apiActions/modalAction/modalAction"
import { DateRange } from "react-date-range"
import { searchProductByBarcodeOrName } from "src/service/apiActions/productAction/productAction"
import {
  savePromo,
  updatePromo,
} from "src/service/apiActions/promoAction/promoAction"

import { ReactSearchAutocomplete } from "react-search-autocomplete"
import Barcode from "react-barcode"
import BarcodeScannerComponent from "react-qr-barcode-scanner"
import dateFormat from "dateformat"
// import { result } from 'lodash';

export class PromoModal extends Component {
  state = {
    action: "",
    message: "",
    visible: false,
    icon: "",
    loading: false,
    showScanner: false,
    validation: false,
    promo: this.promoState,
    selectionRange: [
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ],
    query: "",
    page: 0,
    limit: 10,
    products: [],
    items: [],
    stopStreaming: true,
    dateValidate: "",

  }
  promoState = {
    promoId: "",
    productId: "",
    quantity: 0,
    percentage: 0,
    startDate: "",
    endDate: "",
  }
  onResetValue = () => {
    this.setState(() => this.promoState)
  }
  handleOnChange = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }
  componentDidMount() {
    const { query, page, limit } = this.state
    this.searchProduct(query, page, limit)
  }
  searchProduct(query, page, limit) {
    this.props.searchProductByBarcodeOrName(query, page, limit)
  }
  componentDidUpdate(prevProps, prevState) {
    this.managePromoModal(prevProps, prevState)
    this.manageProductResponse(prevProps, prevState)
  }
  manageProductResponse(prevProps, prevState) {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { action, status, data } = this.props.productResponse
      let { showScanner } = this.state
      if (action === "SEARCH_PRODUCT") {
        if (status === 200) {
          if (showScanner) {
            this.setState({
              items: data.products.data,
              products: data.products.data[0],
              stopStreaming: true,
            })
          } else {
            this.setState({
              items: data.products.data,
            })
          }
        }
      }
    }
  }
  managePromoModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, promo, icon } = this.props.modalVisible
      const { query, page, limit } = this.state
      if (action === "Add") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
        this.searchProduct(query, page, limit)
      } else if (action === "Edit") {
        const range = [
          {
            startDate: new Date(promo.startDate),
            endDate: new Date(promo.endDate),
            key: "selection",
          },
        ]
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
          percentage: promo.percentage,
          quantity: promo.quantity,
          products: promo.product,
          selectionRange: range,
          startDate: dateFormat(promo.startDate, "dd-mmm-yyyy HH:MM:ss"),
          endDate: dateFormat(promo.endDate, "dd-mmm-yyyy HH:MM:ss"),
          promoId: promo.id,
        })
      } else {
        this.onResetValue()
        this.setState({
          visible: visible,
          products: [],
          selectionRange: [
            {
              startDate: new Date(),
              endDate: null,
              key: "selection",
            },
          ],
        })
      }
    }
  }
  handleOnSearch = (string, results) => {
    const { page, limit } = this.state
    this.searchProduct(string, page, limit)
  }
  handleOnSelect = (item) => {
    const { page, limit } = this.state

    this.setState({
      products: item,
    })
    this.searchProduct(item.productName, page, limit)
  }
  handleDateOnChange = (range) => {
    this.setState({
      selectionRange: [range.selection],
      startDate: String(
        dateFormat(range.selection.startDate, "dd-mmm-yyyy HH:MM:ss"),
      ),
      endDate: String(
        dateFormat(range.selection.endDate, "dd-mmm-yyyy HH:MM:ss"),
      ),
    })
  }
  handleDecodeBarcode = (decoded) => {
    const { page, limit } = this.state
    if (decoded) {
      this.setState({
        stopStreaming: true,
      })
      this.searchProduct(decoded, page, limit)
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      validation: true,
      loading: true,
    })
    const {
      products,
      quantity,
      percentage,
      startDate,
      endDate,
      action,
      promoId,
    } = this.state
    if (startDate) {
      this.setState({
        dateValidate: "",
      })
      if (action === "Add") {
        this.handleSavePromo(
          quantity,
          percentage,
          products.id,
          startDate,
          endDate,
        )
      } else if (action === "Edit") {
        this.handleUpdatePromo(
          promoId,
          quantity,
          percentage,
          products.id,
          startDate,
          endDate,
        )
      } else {
        this.onResetValue()
        this.setState({
          validation: false,
          loading: false,
          selectionRange: this.state.selectionRange,
        })
      }
    } else {
      this.onResetValue()
      this.setState({
        validation: false,
        loading: false,
        dateValidate: "Please Select Start date",
      })
    }
  }
  handleSavePromo = (quantity, percentage, productId, startDate, endDate) => {
    this.props
      .savePromo(quantity, percentage, productId, startDate, endDate)
      .then(() => {
        let { status, data } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            loading: false,
            validation: false,
            products: [],
          })
        }
        this.onResetValue()
        setInterval(() => {
          this.props.clearMessage()
          this.setState({ visible: false })
        }, 1000)
      })
      .catch(() => {
        this.setState({
          loading: false,
          validation: false,
        })
      })
  }
  handleUpdatePromo = (
    promoId,
    quantity,
    percentage,
    productId,
    startDate,
    endDate,
  ) => {
    this.props
      .updatePromo(promoId, quantity, percentage, productId, startDate, endDate)
      .then(() => {
        let { status, data } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            loading: false,
            validation: false,
            products: [],
          })
        }
        this.onResetValue()
        setInterval(() => {
          this.props.clearMessage()
          this.setState({ visible: false })
        }, 1000)
      })
      .catch(() => {
        this.setState({
          loading: false,
          validation: false,
        })
      })
  }

  render() {
    let {
      action,
      visible,
      icon,
      loading,
      validation,
      selectionRange,
      products,
      items,
      percentage,
      quantity,
      showScanner,
      stopStreaming,
      dateValidate,
    } = this.state
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "500",
    }
    return (
      <>

        <CModal size="xl" visible={visible} fullscreen="lg" scrollable>
          <CModalHeader
            onDismiss={() => this.props.setPromoModal(false, "close")}
            className="modal-header"
          >
            <CModalTitle>{action} Promo</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              noValidate
              validated={validation}
              onSubmit={this.handleSubmit}
              id="a-form"
            >
              <CRow>
                <CCol sm="12" md="6" lg="4" className="mb-3">
                  {/* <div className="d-flex w-100 border justify-content-between"> */}
                  <CRow className="align-items-center">
                    <CCol
                      sm="10"
                      md="10"
                      lg="10"
                      className={showScanner ? "d-none" : "d-block"}
                    >
                      <ReactSearchAutocomplete
                        items={items}
                        onSearch={this.handleOnSearch}
                        onSelect={this.handleOnSelect}
                        fuseOptions={{ keys: ["productName", "barcode"] }}
                        resultStringKeyName="productName"
                        placeholder="Search Product"
                        className="search-bar"
                        styling={{
                          boxShadow: "none",
                          fontSize: "16px",
                          zIndex: 999,
                          padding: "16px 24px",
                          height: "55px",
                          border: " 1px solid #b1b7c1",
                          fontWiegth: "500",
                          placeholderColor: "Black",
                          width: "100%",
                        }}
                      />
                    </CCol>
                    <CCol sm="2" md="2" lg="2">
                      <div className="text-center">
                        <CButton
                          className="pt-2 pb-2 ms-2"
                          type="button"
                          color="info"
                          variant="outline"
                          id="btn-scan-barcode"
                          onClick={() =>
                            this.setState({
                              showScanner: !showScanner,
                              stopStreaming: !stopStreaming,
                            })
                          }
                        >
                          {showScanner ? (
                            <GrIcons.GrClose size="24" />
                          ) : (
                            <BiIcons.BiBarcodeReader size="24" />
                          )}
                        </CButton>
                      </div>
                    </CCol>
                  </CRow>

                  {/* </div> */}

                  <div className={showScanner ? " d-block mt-3" : " d-none"}>
                    {showScanner ? (
                      <BarcodeScannerComponent
                        delay={500}
                        facingMode
                        stopStream={stopStreaming}
                        torch="true"
                        onUpdate={(err, result) => {
                          if (result) this.handleDecodeBarcode(result.text)
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </CCol>
                <CCol sm="12" md="12" lg="4" className="text-center">
                  <div>
                    <CFormLabel htmlFor="dateTime ">
                      <BsIcons.BsCalendar size={18} />
                      <span className="ps-2">Start and End Date of Promo</span>
                    </CFormLabel>
                  </div>

                  <DateRange
                    id="dateTime"
                    editableDateInputs={true}
                    onChange={this.handleDateOnChange}
                    moveRangeOnFirstSelection={false}
                    ranges={selectionRange}
                    required
                  />
                  {dateValidate && (
                    <div>
                      <CFormLabel htmlFor="dateTime ">
                        <span className="ps-2" style={{ color: "red" }}>
                          {dateValidate}
                        </span>
                      </CFormLabel>
                    </div>
                  )}
                </CCol>
                <CCol sm="12" md="6" lg="4">
                  <h5>Product Details</h5>
                  <CCallout color="info">
                    <div className="d-flex flex-column h-50">
                      <div className="d-flex  align-items-center ">
                        <span style={fontStyle} className="text-black-50">
                          Product Name:
                        </span>
                        <h6 className="ps-2 m-0">{products.productName}</h6>
                      </div>

                      <div style={fontStyle} className="mt-2">
                        <span className="text-black-50 me-2">
                          Product Price:
                        </span>
                        <span style={{ fontWeight: "500" }}>
                          &#8369;
                          {products.productPrice &&
                            products.productPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="d-flex flex-column align-items-center mt-2">
                        <span style={fontStyle} className="text-black-50">
                          Product Barcode:
                        </span>
                        <h6 className="ps-2 m-0">
                          {products.barcode && (
                            <Barcode
                              value={String(products.barcode)}
                              height={50}
                              width={1}
                              fontSize={14}
                              margin={7}
                              background="#f5f5f548"
                            />
                          )}
                        </h6>
                      </div>
                    </div>
                  </CCallout>
                  <CInputGroup>
                    <CCol xs="12" sm="12" md="12" lg="12">
                      <CFormFloating className="mb-3 text-dark ">
                        <CFormControl
                          name="percentage"
                          type="number"
                          autoCorrect="false"
                          id="floatingPercentage"
                          placeholder="Percentage"
                          onChange={this.handleOnChange}
                          required
                          className="rounded-pill  ps-4 pe-4"
                          value={percentage}
                        />
                        <CFormLabel
                          htmlFor="floatingPercentage "
                          className="ps-3 pe-4"
                        >
                          <FaIcons.FaPercent size={18} />
                          <span className="ps-2">Discount Percent</span>
                        </CFormLabel>
                        <CFormFeedback invalid>
                          Please provide a valid Percentage
                        </CFormFeedback>
                      </CFormFloating>
                    </CCol>
                  </CInputGroup>
                  <CInputGroup>
                    <CCol xs="12" sm="12" md="12" lg="12">
                      <CFormFloating className="mb-3 text-dark ">
                        <CFormControl
                          name="quantity"
                          type="number"
                          autoCorrect="false"
                          id="floatingQuantity"
                          placeholder="Quantity"
                          onChange={this.handleOnChange}
                          value={quantity}
                          required
                          className="rounded-pill  ps-4 pe-4"
                        />
                        <CFormLabel
                          htmlFor="floatingQuantity "
                          className="ps-3 pe-4"
                        >
                          <FaIcons.FaBoxes size={18} />
                          <span className="ps-2">Product Quantity</span>
                        </CFormLabel>
                        <CFormFeedback invalid>
                          Please provide a valid Quantity
                        </CFormFeedback>
                      </CFormFloating>
                    </CCol>
                  </CInputGroup>
                </CCol>
              </CRow>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="secondary"
              variant="ghost"
              onClick={() => this.props.setPromoModal(false, "close")}
              className="text-body"
            >
              Close
            </CButton>
            <CButton
              type="submit"
              color="info"
              form="a-form"
              className="d-flex justify-content-center align-items-center position-relative "
              disabled={loading}
            >
              {loading ? (
                <CSpinner size="sm" />
              ) : (
                <span className="d-flex align-items-center login-icon me-2">
                  {icon}
                </span>
              )}
              {action === "Edit" ? "Update" : "Create"} Promo
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
    productResponse: state.productResponser,

    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  clearMessage,
  setPromoModal,
  searchProductByBarcodeOrName,
  savePromo,
  updatePromo,
})(PromoModal)
