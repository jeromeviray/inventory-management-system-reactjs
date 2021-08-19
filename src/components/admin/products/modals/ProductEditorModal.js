import React, { Component } from "react"
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
  CFormFloating,
  CFormControl,
  CFormLabel,
  CForm,
  CSpinner,
  CFormSelect
} from "@coreui/react"

//icons
import * as FaIcons from 'react-icons/fa'
import { MdDelete } from "react-icons/md"
import { RiEdit2Line } from "react-icons/ri"

// npm packages
import ImageUploading from "react-images-uploading"
import {
  convertToRaw, EditorState
} from "draft-js"
import { Editor } from "react-draft-wysiwyg"

// action
import { saveProduct } from "src/service/apiActions/productAction/productAction"
import { setProductModal } from "../../../../service/apiActions/modalAction/modalAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"



export class ProductEditorModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      alert: true,
      loading: false,
      successFully: false,
      message: '',
      productDetails: this.productDetail
    }

  }

  productDetail = {
    productName: '',
    productPrice: 0,
    productDescriptions: "",
    productImage: [],
    storeBranch: 'main',
    editorState: EditorState.createEmpty()
  }
  onResetValue = () => {
    this.setState(() => this.productDetail)
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      this.setState({
        visible: this.props.modalVisibleResponse.state.visible,
      })
    }
  }
  handleVisibility = (state) => {
    this.setState({
      visible: false,
    })
  }
  handleImageOnchange = (imageList, addUpdateIndex) => {
    this.setState({
      productImage: imageList,
    })
  }
  onEditorStateChange = (editorState) => {
    const rawState = editorState.getCurrentContent();
    this.setState({
      editorState,
      productDescriptions: convertToRaw(rawState)
    });
  }
  handleOnChange = (event) => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    let {
      productName,
      productPrice,
      productDescriptions,
      productImage,
      storeBranch
    } = this.state

    let accessToken = this.props.credentials.accessToken;
    let type = this.props.credentials.type;

    let token = type + accessToken;


    let productData = new FormData();
    if (productImage) {
      if (productImage.length > 0) {
        this.setState({
          loading: true
        })
        for (let i = 0;i < productImage.length;i++) {
          productData.append('productImages[]', productImage[i].file);
        }

        productData.append('productImages[]', productImage)
        productData.append('productName', productName);
        productData.append('productPrice', productPrice);
        productData.append('productDescription', JSON.stringify(productDescriptions));
        productData.append('branch', storeBranch);

        this.props.saveProduct(productData, token)
          .then(() => {
            this.onResetValue();
            const successMessage = this.props.messageResponse;
            if (successMessage.status === 200) {
              this.setState({
                loading: false,
                successFully: true,
                message: successMessage.data.message
              })
            } else {
              this.setState({
                loading: false,
                successFully: false,

              })
            }
          })
          .catch(() => {
            this.onResetValue();

            const failMessage = this.props.messageResponse;
            console.log(failMessage);
            if (failMessage.status === 403 || failMessage.status === 401) {
              this.props.logout();
              this.props.clearMessage();
              this.setState({
                loading: false,
                message: failMessage.data.message
              })
            }
            this.setState({
              loading: false,
              message: failMessage.data && failMessage.data.message
            })
          })
      }


    } else {
      console.log("Select images");
    }


  }
  render() {
    let {
      visible,
      alert,
      productName,
      productPrice,
      productImage,
      editorState,
      loading,
      successFully,
      message,
      storeBranch
    } = this.state


    return (
      <>

        <CModal size="xl" visible={visible} fullscreen="lg" scrollable>
          <CModalHeader
            onDismiss={() => {
              this.props.setProductModal(false)
            }}
            className="modal-header"
          >
            <CModalTitle>Add Product</CModalTitle>
          </CModalHeader>
          <CForm onSubmit={this.handleSubmit} className="modal-product-form" id="a-form">

            <CModalBody >
              {message && (
                <div className="form-group">
                  <div
                    className={successFully ? "alert alert-success" :
                      "alert alert-danger"}
                    role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CAlert color="warning" dismissible visible={alert}>
                <strong>Maximum 10 images</strong>
              </CAlert>
              <ImageUploading

                multiple
                value={productImage}
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
              <CRow className="mt-5">
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormControl
                      type="text"
                      id="floatingInputProductName"
                      placeholder="Product Name"
                      name="productName"
                      value={productName}
                      onChange={this.handleOnChange}
                      required
                    />
                    <CFormLabel htmlFor="floatingInputProductName">Product Name</CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormControl
                      type="number"
                      id="floatingProductPrice"
                      placeholder="Product Price"
                      name="productPrice"
                      value={productPrice}
                      onChange={this.handleOnChange}

                      required
                    />
                    <CFormLabel htmlFor="floatingInput">Product Price</CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormSelect
                      value={storeBranch}
                      onChange={this.handleOnChange}
                      name="storeBranch"
                      id="floatingSelectBranch"
                      aria-label="Floating label select example"
                    >
                      <option value="main">main</option>
                      <option value="second">second</option>

                    </CFormSelect>
                    <CFormLabel htmlFor="floatingSelectBranch">Branch</CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="12" lg="12">
                  <Editor
                    editorState={editorState}
                    wrapperClassName="editor-wrapper"
                    editorClassName="editor"
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder="Product Description"

                    toolbar={{
                      options: [
                        'inline',
                        'blockType',
                        'fontSize',
                        'fontFamily',
                        'list',
                        'textAlign',
                        'colorPicker',
                        'emoji',
                        'remove',
                        'history'],
                    }}
                  />
                </CCol>
              </CRow>

            </CModalBody>

          </CForm>
          <CModalFooter className="modal-footer">
            <CButton

              color="secondary"
              variant="ghost"
              onClick={() => this.props.setProductModal(!visible)}
              className="text-body"
            >
              Close
            </CButton>
            <CButton
              type="submit"
              color="info"
              form="a-form"
              className="d-flex justify-content-center align-items-center position-relative ">
              {loading ? <CSpinner size="sm" /> :
                <span className="d-flex align-items-center login-icon me-2">
                  <FaIcons.FaPlus size={20} />
                </span>
              }
              Save Product
            </CButton>
          </CModalFooter>
        </CModal>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalVisibleResponse: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
    credentials: state.userResponse.credentials,

  }
}
export default connect(mapStateToProps, {
  setProductModal,
  saveProduct,
  logout,
  clearMessage
})(ProductEditorModal)
