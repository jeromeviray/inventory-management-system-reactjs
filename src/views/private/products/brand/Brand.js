import React, { Component } from 'react'
import {
    CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody, CTableCaption,
    CButton
} from '@coreui/react'
//icons
import * as MdIcons from 'react-icons/md'
import * as FaIcons from "react-icons/fa"
import { connect } from 'react-redux'
//action
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { setAlertModal, addBrandModal } from 'src/service/apiActions/modalAction/modalAction'
import { getBrands } from 'src/service/apiActions/brandAction/brandAction'
//modal component
import AlertModal from 'src/components/admin/products/modals/AlertModal'
import BrandModal from 'src/components/admin/products/modals/BrandModal'
import Roles from 'src/router/config'


export class Brand extends Component {
    state = {
        visible: false,
        brands: [],
        message: '',
        status: '',
        permission: '',
    }
    componentDidMount() {
        let { type, accessToken, roles } = this.props.userResponse.credentials;
        let token = type + accessToken;

        this.setState({
            permission: roles && roles.roleName
        })
        this.props.getBrands(token).catch(() => {
            let failMessage = this.props.messageResponse
            if (failMessage.status > 400 && failMessage.status <= 403) {
                this.props.logout();

            }
            this.setState({
                message: failMessage.data.message
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageBrandsResponse(prevProps, prevState);
    }
    componentWillUnmount() {
        this.setState({
            visible: false,
            brands: [],
            message: '',
            status: '',
            permission: ''
        })
        this.props.addBrandModal(null, null, null, null)
    }
    manageBrandsResponse = (prevProps, prevState) => {
        if (prevProps.brandResponse !== this.props.brandResponse) {
            let { status, action, data } = this.props.brandResponse;
            if (status === 200 && action === "GETBRANDS") {
                this.setState({
                    brands: data.brands
                })
            } else if (status > 400 && status <= 403) {
                this.props.clearMessage();

                this.props.logout();
            }
        }
    }
    renderAlertModal() {
        return (
            < AlertModal />
        )
    }
    renderBrandModal() {
        return (
            <BrandModal />
        )
    }
    render() {
        const { visible, brands, message, permission } = this.state;
        let rowBrand = brands.length > 0 && brands.map((brand, index) => {
            return (
                <CTableRow className="text-center" key={index}>
                    <CTableDataCell>{brand.brand}</CTableDataCell>
                    <CTableDataCell className="text-center w-25" colSpan="1">
                        <CButton
                            color="info"
                            className="me-2"
                            variant="ghost"
                            size="sm"
                            onClick={() => this.props.addBrandModal(!visible, 'Edit', brand, <MdIcons.MdModeEdit size="20" className="me-2" />)}
                        >
                            <MdIcons.MdModeEdit size="20" />
                        </CButton>
                        {permission === Roles.SUPER_ADMIN ?
                            <CButton
                                color="danger"
                                className="ms-2"
                                variant="ghost"
                                onClick={() => this.props.setAlertModal(!visible, "DELETEBRAND", "BRAND", brand.id)}
                                size="sm" >
                                <MdIcons.MdDelete size="20" />
                            </CButton> :
                            null
                        }
                    </CTableDataCell>
                </CTableRow>
            )
        })
        return (
            <div>
                {this.renderBrandModal()}
                {this.renderAlertModal()}
                <CButton
                    shape="rounded-pill"
                    color="primary"
                    variant="ghost"
                    className="d-flex justify-content-center align-items-center mb-3"
                    onClick={() => this.props.addBrandModal(!visible, 'Add', '', <FaIcons.FaPlus size={20} className="me-2" />)}
                >

                    <FaIcons.FaPlus size={20} />
                    <span style={{ marginLeft: "10px" }}>
                        Add Brand
                    </span>
                </CButton>
                <CTable striped
                    hover
                    className="shadow-sm "
                    responsive="md"
                    bordered
                    align="middle" >
                    <CTableCaption>List of Brand: <b>{brands.length}</b></CTableCaption>
                    <CTableHead color="dark">
                        <CTableRow className="text-center">
                            <CTableHeaderCell scope="col">Brand Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody className="text-center" color="light">
                        {brands.length > 0 ? rowBrand :
                            <CTableRow>
                                <CTableDataCell colSpan="4">No data</CTableDataCell>
                            </CTableRow>}
                        {message && (
                            <CTableRow className="text-center">
                                <CTableDataCell colSpan="4">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </CTableDataCell>
                            </CTableRow>)}
                    </CTableBody>
                </CTable>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modelVisible: state.modelVisibleResponse,
        brandResponse: state.brandResponse,
        userResponse: state.userResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    setAlertModal, addBrandModal,
    getBrands,
    logout,
    clearMessage
})(Brand)
