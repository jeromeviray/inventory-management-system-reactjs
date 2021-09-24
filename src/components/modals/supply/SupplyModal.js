import React, { Component } from 'react'
import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CButton,
    CModalTitle,
    CSpinner,
    CForm,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell,
    CTableBody,
    CTableCaption,
    // CFormFloating,
    // CFormControl,
    // CFormLabel,
    CToast,
    CToastBody,
    CToastClose,
    CToaster,
    CFormSelect, CRow, CCol,
    CFormControl,
    CInputGroup
} from "@coreui/react"
//action 
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { setSupplyModal } from 'src/service/apiActions/modalAction/modalAction'
import { getSuppliers } from 'src/service/apiActions/supplierAction/supplierAction'
//icons
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"

import { connect } from 'react-redux'
export class SupplyModal extends Component {
    state = {
        loading: false,
        visible: false,
        icon: '',
        action: '',
        suppliers: [],
        message: '',
        toast: ''
    }

    getSuppliers = () => {
        this.props.getSuppliers().catch(() => {
            let { status, data } = this.props.messageResponse
            if (status > 400 && status <= 403) {
                setInterval(() => {
                    this.props.logout()
                    this.props.clearMessage()
                }, 1000)

            }
            this.setState({
                message: data.message,
                toast: this.toastComponent()
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageSupplyModal(prevProps, prevState);
        this.manageSupplierResponse(prevProps, prevState);
    }

    manageSupplyModal = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            this.getSuppliers();

            let { visible, action, icon, supply } = this.props.modalVisible
            if (action === "Add") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon,
                })
            } else if (action === "Edit") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon,
                })
            } else {
                this.setState({
                    visible: visible,
                    action: "",
                    icon: "",
                    supplies: []
                })
            }
        }
    }
    manageSupplierResponse = (prevProps, prevState) => {
        if (prevProps.supplierResponse !== this.props.supplierResponse) {
            let { status, action, data } = this.props.supplierResponse
            if (action === "GET_SUPPLIERS" && status === 200) {
                this.setState({
                    suppliers: data.suppliers,
                })
            }
        }
    }
    toastComponent() {
        let { data, status } = this.props.messageResponse
        let color = ""
        if (status === 200) {
            color = "success"
        } else if (status > 400 && status <= 403) {
            color = "danger"
        } else if (status > 405 && status <= 500) {
            color = "warning"
        } else {
            color = "primary"
        }
        return (
            <CToast
                color={color}
                className="text-white align-items-center"
                delay={3000}
            >
                <div className="d-flex">
                    <CToastBody>{data.message}</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                </div>
            </CToast>
        )
    }
    render() {
        let { loading, visible, action, icon, suppliers, message, toast } = this.state;
        return (
            <div>
                <CToaster push={toast} placement="top-end" />
                <CModal visible={visible} size="xl">
                    <CModalHeader
                        onDismiss={() => {
                            this.props.setSupplyModal(false, "close", "", "")
                            this.props.clearMessage()
                        }}
                    >
                        <CModalTitle>
                            <div className="d-flex align-items-center">
                                {icon}
                                {action + " Supplies"}
                            </div>
                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm id="supply-form" >
                            <CRow>
                                <CCol>
                                    <CFormSelect aria-label="Suppliers Name" className="mb-3" >
                                        {suppliers && suppliers.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>{item.name}</option>
                                            )
                                        })}
                                    </CFormSelect>
                                </CCol>
                                <CCol>
                                    <CForm id="search-product-form">
                                        <CInputGroup>
                                            <CFormControl
                                                size="sm"
                                                type="text"
                                                id="floatingInput"
                                                placeholder="Search Product (e.g: Barcode Number or Product Name)"
                                                className="p-2"
                                            />
                                            <CButton
                                                type="button"
                                                color="info"
                                                variant="outline"
                                                id="button-addon2"
                                                for="search-product-form"
                                            >
                                                <FaIcons.FaSearch />
                                            </CButton>
                                        </CInputGroup>
                                    </CForm>
                                </CCol>
                            </CRow>

                            <CTable
                                striped
                                hover
                                className="shadow-sm "
                                responsive="md"
                                bordered
                                align="middle"
                            >
                                <CTableCaption>
                                    List of Brand: <b>1</b>
                                </CTableCaption>
                                <CTableHead color="dark">
                                    <CTableRow className="text-center">
                                        <CTableHeaderCell scope="col">
                                            Product Name
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            Product Barcode
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            Qunatity Recieved
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody className="text-center" color="light">

                                    {message && (
                                        <CTableRow className="text-center">
                                            <CTableDataCell colSpan="4">
                                                <div className="alert alert-danger" role="alert">
                                                    {message}
                                                </div>
                                            </CTableDataCell>
                                        </CTableRow>
                                    )}
                                </CTableBody>
                            </CTable>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            color="dark"
                            variant="ghost"
                            onClick={() => {
                                this.props.setSupplyModal(false, "close", "", "")
                                this.props.clearMessage()
                            }}
                        >
                            Close
                        </CButton>
                        <CButton
                            type="submit"
                            color="primary"
                            disabled={loading}
                            form="supply-form"
                        >
                            {loading && <CSpinner size="sm" className="ms-1" />}
                            {/* {action === "Edit" ? "Update" : "Create"} Supplier */}
                            Save Incoming Supply
                        </CButton>
                    </CModalFooter>
                </CModal>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        modalVisible: state.modalVisibleResponse,
        messageResponse: state.messageResponse,
        supplierResponse: state.supplierResponse,

    }
}
export default connect(mapStateToProps, {
    logout,
    clearMessage,
    setSupplyModal,
    getSuppliers,

})(SupplyModal)
