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
    CFormLabel,

} from '@coreui/react'
//action
import { addEmployeeModal } from 'src/service/apiActions/modalAction/modalAction'

import { connect } from 'react-redux'

export class EmployeeModal extends Component {
    state = {
        visible: false,
        icon: '',
        action: '',
        employee: this.employeeState,
        loading: false
    }
    employeeState = {
        firstName: "",
        lastName: "",
        contact: "",
        address: "",
        username: "",
        password: "",

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
    render() {
        let { visible, firstName, lastName, contact, address, username, password, icon, action, loading } = this.state;

        return (
            <div>
                <CModal visible={visible}>
                    <CModalHeader onDismiss={() => this.props.addEmployeeModal(false, 'close', '', '')}>
                        <CModalTitle >
                            <div className="d-flex align-items-center">
                                {icon}
                                {action + " Employee"}
                            </div>

                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            {/* <div className="mb-3">
                                <CFormFloating className="mb-3">
                                    <CFormControl
                                        name="branchLocation"
                                        value={branchLocation}
                                        onChange={this.handleOnChange}
                                        type="text"
                                        id="floatingBranchInput"
                                        placeholder="Enter Branch Location"
                                    />
                                    <CFormLabel htmlFor="floatingBranchInput">Branch Location</CFormLabel>
                                </CFormFloating>
                            </div> */}
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="dark" variant="ghost" onClick={() => this.props.addEmployeeModal(false, 'close', '', '')}>
                            Close
                        </CButton>
                        <CButton color="primary"
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
        modalVisible: state.modalVisibleResponse
    }
}
export default connect(mapStateToProps, {
    addEmployeeModal
})(EmployeeModal)
