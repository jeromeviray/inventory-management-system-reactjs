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
//redux
import { connect } from 'react-redux'
//action
import {
    setAlertModal,
    addBranchModal
} from 'src/service/apiActions/modalAction/modalAction'


export class BranchModal extends Component {
    state = {
        visible: false,
        action: '',
        icon: '',
        branchLocation: '',
        loading: true,
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageModalAlert(prevProps, prevState)
    }
    manageModalAlert = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { visible, action, branch, icon } = this.props.modalVisible;
            if (action === "Add") {
                this.setState({
                    visible: visible,
                    icon: icon,
                    action: action
                })
            } else if (action === "Edit") {
                this.setState({
                    visible: visible,
                    branch: branch,
                    icon: icon,
                    action: action
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
    render() {
        let { visible, action, branchLocation, icon, loading } = this.state;
        return (
            <div>
                <CModal visible={visible}>
                    <CModalHeader onDismiss={() => this.props.addBranchModal(false, 'close', '', '')}>
                        <CModalTitle >
                            <div className="d-flex align-items-center">
                                {icon}
                                {action + " Branch"}
                            </div>

                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <div className="mb-3">
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
                            </div>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="dark" variant="ghost" onClick={() => this.props.addBranchModal(false, 'close', '', '')}>
                            Close
                        </CButton>
                        <CButton color="primary"
                            disabled={loading}
                        >
                            {loading && <CSpinner size="sm" className="ms-1" />}
                            Save {action === "Edit" ? "Changes" : "Branch"}
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
    setAlertModal,
    addBranchModal
})(BranchModal)
