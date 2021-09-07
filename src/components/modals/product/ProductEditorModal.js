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
// import * as FaIcons from 'react-icons/fa'
import { MdDelete } from "react-icons/md"
import { RiEdit2Line } from "react-icons/ri"

// npm packages
import ImageUploading from "react-images-uploading"
import {
  convertFromRaw,
  convertToRaw, EditorState
} from "draft-js"
import { Editor } from "react-draft-wysiwyg"

// action
import { saveProduct } from "src/service/apiActions/productAction/productAction"
import { setProductModal } from "../../../service/apiActions/modalAction/modalAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getImage } from "src/service/apiActions/productAction/productAction"
import { getBranches } from "src/service/apiActions/branchAction/branchAction"
//api
import ProductApiService from "src/service/restAPI/ProductApiService"


export class ProductEditorModal extends Component {
  constructor(props) {
    super(props)

    this.removeImage = this.removeImage.bind(this);

    this.state = {
      visible: false,
      alert: true,
      loading: false,
      successFully: false,
      message: '',
      status: '',
      productDetails: this.productDetail,
      action: '',
      icon: '',
      images: [],
      productImage: [],
      removedImages: []

      // images: []
    }

  }

  productDetail = {
    productName: '',
    productPrice: 0,
    productDescriptions: "",
    productImage: [],
    branches: [],
    branch: ''
  }
  onResetValue = () => {
    this.setState(() => this.productDetail)
  }
  componentDidMount() {
    let { accessToken, type } = this.props.credentials;
    let token = type + accessToken;
    this.props.getBranches(token);
    this.loadImage();

  }
  componentDidUpdate = (prevProps, prevState) => {
    this.manageModalVisible(prevProps, prevState);
    this.manageBranchResponse(prevProps, prevState);
  }
  manageModalVisible = (prevProps, prevState) => {

    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      if (this.props.modalVisibleResponse.action === "Add") {
        this.setState({
          visible: this.props.modalVisibleResponse.visible,
          action: this.props.modalVisibleResponse.action,
          icon: this.props.modalVisibleResponse.icon,
          editorState: EditorState.createEmpty()
        })
      } else if (this.props.modalVisibleResponse.action === "Edit") {
        let product = this.props.modalVisibleResponse.product
        this.setState({
          visible: this.props.modalVisibleResponse.visible,
          action: this.props.modalVisibleResponse.action,
          icon: this.props.modalVisibleResponse.icon,
          productName: product.productName,
          productPrice: product.productPrice,
          editorState: product.productDescription ?
            EditorState.createWithContent(convertFromRaw(JSON.parse(product.productDescription))) :
            null,
          branch: product.branch ?
            product.branch.branch :
            '',
        })
        this.getImages(product.fileImages);

      } else {
        this.setState({
          visible: this.props.modalVisibleResponse.visible,

        })
      }

    }
  }
  manageBranchResponse = (prevProps, prevState) => {
    if (prevProps.branchResponse !== this.props.branchResponse) {
      let { status, action, data } = this.props.branchResponse;
      console.log(this.props.branchResponse)
      if (status <= 200 && action === "GETBRANCH") {
        this.setState({
          branches: data.branch,
        })
      }
    }
  }
  async getImages(fileImages) {
    let { accessToken, type } = this.props.credentials;
    let token = type + accessToken;
    for (let i = 0;i < fileImages.length;i++) {
      ProductApiService.getImage(fileImages[i].fileName, token)
        .then((response) => {
          // console.log(response.data)
          this.loadImage(response.data, fileImages[i].fileName)
        }).catch((error) => {
          const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message || error.error_message ||
            error.toString();

          const status = (error.response &&
            error.response.data &&
            error.response.data.code) || error.status ||
            error.toString();
          this.setState({
            status: status,
            message: message
          })
        })
    }
  }

  loadImage = (image, fileName) => {
    let { productImage } = this.state;
    console.log(productImage);
    if (!image) {
      return
    }
    let reader = new FileReader();
    reader.onloadend = () => {
      productImage.push({
        data_url: reader.result,
        file: null,
        image_created: true,
        filename: fileName
      })
      this.setState({
        productImage: productImage
      })
    }
    if (image) {
      reader.readAsDataURL(image)
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
      action,
      removedImages,
      branch,
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
          if (productImage[i].file) {
            productData.append('productImages[]', productImage[i].file);
          }
        }
        productData.append('removedImages', removedImages);
        productData.append('productName', productName);
        productData.append('productPrice', productPrice);
        productData.append('productDescription', JSON.stringify(productDescriptions));
        productData.append('branch', branch);

        if (action === "Add") {
          this.saveProduct(productData, token);
        } else if (action === "Edit") {
          this.editProduct(productData, token);
        } else {
          this.setState({
            visible: this.props.modalVisibleResponse.visible,
          })
        }
      }
    } else {
      console.log("Select images");
    }
  }

  saveProduct = (productData, token) => {
    this.props.saveProduct(productData, token)
      .then(() => {
        this.onResetValue();
        console.log("success")
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
        console.log("eerrorr")

        const failMessage = this.props.messageResponse;
        console.log(failMessage);
        if (failMessage.status === 403 ||
          failMessage.status === 401) {

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

  editProduct = (productData, token) => {

  }

  removeImage(index) {
    let { productImage, removedImages } = this.state;
    if (productImage[index].filename) {
      removedImages.push(productImage[index].filename)
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
      action,
      icon,
      branch,
      branches
    } = this.state


    let getBranchOption = branches
      && branches.map((branch, i) => {
        return (

          <option key={i} value={branch}>{branch}</option>
        )
      }, this);
    return (
      <>
        <CModal size="xl" visible={visible} fullscreen="lg" scrollable>
          <CModalHeader
            onDismiss={() => {
              this.props.setProductModal(false, 'close')
            }}
            className="modal-header"
          >
            <CModalTitle>{action} Product</CModalTitle>
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
                      value={branch}
                      onChange={this.handleOnChange}
                      name="branch"
                      id="floatingSelectBranch"
                      aria-label="Floating label select example"
                    >
                      <option>Choose Branch</option>
                      {getBranchOption}
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
              onClick={() => this.props.setProductModal(!visible, 'close')}
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
                  {icon}
                </span>
              }
              Save {action === 'Edit' ? 'Changes' : "Product"}
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
    productResponse: state.productResponser,
    branchResponse: state.branchResponse
  }
}
export default connect(mapStateToProps, {
  setProductModal,
  saveProduct,
  logout,
  clearMessage,
  getImage,
  getBranches
})(ProductEditorModal)
