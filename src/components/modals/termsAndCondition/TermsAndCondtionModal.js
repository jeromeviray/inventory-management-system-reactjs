import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
  CSpinner,
  CForm,
  CCol,
  CRow,
} from "@coreui/react"
import { convertFromRaw, convertToRaw, EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import { setTermAndConditionModal } from "src/service/apiActions/modalAction/modalAction"
import {
  saveTermsAndCondition,
  updateTermsAndCondition,
} from "src/service/apiActions/termsAction/TermsAndConditionAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { connect } from "react-redux"
export class TermsAndCondtionModal extends Component {
  state = {
    visible: false,
    icon: "",
    loading: false,
    message: "",
    action: "",
    status: "",
    successFully: "",
    editorState: EditorState.createEmpty(),
    validated: false,
    id: "",
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageStoreInfo(prevProps, prevState)
  }
  manageStoreInfo = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, termsAndCondition, icon } = this.props.modalVisible
      if (action === "Edit") {
        this.setState({
          id: termsAndCondition.id,
          visible: visible,
          icon: icon,
          action: action,
          editorState: termsAndCondition.content
            ? EditorState.createWithContent(
              convertFromRaw(JSON.parse(termsAndCondition.content)),
            )
            : EditorState.createEmpty(),
        })
      } else if (action === "Add") {
        this.setState({
          visible: visible,

          icon: icon,
          action: action,
        })
      } else {
        this.setState({
          visible: visible,
          branchId: "",
          branchName: "",
          icon: "",
          action: "",
          loading: false,
        })
      }
    }
  }
  handleOnSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    this.setState({
      validated: true,
      loading: true,
    })
    const { action } = this.state
    if (action === "Add") {
      this.handleSave()
    } else if (action === "Edit") {
      this.handleEdit()
    }
  }
  handleSave = () => {
    const { editorState } = this.state
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent()),
    )
    this.props
      .saveTermsAndCondition(content)
      .then(() => {
        this.setState({
          validated: false,
          loading: false,
        })
        this.props.setTermAndConditionModal(false, "close", "", "")
      })
      .catch(() => {
        this.setState({
          loading: false,
        })
      })
  }
  handleEdit = () => {
    const { id, editorState } = this.state
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent()),
    )
    this.props
      .updateTermsAndCondition(id, content)
      .then(() => {
        this.setState({
          validated: false,
          loading: false,
        })
        this.props.setTermAndConditionModal(false, "close", "", "")
      })
      .catch(() => {
        this.setState({
          loading: false,
        })
      })
  }
  render() {
    let {
      visible,
      action,
      icon,
      loading,
      successFully,
      message,
      editorState,
      validated,
    } = this.state
    return (
      <div>
        <CModal visible={visible} size="xl" scrollable>
          <CModalHeader
            onDismiss={() => {
              this.props.setTermAndConditionModal(false, "close", "", "")
              this.props.clearMessage()
            }}
          >
            <CModalTitle>
              <div className="d-flex align-items-center">
                {icon}
                {action + " Terms and Condition"}
              </div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            {message && (
              <div className="form-group">
                <div
                  className={
                    successFully ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CForm
              onSubmit={this.handleOnSubmit}
              id="branch-form"
              noValidate
              validated={validated}
            >
              <div className="mb-3">
                <CRow>
                  <CCol sm="12" md="12" lg="12" className="mt-4">
                    <Editor
                      editorState={editorState}
                      wrapperClassName="editor-wrapper"
                      editorClassName="editor"
                      onEditorStateChange={this.onEditorStateChange}
                      placeholder="Inser Description about your Store"
                      toolbar={{
                        options: [
                          "inline",
                          "blockType",
                          "fontSize",
                          "fontFamily",
                          "list",
                          "textAlign",
                          "colorPicker",
                          "emoji",
                          "remove",
                          "history",
                        ],
                      }}
                    />
                  </CCol>
                </CRow>
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() => {
                this.props.setTermAndConditionModal(false, "close", "", "")
                this.props.clearMessage()
              }}
            >
              Close
            </CButton>
            <CButton
              color="primary"
              disabled={loading}
              type="submit"
              form="branch-form"
            >
              {loading && <CSpinner size="sm" className="ms-1" />}
              Save {action === "Edit" ? "Changes" : "Terms And Condition"}
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
  setTermAndConditionModal,
  clearMessage,
  saveTermsAndCondition,
  updateTermsAndCondition,
})(TermsAndCondtionModal)
