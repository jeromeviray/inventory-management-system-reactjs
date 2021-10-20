import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
  CSpinner,
  CContainer,
  CCol,
  CRow,
  CAlert,
} from "@coreui/react"
import { setCarouselModal } from "src/service/apiActions/modalAction/modalAction"
import { connect } from "react-redux"
import ImageUploading from "react-images-uploading"
import { MdDelete } from "react-icons/md"
import CarouselApiService from "src/service/restAPI/CarouselApiService"

export class CarouselModal extends Component {
  state = {
    icon: "",
    visible: false,
    loading: false,
    action: "",
    carouselImages: [],
    removedImages: [],
    alert: true,
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageBrandModal(prevProps, prevState)
  }
  manageBrandModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, carousel, icon } = this.props.modalVisible
      if (action === "Add Carousel") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
      } else if (action === "Edit Carousel") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
        this.getImages(carousel)
      } else if (action === "close") {
        this.setState({
          visible: visible,
          action: "",
          icon: "",
          carouselImages: [],
        })
      }
    }
  }
  async getImages(carousel) {
    for (let i = 0; i < carousel.length; i++) {
      CarouselApiService.getImages(carousel[i].imageName)
        .then((response) => {
          this.loadImage(response.data, carousel[i].imageName)
        })
        .catch((error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.error_message ||
            error.toString()
          const status =
            (error.response &&
              error.response.data &&
              error.response.data.code) ||
            error.status ||
            error.toString()
          this.setState({
            status: status,
            message: message,
          })
        })
    }
  }

  loadImage = (image, fileName) => {
    let { carouselImages } = this.state
    if (!image) {
      return
    }

    let reader = new FileReader()
    reader.onloadend = () => {
      carouselImages.push({
        data_url: reader.result,
        file: null,
        image_created: true,
        filename: fileName,
      })
      this.setState({
        carouselImages: carouselImages,
      })
    }
    if (image) {
      reader.readAsDataURL(image)
    }
  }
  handleImageOnchange = (imageList, addUpdateIndex) => {
    this.setState({
      carouselImages: imageList,
    })
  }
  removeImage(index) {
    let { carouselImages, removedImages } = this.state
    if (carouselImages[index].filename) {
      removedImages.push(carouselImages[index].filename)
    }
  }

  render() {
    let { visible, icon, action, loading, carouselImages, alert } = this.state
    console.log(carouselImages)

    return (
      <div>
        <CModal size="xl" visible={visible} fullscreen="lg" scrollable>
          <CModalHeader
            onDismiss={() => {
              this.props.setCarouselModal(false, "close", "", "")
            }}
          >
            <CModalTitle>
              <div className="d-flex align-items-center">
                {icon}
                {action + " Carousel"}
              </div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CAlert color="warning" dismissible visible={alert}>
              <strong>Maximum 10 images</strong>
            </CAlert>
            <ImageUploading
              multiple
              value={carouselImages}
              onChange={this.handleImageOnchange}
              maxNumber={10}
              dataURLKey="data_url"
              onError={() =>
                this.setState({
                  toastVisible: false,
                })
              }
              acceptType={["jpg", "gif", "png"]}
            >
              {({
                imageList,
                onImageUpload,
                // onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <CContainer className="upload-container">
                    <CButton
                      color="secondary"
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
                    </CButton>
                  </CContainer>
                  <CRow className=" images-contianer shadow ">
                    {imageList.map((image, index) => (
                      <CCol key={index} sm="4" md="2" lg="3">
                        <div className="image-item d-flex ">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            {/* <RiEdit2Line
                                size={30}
                                color="#007CFF"
                                onClick={() => onImageUpdate(index)}
                              /> */}
                            <MdDelete
                              size={30}
                              color="#FF0000"
                              onClick={() => {
                                this.removeImage(index)
                                onImageRemove(index)
                              }}
                            />
                          </div>
                        </div>
                      </CCol>
                    ))}
                  </CRow>
                </div>
              )}
            </ImageUploading>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() => {
                this.props.setCarouselModal(false, "close", "", "")
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
    modalVisible: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  setCarouselModal,
})(CarouselModal)
