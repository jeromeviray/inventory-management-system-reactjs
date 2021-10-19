import React, { Component } from "react"
import { connect } from "react-redux"
import { getCarouselImages } from "src/service/apiActions/carouselAction/carouselAction"
import { Carousel } from "react-responsive-carousel"
import * as IoIcons from "react-icons/io"
import * as FaIcons from "react-icons/fa"
import { setCarouselModal } from "src/service/apiActions/modalAction/modalAction"
import CarouselModal from "src/components/modals/carousel/CarouselModal"

import {
  CCard,
  CCardTitle,
  CContainer,
  CButton,
  CCardBody,
  CAvatar,
} from "@coreui/react"
import * as MdIcons from "react-icons/md"
import { EditorState, convertFromRaw, convertToRaw } from "draft-js"
import DOMPurify from "dompurify"
import draftToHtml from "draftjs-to-html"
import { setStoreModal } from "src/service/apiActions/modalAction/modalAction"
import StoreInformationModal from "src/components/modals/store/StoreInformationModal"
import { getStoreInformation } from "src/service/apiActions/storeAction/StoreInformationAction"

export class StoreInformation extends Component {
  state = {
    carouselImages: [],
    storeInfo: [],
    visible: false,
  }
  componentDidMount() {
    this.props.getCarouselImages()
  }
  componentDidUpdate = (prevProps, prevState) => {
    this.getResponseCarouselImages(prevProps, prevState)
    this.manageStoreInformationResponse(prevProps, prevState)
    this.manageStoreInfo(prevProps, prevState)
  }
  getResponseCarouselImages = (prevProps, prevState) => {
    if (prevProps.carouselResponser !== this.props.carouselResponser) {
      let response = this.props.carouselResponser
      if (response.action === "RETRIEVE") {
        if (response.status >= 200 && response.status <= 300) {
          this.setState({
            carouselImages: response.carouselData,
          })
        } else if (response.status < 400) {
          console.log("ERROR")
        }
      }
    }
  }
  manageStoreInformationResponse = (prevProps, prevState) => {
    if (
      prevProps.storeInformationResponse !== this.props.storeInformationResponse
    ) {
      const { action, status, data } = this.props.storeInformationResponse
      if (action === "GET_STORE_INFORMATION" && status === 200) {
        this.setState({
          storeInfo: data.storeInfo,
        })
      }
    }
  }
  manageStoreInfo = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { action } = this.props.modalVisible
      if (action === "close") {
        this.props.getStoreInformation()
      }
    }
  }
  createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    }
  }
  render() {
    let { carouselImages, storeInfo, visible } = this.state
    let content = storeInfo.description && JSON.parse(storeInfo.description)
    const arrowStyles = {
      position: "absolute",
      zIndex: "2",
      top: "calc(4% - 16px)",
      // width: "30",
      height: "100%",
      cursor: "pointer",
      border: "none",
    }

    const margin = {
      marginBottom: "12px",
    }
    let convertFromRawContent = ""
    let html = <></>
    if (content) {
      convertFromRawContent = convertFromRaw(content)
      const editorState = EditorState.createWithContent(convertFromRawContent)
      html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    }

    return (
      <>
        <StoreInformationModal />
        <CarouselModal />
        <div>
          <div className="mb-2 text-end">
            <CButton
              variant="ghost"
              size="sm"
              onClick={() =>
                this.props.setCarouselModal(
                  !visible,
                  "Add Carousel",
                  "",
                  <FaIcons.FaPlus size={20} />,
                )
              }
            >
              <FaIcons.FaPlus size={20} />,
            </CButton>
            <CButton color="info" variant="ghost" size="sm">
              <MdIcons.MdModeEdit size="20" />
            </CButton>
          </div>
          <Carousel
            showArrows={true}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            dynamicHeight={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="arrow-style"
                  style={{ ...arrowStyles, left: 0 }}
                >
                  <IoIcons.IoIosArrowBack
                    size="40"
                    style={{ color: "white" }}
                  />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="arrow-style"
                  style={{ ...arrowStyles, right: 0 }}
                >
                  <IoIcons.IoIosArrowForward
                    size="40"
                    style={{ color: "white" }}
                  />
                </button>
              )
            }
          >
            {carouselImages &&
              carouselImages.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      className="d-block "
                      height="400"
                      src={image.fileName}
                      alt={image.fileName}
                    />
                  </div>
                )
              })}
          </Carousel>
        </div>

        <CContainer className="mt-3 ">
          <CCard className=" p-3">
            {storeInfo.acronym ? (
              <CAvatar color="warning" size="xl">
                {storeInfo.acronym}
              </CAvatar>
            ) : (
              <CAvatar color="warning" size="xl">
                IMS
              </CAvatar>
            )}
            <CCardTitle className="d-flex justify-content-between mt-3">
              <div className="font-style d-flex ">
                <div className="font-style d-flex flex-column align-items-start ">
                  <h6 className="m-0 pe-3 mb-2">Store name:</h6>
                  <h6 className="m-0 pe-3 mb-2">Acronym name:</h6>
                  <h6 className="m-0 pe-3 mb-2">Contact #:</h6>
                  <h6 className="m-0 pe-3 mb-2">Email:</h6>
                  <h6 className="m-0 pe-3 mb-2">Location:</h6>
                </div>
                <div className="font-style d-flex flex-column align-items-start text-black-50">
                  <strong style={{ ...margin }}>
                    {storeInfo.storeName ? (
                      <>
                        <span>{storeInfo.storeName}</span>
                      </>
                    ) : (
                      <span className="text-warning">--</span>
                    )}
                  </strong>
                  <strong style={{ ...margin }}>
                    {storeInfo.acronym ? (
                      <>
                        <span>{storeInfo.acronym}</span>
                      </>
                    ) : (
                      <span className="text-warning">--</span>
                    )}
                  </strong>
                  <strong style={{ ...margin }}>
                    {storeInfo.contactNumber ? (
                      <>
                        <span>{storeInfo.contactNumber}</span>
                      </>
                    ) : (
                      <span className="text-warning">--</span>
                    )}
                  </strong>
                  <strong style={{ ...margin }}>
                    {storeInfo.email ? (
                      <>
                        <span>{storeInfo.email}</span>
                      </>
                    ) : (
                      <span className="text-warning">--</span>
                    )}
                  </strong>
                  <strong style={{ ...margin }}>
                    {storeInfo.location ? (
                      <>
                        <span>{storeInfo.location}</span>
                      </>
                    ) : (
                      <span className="text-warning">--</span>
                    )}
                  </strong>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-start mb-3">
                <CButton
                  color="info"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    this.props.setStoreModal(
                      !visible,
                      "Edit",
                      storeInfo,
                      <MdIcons.MdModeEdit size="20" className="me-2" />,
                    )
                  }
                >
                  <MdIcons.MdModeEdit size="20" />
                </CButton>
              </div>
            </CCardTitle>
          </CCard>
          <CCard className="mt-3 p-3">
            <CCardBody>
              {content ? (
                <>
                  <div
                    className="preview ps-4"
                    dangerouslySetInnerHTML={this.createMarkup(html)}
                  ></div>
                </>
              ) : (
                <>
                  <div className="preview ps-4 text-warning">
                    No Description
                  </div>
                </>
              )}
            </CCardBody>
          </CCard>
        </CContainer>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    carouselResponser: state.carouselResponser,
    storeInformationResponse: state.storeInformationResponse,
    modalVisible: state.modalVisibleResponse,
  }
}
export default connect(mapStateToProps, {
  getCarouselImages,
  getStoreInformation,
  setStoreModal,
  setCarouselModal,
})(StoreInformation)
