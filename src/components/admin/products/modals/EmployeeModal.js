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
    CFormFloating,
    CFormControl,
    CFormLabel, CCol,
    CRow, CToast,
    CToastBody, CToastClose, CToaster,

} from '@coreui/react'
//action
import { addEmployeeModal } from 'src/service/apiActions/modalAction/modalAction'
import { saveEmployee } from 'src/service/apiActions/employeeAction/EmployeeAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
//icons
import * as FaIcons from "react-icons/fa"
import { connect } from 'react-redux'

export class EmployeeModal extends Component {
    state = {
        visible: false,
        icon: '',
        action: '',
        employee: this.employeeState,
        loading: false,
        type: 'password',
        toast: '',
    }
    employeeState = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        phoneNumber: "",
        password: ''

    }
    componentDidUpdate(prevProps, prevState) {
        this.manageEmployeeModal(prevProps, prevState)
    }
    manageEmployeeModal = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { visible, action, employee, icon } = this.props.modalVisible;
            if (action === "Add") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon
                })
            } else if (action === "Edit") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon,
                })
            } else {
                this.setState({
                    visible: visible
                })
            }
        }
    }
    handleOnChange = (event) => {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    handleShowPassword = (event) => {
        const { type } = this.state
        event.preventDefault()
        this.setState({
            type: type === "password" ? "text" : "password",
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        let { firstName, lastName, email, phoneNumber, username, password } = this.state;
        let { type, accessToken } = this.props.userResponse.credentials;
        let token = type + accessToken;
        this.setState({
            loading: true
        });
        this.props.saveEmployee(firstName, lastName, email, phoneNumber, username, password, token)
            .then(() => {
                let { status } = this.props.messageResponse;
                if (status === 200) {
                    this.setState({
                        loading: false,
                        toast: this.toastComponent()
                    })
                }
                setInterval(() => {
                    this.props.clearMessage();
                    window.location.reload();
                }, 1000)
            })
            .catch(() => {
                let { status, } = this.props.messageResponse;

                if (status > 400 && status <= 403) {
                    this.setState({
                        loading: false,
                        toast: this.toastComponent()
                    })
                    setInterval(() => {
                        this.props.logout();
                        this.props.clearMessage();
                    }, 1000)

                } else {
                    this.setState({
                        loading: false,
                        toast: this.toastComponent()
                    })
                }
            })
    }
    toastComponent() {
        let { data, status } = this.props.messageResponse;
        let color = '';
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
            <CToast color={color} className="text-white align-items-center" delay={3000}>
                <div className="d-flex">
                    <CToastBody>{data.message}</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                </div>
            </CToast>
        )
    }
    render() {
        let { visible, firstName, lastName, type, email, username, password, phoneNumber, icon, action, loading, toast } = this.state;

        return (
            <div>
                <CToaster push={toast} placement="top-end" />

                <CModal visible={visible} size="lg">
                    <CModalHeader onDismiss={() => this.props.addEmployeeModal(false, 'close', '', '')}>
                        <CModalTitle >
                            <div className="d-flex align-items-center">
                                {icon}
                                {action + " Employee Account"}
                            </div>

                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm onSubmit={this.handleOnSubmit} id="employee">
                            <div className="mb-3">
                                <CRow>
                                    <CCol sm="12" lg="6">
                                        <CFormFloating className="mb-3">
                                            <CFormControl
                                                name="firstName"
                                                value={firstName}
                                                onChange={this.handleOnChange}
                                                type="text"
                                                id="floatingFirstNameInput"
                                                placeholder="Enter First Name"
                                            />
                                            <CFormLabel htmlFor="floatingFirstNameInput">First name</CFormLabel>
                                        </CFormFloating>
                                    </CCol >
                                    <CCol sm="12" lg="6">
                                        <CFormFloating className="mb-3">
                                            <CFormControl
                                                name="lastName"
                                                value={lastName}
                                                onChange={this.handleOnChange}
                                                type="text"
                                                id="floatingLastNameInput"
                                                placeholder="Enter Last Name"
                                            />
                                            <CFormLabel htmlFor="floatingLastNameInput">Last name</CFormLabel>
                                        </CFormFloating>
                                    </CCol>
                                    <CCol sm="12" lg="6">
                                        <CFormFloating className="mb-3">
                                            <CFormControl
                                                name="phoneNumber"
                                                value={phoneNumber}
                                                onChange={this.handleOnChange}
                                                type="number"
                                                id="floatingNumberInput"
                                                placeholder="Enter First Name"
                                            />
                                            <CFormLabel htmlFor="floatingNumberInput">Phone Number</CFormLabel>
                                        </CFormFloating>
                                    </CCol>
                                    <CCol sm="12" lg="6">
                                        <CFormFloating className="mb-3">
                                            <CFormControl
                                                name="email"
                                                value={email}
                                                onChange={this.handleOnChange}
                                                type="email"
                                                id="floatingemailInput"
                                                placeholder="Enter email"
                                            />
                                            <CFormLabel htmlFor="floatingemailInput">Email</CFormLabel>
                                        </CFormFloating>
                                    </CCol>
                                    <CCol sm="12" lg="6">
                                        <CFormFloating className="mb-3">
                                            <CFormControl
                                                name="username"
                                                value={username}
                                                onChange={this.handleOnChange}
                                                type="text"
                                                id="floatingUsernameInput"
                                                placeholder="Enter Username"
                                            />
                                            <CFormLabel htmlFor="floatingUsernameInput">Username</CFormLabel>
                                        </CFormFloating>
                                    </CCol>
                                    <CCol sm="12" lg="6">
                                        <CFormFloating className="text-dark position-relative">
                                            <CFormControl
                                                name="password"
                                                type={type}
                                                id="floatingPassword"
                                                autoCorrect="false"
                                                placeholder="Password"
                                                onChange={this.handleOnChange}
                                                value={password}
                                                required
                                            />
                                            <CFormLabel
                                                htmlFor="exampleFormControlTextarea1 "
                                            >
                                                <span >Password</span>
                                            </CFormLabel>
                                            <span
                                                onClick={this.handleShowPassword}
                                                className="position-absolute top-50 end-0 translate-middle-y ps-4 pe-4"
                                            >
                                                {type === "password" ? (
                                                    <FaIcons.FaEyeSlash size={20} />
                                                ) : (
                                                    <FaIcons.FaEye size={20} />
                                                )}
                                            </span>
                                        </CFormFloating>
                                    </CCol>
                                </CRow>

                            </div>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="dark" variant="ghost" onClick={() => this.props.addEmployeeModal(false, 'close', '', '')}>
                            Close
                        </CButton>
                        <CButton color="primary"
                            type="submit"
                            form="employee"
                            disabled={loading}
                        >
                            {loading && <CSpinner size="sm" className="ms-1" />}
                            Save {action === "Edit" ? "Changes" : "Empolyee"}
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
        userResponse: state.userResponse
    }
}
export default connect(mapStateToProps, {
    addEmployeeModal,
    saveEmployee,
    logout,
    clearMessage
})(EmployeeModal)
