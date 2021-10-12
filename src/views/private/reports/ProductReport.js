import React, { Component } from "react"
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CTableCaption,
  CBadge,
  CForm,
  CInputGroup,
  CFormControl,
  CButton,
  CCardTitle,
  // CCard,
  // CCardBody,
  // CCardHeader,
  // CCol,
  // CRow,
  // CButtonGroup,
} from "@coreui/react"
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io5"

import { connect } from "react-redux"
import { getProductsAndCountTatolSold } from "src/service/apiActions/dashboardAction/dashboardAction"
import ReactToPrint from "react-to-print"
import Barcode from "react-barcode"
import ReactPaginate from "react-paginate"

export class ProductReport extends Component {
  state = {
    productsTotalSold: {
      data: [],
      totalPages: 0,
    },
    page: 0,
    limit: 10,
    query: "",
  }
  componentDidMount() {
    const { page, limit, query } = this.state

    this.getProductsAndCountTatolSold(query, page, limit)
  }
  getProductsAndCountTatolSold = (query, page, limit) => {
    this.props.getProductsAndCountTatolSold(query, page, limit)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageDashboardResponse(prevProps, prevState)
  }
  manageDashboardResponse = (prevPros, prevState) => {
    if (prevPros.dashboardResponse !== this.props.dashboardResponse) {
      const { status, action, data } = this.props.dashboardResponse
      if (status === 200 && action === "GET_PRODUCTS_COUNT_TOTAL_SOLD") {
        this.setState({
          productsTotalSold: data.products,
        })
      }
    }
  }
  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query, status } = this.state
    this.getProductsAndCountTatolSold(query, page, limit)
  }
  handleSearch = (event) => {
    const { page, limit, status } = this.state
    this.getProductsAndCountTatolSold(event.target.value, page, limit)
    this.setState({ query: event.target.value })
  }
  render() {
    const { productsTotalSold } = this.state
    console.log(productsTotalSold)
    return (
      <>
        <>
          <div className="w-100 d-flex justify-content-end align-items-center">
            <div className="w-100">
              <CCardTitle>Total Sold per Product</CCardTitle>
            </div>
            <CForm
              onSubmit={this.handleOnSubmitSearch}
              id="search-form"
              className="w-25"
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
            <div className="d-flex align-items-end flex-row-reverse m-2">
              <ReactToPrint
                trigger={() => (
                  <CButton
                    type="button"
                    variant="outline"
                    color="info"
                    className=" pt-2 pb-2 "
                  >
                    <IoIcons.IoPrintOutline size={20} />
                  </CButton>
                )}
                content={() => this.componentRef}
              />
            </div>
          </div>
        </>
        <CTable
          striped
          hover
          className="shadow-sm "
          responsive
          bordered
          align="middle"
          ref={(el) => (this.componentRef = el)}
        >
          <CTableCaption>
            List of Products: <b>{productsTotalSold.totalItems}</b>
          </CTableCaption>

          <CTableHead color="dark">
            <CTableRow className="text-center">
              <CTableHeaderCell scope="col">Barcode</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Price</CTableHeaderCell>
              <CTableHeaderCell scope="col">Products Sold</CTableHeaderCell>
              <CTableHeaderCell scope="col">Order Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="text-center" color="light">
            {productsTotalSold.data.length > 0 ? (
              productsTotalSold.data.map((product, index) => {
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
                    <CTableDataCell>{product.totalSold}</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="success" shape="rounded-pill">
                        {product.status}
                      </CBadge>
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
          pageCount={productsTotalSold.totalPages}
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
    dashboardResponse: state.dashboardResponse,
  }
}
export default connect(mapStateToProps, {
  getProductsAndCountTatolSold,
})(ProductReport)
