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
import { saveBranch, updateBranch } from 'src/service/apiActions/branchAction/branchAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'

export class BranchModal extends Component {
    state = {
        visible: false,
        action: '',
        icon: '',
        branchId: '',
        branchName: '',
        loading: false,
        message: '',
        action: '',
        status: '',
        successFully: '',

    }
    componentDidUpdate(prevProps, prevState) {
        this.manageBranchModal(prevProps, prevState)
        this.manageMessageResponse(prevProps, prevState);
    }
    // manageCredentials = (prevProps, prevState) => {
    //     if (prevProps.userResponse !== this.props.userResponse) {
    //         let { accessToken, type } = this.props.userResponse.credentials;
    //         let token = type + accessToken;
    //         this.setState({
    //             token: token
    //         })
    //     }
    // }
    manageBranchModal = (prevProps, prevState) => {
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
                    branchId: branch.id,
                    branchName: branch.branch,
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
    manageMessageResponse = (prevProps, prevState) => {
        if (prevProps.messageResponse !== this.props.messageResponse) {
            let { status, data } = this.props.messageResponse;
            this.setState({
                status: status,
                message: data.message
            })
        }
    }
    handleOnChange = (event) => {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        let { branchId, branchName, action } = this.state;
        if (branchName && branchName.length > 0) {

            if (action === "Add") {
                this.handleSaveBranch(branchName);

            } else if (action === "Edit") {
                this.handleUpdateBranch(branchId, branchName);
            }
        } else {
            this.setState({
                loading: false
            })
        }

    }
    handleSaveBranch = (branchName) => {
        let { accessToken, type } = this.props.userResponse.credentials;
        let token = type + accessToken;
        this.props.saveBranch(branchName, token)
            .then(() => {
                let { status, data } = this.props.messageResponse;
                console.log(this.props.messageResponse)
                if (status === 200) {
                    this.setState({
                        branch: [],
                        message: data.message,
                        successFully: true,
                        loading: false
                    })
                }
                window.location.reload();
            })
            .catch(() => {
                let { status, data } = this.props.messageResponse;
                if (status < 400 && status >= 403) {
                    this.props.clearMessage();
                    this.props.logout();
                } else {
                    this.setState({
                        message: data && data.message,
                        successFully: false,
                        loading: false
                    })
                }
            })
    }
    handleUpdateBranch = (brandId, branchName) => {
        let { accessToken, type } = this.props.userResponse.credentials;
        let token = type + accessToken;

        this.props.updateBranch(brandId, branchName, token)
            .then(() => {
                let { status, data } = this.props.messageResponse;
                let { action } = this.props.branchResponse;
                if (action === "UPDATEBRANCH" && status >= 200) {
                    this.setState({
                        message: data.message,
                        loading: false,
                        successFully: true
                    })
                    setInterval(function () {
                        window.location.reload();
                    }, 2000)
                } else {
                    this.setState({
                        loading: false,
                        successFully: false,
                        message: ''
                    })
                }
            }).catch(() => {
                let { status, data } = this.props.messageResponse;
                if (status > 400 && status <= 403) {
                    this.props.logout();
                    this.props.clearMessage();
                } else {
                    this.setState({
                        message: data && data.message,
                        successFully: false,
                        loading: false
                    })
                }
            })
    }
    render() {
        let { visible, action, branchName, icon, loading, successFully, message } = this.state;
        return (
            <div>
                <CModal visible={visible}>
                    <CModalHeader onDismiss={() => {
                        this.props.addBranchModal(false, 'close', '', '')
                        this.props.clearMessage();
                    }}>
                        <CModalTitle >
                            <div className="d-flex align-items-center">
                                {icon}
                                {action + " Branch"}
                            </div>

                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        {message && (
                            <div className="form-group">
                                <div
                                    className={successFully ? "alert alert-success" :
                                        "alert alert-danger"}
                                    role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CForm onSubmit={this.handleOnSubmit} id="branch-form">
                            <div className="mb-3">
                                <CFormFloating className="mb-3">
                                    <CFormControl
                                        name="branchName"
                                        value={branchName}
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
                        <CButton color="dark" variant="ghost" onClick={() => {
                            this.props.addBranchModal(false, 'close', '', '')
                            this.props.clearMessage();
                        }}>
                            Close
                        </CButton>
                        <CButton color="primary"
                            disabled={loading}
                            type="submit"
                            form="branch-form"
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
        modalVisible: state.modalVisibleResponse,
        branchResponse: state.branchResponse,
        userResponse: state.userResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    setAlertModal,
    addBranchModal,
    saveBranch, updateBranch,
    logout,
    clearMessage
})(BranchModal)
