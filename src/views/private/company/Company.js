import React, { Component } from 'react'
import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CTableCaption,
    CButton,
    CContainer
} from '@coreui/react'
import { withRouter } from 'react-router'
//icons
import * as MdIcons from 'react-icons/md'
import * as FaIcons from "react-icons/fa"
//redux
import { connect } from 'react-redux'
//action
import { setAlertModal, addBranchModal } from 'src/service/apiActions/modalAction/modalAction'

//modal alert
import AlertModal from 'src/components/admin/products/modals/AlertModal'

//add branch modal
import BranchModal from 'src/components/admin/products/modals/BranchModal'


export class Company extends Component {
    state = {
        visible: false
    }
    renderAlertModal() {
        return (
            < AlertModal />
        )
    }
    renderBranchModal() {
        return (
            <BranchModal />
        )
    }
    render() {
        let { visible } = this.state;
        return (
            <  >
                {this.renderAlertModal()}
                {this.renderBranchModal()}

                <CButton
                    shape="rounded-pill"
                    color="primary"
                    variant="ghost"
                    className="d-flex justify-content-center align-items-center mb-3"
                    onClick={() => this.props.addBranchModal(!visible, 'Add', '', <FaIcons.FaPlus size={20} className="me-2" />)}
                >

                    <FaIcons.FaPlus size={20} />
                    <span style={{ marginLeft: "10px" }}>
                        Add Branch
                    </span>
                </CButton>

                <CTable
                    striped
                    hover
                    className="shadow-sm "
                    responsive="md"
                    bordered
                    align="middle" >
                    <CTableCaption>List of Branch: <b>12</b></CTableCaption>
                    <CTableHead color="dark">

                        <CTableRow className="text-center">
                            <CTableHeaderCell scope="col">Branch Location</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Products</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody color="light" >
                        <CTableRow className="text-center">
                            <CTableDataCell>Otto</CTableDataCell>
                            <CTableDataCell>100</CTableDataCell>
                            <CTableDataCell className="text-center w-25" colSpan="1">
                                <CButton
                                    color="info"
                                    className="me-2"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => this.props.addBranchModal(!visible, 'Edit', '', <MdIcons.MdModeEdit size="20" className="me-2" />)}
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
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        modalVisible: state.modalVisibleResponse,

    }
}
export default withRouter(connect(mapStateToProps, {
    setAlertModal,
    addBranchModal
})(Company))
