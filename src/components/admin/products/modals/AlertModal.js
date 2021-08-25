import React, { Component } from 'react'
import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CButton,
    CModalTitle, CToast,
    CToastBody, CToastClose, CToaster,
    CSpinner
} from '@coreui/react'
import { connect } from 'react-redux'
//action
import { deleteBranch } from 'src/service/apiActions/branchAction/branchAction'
import { setAlertModal } from 'src/service/apiActions/modalAction/modalAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { logout } from 'src/service/apiActions/userAction/userAction'


export class AlertModal extends Component {
    state = {
        visible: false,
        id: '',
        action: '',
        module: '',
        loading: false,
        success: false,
        message: '',
        status: '',
        toast: ''
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageModalAlert(prevProps, prevState)
    }
    manageModalAlert = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { alert, id, module, action } = this.props.modalVisible;
            if (action === "DELETEBRANCH") {

                this.setState({
                    visible: alert,
                    id: id,
                    module: module,
                    action: action,
                })
            } else {
                this.setState({
                    visible: alert
                })
            }

        }
    }
    // manageCredentials = (prevProps, prevState) => {
    //     if (prevProps.userRespoonse !== this.props.userRespoonse) {
    //         let { accessToken, type } = this.props.userRespoonse.credentials;
    //         this.setState({
    //             token: type + accessToken
    //         })
    //     }
    // }
    handleOnDelete = () => {
        let { id, action, module } = this.state;
        this.setState({
            loading: true
        })
        if (action === "DELETEBRANCH" && module === "BRANCH") {
            this.branchDelete(id)
            console.log("BRANCH")

        } else {
            console.log("ERRPR")
        }
    }
    branchDelete = (id) => {
        let { accessToken, type } = this.props.userResponse.credentials;
        let token = type + accessToken;
        this.props.deleteBranch(id, token)
            .then(() => {
                let { status, data } = this.props.messageResponse;
                this.setState({
                    loading: false,
                    message: data && data.message,
                    toast: this.toastComponent()
                })
                setInterval(function () {
                    window.location.reload();
                }, 1000)

            })
            .catch(() => {
                let { status, data } = this.props.messageResponse;
                if (status > 400 && status <= 403) {
                    // this.props.logout();
                    // this.props.clearMessage();
                    this.setState({
                        message: data && data.message,
                        successFully: false,
                        loading: false,
                        toast: this.toastComponent(),
                    })
                } else {
                    this.setState({
                        message: data && data.message,
                        successFully: false,
                        loading: false,
                        toast: this.toastComponent(),
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
            color = "warning"
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
        let { visible, toast, loading } = this.state;
        return (
            <div>
                <CToaster push={toast} placement="top-end" />

                <CModal visible={visible} onDismiss={() => this.props.setAlertModal(false)}>
                    <CModalHeader onDismiss={() => this.props.setAlertModal(false)}>
                        <CModalTitle>Confirmation</CModalTitle>
                    </CModalHeader>
                    <CModalBody className="text-center">
                        <h6>Are you sure you want to delete?</h6>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="dark" variant="ghost" onClick={() => {
                            this.props.setAlertModal(false, "", "", "")
                        }}>
                            No
                        </CButton>
                        <CButton type="submit" color="primary" disabled={loading} onClick={() => this.handleOnDelete()}>
                            {loading && <CSpinner size="sm" className="ms-1" />}
                            Yes
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
        userResponse: state.userResponse,
    }
}

export default connect(mapStateToProps, {
    setAlertModal,
    deleteBranch,
    clearMessage,
    logout
})(AlertModal)
