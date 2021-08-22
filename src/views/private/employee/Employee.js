import React, { Component } from 'react'
import {
    CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody, CTableCaption,
    CButton
} from '@coreui/react'
//icons
import * as MdIcons from 'react-icons/md'
import * as FaIcons from "react-icons/fa"
import { connect } from 'react-redux'
// action
import { setAlertModal, addEmployeeModal } from 'src/service/apiActions/modalAction/modalAction'
//component modal
import AlertModal from 'src/components/admin/products/modals/AlertModal'
import EmployeeModal from 'src/components/admin/products/modals/EmployeeModal'

export class Employee extends Component {
    state = {
        employee: [{
            "name": "naem"
        }],
        visible: false,
    }
    renderAlerModal() {
        return (
            <AlertModal />
        )
    }
    renderEmployeeModal() {
        return (
            <EmployeeModal />
        )
    }
    render() {
        let { employee, visible } = this.state;
        return (

            <div>
                {this.renderAlerModal()}
                {this.renderEmployeeModal()}
                <CButton
                    shape="rounded-pill"
                    color="primary"
                    variant="ghost"
                    className="d-flex justify-content-center align-items-center mb-3"
                    onClick={() => this.props.addEmployeeModal(!visible, 'Add', '', <FaIcons.FaPlus size={20} className="me-2" />)}
                >

                    <FaIcons.FaPlus size={20} />
                    <span style={{ marginLeft: "10px" }}>
                        Add Employee
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
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody className="text-center" color="light" >
                        {employee.length > 0 ?
                            <>
                                <CTableRow className="text-center">
                                    <CTableDataCell>Otto</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                    <CTableDataCell>Otto</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                    <CTableHeaderCell className="text-center" colSpan="1">
                                        <CButton
                                            color="info"
                                            className="me-2"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => this.props.addEmployeeModal(!visible, 'Edit', 'category', <MdIcons.MdModeEdit size="20" className="me-2" />)}
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
                                    </CTableHeaderCell>
                                </CTableRow>

                            </> :
                            <CTableRow>
                                <CTableDataCell colSpan="4">No data</CTableDataCell>
                            </CTableRow>
                        }
                    </CTableBody>
                </CTable>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        modalVisible: state.modalVisibleResponse
    }
}
export default connect(mapStateToProps, {
    setAlertModal, addEmployeeModal
})(Employee)
