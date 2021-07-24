import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CButton,
    CContainer,
    CRow,
    CCol,
   CAlert
} from '@coreui/react'
import { setProductModal } from '../../../apiActions/modalAction/modalAction'
import ImageUploading from 'react-images-uploading'
export class ProductEditorModal extends Component {
    state = {
        visible: false,
        toastVisible: true
    }
    handleVisibility = (state) => {
        this.setState({
            visible: false,
            images: [],
            
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
        let { visible, images, toastVisible } = this.state;
        const visibled  = toastVisible
        console.log("images: ", visibled);
        return (
            <>
                <CModal size="xl" visible={visible}>
                    <CModalHeader onDismiss={() => this.props.setProductModal(false)}>
                        <CModalTitle>Add Product</CModalTitle>
                    </CModalHeader>
                   <CAlert
                        color="warning"
                        dismissible
                        visible={visibled}
                    >
                    <strong>Maximum 10 images</strong> 
                    </CAlert>
                    <CModalBody>.<ImageUploading
                        multiple
                        value={images}
                        onChange={this.handleImageOnchange}
                        maxNumber={10}
                        dataURLKey="data_url"
                        onError={() => this.setState({
                            toastVisible: false
                        })}
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
                                <CContainer className="upload-container">
                                    <button
                                        className="upload-btn"
                                        style={isDragging ? { backgroundColor: '#8E9293',border: "4px dashed #ffffff"  } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Select Image or Drag Here
                                    </button>
                                </CContainer>
                                <CRow>
                                     {imageList.map((image, index) => (
                                         <CCol key={ index} sm="4" md="2" lg="2">
                                            <img src={image['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                                <button onClick={() => onImageUpdate(index)}>Update</button>
                                                <button onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                         </CCol>
                                      
                                ))}
                                </CRow>
                               
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
