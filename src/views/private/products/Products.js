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
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from "@coreui/react"
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"

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
import { logout } from "src/service/apiActions/userAction/userAction"
import { setAlertModal } from "../../../service/apiActions/modalAction/modalAction"

import AlertModal from "src/components/modals/alert/AlertModal"

const ProductDetialsModal = lazy(() =>
  import("src/components/modals/product/ProductDetialsModal"),
)
const ProductEditorModal = lazy(() =>
  import("src/components/modals/product/ProductEditorModal.js"),
)
//action
class Products extends Component {
  state = {
    products: [],
    keyword: "",
    visible: false,
    toast: "",
    inventories: {
      data: [],
      totalPages: 0,
    },
    page: 0,
    limit: 10,
    query: "",
  }

  componentDidMount() {
    const { page, limit, query } = this.state
    this.getInventories(page, limit, query)
  }

  getInventories(page, limit, query) {
    this.props.getInventories(query, page, limit).catch(() => {
      let { status, data } = this.props.messageResponse
      if (status > 400 && status <= 403) {
        setInterval(() => {
          this.props.logout()
          this.props.clearMessage()
        }, 1000)
        this.setState({
          message: data.message,
        })
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageInventoryResponse(prevProps, prevState)
    this.manageModalResponse(prevProps, prevProps)
    this.manageProductResponse(prevProps, prevState)
  }

  manageModalResponse(prevProps, prevState) {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let response = this.props.modalVisibleResponse
      this.setState({
        visible: response.visible,
      })
      if (response.action === "close") {
        const { page, limit, query } = this.state
        this.getInventories(page, limit, query)
      }
    }
  }
  manageInventoryResponse = (prevPros, prevState) => {
    if (prevPros.inventoryResponse !== this.props.inventoryResponse) {
      let { status, action, data } = this.props.inventoryResponse
      if (status === 200 && action === "GETINVENTORIES") {
        this.setState({
          inventories: data.inventories,
        })
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
            data.product,
            <FaIcons.FaEdit size={20} />,
          )
        }
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
    this.props.getInventories(event.target.value, page, limit)
    this.setState({ query: event.target.value })
  }

  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query } = this.state
    this.props.getInventories(query, page, limit)
  }
  handleGetProduct = (id) => {
    const { accessToken, type } = this.props.userResponse.credentials
    const token = type + accessToken

    this.props.getProduct(id, token).catch(() => {
      console.log(this.props.messageResponse)
      const { status, message } = this.props.messageResponse
      // const message = this.props.messaegResponse.data.message
      if (status > 400 && status <= 403) {
        this.props.logout()
        window.location.reload()
      }
      this.setState({
        toast: this.toastComponent(),
      })
    })
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
  render() {
    let { visible, message, inventories, toast } = this.state
    // console.log(this.props);
    return (
      <>
        {this.renderProductEditorModal()}
        <AlertModal />
        <CToaster push={toast} placement="top-end" />
        <ProductDetialsModal />
        <div className="d-flex justify-content-between mb-2">
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
          <CForm className="w-50">
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
                type="button"
                color="info"
                variant="outline"
                id="button-addon2"
                className=""
              >
                <FaIcons.FaSearch />
              </CButton>
            </CInputGroup>
          </CForm>
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
            List of Products: <b>{inventories.totalItems}</b>
          </CTableCaption>

          <CTableHead color="dark">
            <CTableRow className="text-center">
              {/* <CTableHeaderCell scope="col">Image</CTableHeaderCell> */}
              <CTableHeaderCell scope="col">Barcode</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Price</CTableHeaderCell>
              <CTableHeaderCell scope="col">Threshold</CTableHeaderCell>
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
            {inventories.data.length > 0 ? (
              inventories.data.map((item, index) => {
                let { product, threshold, totalStock, status } = item
                return (
                  <CTableRow className="text-center" key={index}>
                    <CTableDataCell>
                      <Barcode
                        value={String(product.barcode)}
                        height={50}
                        width={1}
                        fontSize={14}
                        margin={7}
                        background="#f5f5f548"
                      />
                    </CTableDataCell>
                    <CTableDataCell>{product.productName}</CTableDataCell>
                    <CTableDataCell>
                      &#8369;{product.productPrice.toFixed(2)}
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
                        onClick={() => this.handleGetProduct(product.id)}
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
                            product.id,
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
          pageCount={inventories.totalPages}
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
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setProductModal,
    getProducts,
    logout,
    getInventories,
    clearMessage,
    setProductDetailsModal,
    getProduct,
    editProductModal,
    clearMessage,
    setAlertModal,
  })(Products),
)
