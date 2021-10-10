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
} from "@coreui/react"
//icons
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import { connect } from "react-redux"
//action
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import {
  setAlertModal,
  addBrandModal,
} from "src/service/apiActions/modalAction/modalAction"
import { getBrands } from "src/service/apiActions/brandAction/brandAction"
//modal component
import AlertModal from "src/components/modals/alert/AlertModal"
import BrandModal from "src/components/modals/brand/BrandModal"
import Roles from "src/router/config"
import ReactPaginate from "react-paginate"

export class Brand extends Component {
  state = {
    visible: false,
    brands: {
      data: [],
      totalPages: 0,
    },
    message: "",
    status: "",
    permission: "",
    page: 0,
    limit: 10,
    query: "",
  }
  componentDidMount() {
    let { roles } = this.props.userResponse.credentials
    let { page, query, limit } = this.state
    this.setState({
      permission: roles && roles.roleName,
    })
    this.getBrands(query, page, limit)
  }

  getBrands = (query, page, limit) => {
    this.props.getBrands(query, page, limit)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageBrandsResponse(prevProps, prevState)
    this.manageModalResponse(prevProps, prevState)
  }
  componentWillUnmount() {
    this.setState({
      visible: false,
      brands: [],
      message: "",
      status: "",
      permission: "",
    })
    this.props.addBrandModal(null, null, null, null)
  }
  manageModalResponse(prevProps, prevState) {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let { action, visible } = this.props.modalVisibleResponse
      this.setState({
        visible: visible,
      })
      if (action === "close") {
        const { page, limit, query } = this.state
        this.getBrands(page, limit, query)
      }
    }
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
  handleSearch = (event) => {
    const { page, limit } = this.state
    this.props.getBrands(event.target.value, page, limit)
    this.setState({ query: event.target.value })
  }

  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query } = this.state
    this.props.getBrands(query, page, limit)
  }
  renderAlertModal() {
    return <AlertModal />
  }
  renderBrandModal() {
    return <BrandModal />
  }
  render() {
    const { visible, brands, message, permission, query, limit, page } =
      this.state
    return (
      <div>
        {this.renderBrandModal()}
        {this.renderAlertModal()}
        <div className="d-flex justify-content-between mb-2">
          <CButton
            shape="rounded-pill"
            color="primary"
            variant="ghost"
            className="d-flex justify-content-center align-items-center mb-3"
            onClick={() =>
              this.props.addBrandModal(
                !visible,
                "Add",
                "",
                <FaIcons.FaPlus size={20} className="me-2" />,
              )
            }
          >
            <FaIcons.FaPlus size={20} />
            <span style={{ marginLeft: "10px" }}>Add Brand</span>
          </CButton>
          <CForm className="w-50">
            <CInputGroup>
              <CFormControl
                type="text"
                id="floatingInput"
                placeholder="Search"
                className="p-2"
                value={query}
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
          responsive="md"
          bordered
          align="middle"
        >
          <CTableCaption>
            List of Brand: <b>{brands.totalItems}</b>
          </CTableCaption>
          <CTableHead color="dark">
            <CTableRow className="text-center">
              <CTableHeaderCell scope="col">Brand Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Products</CTableHeaderCell>
              <CTableHeaderCell scope="col">Created Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="text-center" color="light">
            {brands.data.length > 0 ? (
              brands.data.map((brand, index) => {
                return (
                  <CTableRow className="text-center" key={index}>
                    <CTableDataCell>{brand.brandName}</CTableDataCell>
                    <CTableDataCell>{brand.totalProducts}</CTableDataCell>
                    <CTableDataCell>{brand.createdAt}</CTableDataCell>
                    <CTableDataCell className="text-center w-25" colSpan="1">
                      <CButton
                        color="info"
                        className="me-2"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          this.props.addBrandModal(
                            !visible,
                            "Edit",
                            brand,
                            <MdIcons.MdModeEdit size="20" className="me-2" />,
                          )
                        }
                      >
                        <MdIcons.MdModeEdit size="20" />
                      </CButton>
                      {/* {permission === Roles.SUPER_ADMIN ? ( */}
                      <CButton
                        color="danger"
                        className="ms-2"
                        variant="ghost"
                        onClick={() =>
                          this.props.setAlertModal(
                            !visible,
                            "DELETEBRAND",
                            "BRAND",
                            brand.id,
                          )
                        }
                        size="sm"
                      >
                        <MdIcons.MdDelete size="20" />
                      </CButton>
                      {/* ) : null} */}
                    </CTableDataCell>
                  </CTableRow>
                )
              })
            ) : (
              <CTableRow>
                <CTableDataCell colSpan="4">No data</CTableDataCell>
              </CTableRow>
            )}
            {/* {brands.data.length > 0 &&
              } */}
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
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={brands.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modelVisible: state.modelVisibleResponse,
    brandResponse: state.brandResponse,
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  setAlertModal,
  addBrandModal,
  getBrands,
  clearMessage,
})(Brand)
