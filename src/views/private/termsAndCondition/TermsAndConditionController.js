import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CCardText,
  CCardTitle,
} from "@coreui/react"
import React, { Component } from "react"
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"

import { connect } from "react-redux"
import { getTermsAndCondition } from "src/service/apiActions/termsAction/TermsAndConditionAction"
import { EditorState, convertFromRaw, convertToRaw } from "draft-js"
import DOMPurify from "dompurify"
import draftToHtml from "draftjs-to-html"
import TermsAndCondtionModal from "src/components/modals/termsAndCondition/TermsAndCondtionModal"
import { setTermAndConditionModal } from "src/service/apiActions/modalAction/modalAction"
export class TermsAndConditionController extends Component {
  state = {
    termsAndCondition: [],
    visible: false,
  }
  componentDidMount() {
    this.props.getTermsAndCondition()
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageTermsAndConditionResponse(prevProps, prevState)
    this.manageStoreInfo(prevProps, prevState)
  }
  manageTermsAndConditionResponse = (prevProps, prevState) => {
    if (
      prevProps.termsAndConditionResponse !==
      this.props.termsAndConditionResponse
    ) {
      const { action, status, data } = this.props.termsAndConditionResponse
      if (action === "GET_TERMS_AND_CONDITION" && status === 200) {
        this.setState({
          termsAndCondition: data,
        })
      }
    }
  }
  manageStoreInfo = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { action } = this.props.modalVisible
      if (action === "close") {
        this.props.getTermsAndCondition()
      }
    }
  }
  createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    }
  }
  render() {
    const { termsAndCondition, visible } = this.state
    const { content } = termsAndCondition
    let convertFromRawContent = ""
    let html = <></>
    if (content) {
      let getContent = termsAndCondition && JSON.parse(content)
      if (getContent) {
        convertFromRawContent = convertFromRaw(getContent)
        const editorState = EditorState.createWithContent(convertFromRawContent)
        html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
      }
    }
    const margin = {
      marginBottom: "12px",
      marginLeft: "5px",
    }
    return (
      <>
        <TermsAndCondtionModal />
        <CCard>
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <CCardTitle>Terms And Condition</CCardTitle>
            <div className="">
              {termsAndCondition ? (
                <CButton
                  color="info"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    this.props.setTermAndConditionModal(
                      !visible,
                      "Edit",
                      termsAndCondition,
                      <MdIcons.MdModeEdit size="24" className="me-2" />,
                    )
                  }
                >
                  <MdIcons.MdModeEdit size="20" />
                </CButton>
              ) : (
                <CButton
                  color="info"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    this.props.setTermAndConditionModal(
                      !visible,
                      "Add",
                      null,
                      <FaIcons.FaPlus size={20} />,
                    )
                  }
                >
                  <FaIcons.FaPlus size={20} />,
                </CButton>
              )}
            </div>
          </CCardHeader>
          <CCardBody>
            {termsAndCondition ? (
              <>
                <div className="text-black-50 d-flex justify-content-between align-items-center mb-3">
                  <h6 className="m-0 pe-3 mb-2">
                    Created Date:
                    <strong style={{ ...margin }}>
                      {termsAndCondition.createdAt}
                    </strong>
                  </h6>
                  <h6 className="m-0 pe-3 mb-2">
                    Last Updated Date:
                    <strong style={{ ...margin }}>
                      {termsAndCondition.updatedAt}
                    </strong>
                  </h6>
                </div>
                <hr />

                <CCardText className="p-3 d-flex justify-content-center">
                  <div
                    className="preview ps-4"
                    dangerouslySetInnerHTML={this.createMarkup(html)}
                  ></div>
                </CCardText>
              </>
            ) : (
              <>
                <div className="preview ps-4 text-warning">
                  No Terms And Condition Created
                </div>
              </>
            )}
          </CCardBody>
        </CCard>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
    termsAndConditionResponse: state.termsAndConditionResponse,
  }
}
export default connect(mapStateToProps, {
  getTermsAndCondition,
  setTermAndConditionModal,
})(TermsAndConditionController)
