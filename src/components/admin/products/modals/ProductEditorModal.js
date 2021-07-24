import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CButton,
    CToast,
    CToastBody,
    CToastClose
} from '@coreui/react'
import { setProductModal } from '../../../apiActions/modalAction/modalAction'
import ImageUploading from 'react-images-uploading'
export class ProductEditorModal extends Component {
    state = {
        visible: false
    }
    handleVisibility = (state) => {
        this.setState({
            visible: false,
            images: []
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
            this.setState({
                visible: this.props.modalVisibleResponse.state.visible
            })
        }
    }
    handleImageOnchange = (imageList, addUpdateIndex) => {

        this.setState({
            images: imageList,
        });
    }
    render() {
        let { visible, images } = this.state;
        return (
            <>
                <CModal size="xl" visible={visible}>
                    <CModalHeader onDismiss={() => this.props.setProductModal(false)}>
                        <CModalTitle>Extra large modal</CModalTitle>
                    </CModalHeader>
                    <CModalBody>.<ImageUploading
                        multiple
                        value={images}
                        onChange={this.handleImageOnchange}
                        maxNumber={10}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                        }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <button
                                    className="upload-btn"
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Click or Drop here
                                </button>
                                &nbsp;
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image['data_url']} alt="" width="100" />
                                        <div className="image-item__btn-wrapper">
                                            <button onClick={() => onImageUpdate(index)}>Update</button>
                                            <button onClick={() => onImageRemove(index)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ImageUploading></CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" variant="ghost" onClick={() => this.props.setProductModal(!visible)}>
                            Close
                        </CButton>
                        <CButton color="info">Save changes</CButton>
                    </CModalFooter>
                </CModal>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modalVisibleResponse: state.modalVisibleResponse
    }
}
export default connect(mapStateToProps, { setProductModal })(ProductEditorModal)
