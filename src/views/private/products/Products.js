import React, { Component, lazy } from "react"
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CTableCaption,
  CButton,
  CForm,
  CInputGroup,
  CFormControl,
  CBadge,


} from "@coreui/react"
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import * as BiIcons from "react-icons/bi"

import Barcode from "react-barcode"
import ReactPaginate from "react-paginate"
//action
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getProducts } from "../../../service/apiActions/productAction/productAction"
import { setProductModal } from "../../../service/apiActions/modalAction/modalAction"
import {
  setProductDetailsModal,
  editProductModal,
} from "../../../service/apiActions/modalAction/modalAction"
import { getInventories } from "src/service/apiActions/inventoryAction/inventoryAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getProduct } from "src/service/apiActions/productAction/productAction"
import {
  setAlertModal,
  setScanModal,
} from "../../../service/apiActions/modalAction/modalAction"

import AlertModal from "src/components/modals/alert/AlertModal"
import ScanBarcodeModal from "src/components/modals/scanBarcode/ScanBarcodeModal"
const ProductDetialsModal = lazy(() =>
  import("src/components/modals/product/ProductDetialsModal"),
)
const ProductEditorModal = lazy(() =>
  import("src/components/modals/product/ProductEditorModal.js"),
)
//action
class Products extends Component {
  state = {
    products: {
      data: [],
      totalPages: 0,
    },
    keyword: "",
    visible: false,

    page: 0,
    limit: 10,
    query: "",
  }

  componentDidMount() {
    const { page, limit, query } = this.state
    this.getProducts(page, limit, query)
  }

  getProducts(page, limit, query) {
    this.props.getProducts(query, page, limit)
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageModalResponse(prevProps, prevProps)
    this.manageProductResponse(prevProps, prevState)
    this.manageScannerResponse(prevProps, prevState)
  }

  manageModalResponse(prevProps, prevState) {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let response = this.props.modalVisibleResponse
      this.setState({
        visible: response.visible,
      })
      if (response.action === "close") {
        const { page, limit, query } = this.state
        this.getProducts(page, limit, query)
      }
    }
  }
  manageProductResponse(prevProps, prevState) {
    const { visible } = this.state

    if (prevProps.productResponse !== this.props.productResponse) {
      let { action, status, data } = this.props.productResponse
      if (action === "GETBYID") {
        if (status >= 200 && status <= 300) {
          this.props.editProductModal(
            !visible,
            "Edit",
            data.product.product,
            <FaIcons.FaEdit size={20} />,
          )
        }
      } else if (status === 200 && action === "LIST") {
        this.setState({
          products: data,
        })
      }
    }
  }
  manageScannerResponse = (prevProps, prevState) => {
    if (prevProps.scannerResponse !== this.props.scannerResponse) {
      let { action, decoded } = this.props.scannerResponse
      if (action === "DECODEDBARCODE") {
        const { page, limit } = this.state
        this.props.getProducts(decoded, page, limit)
        this.setState({ query: decoded })
      }
    }
  }
  renderProductEditorModal() {
    return <ProductEditorModal />
  }

  manageStatus = (status) => {
    switch (status) {
      case "OK":
        return (
          <CBadge color="success" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case "LOW":
        return (
          <CBadge color="warning" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case "OUT_OF_STOCK":
        return (
          <CBadge color="danger" shape="rounded-pill">
            OUT OF STOCK
          </CBadge>
        )
      default:
        return (
          <CBadge color="danger" shape="rounded-pill">
            {status}
          </CBadge>
        )
    }
  }

  handleSearch = (event) => {
    const { page, limit } = this.state
    this.props.getProducts(event.target.value, page, limit)
    this.setState({ query: event.target.value })
  }
  handleOnSubmitSearch = (event) => {
    event.preventDefault()
    const { query, page, limit } = this.state
    this.props.getProducts(query, page, limit)
    this.setState({
      query: event.target.value,
    })
  }
  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query } = this.state
    this.props.getProducts(query, page, limit)
  }
  handleGetProduct = (id) => {
    const { accessToken, type } = this.props.userResponse.credentials
    const token = type + accessToken

    this.props.getProduct(id, token)
  }

  renderScanBarcodeModal = () => {
    return <ScanBarcodeModal />
  }
  render() {
    let { visible, message, products } = this.state
    return (
      <>
        {this.renderProductEditorModal()}
        {this.renderScanBarcodeModal()}
        <AlertModal />

        <ProductDetialsModal />
        <div className="d-flex justify-content-between mb-2">
          <div className="w-100">
            <CButton
              shape="rounded-pill"
              color="primary"
              variant="ghost"
              className="d-flex justify-content-center align-items-center mb-3"
              onClick={() =>
                this.props.setProductModal(
                  !visible,
                  "Add",
                  <FaIcons.FaPlus size={20} />,
                )
              }
            >
              <FaIcons.FaPlus size={20} />
              <span style={{ marginLeft: "10px" }}>Add Product</span>
            </CButton>
          </div>

          <div className="w-100 d-flex justify-content-end align-items-center">
            <CForm
              onSubmit={this.handleOnSubmitSearch}
              id="search-form"
              className="w-75"
            >
              <CInputGroup>
                <CFormControl
                  type="text"
                  id="floatingInput"
                  placeholder="Search"
                  className="p-2"
                  value={this.state.query}
                  onChange={this.handleSearch}
                />
                <CButton
                  form="search-form"
                  type="submit"
                  color="info"
                  variant="outline"
                  id="btn-search"
                  className=""
                >
                  <FaIcons.FaSearch />
                </CButton>
              </CInputGroup>
            </CForm>
            <div className="text-center">
              <CButton
                className="pt-2 pb-2 ms-2"
                type="button"
                color="info"
                variant="outline"
                id="btn-scan-barcode"
                onClick={() => this.props.setScanModal(!visible, "barcode")}
              >
                <BiIcons.BiBarcodeReader size="24" />
              </CButton>
            </div>
          </div>
        </div>
        <CTable
          striped
          hover
          className="shadow-sm "
          responsive
          bordered
          align="middle"
        >
          <CTableCaption>
            List of Products: <b>{products.totalItems}</b>
          </CTableCaption>

          <CTableHead color="dark">
            <CTableRow className="text-center">
              {/* <CTableHeaderCell scope="col">Image</CTableHeaderCell> */}
              <CTableHeaderCell scope="col">Barcode</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Price</CTableHeaderCell>
              <CTableHeaderCell scope="col">Alert Stocks Threshold</CTableHeaderCell>
              <CTableHeaderCell scope="col">Total Stocks</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="text-center" color="light">
            {message && (
              <CTableRow className="text-center">
                <CTableDataCell colSpan="8">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </CTableDataCell>
              </CTableRow>
            )}
            {products.data.length > 0 ? (
              products.data.map((product, index) => {
                const { id, barcode, productName, productPrice } =
                  product.product
                const { threshold, status, totalStock } = product.inventory
                return (
                  <CTableRow className="text-center" key={index}>
                    <CTableDataCell>
                      <Barcode
                        value={String(barcode)}
                        height={50}
                        width={1}
                        fontSize={14}
                        margin={7}
                        background="#f5f5f548"
                      />
                    </CTableDataCell>
                    <CTableDataCell>{productName}</CTableDataCell>
                    <CTableDataCell>
                      &#8369;{productPrice.toFixed(2)}
                    </CTableDataCell>
                    <CTableDataCell>{threshold}</CTableDataCell>
                    <CTableDataCell>{totalStock}</CTableDataCell>
                    <CTableDataCell>{this.manageStatus(status)}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="secondary"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          this.props.setProductDetailsModal(
                            true,
                            "view",
                            product,
                          )
                        }
                      >
                        <FaIcons.FaEye size="20" />
                      </CButton>
                      <CButton
                        color="info"
                        variant="ghost"
                        size="sm"
                        onClick={() => this.handleGetProduct(id)}
                      >
                        <FaIcons.FaEdit size="20" />
                      </CButton>
                      <CButton
                        color="danger"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          // this.props.setAlertModal(
                          //   !visible,
                          //   "DELETEPRODUCT",
                          //   "PRODUCT",
                          //   product.id,
                          // )
                          this.props.setAlertModal(
                            !visible,
                            "DELETEPRODUCT",
                            "PRODUCT",
                            id,
                          )
                        }
                      >
                        <MdIcons.MdDelete size="20" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                )
              })
            ) : (
              <CTableRow>
                <CTableDataCell colSpan="7">No data</CTableDataCell>
              </CTableRow>
            )}
          </CTableBody>
        </CTable>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={products.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productResponse: state.productResponser,
    modalVisibleResponse: state.modalVisibleResponse,
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
    inventoryResponse: state.inventoryResponse,
    scannerResponse: state.scannerResponse,
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setProductModal,
    getProducts,
    getInventories,
    clearMessage,
    setProductDetailsModal,
    getProduct,
    editProductModal,
    clearMessage,
    setAlertModal,
    setScanModal,
  })(Products),
)
