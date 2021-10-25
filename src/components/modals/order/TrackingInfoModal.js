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
    CFormFeedback,
} from "@coreui/react"
import { connect } from 'react-redux'
import { setTrackingInfoModal } from 'src/service/apiActions/modalAction/modalAction'
import { updateOrderStatus } from 'src/service/apiActions/orderAction/orderAction'
export class TrackingInfoModal extends Component {
    state = {
        visible: false,
        icon: "",
        action: "",
        loading: false,
        trackingNumber: '',
        trackingUrl: '',
        validated: false
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageTrackingInfoModal(prevProps, prevState)
    }

    manageTrackingInfoModal = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { visible, action, order, icon } = this.props.modalVisible
            console.log(order)
            if (action === "MarkAsShipped") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon,
                    order: order
                })
            } else {
                this.setState({
                    visible: visible,
                    action: "",
                    icon: "",
                    brandName: "",
                    brandId: "",
                })
            }
        }
    }
    handleOnChange = (event) => {
        let name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        const { order, trackingNumber, trackingUrl } = this.state
        event.preventDefault()

        this.setState({
            validated: true
        })
        if (trackingNumber && trackingUrl) {
            this.props.updateOrderStatus(order.orderId, 'shipped', trackingNumber, trackingUrl).then(() => {
                this.props.setTrackingInfoModal(false, "close", "", "")

            })
        }


        // console.log(form.checkValidity !== false)
    }
    render() {
        let { visible, trackingNumber, trackingUrl, loading, validated } = this.state
        return (
            <div>
                <CModal visible={visible}>
                    <CModalHeader
                        onDismiss={() => {
                            this.props.setTrackingInfoModal(false, "close", "", "")
                        }}
                    >
                        <CModalTitle>
                            <div className="d-flex align-items-center">
                                Tracking Information
                            </div>
                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm
                            id="brand-form"
                            onSubmit={this.handleOnSubmit}
                            validated={validated}>
                            <div className="mb-3">
                                <CFormFloating className="mb-3">
                                    <CFormControl
                                        name="trackingNumber"
                                        value={trackingNumber}
                                        onChange={this.handleOnChange}
                                        type="number"
                                        id="floatingTrackingNumberInput"
                                        placeholder="Enter Tracking Number"
                                        required
                                    />
                                    <CFormLabel htmlFor="floatingTrackingNumberInput">
                                        Tracking Number
                                    </CFormLabel>
                                    <CFormFeedback invalid>Please enter the tracking number</CFormFeedback>
                                </CFormFloating>

                            </div>
                            <div className="mb-3">
                                <CFormFloating className="mb-3">
                                    <CFormControl
                                        name="trackingUrl"
                                        value={trackingUrl}
                                        onChange={this.handleOnChange}
                                        type="url"
                                        pattern="https://.*"
                                        id="floatingTrackingUrlInput"
                                        placeholder="Enter Tracking Url"
                                        required
                                    />
                                    <CFormLabel htmlFor="floatingTrackingUrlInput">
                                        Tracking Url
                                    </CFormLabel>
                                    <CFormFeedback invalid>Invalid Pattern of your Tracking Url</CFormFeedback>

                                </CFormFloating>


                            </div>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            color="dark"
                            variant="ghost"
                            onClick={() => {
                                this.props.setTrackingInfoModal(false, "close", "", "")
                            }}
                        >
                            Close
                        </CButton>
                        <CButton
                            type="submit"
                            color="primary"
                            disabled={loading}
                            form="brand-form"
                        >
                            {loading && <CSpinner size="sm" className="ms-1" />}
                            Save Tracking Information
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
        userResponse: state.userResponse,
        messageResponse: state.messageResponse,
    }
}
export default connect(mapStateToProps, {
    setTrackingInfoModal,
    updateOrderStatus
})(TrackingInfoModal)
