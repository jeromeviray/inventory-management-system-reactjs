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
  CFormSelect,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
  CRow,
  CCol,
  CFormControl,
  CContainer,
  CCallout,
  CAlert,
} from "@coreui/react"
import Barcode from "react-barcode"
//action
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"

import { setSupplyModal } from "src/service/apiActions/modalAction/modalAction"
import { getSuppliers } from "src/service/apiActions/supplierAction/supplierAction"
import { saveIncomingSupply, updateIncomingSupplyItems } from "src/service/apiActions/incomingSupplyAction/incomingSupplyAction"
import { searchProductByBarcodeOrName } from "src/service/apiActions/productAction/productAction"
import ReactSearchAutocomplete from "react-search-autocomplete/dist/components/ReactSearchAutocomplete"
import BarcodeScannerComponent from "react-qr-barcode-scanner"
//icons
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import * as BiIcons from "react-icons/bi"
import * as GrIcons from "react-icons/gr"
import { connect } from "react-redux"
export class SupplyModal extends Component {
  state = {
    loading: false,
    visible: false,
    icon: "",
    action: "",
    supplier: {},
    visible: false,
    query: "",
    page: 0,
    limit: 10,
    message: "",

    product: [],
    productItems: [],
    supplierItems: [],
    supplierSelected: false,
    items: [],
    showScanner: false,
    supplierErrorMessage: "",
    incomingSupplyMessage: "",
    id: "",
    removedProductItems: [],
  }

  componentDidMount() {
    const { query, page, limit } = this.state
    this.getSuppliers(query, page, limit)
    this.searchProduct(query, page, limit)
  }
  getSuppliers = () => {
    const { query, page, limit } = this.state

    this.props.getSuppliers(query, page, limit)
  }

  searchProduct(query, page, limit) {
    this.props.searchProductByBarcodeOrName(query, page, 5)
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageSupplyModal(prevProps, prevState)
    this.manageSupplierResponse(prevProps, prevState)
    this.manageProductResponse(prevProps, prevState)
  }

  manageSupplyModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, icon, supply } = this.props.modalVisible
      if (action === "Add") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
        this.getSuppliers()
      } else if (action === "Edit") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
          productItems: supply.incomingSupplyItems,
          supplier: supply.supplier,
          supplierSelected: true,
          id: supply.id,
        })
      } else if (action === "close") {
        this.setState({
          visible: visible,
          action: "",
          icon: "",
          supplier: [],
          productItems: [],
          supplierItems: [],
          supplierSelected: false,
          removedProductItems: [],
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
        if (this.state.supplierSelected) {
          this.setState({
            supplier: data.suppliers.data,
          })
        } else {
          this.setState({
            supplier: data.suppliers.data
          })
        }
      }
    }
  }
  manageProductResponse = (prevProps, prevState) => {
    const { showScanner } = this.state
    if (prevProps.productResponse !== this.props.productResponse) {
      let { action, status, data } = this.props.productResponse
      console.log(data)

      if (action === "SEARCH_PRODUCT" && status === 200) {
        this.setState({
          items: data.products.data,
          product: data.products.data,
        })
        if (showScanner) {
          data.products.data.map((product, index) => {
            this.handleTempProductItem(index, product)
          })
        }
      }
    }
  }

  handleTempProductItem = (index, item) => {
    let { product } = this.state
    const productItems = this.state.productItems.slice(0)
    console.log(item)
    let find = productItems.findIndex((product) => {
      return product.product.id === item.id
    })

    if (find > -1) {
      let getProduct = productItems[find]
      getProduct.numberReceived++
    } else {
      let item = {
        numberReceived: 1,
        product: {
          id: product[index].id,
          productName: product[index].productName,
          barcode: product[index].barcode,
        },
      }
      productItems.push(item)
    }
    this.setState({
      productItems: productItems,
    })
  }
  handleRemoveTempProductItem = (index, item) => {
    const { action, removedProductItems, productItems } = this.state
    if (action === "Edit") {
      const removed = removedProductItems.slice(0)
      removed.push(item)
      this.setState({
        removedProductItems: removed,
      })
    }
    productItems.splice(index, 1)
    this.setState({
      productItems: productItems,
    })
  }
  handleOnChange = (index, event) => {
    const { productItems } = this.state
    let product = productItems[index]
    product.numberReceived++
    this.setState({
      productItems: productItems,
    })
  }
  handleSupplierOnSearch = (string, results) => {
    const { page, limit } = this.state
    this.setState({
      supplierSelected: false,
    })
    this.props.getSuppliers(string, page, limit).catch(() => {
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

  handleSupplierOnSelect = (item) => {
    const { page, limit } = this.state
    this.setState({
      supplierSelected: true,
    })
    this.props.getSuppliers(item.name, page, limit).catch(() => {
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
  handleProductOnSelect = (item) => {
    const { page, limit } = this.state

    this.searchProduct(item.productName, page, limit)
  }
  handleSupplierOnClear = () => {
    this.setState({ supplier: [], supplierSelected: false })
  }
  handleProductOnClear = () => {
    const { action, page, limit } = this.state

    this.searchProduct("", page, limit)
  }
  handleOnSeachProduct = (string, results) => {
    const { page, limit } = this.state

    this.searchProduct(string, page, limit)
  }
  handleDecodeBarcode = (decoded) => {
    const { page, limit } = this.state
    if (decoded) {
      this.searchProduct(decoded, page, limit)
    }
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    const { action } = this.state
    this.setState({
      loading: true
    })
    if (action === "Add") {
      this.handleOnSave()
    } else if (action === "Edit") {
      this.handleOnUpdate()
    }
  }
  handleOnSave = () => {
    const { supplier, productItems } = this.state

    if (supplier.length > 0 && productItems.length > 0) {
      this.props
        .saveIncomingSupply(productItems, supplier[0])
        .then(() => {
          let { status, data } = this.props.messageResponse
          if (status > 400 && status <= 403) {
            this.props.logout()
            this.props.clearMessage()
          }
          this.props.setSupplyModal(false, "close", "", "")
          this.setState({
            loading: false
          })
        })
        .catch(() => {
          let { status, data } = this.props.messageResponse

          if (status > 400 && status <= 403) {
            setInterval(() => {
              this.props.logout()
              this.props.clearMessage()
            }, 1000)
          } else {
            this.setState({
              loading: false,
              validation: false,
            })
          }
        })
    } else {
      if (supplier.length === 0) {
        this.setState({
          supplierErrorMessage: "PLease Search and Select Supplier.",
        })
      } else if (productItems.length === 0) {
        this.setState({
          incomingSupplyMessage: "Please Add Incoming Products.",
        })
      }
    }
  }
  handleOnUpdate = () => {
    const { productItems, supplier, id, removedProductItems } = this.state

    this.props.updateIncomingSupplyItems(id, productItems, supplier, removedProductItems)
      .then(() => {
        let { status, data } = this.props.messageResponse
        if (status > 400 && status <= 403) {
          this.props.logout()
          this.props.clearMessage()
        }
        this.props.setSupplyModal(false, "close", "", "")
        this.setState({
          loading: false
        })

      })
      .catch(() => {
        let { status, data } = this.props.messageResponse

        if (status > 400 && status <= 403) {
          setInterval(() => {
            this.props.clearMessage()
          }, 1000)
        } else {
          this.setState({
            loading: false,
            validation: false,
          })
        }
      })
  }

  render() {
    let {
      loading,
      visible,
      action,
      icon,
      message,
      product,
      productItems,
      supplierItems,
      supplier,
      supplierSelected,
      items,
      showScanner,
      incomingSupplyMessage,
      supplierErrorMessage,
      removedProductItems,
    } = this.state
    console.log(removedProductItems)
    return (
      <div>
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
            <CForm id="supply-form" onSubmit={this.handleOnSubmit}>
              <CRow>
                <CCol sm="12" md="12" lg="6">
                  <CContainer className="">
                    <ReactSearchAutocomplete
                      items={supplierItems}
                      onSearch={this.handleSupplierOnSearch}
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
                          {action === "Edit" ? (
                            <>
                              <h4>Supplier Name</h4>
                              <h5>{supplier.name && supplier.name}</h5>
                            </>
                          ) : (
                            <>
                              <h4>Supplier Name</h4>
                              {supplier.map((item, index) => {
                                return <h5 key={item.id}>{item.name}</h5>
                              })}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <CAlert color="danger">
                            Please, Search Supplier and Select.
                          </CAlert>
                        </>
                      )}
                    </CCallout>
                  </CContainer>
                </CCol>
                <CCol sm="12" md="12" lg="6">
                  <CRow className="align-items-center">
                    <CCol
                      sm="10"
                      md="10"
                      lg="10"
                      className={showScanner ? "d-none" : "d-block"}
                    >
                      <ReactSearchAutocomplete
                        items={items}
                        onSearch={this.handleOnSeachProduct}
                        onSelect={this.handleProductOnSelect}
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
                    </CCol>
                    <CCol sm="1" md="1" lg="1" className="p-0">
                      <div className="text-center">
                        <CButton
                          className="pt-2 pb-2 "
                          type="button"
                          color={showScanner ? "danger" : "info"}
                          variant="outline"
                          id="btn-scan-barcode"
                          onClick={() =>
                            this.setState({
                              showScanner: !showScanner,
                              // stopStreaming: !stopStreaming,
                            })
                          }
                        >
                          {showScanner ? (
                            <GrIcons.GrClose size="24" />
                          ) : (
                            <BiIcons.BiBarcodeReader size="24" />
                          )}
                        </CButton>
                      </div>
                    </CCol>
                  </CRow>
                  <div className="mb-4 mt-4">
                    <CTable
                      striped
                      hover
                      className={showScanner ? "d-none" : "shadow-sm"}
                      responsive="md"
                      align="middle"
                    >
                      <CTableBody>
                        {product.map((item, index) => {
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
                    <div className={showScanner ? "  d-block mt-3" : " d-none"}>
                      {showScanner ? (
                        <>
                          <BarcodeScannerComponent
                            delay={500}
                            facingMode
                            // stopStream={stopStreaming}
                            torch="true"
                            onUpdate={(err, result) => {
                              if (result) this.handleDecodeBarcode(result.text)
                            }}
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
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
                  {productItems.length > 0 ? (
                    productItems.map((productItem, index) => {
                      return (
                        <CTableRow className="text-center" key={index}>
                          <CTableDataCell>
                            {productItem.product.name
                              ? productItem.product.name
                              : productItem.product.productName}
                          </CTableDataCell>
                          <CTableDataCell>
                            <Barcode
                              value={String(productItem.product.barcode)}
                              height={50}
                              width={1}
                              fontSize={14}
                              margin={7}
                              background="#f5f5f548"
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            <CFormControl
                              type="number"
                              min={1}
                              value={productItem.numberReceived}
                              onChange={(event) =>
                                this.handleOnChange(index, event)
                              }
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            <CButton
                              variant="ghost"
                              color="danger"
                              onClick={() =>
                                this.handleRemoveTempProductItem(
                                  index,
                                  productItem,
                                )
                              }
                            >
                              <MdIcons.MdDelete size={20} />
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      )
                    })
                  ) : (
                    <>
                      {incomingSupplyMessage && (
                        <CTableRow className="text-center">
                          <CTableDataCell colSpan="4">
                            <div className="alert alert-danger" role="alert">
                              {incomingSupplyMessage}
                            </div>
                          </CTableDataCell>
                        </CTableRow>
                      )}
                    </>
                  )}
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
  clearMessage,
  setSupplyModal,
  getSuppliers,
  searchProductByBarcodeOrName,
  saveIncomingSupply,
  updateIncomingSupplyItems
})(SupplyModal)
