import React, { Component } from 'react'
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
    CToast,
    CToastBody,
    CToastClose,
    CToaster,
    CFormSelect,
    CInputGroup,
    CFormFeedback
} from "@coreui/react"
import { connect } from 'react-redux';
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"

//action
import { logout } from 'src/service/apiActions/userAction/userAction';
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction';
import { setPromoModal } from 'src/service/apiActions/modalAction/modalAction';
import { DateRange } from 'react-date-range';
import { searchProductByBarcodeOrName } from 'src/service/apiActions/productAction/productAction';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { result } from 'lodash';


export class PromoModal extends Component {
    state = {
        action: '',
        message: '',
        visible: false,
        icon: '',
        loading: false,
        showScanner: false,
        validation: false,
        promo: this.promoState,
        selectionRange: [{
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        }],
        query: '',
        page: 0,
        limit: 10,
        products: [],
        items: []
    }
    promoState = {
        productId: '',
        quantity: 0,
        percentage: 0,
        startDate: '',
        endDate: ''
    }
    onResetValue = () => {
        this.setState(() => this.promoState)
    }
    handleOnChange = (event) => {
        let name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    componentDidMount() {
        const { query, page, limit } = this.state;
        this.searchProduct(query, page, limit);
    }
    searchProduct(query, page, limit) {
        this.props.searchProductByBarcodeOrName(query, page, limit).catch(() => {
            let { status, data } = this.props.messageResponse
            if (status > 400 && status <= 403) {
                setInterval(() => {
                    this.props.logout()
                    this.props.clearMessage()
                }, 1000)
                this.setState({
                    message: data.message,

                })
            }
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.managePromoModal(prevProps, prevState)
        this.manageProductResponse(prevProps, prevState)
    }
    manageProductResponse(prevProps, prevState) {
        if (prevProps.productResponse !== this.props.productResponse) {
            let { action, status, data } = this.props.productResponse
            if (action === "SEARCH_PRODUCT") {
                if (status === 200) {
                    this.setState({
                        items: data.products.data,
                        // products: data.products.data
                    })
                }
            }
        }
    }
    managePromoModal = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { visible, action, promo, icon } = this.props.modalVisible
            const { query, page, limit } = this.state;
            if (action === "Add") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon,
                })
                this.searchProduct(query, page, limit);
            } else if (action === "Edit") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon,

                })
            } else {
                this.setState({
                    visible: visible,

                })
            }
        }
    }
    handleOnSearch = (string, results) => {
        const { page, limit } = this.state;
        this.searchProduct(string, page, limit)
    }
    handleOnSelect = (item) => {
        const { page, limit } = this.state;

        this.setState({
            products: item
        })
        this.searchProduct(item.productName, page, limit)

    }
    handleDateOnChange = (range) => {
        this.setState({
            selectionRange: [range.selection],
            startDate: String(range.selection.startDate),
            endDate: String(range.selection.endDate)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            validation: true,
            loading: true
        })
    }
    render() {
        let {
            action,
            message,
            visible,
            icon,
            loading,
            validation,
            selectionRange,
            products,
            items,
            percentage,
            quantity
        } = this.state;
        return (
            <>
                <CModal size="xl" visible={visible} fullscreen="lg" scrollable>
                    <CModalHeader
                        onDismiss={() => {
                            this.props.setPromoModal(false, "close")
                        }}
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
                                        }}
                                    />
                                    <div className="p-2">
                                        {products &&
                                            (
                                                <CContainer>
                                                    <h3>{products.productName}</h3>
                                                </CContainer>
                                            )
                                        }
                                    </div>
                                </CCol>
                                <CCol sm="12" md="12" lg="4" className="text-center">
                                    <div>
                                        <CFormLabel
                                            htmlFor="dateTime "
                                        >
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
                                </CCol>
                                <CCol sm="12" md="6" lg="4">
                                    <CInputGroup>
                                        <CCol xs="12" sm="12" md="12" lg="12">
                                            <CFormFloating className="mb-3 text-dark ">
                                                <CFormControl
                                                    name="productId"
                                                    type="number"
                                                    autoCorrect="false"
                                                    id="floatingInput"
                                                    placeholder="username"
                                                    onChange={this.handleOnChange}
                                                    required
                                                    className="rounded-pill  ps-4 pe-4"
                                                    value={percentage}

                                                />
                                                <CFormLabel
                                                    htmlFor="floatingInput "
                                                    className="ps-3 pe-4"
                                                >
                                                    <FaIcons.FaPercent size={18} />
                                                    <span className="ps-2">Discount Percent e.g: 10</span>
                                                </CFormLabel>
                                                <CFormFeedback invalid>Please provide a valid Percentage</CFormFeedback>
                                            </CFormFloating>
                                        </CCol>
                                    </CInputGroup>
                                    <CInputGroup>
                                        <CCol xs="12" sm="12" md="12" lg="12">
                                            <CFormFloating className="mb-3 text-dark ">
                                                <CFormControl
                                                    name="productId"
                                                    type="number"
                                                    autoCorrect="false"
                                                    id="floatingInput"
                                                    placeholder="username"
                                                    onChange={this.handleOnChange}
                                                    value={quantity}

                                                    required
                                                    className="rounded-pill  ps-4 pe-4"
                                                />
                                                <CFormLabel
                                                    htmlFor="floatingInput "
                                                    className="ps-3 pe-4"
                                                >
                                                    <FaIcons.FaBoxes size={18} />
                                                    <span className="ps-2">Product Quantity</span>
                                                </CFormLabel>
                                                <CFormFeedback invalid>Please provide a valid Quantity</CFormFeedback>
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
                            onClick={() => this.props.setPromoModal(!visible, "close")}
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

        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    logout,
    clearMessage,
    setPromoModal,
    searchProductByBarcodeOrName
})(PromoModal)
