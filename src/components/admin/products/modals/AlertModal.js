import React, { Component } from 'react'
import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CButton,
    CModalTitle
} from '@coreui/react'
import { connect } from 'react-redux'
import { setAlertModal } from 'src/service/apiActions/modalAction/modalAction'
export class AlertModal extends Component {
    state = {
        visible: false
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageModalAlert(prevProps, prevState)
    }
    manageModalAlert = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { alert } = this.props.modalVisible;
            this.setState({
                visible: alert
            })
        }
    }

    render() {
        let { visible } = this.state;

        return (
            <div>
                <CModal visible={visible} onDismiss={() => this.props.setAlertModal(false)}>
                    <CModalHeader onDismiss={() => this.props.setAlertModal(false)}>
                        <CModalTitle>Confirmation</CModalTitle>
                    </CModalHeader>
                    <CModalBody className="text-center">
                        <h6>Are you sure you want to delete?</h6>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="dark" variant="ghost" onClick={() => this.props.setAlertModal(false)}>
                            No
                        </CButton>
                        <CButton color="primary">Yes</CButton>
                    </CModalFooter>
                </CModal>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        modalVisible: state.modalVisibleResponse,
    }
}

export default connect(mapStateToProps, {
    setAlertModal
})(AlertModal)
