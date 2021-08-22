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
import { connect } from 'react-redux'
import { addBrandModal } from 'src/service/apiActions/modalAction/modalAction'
export class BrandModal extends Component {
    state = {
        visible: false,
        icon: '',
        action: '',
        brand: [],
        loading: false
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageBrandModal(prevProps, prevState)
    }
    manageBrandModal = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { visible, action, brand, icon } = this.props.modalVisible;
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
                    brand: brand
                })
            } else {
                this.setState({
                    visible: visible
                })
            }
        }
    }
    render() {
        let { visible, icon, action, brand, loading } = this.state;
        return (
            <div>
                <CModal visible={visible}>
                    <CModalHeader onDismiss={() => this.props.addBrandModal(false, 'close', '', '')}>
                        <CModalTitle >
                            <div className="d-flex align-items-center">
                                {icon}
                                {action + " Brand"}
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
                        <CButton color="dark" variant="ghost" onClick={() => this.props.addBrandModal(false, 'close', '', '')}>
                            Close
                        </CButton>
                        <CButton color="primary"
                            disabled={loading}
                        >
                            {loading && <CSpinner size="sm" className="ms-1" />}
                            Save {action === "Edit" ? "Changes" : "Brand"}
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
    addBrandModal
})(BrandModal)
