import React, { Component } from "react"
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
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButtonGroup,
  CTooltip,
} from "@coreui/react"
import { connect } from "react-redux"
// action
import { getPromos } from "src/service/apiActions/promoAction/promoAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { setPromoModal } from "src/service/apiActions/modalAction/modalAction"
import { setAlertModal } from "src/service/apiActions/modalAction/modalAction"
import { getProductsWithPromo } from "src/service/apiActions/productAction/productAction"
//icons
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"

import ReactPaginate from "react-paginate"
import Barcode from "react-barcode"
import PromoModal from "src/components/modals/promo/PromoModal"
import AlertModal from "src/components/modals/alert/AlertModal"

export class Promo extends Component {
  state = {
    productsWithPromo: {
      data: [],
      totalPages: 0,
    },
    message: "",
    visible: false,
    page: 0,
    limit: 10,
    query: "",
    status: "",
  }
  componentDidMount() {
    const { query, page, limit, status } = this.state
    this.getProductsWithPromo(status, query, page, limit)
  }
  getProductsWithPromo = (status, query, page, limit) => {
    this.props.getProductsWithPromo(status, query, page, limit)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProdoctsResponse(prevProps, prevState)
    this.manageModalResponse(prevProps, prevState)
  }
  manageProdoctsResponse = (prevProps, prevState) => {
    if (prevProps.productResponse !== this.props.productResponse) {
      const { action, status, data } = this.props.productResponse
      if (action === "GET_PRODUCTS_WITH_PROMO" && status === 200) {
        this.setState({
          productsWithPromo: data.products,
        })
        // for()
      }
    }
  }
  manageModalResponse = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { action } = this.props.modalVisible
      console.log(action)

      const { query, page, limit, status } = this.state

      if (action === "close") {
        this.getProductsWithPromo(status, query, page, limit)
      }
    }
  }
  handleStatusOnClick = (status) => {
    const { query, page, limit } = this.state
    if (status === "ALL") {
      this.setState({
        status: "",
      })
      this.getProductsWithPromo("", query, page, limit)
    } else {
      this.setState({
        status: status,
      })
      this.getProductsWithPromo(status, query, page, limit)
    }
  }
  manageStatus = (status) => {
    switch (status) {
      case "ONGOING":
        return (
          <CBadge color="success" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case "UNSCHEDULED":
        return (
          <CBadge color="warning" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case "END":
        return (
          <CBadge color="danger" shape="rounded-pill">
            {status}
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
  render() {
    const { productsWithPromo, message, visible, status } = this.state
    return (
      <div>
        <PromoModal />
        <AlertModal />
        <div className="d-flex justify-content-between mb-2">
          <CButton
            shape="rounded-pill"
            color="primary"
            variant="ghost"
            className="d-flex justify-content-center align-items-center mb-3"
            onClick={() =>
              this.props.setPromoModal(
                !visible,
                "Add",
                "",
                <FaIcons.FaPlus size={20} className="me-2" />,
              )
            }
          >
            <FaIcons.FaPlus size={20} />
            <span style={{ marginLeft: "10px" }}>Add Promo</span>
          </CButton>
          <CForm className="w-50">
            <CInputGroup>
              <CFormControl
                type="text"
                id="floatingInput"
                placeholder="Search"
                className="p-2"
              //  value={query}
              //  onChange={this.handleOnSearch}
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
        <CCard className="mb-4 bg-transparent border-0">
          <CCardHeader>
            <CRow>
              <CCol sm="5" className="d-flex align-items-center">
                <h4 className="card-title mb-0 ">Products With Promo</h4>
              </CCol>
              <CCol sm="7">
                <CButtonGroup className="float-end">
                  {["ALL", "UNSCHEDULED", "ONGOING", "END"].map((value) => (
                    <CButton
                      color={
                        value === "UNSCHEDULED"
                          ? "outline-warning"
                          : value === "END"
                            ? "outline-danger"
                            : value === "ALL"
                              ? "outline-secondary"
                              : "outline-success"
                      }
                      key={value}
                      className="mx-0"
                      active={value === status}
                      onClick={() => this.handleStatusOnClick(value)}
                    >
                      {value}
                    </CButton>
                  ))}
                </CButtonGroup>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody className="p-0 m-0 ">
            <CTable
              striped
              hover
              className="shadow-sm "
              responsive="lg"
              bordered
              align="middle"
            >
              <CTableCaption>
                List of Category: <b>{productsWithPromo.length}</b>
              </CTableCaption>

              <CTableHead color="dark">
                <CTableRow className="text-center">
                  <CTableHeaderCell scope="col">
                    Product Barcode
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Discount</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Started Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody className="text-center" color="light">
                {productsWithPromo.data.length > 0 ? (
                  <>
                    {productsWithPromo.data.map((promo, index) => {
                      console.log()
                      let discount =
                        (promo.product.productPrice * promo.promo.percentage) /
                        100
                      let price = promo.product.productPrice - discount
                      let status = promo.promo.status
                      return (
                        <>
                          <CTableRow className="text-center" key={promo.id}>
                            <CTableDataCell>
                              <Barcode
                                value={String(promo.product.barcode)}
                                height={50}
                                width={1}
                                fontSize={14}
                                margin={7}
                                background="#f5f5f548"
                              />
                            </CTableDataCell>
                            <CTableDataCell>
                              {promo.product.productName}
                            </CTableDataCell>
                            <CTableDataCell className="fw-bold">
                              {promo.promo && promo.promo.percentage + "%"}
                            </CTableDataCell>
                            <CTableDataCell className="fw-bold">
                              <span className="text-muted text-decoration-line-through me-2">
                                {promo.product.productPrice.toFixed(2)}
                              </span>
                              <span>{price.toFixed(2)}</span>
                            </CTableDataCell>
                            <CTableDataCell>
                              {promo.promo && promo.promo.quantity}
                            </CTableDataCell>
                            <CTableDataCell>
                              {promo.promo && promo.promo.startDate}
                            </CTableDataCell>
                            <CTableDataCell>
                              {promo.promo && promo.promo.endDate}
                            </CTableDataCell>
                            <CTableDataCell>
                              {promo.promo && this.manageStatus(status)}
                            </CTableDataCell>
                            <CTableDataCell className="text-center" colSpan="1">
                              {status !== "END" ? (
                                <CTooltip content="Edit Promo">
                                  <CButton
                                    color="info"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      this.props.setPromoModal(
                                        !visible,
                                        "Edit",
                                        promo,
                                        <MdIcons.MdModeEdit
                                          size="20"
                                          className="me-2"
                                        />,
                                      )
                                    }
                                  >
                                    <MdIcons.MdModeEdit size="20" />
                                  </CButton>
                                </CTooltip>
                              ) : (
                                <></>
                              )}
                              <CTooltip content="Delete Promo">
                                <CButton
                                  color="danger"
                                  variant="ghost"
                                  onClick={() =>
                                    this.props.setAlertModal(
                                      !visible,
                                      "DELETEPROMO",
                                      "PROMO",
                                      promo.promo.id,
                                    )
                                  }
                                  size="sm"
                                >
                                  <MdIcons.MdDelete size="20" />
                                </CButton>
                              </CTooltip>
                            </CTableDataCell>
                          </CTableRow>
                        </>
                      )
                    })}
                  </>
                ) : (
                  <CTableRow>
                    <CTableDataCell colSpan="9">No data</CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={productsWithPromo.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    promoResponse: state.promoResponse,
    messageResponse: state.messageResponse,
    modalVisible: state.modalVisibleResponse,
    productResponse: state.productResponser,
  }
}
export default connect(mapStateToProps, {
  getPromos,
  clearMessage,
  setPromoModal,
  setAlertModal,
  getProductsWithPromo,
})(Promo)
