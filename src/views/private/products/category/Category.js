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
  CTooltip
} from "@coreui/react"
//icons
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
//redux
import { connect } from "react-redux"
//action
import { setAlertModal } from "src/service/apiActions/modalAction/modalAction"
import { addCategoryModal } from "src/service/apiActions/modalAction/modalAction"
import { getCategories } from "src/service/apiActions/categoryAction/categoryAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
//component modal
import AlertModal from "src/components/modals/alert/AlertModal"
import CategoryModal from "src/components/modals/category/CategoryModal"
import ReactPaginate from "react-paginate"

export class Category extends Component {
  state = {
    visible: false,
    categories: {
      data: [],
      totalPages: 0,
    },
    query: "",
    page: 0,
    limit: 10,
  }

  componentDidMount() {
    let { query, page, limit } = this.state
    this.getCategories(query, page, limit)
  }
  getCategories = (query, page, limit) => {
    this.props.getCategories(query, page, limit)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageCategoryResponse(prevProps, prevState)
    this.manageVisibleModal(prevProps, prevState)
  }
  manageCategoryResponse = (prevProps, prevState) => {
    if (prevProps.categoryResponse !== this.props.categoryResponse) {
      let { action, data, status } = this.props.categoryResponse
      console.log(data)
      if (action === "GET_CATEGORIES" && status === 200) {
        this.setState({
          categories: data.categories,
        })
      }
    }
  }
  manageVisibleModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { action } = this.props.modalVisible
      if (action === "close") {
        this.getCategories()
      }
    }
  }
  handleOnSearch = (event) => {
    const { page, limit } = this.state
    this.setState({
      query: event.target.value,
    })
    this.getCategories(event.target.value, page, limit)
  }
  handlePageClick = (data) => {
    let page = data.selected
    this.setState({
      page: page,
    })
    const { query, limit } = this.state
    this.getCategories(query, page, limit)
  }
  renderAlerModal() {
    return <AlertModal />
  }
  renderCatergoryModal() {
    return <CategoryModal />
  }
  render() {
    let { visible, categories, query, page, limit } = this.state
    return (
      <div>
        {this.renderCatergoryModal()}
        {this.renderAlerModal()}
        <div className="d-flex justify-content-between mb-2">
          <CButton
            shape="rounded-pill"
            color="primary"
            variant="ghost"
            className="d-flex justify-content-center align-items-center mb-3"
            onClick={() =>
              this.props.addCategoryModal(
                !visible,
                "Add",
                "",
                <FaIcons.FaPlus size={20} className="me-2" />,
              )
            }
          >
            <FaIcons.FaPlus size={20} />
            <span style={{ marginLeft: "10px" }}>Add Category</span>
          </CButton>
          <CForm className="w-50">
            <CInputGroup>
              <CFormControl
                type="text"
                id="floatingInput"
                placeholder="Search"
                className="p-2"
                value={query}
                onChange={this.handleOnSearch}
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
            List of Category: <b>{categories.totalItems}</b>
          </CTableCaption>

          <CTableHead color="dark">
            <CTableRow className="text-center">
              <CTableHeaderCell scope="col">Category Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Products</CTableHeaderCell>
              <CTableHeaderCell scope="col">Created Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="text-center" color="light">
            {categories.data.length > 0 ? (
              <>
                {categories.data.map((category, index) => {
                  return (
                    <CTableRow className="text-center" key={index}>
                      <CTableDataCell>{category.categoryName}</CTableDataCell>
                      <CTableDataCell>{category.totalProducts}</CTableDataCell>
                      <CTableDataCell>{category.createdAt}</CTableDataCell>
                      <CTableDataCell className="text-center w-25" colSpan="1">
                        <CTooltip content="Edit Category">
                          <CButton
                            color="info"
                            className="me-2"
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              this.props.addCategoryModal(
                                !visible,
                                "Edit",
                                category,
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
                        <CTooltip content="Delete Category">
                          <CButton
                            color="danger"
                            className="ms-2"
                            variant="ghost"
                            onClick={() =>
                              this.props.setAlertModal(
                                !visible,
                                "DELETECATEGORY",
                                "CATEGORY",
                                category.id,
                              )
                            }
                            size="sm"
                          >
                            <MdIcons.MdDelete size="20" />
                          </CButton>
                        </CTooltip>
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
          pageCount={categories.totalPages}
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
    modalVisible: state.modalVisibleResponse,
    categoryResponse: state.categoryResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  setAlertModal,
  addCategoryModal,
  getCategories,
  clearMessage,
})(Category)
