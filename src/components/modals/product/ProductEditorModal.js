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
  CFormSelect,
} from "@coreui/react"

//icons
// import * as FaIcons from 'react-icons/fa'
import { MdDelete } from "react-icons/md"
import * as BiIcons from "react-icons/bi"

// npm packages
import ImageUploading from "react-images-uploading"
import { convertFromRaw, convertToRaw, EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"

// action
import { saveProduct } from "src/service/apiActions/productAction/productAction"
import { setProductModal } from "../../../service/apiActions/modalAction/modalAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getImage } from "src/service/apiActions/productAction/productAction"
import { getCategories } from "src/service/apiActions/categoryAction/categoryAction"
import { getBrands } from "src/service/apiActions/brandAction/brandAction"
import { updateProduct } from "src/service/apiActions/productAction/productAction"
//api
import ProductApiService from "src/service/restAPI/ProductApiService"
import ScanBarcodeModal from "../scanBarcode/ScanBarcodeModal"
import { setScanModal } from "../../../service/apiActions/modalAction/modalAction"
import { getDecodedBarcode } from "src/service/apiActions/scannerAction/scannerAction"
export class ProductEditorModal extends Component {
  constructor(props) {
    super(props)

    this.removeImage = this.removeImage.bind(this)

    this.state = {
      visible: false,
      alert: true,
      loading: false,
      successFully: false,
      message: "",
      status: "",
      productDetails: this.productDetail,
      action: "",
      icon: "",
      images: [],
      productImage: [],
      removedImages: [],

      editorState: EditorState.createEmpty(),
      autoGenerateBarcode: false,
      brands: [],
      categories: [],
    }
  }

  productDetail = {
    productName: "",
    productPrice: 0,
    productDescriptions: "",
    barcode: "",
    brandName: "",
    brandId: "",
    categoryName: "",
    categoryId: "",
    threshold: 0,
    productId: "",
  }
  onResetValue = () => {
    this.setState(() => this.productDetail)
  }
  componentDidMount() {
    this.loadImage()
    this.getBrands()
    this.getCategories()
  }
  getCategories = () => {
    this.props.getCategories().catch(() => {
      let { status, data } = this.props.messageResponse
      this.setState({
        message: data.message,
      })
    })
  }
  getBrands = () => {
    this.props.getBrands().catch(() => {
      let failMessage = this.props.messageResponse
      this.setState({
        message: failMessage.data.message,
      })
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    this.manageModalVisible(prevProps, prevState)
    this.manageBrandsResponse(prevProps, prevState)
    this.manageCategoryResponse(prevProps, prevState)
    this.manageScannerResponse(prevProps, prevState)
  }
  manageBrandsResponse = (prevProps, prevState) => {
    if (prevProps.brandResponse !== this.props.brandResponse) {
      let { status, action, data } = this.props.brandResponse
      if (status === 200 && action === "GETBRANDS") {
        this.setState({
          brands: data.brands,
        })
      }
    }
  }
  manageCategoryResponse = (prevProps, prevState) => {
    if (prevProps.categoryResponse !== this.props.categoryResponse) {
      let { action, data, status } = this.props.categoryResponse
      if (action === "GET_CATEGORIES" && status === 200) {
        this.setState({
          categories: data.categories,
        })
      }
    }
  }
  manageModalVisible = (prevProps, prevState) => {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let { action, visible, icon } = this.props.modalVisibleResponse
      console.log(this.props.modalVisibleResponse)
      if (action === "Add") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
      } else if (action === "Edit") {
        let { product, action, visible, icon } = this.props.modalVisibleResponse
        console.log(product);
        let {
          productName,
          productDescription,
          barcode,
          productPrice,
          brand,
          category,
          fileImages,
          id,
        } = product.product
        const { threshold } = product.inventory
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
          productName: productName,
          productPrice: productPrice,
          barcode: barcode,
          brandName: brand && brand.brand,
          categoryName: category && category.name,
          productId: id,
          threshold: threshold,
          editorState: productDescription
            ? EditorState.createWithContent(
              convertFromRaw(JSON.parse(productDescription)),
            )
            : EditorState.createEmpty(),
        })

        this.getImages(fileImages)
      } else if (action === "close") {
        this.props.clearMessage()
        this.setState({
          visible: this.props.modalVisibleResponse.visible,
          productName: "",
          productPrice: "",
          barcode: "",
          brandName: "",
          categoryName: "",
          editorState: EditorState.createEmpty(),
          productImage: [],
          removedImages: [],
          threshold: 0
        })
      }
    }
  }
  async getImages(fileImages) {
    for (let i = 0;i < fileImages.length;i++) {
      ProductApiService.getImage(fileImages[i].path, fileImages[i].fileName)
        .then((response) => {
          this.loadImage(response.data, fileImages[i].fileName)
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
    let { productImage } = this.state
    if (!image) {
      return
    }
    let reader = new FileReader()
    reader.onloadend = () => {
      productImage.push({
        data_url: reader.result,
        file: null,
        image_created: true,
        filename: fileName,
      })
      this.setState({
        productImage: productImage,
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
    const rawState = editorState.getCurrentContent()
    this.setState({
      editorState,
    })
  }

  handleOnChange = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let { action } = this.state

    this.setState({
      loading: true,
    })

    if (action === "Add") {
      this.saveProduct()
    } else if (action === "Edit") {
      this.editProduct()
    } else {
      this.setState({
        visible: this.props.modalVisibleResponse.visible,
      })
    }
  }

  saveProduct = () => {
    let {
      productName,
      productPrice,
      productImage,
      barcode,
      editorState,
      categoryName,
      brandName,
      threshold
    } = this.state
    let productData = new FormData()
    const getThreshold = typeof threshold === undefined ? 0 : threshold;
    this.setState({ threshold: getThreshold })
    if (productImage.length > 0) {
      for (let i = 0;i < productImage.length;i++) {
        if (productImage[i].file) {
          productData.append("productImages[]", productImage[i].file)
        }
      }
    } else {
      productData.append("productImages[]", productImage)
    }

    productData.append("barcode", barcode)
    productData.append("productName", productName)
    productData.append("productPrice", productPrice)
    productData.append("brandName", brandName)
    productData.append("categoryName", categoryName)
    productData.append("threshold", getThreshold)
    productData.append(
      "productDescription",
      JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    )
    this.props
      .saveProduct(productData)
      .then(() => {
        this.onResetValue()
        const successMessage = this.props.messageResponse
        if (successMessage.status === 200) {
          this.setState({
            loading: false,
            successFully: true,
            editorState: EditorState.createEmpty(),
            productImage: [],

          })
        } else {
          this.setState({
            loading: false,
            productImage: [],
            successFully: false,
            editorState: EditorState.createEmpty(),
          })
        }
        this.props.setProductModal(false, "close")

      })
      .catch(() => {
        this.onResetValue()
        this.setState({
          loading: false,
          productImage: [],
          editorState: EditorState.createEmpty(),
        })
      })
  }

  editProduct = () => {
    let {
      productName,
      productPrice,
      productImage,
      barcode,
      editorState,
      categoryName,
      brandName,
      productId,
      removedImages,
      threshold
    } = this.state
    let productData = new FormData()
    const getThreshold = typeof threshold === undefined ? 0 : threshold;
    this.setState({ threshold: getThreshold })
    if (productImage.length > 0) {
      for (let i = 0;i < productImage.length;i++) {
        if (productImage[i].file) {
          productData.append("productImages[]", productImage[i].file)
        }
      }
    } else {
      productData.append("productImages[]", productImage)
    }

    productData.append("removedImages[]", removedImages)
    productData.append("barcode", barcode)
    productData.append("productName", productName)
    productData.append("productPrice", productPrice)
    productData.append("brandName", brandName)
    productData.append("threshold", getThreshold)
    productData.append("categoryName", categoryName)
    productData.append(
      "productDescription",
      JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    )
    this.props
      .updateProduct(productId, productData)
      .then(() => {
        const { status } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            loading: false,
            successFully: true,
          })
        } else {
          this.setState({
            loading: false,
            successFully: false,
          })
        }
        this.props.setProductModal(false, "close")

      })
      .catch(() => {
        let { status, data } = this.props.messageResponse
        this.setState({
          loading: false,
        })
      })
  }

  removeImage(index) {
    let { productImage, removedImages } = this.state
    if (productImage[index].filename) {
      removedImages.push(productImage[index].filename)
    }
  }
  manageScannerResponse = (prevProps, prevState) => {
    if (prevProps.scannerResponse !== this.props.scannerResponse) {
      let { action, decoded } = this.props.scannerResponse
      console.log(this.props.scannerResponse)

      if (action === "inputBarcode") {
        this.setState({ barcode: decoded })
      }
    }
  }
  render() {
    let {
      visible,
      alert,
      productName,
      productPrice,
      productImage,
      barcode,
      editorState,
      loading,
      successFully,
      message,
      action,
      icon,
      categoryName,
      categoryId,
      brandName,
      brandId,
      threshold,
      autoGenerateBarcode,
      brands,
      categories,
    } = this.state
    const styleOption = {
      fontWeight: "600",
      fontSize: "16px",
    }
    return (
      <>
        <ScanBarcodeModal />
        <CModal size="xl" visible={visible} fullscreen="lg" scrollable>
          <CModalHeader
            onDismiss={() => {
              this.props.setProductModal(false, "close")
            }}
            className="modal-header"
          >
            <CModalTitle>{action} Product</CModalTitle>
          </CModalHeader>
          <CForm
            onSubmit={this.handleSubmit}
            className="modal-product-form"
            id="a-form"
          >
            <CModalBody>
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successFully
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
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
                    <CFormLabel htmlFor="floatingInputProductName">
                      Product Name
                    </CFormLabel>
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
                    <CFormLabel htmlFor="floatingInput">
                      Product Price
                    </CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <div className="d-flex align-items-center justify-content-between">
                    <CFormFloating className="mb-3 w-100">
                      <CFormControl
                        type="number"
                        id="floatingBarcode"
                        placeholder="Product Barcode"
                        name="barcode"
                        value={barcode}
                        onChange={this.handleOnChange}
                        required
                        disabled={action === "Edit" ? true : false}
                      // disabled={autoGenerateBarcode}
                      />
                      <CFormLabel htmlFor="floatingBarcode">
                        Product Barcode
                      </CFormLabel>
                    </CFormFloating>
                    <div>
                      <CButton
                        className="pt-2 pb-2 ms-2"
                        type="button"
                        color="info"
                        variant="outline"
                        id="btn-scan-barcode"
                        onClick={() =>
                          this.props.setScanModal(!false, "inputBarcode")
                        }
                      >
                        <BiIcons.BiBarcodeReader size="24" />
                      </CButton>
                    </div>
                  </div>

                  {/* <CRow className="align-items-end">
                    <CCol sm="8" md="8" lg="8">
                      <CFormFloating className="mb-3">
                        <CFormControl
                          type="number"
                          id="floatingBarcode"
                          placeholder="Product Barcode"
                          name="barcode"
                          value={barcode}
                          onChange={this.handleOnChange}
                          required
                          disabled={autoGenerateBarcode}
                        />
                        <CFormLabel htmlFor="floatingBarcode">
                          Product Barcode
                        </CFormLabel>
                      </CFormFloating>
                    </CCol>
                    <CCol sm="4" md="4" lg="4">
                      <CFormCheck
                        value={autoGenerateBarcode}
                        onChange={() =>
                          this.setState({
                            autoGenerateBarcode: !autoGenerateBarcode,
                          })
                        }
                        name="autoGenerateBarcode"
                        className="mb-3"
                        id="autoGenerateBarcode"
                        label="Generate Barcode"
                      />
                    </CCol>
                  </CRow> */}
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormControl
                      type="number"
                      id="floatingThreshold"
                      placeholder="Product Threshold"
                      name="threshold"
                      value={threshold}
                      onChange={this.handleOnChange}
                    />
                    <CFormLabel htmlFor="floatingThreshold">
                      Stock Threshold
                    </CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormSelect
                      value={brandName}
                      onChange={this.handleOnChange}
                      name="brandName"
                      id="floatingSelectBrand"
                      aria-label="Brand Names"
                    >
                      <option value="">Choose Brand</option>
                      {brands.data &&
                        brands.data.map((brand, index) => {
                          return (
                            <option
                              key={index}
                              value={brand.brandName}
                              style={{ ...styleOption }}
                            >
                              {brand.brandName}
                            </option>
                          )
                        })}
                    </CFormSelect>
                    <CFormLabel htmlFor="floatingSelectBrand">Brand</CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormSelect
                      value={categoryName}
                      onChange={this.handleOnChange}
                      name="categoryName"
                      id="floatingSelectCategory"
                      aria-label="Categories"
                    >
                      <option value="">Choose Category</option>
                      {categories.data &&
                        categories.data.map((category, index) => {
                          return (
                            <option
                              key={index}
                              value={category.categoryName}
                              style={{ ...styleOption }}
                            >
                              {category.categoryName}
                            </option>
                          )
                        })}
                    </CFormSelect>
                    <CFormLabel htmlFor="floatingSelectCategory">
                      Category
                    </CFormLabel>
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
            </CModalBody>
          </CForm>
          <CModalFooter className="modal-footer">
            <CButton
              color="secondary"
              variant="ghost"
              onClick={() => this.props.setProductModal(!visible, "close")}
              className="text-body"
            >
              Close
            </CButton>
            <CButton
              type="submit"
              color="info"
              form="a-form"
              className="d-flex justify-content-center align-items-center position-relative "
              disabled={loading}
            >
              {loading ? (
                <CSpinner size="sm" />
              ) : (
                <span className="d-flex align-items-center login-icon me-2">
                  {icon}
                </span>
              )}
              {action === "Edit" ? "Update" : "Create"} Product
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
    brandResponse: state.brandResponse,
    categoryResponse: state.categoryResponse,
    scannerResponse: state.scannerResponse,
  }
}
export default connect(mapStateToProps, {
  setProductModal,
  saveProduct,
  clearMessage,
  getImage,
  getCategories,
  getBrands,
  updateProduct,
  setScanModal,
  getDecodedBarcode,
})(ProductEditorModal)
