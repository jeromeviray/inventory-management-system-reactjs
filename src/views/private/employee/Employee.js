import React, { Component } from 'react'
import {
    CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody, CTableCaption,
    CButton
} from '@coreui/react'
//icons
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as FaIcons from "react-icons/fa"
import { connect } from 'react-redux'
// action
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { setAlertModal, addEmployeeModal } from 'src/service/apiActions/modalAction/modalAction'
import { getEmployees } from 'src/service/apiActions/employeeAction/EmployeeAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
//component modal
import AlertModal from 'src/components/modals/alert/AlertModal'
import EmployeeModal from 'src/components/modals/employee/EmployeeModal'

export class Employee extends Component {
    state = {
        employee: [],
        visible: false,
        token: "",
        message: '',
        action: '',
        status: "",

    }
    componentDidMount() {
        let { type, accessToken } = this.props.userResponse.credentials;
        let token = type + accessToken;
        this.setState({
            token: token
        })
        this.props.getEmployees(token).catch(() => {
            let failMessage = this.props.messageResponse;
            if (failMessage.status > 400 && failMessage.status <= 403) {
                this.props.logout();
            }
            this.setState({
                message: failMessage.data.message
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageEmployeeResponse(prevProps, prevState);
    }
    manageEmployeeResponse = (prevProps, prevState) => {
        if (prevProps.employeeResponse !== this.props.employeeResponse) {
            let { status, action, data } = this.props.employeeResponse;
            if (status === 200 && action === "GETEMPLOYEES") {
                this.setState({
                    employee: data.employees
                })
            } else if (status > 400 && status <= 403) {
                this.props.clearMessage();

                this.props.logout();
            }
        }
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
        let { employee, visible, message } = this.state;
        console.log(employee);
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
                        Add Employee Account
                    </span>
                </CButton>
                <CTable striped
                    hover
                    className="shadow-sm "
                    responsive="md"
                    bordered
                    align="middle" >
                    <CTableCaption>List of Brand: <b>{employee.length}</b></CTableCaption>

                    <CTableHead color="dark">
                        <CTableRow className="text-center">
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Email Address</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Created Date</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody className="text-center" color="light" >
                        {message && (
                            <CTableRow className="text-center">
                                <CTableDataCell colSpan="6">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </CTableDataCell>
                            </CTableRow>
                        )}
                        {employee.length > 0 ?
                            <>
                                {employee.map((employee, index) => {
                                    let { firstName, lastName, phoneNumber, account } = employee
                                    return (
                                        <CTableRow className="text-center" key={index}>
                                            <CTableDataCell>{firstName + " " + lastName}</CTableDataCell>
                                            <CTableDataCell>{phoneNumber}</CTableDataCell>
                                            <CTableDataCell>{account.username}</CTableDataCell>
                                            <CTableDataCell>{account.email}</CTableDataCell>
                                            <CTableDataCell>{account.created}</CTableDataCell>
                                            <CTableHeaderCell className="text-center" colSpan="1">
                                                {/* <CButton
                                                    color="info"
                                                    className="me-2"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => this.props.addEmployeeModal(!visible, 'Edit', 'category', <MdIcons.MdModeEdit size="20" className="me-2" />)}
                                                >
                                                    <MdIcons.MdModeEdit size="20" />
                                                </CButton> */}
                                                <CButton

                                                    color="danger"
                                                    className="ms-2"
                                                    variant="ghost"
                                                    onClick={() => this.props.setAlertModal(!visible, "DELETEEMPLOYEE", "EMPLOYEE", account.id)}
                                                    size="sm" >
                                                    <MdIcons.MdDelete size="20" />
                                                </CButton>
                                            </CTableHeaderCell>
                                        </CTableRow>
                                    )
                                })}


                            </> :
                            <CTableRow>
                                <CTableDataCell colSpan="6">No data</CTableDataCell>
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
        modalVisible: state.modalVisibleResponse,
        userResponse: state.userResponse,
        messageResponse: state.messageResponse,
        employeeResponse: state.employeeResponse
    }
}
export default connect(mapStateToProps, {
    setAlertModal, addEmployeeModal,
    getEmployees, logout, clearMessage
})(Employee)
