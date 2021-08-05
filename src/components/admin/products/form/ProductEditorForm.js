import React, { Component } from "react"
import {
  CFormFloating,
  CFormControl,
  CFormLabel,
  CRow,
  CCol,
} from "@coreui/react"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import * as FaIcons from "react-icons/fa"

export class ProductEditorForm extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    descriptions: "",
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      descriptions: editorState,
    })
  }
  render() {
    const { descriptions } = this.state
    return (
      <>
        <CRow className="mt-5">
          <CCol sm="12" md="6" lg>
            <CFormFloating className="mb-3">
              <CFormControl
                type="email"
                id="floatingInput"
                placeholder="Product Name"
              />
              <CFormLabel htmlFor="floatingInput">Product Name</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol sm="12" md="6" lg>
            <CFormFloating className="mb-3">
              <CFormControl
                type="email"
                id="floatingProductPrice"
                placeholder="Product Price"
              />
              <CFormLabel htmlFor="floatingInput">Product Price</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol sm="12" md="6" lg>
            <CFormFloating className="mb-3">
              <CFormControl
                type="email"
                id="floatingProductCategory"
                placeholder="name@example.com"
              />
              <CFormLabel htmlFor="floatingInput">Product Name</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol sm="12" md="6" lg>
            <CFormFloating className="mb-3">
              <CFormControl
                type="email"
                id="floatinginp"
                placeholder="name@example.com"
              />
              <CFormLabel htmlFor="floatingInput">Product Price</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol sm="12" md="6" lg>
            <CFormFloating className="mb-3">
              <CFormControl
                type="email"
                id="floatingInputs"
                placeholder="name@example.com"
              />
              <CFormLabel htmlFor="floatingInput">Product Name</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol sm="12" md="6" lg>
            <CFormFloating className="mb-3">
              <CFormControl
                type="email"
                id="floating"
                placeholder="name@example.com"
              />
              <CFormLabel htmlFor="floatingInput">Product Price</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol>
            <CFormLabel htmlFor="exampleFormControlInput1">
              Product Descriptions
            </CFormLabel>
            <Editor
              editorState={descriptions}
              wrapperClassName="editor-wrapper"
              editorClassName="editor"
              onEditorStateChange={this.onEditorStateChange}
                />
          </CCol>
        </CRow>
      </>
    )
  }
}

export default ProductEditorForm
