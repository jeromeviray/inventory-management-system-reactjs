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
import { connect } from 'react-redux';
import { addCategoryModal } from 'src/service/apiActions/modalAction/modalAction';
export class CategoryModal extends Component {
    state = {
        visible: false,
        action: '',
        icon: '',
        loading: false,
        category: this.categoryState
    }
    categoryState = {
        categoryName: 'test'
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageCategoryModal(prevProps, prevState)
    }
    manageCategoryModal = (prevProps, prevState) => {
        console.log()
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { visible, action, category, icon } = this.props.modalVisible;
            console.log(category)
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
                    category: category
                })
            } else {
                this.setState({
                    visible: visible
                })
            }
        }
    }
    render() {
        let { visible, categoryName, icon, action, loading } = this.state;
        console.log()
        return (
            <div>
                <CModal visible={visible}>
                    <CModalHeader onDismiss={() => this.props.addCategoryModal(false, 'close', '', '')}>
                        <CModalTitle >
                            <div className="d-flex align-items-center">
                                {icon}
                                {action + " Category"}
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
                        <CButton color="dark" variant="ghost" onClick={() => this.props.addCategoryModal(false, 'close', '', '')}>
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
    addCategoryModal
})(CategoryModal)
