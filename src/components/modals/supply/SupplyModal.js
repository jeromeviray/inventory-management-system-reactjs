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
} from "@coreui/react"
import Barcode from "react-barcode"
//action
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setSupplyModal } from "src/service/apiActions/modalAction/modalAction"
import { getSuppliers } from "src/service/apiActions/supplierAction/supplierAction"
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
    suppliers: [],
    message: "",
    toast: "",
    product: [
      { productName: "alaksan", barcode: 123127800 },
      { productName: "Biogesic", barcode: 1212312 },
      { productName: "Diatabs", barcode: 312331231 },
      { productName: "asdas", barcode: 123123 },
    ],
    quantityReceived: 1,
    productItems: [],
  }

  componentDidMount() {

  }

  getSuppliers = () => {
    this.props.getSuppliers()
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageSupplyModal(prevProps, prevState)
    this.manageSupplierResponse(prevProps, prevState)
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
        })
      }
    }
  }
  manageSupplierResponse = (prevProps, prevState) => {
    if (prevProps.supplierResponse !== this.props.supplierResponse) {
      let { status, action, data } = this.props.supplierResponse
      if (action === "GET_SUPPLIERS" && status === 200) {
        this.setState({
          suppliers: data.suppliers,
        })
      }
    }
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
  render() {
    let {
      loading,
      visible,
      action,
      icon,
      suppliers,
      message,
      toast,
      product,
      quantityReceived,
      productItems,
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
                <CCol>
                  <CFormSelect aria-label="Suppliers Name" className="mb-3">
                    {suppliers &&
                      suppliers.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        )
                      })}
                  </CFormSelect>
                </CCol>
                <CCol>
                  <CForm id="search-product-form">
                    <CInputGroup>
                      <CFormControl
                        size="sm"
                        type="text"
                        id="floatingInput"
                        placeholder="Search Product (e.g: Barcode Number or Product Name)"
                        className="p-2"
                        aria-autocomplete="none"
                      />
                      <CButton
                        type="button"
                        color="info"
                        variant="outline"
                        id="button-addon2"
                        form="search-product-form"
                      >
                        <FaIcons.FaSearch />
                      </CButton>
                    </CInputGroup>
                  </CForm>
                  <div className="mb-4">
                    <CTable
                      striped
                      hover
                      className="shadow-sm "
                      responsive="md"
                      align="middle"
                    >
                      <CTableBody>
                        {product.map((item, index) => {
                          return (
                            <CTableRow key={index} className="text-center">
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
})(SupplyModal)
