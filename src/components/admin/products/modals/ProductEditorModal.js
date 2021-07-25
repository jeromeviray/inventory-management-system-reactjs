import React, { Component, lazy } from "react"
import { connect } from "react-redux"
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
  CAlert,
} from "@coreui/react"

import { MdDelete } from "react-icons/md"
import { RiEdit2Line } from "react-icons/ri"
import { setProductModal } from "../../../apiActions/modalAction/modalAction"
import ImageUploading from "react-images-uploading"

const ProductEditorForm = lazy(() => import("../form/ProductEditorForm.js"))

export class ProductEditorModal extends Component {
  state = {
    visible: false,
    alert: true,
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
        visible: this.props.modalVisibleResponse.state.visible,
      })
    }
  }
  handleImageOnchange = (imageList, addUpdateIndex) => {
    this.setState({
      images: imageList,
    })
  }
  render() {
    let { visible, images, alert } = this.state

    return (
      <>
        <CModal size="xl" visible={visible} fullscreen="lg" scrollable>
          <CModalHeader
            onDismiss={() => this.props.setProductModal(false)}
            className="modal-header"
          >
            <CModalTitle>Add Product</CModalTitle>
          </CModalHeader>

          <CModalBody>
            <CAlert color="warning" dismissible visible={alert}>
              <strong>Maximum 10 images</strong>
            </CAlert>
            <ImageUploading
              multiple
              value={images}
              onChange={this.handleImageOnchange}
              maxNumber={10}
              dataURLKey="data_url"
              onError={() =>
                this.setState({
                  toastVisible: false,
                })
              }
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
                      style={
                        isDragging
                          ? {
                              backgroundColor: "#8E9293",
                              border: "4px dashed #ffffff",
                            }
                          : undefined
                      }
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Select Image or Drag Here
                    </button>
                  </CContainer>
                  <CRow className=" images-contianer shadow ">
                    {imageList.map((image, index) => (
                      <CCol key={index} sm="4" md="2" lg="3">
                        <div className="image-item d-flex ">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <RiEdit2Line
                              size={30}
                              color="#007CFF"
                              onClick={() => onImageUpdate(index)}
                            />
                            <MdDelete
                              size={30}
                              color="#FF0000"
                              onClick={() => onImageRemove(index)}
                            />
                          </div>
                        </div>
                      </CCol>
                    ))}
                  </CRow>
                </div>
              )}
            </ImageUploading>
            <ProductEditorForm />
          </CModalBody>
          <CModalFooter className="modal-footer">
            <CButton
              color="secondary"
              variant="ghost"
              onClick={() => this.props.setProductModal(!visible)}
              className="text-body"
            >
              Close
            </CButton>
            <CButton color="info">Save Product</CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalVisibleResponse: state.modalVisibleResponse,
  }
}
export default connect(mapStateToProps, { setProductModal })(ProductEditorModal)
