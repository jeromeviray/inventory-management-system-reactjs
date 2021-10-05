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
} from "@coreui/react"
import { connect } from "react-redux"
// action
import { getPromos } from "src/service/apiActions/promoAction/promoAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
//icons
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"

import ReactPaginate from "react-paginate"
import Barcode from "react-barcode"

export class Promo extends Component {
  state = {
    productsWithPromo: [],
    message: "",
  }
  componentDidMount() {
    this.getPromos()
  }
  getPromos = () => {
    this.props.getPromos().catch(() => {
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
  componentDidUpdate(prevProps, prevState) {
    this.managePromoResponse(prevProps, prevState)
  }
  managePromoResponse = (prevProps, prevState) => {
    console.log("haks")
    if (prevProps.promoResponse !== this.props.promoResponse) {
      const { action, status, data } = this.props.promoResponse
      console.log(this.props.promoResponse)
      if (action === "GET_PROMOS" && status === 200) {
        this.setState({
          productsWithPromo: data.productsWithPromo,
        })
      }
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
    const { productsWithPromo, message } = this.state
    console.log(productsWithPromo)
    return (
      <div>
        <div className="d-flex justify-content-between mb-2">
          <CButton
            shape="rounded-pill"
            color="primary"
            variant="ghost"
            className="d-flex justify-content-center align-items-center mb-3"
            //   onClick={() =>
            //     this.props.addCategoryModal(
            //       !visible,
            //       "Add",
            //       "",
            //       <FaIcons.FaPlus size={20} className="me-2" />,
            //     )
            //   }
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
        <CTable
          striped
          hover
          className="shadow-sm "
          responsive="md"
          bordered
          align="middle"
        >
          <CTableCaption>
            List of Category: <b>{productsWithPromo.length}</b>
          </CTableCaption>

          <CTableHead color="dark">
            <CTableRow className="text-center">
              <CTableHeaderCell scope="col">Product Barcode</CTableHeaderCell>
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
            {productsWithPromo.length > 0 ? (
              <>
                {productsWithPromo.map((promo, index) => {
                  let discount =
                    (promo.product.productPrice * promo.percentage) / 100
                  let price = promo.product.productPrice - discount
                  console.log(promo.product.productPrice)
                  return (
                    <CTableRow className="text-center" key={index}>
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
                      <CTableDataCell>{promo.percentage + "%"}</CTableDataCell>
                      <CTableDataCell className="fw-bold">
                        <span className="text-muted text-decoration-line-through me-2">
                          {promo.product.productPrice.toFixed(2)}
                        </span>
                        <span>{price.toFixed(2)}</span>
                      </CTableDataCell>
                      <CTableDataCell>{promo.quantity}</CTableDataCell>
                      <CTableDataCell>{promo.startDate}</CTableDataCell>
                      <CTableDataCell>{promo.endDate}</CTableDataCell>
                      <CTableDataCell>
                        {this.manageStatus(promo.status)}
                      </CTableDataCell>
                      <CTableDataCell className="text-center" colSpan="1">
                        <CButton
                          color="info"
                          className="me-2"
                          variant="ghost"
                          size="sm"
                          //  onClick={() =>
                          //    this.props.addCategoryModal(
                          //      !visible,
                          //      "Edit",
                          //      category,
                          //      <MdIcons.MdModeEdit size="20" className="me-2" />,
                          //    )
                          //  }
                        >
                          <MdIcons.MdModeEdit size="20" />
                        </CButton>
                        <CButton
                          color="danger"
                          className="ms-2"
                          variant="ghost"
                          //  onClick={() =>
                          //    this.props.setAlertModal(
                          //      !visible,
                          //      "DELETECATEGORY",
                          //      "CATEGORY",
                          //      category.id,
                          //    )
                          //  }
                          size="sm"
                        >
                          <MdIcons.MdDelete size="20" />
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  )
                })}
              </>
            ) : (
              <CTableRow>
                <CTableDataCell colSpan="4">No data</CTableDataCell>
              </CTableRow>
            )}
          </CTableBody>
        </CTable>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          // pageCount={categories.totalPages}
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
  }
}
export default connect(mapStateToProps, {
  getPromos,
  logout,
  clearMessage,
})(Promo)
