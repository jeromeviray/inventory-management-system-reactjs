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
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CTableCaption,
  // CFormFloating,
  // CFormControl,
  // CFormLabel,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
  CFormSelect,
  CRow,
  CCol,
  CFormControl,
  CInputGroup,
  CListGroup,
  CListGroupItem,
  CContainer,
  CCallout,
  CAlert,
} from "@coreui/react"
import Barcode from "react-barcode"
//action
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setSupplyModal } from "src/service/apiActions/modalAction/modalAction"
import { getSuppliers } from "src/service/apiActions/supplierAction/supplierAction"
import { searchProductByBarcodeOrName } from "src/service/apiActions/productAction/productAction"
import ReactSearchAutocomplete from "react-search-autocomplete/dist/components/ReactSearchAutocomplete"

//icons
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"

import { connect } from "react-redux"
export class SupplyModal extends Component {
  state = {
    loading: false,
    visible: false,
    icon: "",
    action: "",
    supplier: [],
    visible: false,
    query: "",
    page: 0,
    limit: 10,
    message: "",
    toast: "",
    product: [],
    quantityReceived: 1,
    productItems: [],
    supplierItems: [],
    supplierSelected: false,
    items: [],
  }

  componentDidMount() {
    const { query, page, limit } = this.state
    this.getSuppliers()
    this.searchProduct(query, page, limit)
  }
  getSuppliers = () => {
    const { query, page, limit } = this.state

    this.props.getSuppliers(query, page, limit).catch(() => {
      let { status, data } = this.props.messageResponse
      if (status > 400 && status <= 403) {
        this.props.logout()
        this.props.clearMessage()
      }
      this.setState({
        message: data.message,
      })
    })
  }

  searchProduct(query, page, limit) {
    this.props.searchProductByBarcodeOrName(query, page, 5).catch(() => {
      this.setState({
        toast: this.toastComponent,
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageSupplyModal(prevProps, prevState)
    this.manageSupplierResponse(prevProps, prevState)
    this.manageProductResponse(prevProps, prevState)
  }

  manageSupplyModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      this.getSuppliers()

      let { visible, action, icon, supply } = this.props.modalVisible
      if (action === "Add") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
      } else if (action === "Edit") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
      } else {
        this.setState({
          visible: visible,
          action: "",
          icon: "",
          supplies: [],
          supplierSelected: false,
        })
      }
    }
  }
  manageSupplierResponse = (prevProps, prevState) => {
    if (prevProps.supplierResponse !== this.props.supplierResponse) {
      let { status, action, data } = this.props.supplierResponse
      if (action === "GET_SUPPLIERS" && status === 200) {
        this.setState({
          supplierItems: data.suppliers.data,
        })
      }
    }
  }
  manageProductResponse = (prevProps, prevState) => {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { action, status, data } = this.props.productResponse
      if (action === "SEARCH_PRODUCT" && status === 200) {
        this.setState({
          items: data.products.data,
          product: data.products.data,
        })
      }
    }
  }
  toastComponent() {
    let { data, status } = this.props.messageResponse
    let color = ""
    if (status === 200) {
      color = "success"
    } else if (status > 400 && status <= 403) {
      color = "danger"
    } else if (status > 405 && status <= 500) {
      color = "warning"
    } else {
      color = "primary"
    }
    return (
      <CToast
        color={color}
        className="text-white align-items-center"
        delay={3000}
      >
        <div className="d-flex">
          <CToastBody>{data.message}</CToastBody>
          <CToastClose className="me-2 m-auto" white />
        </div>
      </CToast>
    )
  }
  handleTempProductItem = (index, item) => {
    let { product } = this.state
    const productItems = this.state.productItems.slice(0)

    let find = productItems.findIndex((product) => {
      return product.name === item.productName
    })

    if (find > -1) {
      let getProduct = productItems[find]
      getProduct.quantityReceived++
    } else {
      let item = {
        name: product[index].productName,
        barcode: product[index].barcode,
        quantityReceived: 1,
      }
      productItems.push(item)
    }
    this.setState({
      productItems: productItems,
    })
  }
  handleRemoveTempProductItem = (index) => {
    let { productItems } = this.state
    productItems.splice(index, 1)
    this.setState({
      productItems: productItems,
    })
  }
  handleSupplierOnSelect = (item) => {
    this.setState({
      supplier: item,
      supplierSelected: true,
    })
  }
  handleSupplierOnClear = () => {
    this.setState({ supplier: [], supplierSelected: false })
  }
  handleProductOnClear = () => {
    const { action, page, limit } = this.state

    this.searchProduct("", page, limit)
  }
  handleOnSeachProduct = (string, results) => {
    const { action, page, limit } = this.state

    this.searchProduct(string, page, limit)
  }
  render() {
    let {
      loading,
      visible,
      action,
      icon,
      message,
      toast,
      product,
      quantityReceived,
      productItems,
      supplierItems,
      supplier,
      supplierSelected,
      items,
    } = this.state
    return (
      <div>
        <CToaster push={toast} placement="top-end" />
        <CModal visible={visible} size="xl" scrollable>
          <CModalHeader
            onDismiss={() => {
              this.props.setSupplyModal(false, "close", "", "")
              this.props.clearMessage()
            }}
          >
            <CModalTitle>
              <div className="d-flex align-items-center">
                {icon}
                {action + " Supplies"}
              </div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm id="supply-form">
              <CRow>
                <CCol sm="12" md="12" lg="6">
                  <CContainer className="">
                    <ReactSearchAutocomplete
                      items={supplierItems}
                      // onSearch={this.handleOnSearch}
                      onSelect={this.handleSupplierOnSelect}
                      onClear={this.handleSupplierOnClear}
                      fuseOptions={{ keys: ["name"] }}
                      resultStringKeyName="name"
                      placeholder="Search Supplier"
                      className="search-bar"
                      autoFocus
                      styling={{
                        boxShadow: "none",
                        fontSize: "16px",
                        zIndex: 999,
                        padding: "16px 24px",
                        height: "50px",
                        border: " 1px solid #b1b7c1",
                        fontWiegth: "500",
                        placeholderColor: "Black",
                        width: "100%",
                      }}
                    />
                  </CContainer>
                  <CContainer className="mt-4">
                    <CCallout color="info">
                      {supplierSelected ? (
                        <>
                          <h4>Supplier Name</h4>
                          <h5>{supplier.name}</h5>
                        </>
                      ) : (
                        <>
                          <CAlert color="info">
                            Please, Search Supplier and Select.
                          </CAlert>
                        </>
                      )}
                    </CCallout>
                  </CContainer>
                </CCol>
                <CCol sm="12" md="12" lg="6">
                  <CContainer className="">
                    <ReactSearchAutocomplete
                      items={items}
                      onSearch={this.handleOnSeachProduct}
                      // onSelect={this.handleOnSelect}
                      onClear={this.handleProductOnClear}
                      fuseOptions={{ keys: ["productName", "barcode"] }}
                      resultStringKeyName="productName"
                      placeholder="Search Product"
                      className="search-bar"
                      autoFocus
                      styling={{
                        boxShadow: "none",
                        fontSize: "16px",
                        zIndex: 999,
                        padding: "16px 24px",
                        height: "50px",
                        border: " 1px solid #b1b7c1",
                        fontWiegth: "500",
                        placeholderColor: "Black",
                        width: "100%",
                      }}
                    />
                  </CContainer>
                  <div className="mb-4 mt-4">
                    <CTable
                      striped
                      hover
                      className="shadow-sm "
                      responsive="md"
                      align="middle"
                    >
                      <CTableBody>
                        {product.map((item, index) => {
                          console.log(item)
                          return (
                            <CTableRow key={item.id} className="text-center">
                              <CTableDataCell>
                                {item.productName}
                              </CTableDataCell>
                              <CTableDataCell>{item.barcode}</CTableDataCell>
                              <CTableDataCell>
                                <CButton
                                  variant="ghost"
                                  color="info"
                                  onClick={() =>
                                    this.handleTempProductItem(index, item)
                                  }
                                >
                                  <FaIcons.FaPlusCircle />
                                </CButton>
                              </CTableDataCell>
                            </CTableRow>
                          )
                        })}
                      </CTableBody>
                    </CTable>
                  </div>
                </CCol>
              </CRow>
              <CTable
                striped
                hover
                className="shadow-sm "
                responsive="md"
                bordered
                align="middle"
              >
                <CTableCaption>
                  List of Brand: <b>{productItems.length}</b>
                </CTableCaption>
                <CTableHead color="dark">
                  <CTableRow className="text-center">
                    <CTableHeaderCell scope="col">
                      Product Name
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Product Barcode
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Qunatity Recieved
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className="text-center" color="light">
                  {productItems &&
                    productItems.map((productItem, index) => {
                      return (
                        <CTableRow className="text-center" key={index}>
                          <CTableDataCell>{productItem.name}</CTableDataCell>
                          <CTableDataCell>
                            <Barcode
                              value={String(productItem.barcode)}
                              height={50}
                              width={1}
                              fontSize={14}
                              margin={7}
                              background="#f5f5f548"
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            {productItem.quantityReceived}
                          </CTableDataCell>
                          <CTableDataCell>
                            <CButton
                              variant="ghost"
                              color="danger"
                              onClick={() =>
                                this.handleRemoveTempProductItem(index)
                              }
                            >
                              <MdIcons.MdDelete size={20} />
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      )
                    })}
                  {message && (
                    <CTableRow className="text-center">
                      <CTableDataCell colSpan="4">
                        <div className="alert alert-danger" role="alert">
                          {message}
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  )}
                </CTableBody>
              </CTable>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() => {
                this.props.setSupplyModal(false, "close", "", "")
                this.props.clearMessage()
              }}
            >
              Close
            </CButton>
            <CButton
              type="submit"
              color="primary"
              disabled={loading}
              form="supply-form"
            >
              {loading && <CSpinner size="sm" className="ms-1" />}
              {/* {action === "Edit" ? "Update" : "Create"} Supplier */}
              Save Incoming Supply
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
    supplierResponse: state.supplierResponse,
    productResponse: state.productResponser,
  }
}
export default connect(mapStateToProps, {
  logout,
  clearMessage,
  setSupplyModal,
  getSuppliers,
  searchProductByBarcodeOrName,
})(SupplyModal)
