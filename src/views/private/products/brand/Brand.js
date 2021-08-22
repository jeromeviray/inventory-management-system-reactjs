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
import { setAlertModal, addBrandModal } from 'src/service/apiActions/modalAction/modalAction'
//modal component
import AlertModal from 'src/components/admin/products/modals/AlertModal'
import BrandModal from 'src/components/admin/products/modals/BrandModal'


export class Brand extends Component {
    state = {
        visible: false
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
        const { visible } = this.state;
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
                    <CTableCaption>List of Brand: <b>12</b></CTableCaption>

                    <CTableHead color="dark">
                        <CTableRow className="text-center">
                            <CTableHeaderCell scope="col">Brand Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Product</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody className="text-center">

                        <CTableRow className="text-center">
                            <CTableDataCell>Otto</CTableDataCell>
                            <CTableDataCell>100</CTableDataCell>
                            <CTableDataCell className="text-center w-25" colSpan="1">
                                <CButton
                                    color="info"
                                    className="me-2"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => this.props.addBrandModal(!visible, 'Edit', '', <MdIcons.MdModeEdit size="20" className="me-2" />)}
                                >
                                    <MdIcons.MdModeEdit size="20" />
                                </CButton>
                                <CButton
                                    color="danger"
                                    className="ms-2"
                                    variant="ghost"
                                    onClick={() => this.props.setAlertModal(!visible)}
                                    size="sm" >
                                    <MdIcons.MdDelete size="20" />
                                </CButton>
                            </CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modelVisible: state.modelVisibleResponse
    }
}
export default connect(mapStateToProps, {
    setAlertModal, addBrandModal
})(Brand)
