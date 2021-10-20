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
  CFormFloating,
  CFormControl,
  CFormLabel,
  CCol,
  CRow,
  CContainer,
  CInputGroup,
  CFormFeedback,
} from "@coreui/react"
//redux
import { connect } from "react-redux"
//action
import { setStoreModal } from "src/service/apiActions/modalAction/modalAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { convertFromRaw, convertToRaw, EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import { updateStoreInformation } from "src/service/apiActions/storeAction/StoreInformationAction"
export class BranchModal extends Component {
  state = {
    visible: false,
    icon: "",
    loading: false,
    message: "",
    action: "",
    status: "",
    successFully: "",
    storeInfoState: this.storeState,
    editorState: EditorState.createEmpty(),
    validated: false,
  }
  storeState = {
    storeId: "",
    storeName: "",
    acronym: "",
    email: "",
    location: "",
    contactNumber: 0,
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageStoreInfo(prevProps, prevState)
  }
  manageStoreInfo = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, storeInfo, icon } = this.props.modalVisible
      if (action === "Edit") {
        this.setState({
          visible: visible,
          storeId: storeInfo.id,
          storeName: storeInfo.storeName,
          acronym: storeInfo.acronym,
          email: storeInfo.email,
          location: storeInfo.location,
          contactNumber: storeInfo.contactNumber,
          icon: icon,
          action: action,
          editorState: storeInfo.description
            ? EditorState.createWithContent(
              convertFromRaw(JSON.parse(storeInfo.description)),
            )
            : EditorState.createEmpty(),
        })
      } else if (action === "close") {
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

  handleOnChange = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
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
    const {
      storeName,
      acronym,
      location,
      email,
      editorState,
      contactNumber,
      storeId,
    } = this.state
    const description = JSON.stringify(
      convertToRaw(editorState.getCurrentContent()),
    )
    this.props
      .updateStoreInformation(
        storeId,
        storeName,
        acronym,
        location,
        description,
        contactNumber,
        email,
      )
      .then(() => {
        this.setState({
          loading: true,
        })
        this.props.setStoreModal(false, "close", "", "")
      })
      .catch(() => {
        this.setState({
          loading: true,
        })
        this.props.setStoreModal(false, "close", "", "")
      })
  }
  // emailOnChange = (event) => {
  //   let value = event.target.value

  //   if (this.validateEmail(value)) {
  //     this.setState({
  //       validated: true,
  //       email: value,
  //     })
  //   } else {
  //     this.setState({
  //       // validated: true,
  //       email: value,
  //     })
  //   }
  // }
  validateEmail = (email) => {
    const re = /^[\w.+\-]+@gmail\.com$/
    return re.test(email)
  }
  render() {
    let {
      visible,
      action,
      icon,
      loading,
      successFully,
      message,
      storeId,
      storeName,
      acronym,
      email,
      location,
      contactNumber,
      editorState,
      validated,
    } = this.state
    return (
      <div>
        <CModal visible={visible} size="xl" scrollable>
          <CModalHeader
            onDismiss={() => {
              this.props.setStoreModal(false, "close", "", "")
              this.props.clearMessage()
            }}
          >
            <CModalTitle>
              <div className="d-flex align-items-center">
                {icon}
                {action + " Store Information"}
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
                  <CCol sm="12" md="6" lg="6">
                    {/* <CInputGroup>
                      <CCol xs="12" sm="12" md="12" lg="12"> */}
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="storeName"
                        value={storeName}
                        onChange={this.handleOnChange}
                        type="text"
                        id="floatingStoreNameInput"
                        placeholder="Enter Store Name"
                        required
                      />
                      <CFormLabel htmlFor="floatingStoreNameInput">
                        Store name
                      </CFormLabel>
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>
                        Acronym is Store name
                      </CFormFeedback>
                    </CFormFloating>

                    {/* </CCol>
                    </CInputGroup> */}
                  </CCol>
                  <CCol sm="12" md="6" lg="6">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="acronym"
                        value={acronym}
                        onChange={this.handleOnChange}
                        type="text"
                        id="floatingAcronymInput"
                        placeholder="Enter Acronym Name"
                        required
                      />
                      <CFormLabel htmlFor="floatingAcronymInput">
                        Acronym
                      </CFormLabel>
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Acronym is Required</CFormFeedback>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12" md="6" lg="6">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="contactNumber"
                        value={contactNumber}
                        onChange={this.handleOnChange}
                        type="text"
                        id="floatingContactNumberInput"
                        placeholder="Enter Contact Number"
                        required
                      />
                      <CFormLabel htmlFor="floatingContactNumberInput">
                        Contact Number
                      </CFormLabel>
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>
                        Contact Number is Required
                      </CFormFeedback>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12" md="6" lg="6">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="email"
                        value={email}
                        onChange={this.handleOnChange}
                        type="email"
                        id="floatingEmailInput"
                        placeholder="Enter Email"
                        required
                      />
                      <CFormLabel htmlFor="floatingEmailInput">
                        Email Address
                      </CFormLabel>
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>
                        Email Address is Required
                      </CFormFeedback>
                    </CFormFloating>
                  </CCol>
                  <CCol sm="12">
                    <CFormFloating className="mb-3">
                      <CFormControl
                        name="location"
                        value={location}
                        onChange={this.handleOnChange}
                        type="text"
                        id="floatingLocationInput"
                        placeholder="Enter Location"
                        required
                      />
                      <CFormLabel htmlFor="floatingLocationInput">
                        Location Address
                      </CFormLabel>
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>
                        Location Address is Required
                      </CFormFeedback>
                    </CFormFloating>
                  </CCol>
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
                      required
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
                this.props.setStoreModal(false, "close", "", "")
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
              Save {action === "Edit" ? "Changes" : "Branch"}
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
  setStoreModal,
  clearMessage,
  updateStoreInformation,
})(BranchModal)
