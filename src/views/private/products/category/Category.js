import React, { Component } from 'react'
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
import * as MdIcons from 'react-icons/md'
import * as FaIcons from "react-icons/fa"
//redux
import { connect } from 'react-redux'
//action 
import { setAlertModal } from 'src/service/apiActions/modalAction/modalAction'
import { addCategoryModal } from 'src/service/apiActions/modalAction/modalAction'
//component modal
import AlertModal from 'src/components/modals/alert/AlertModal'
import CategoryModal from 'src/components/modals/category/CategoryModal'
export class Category extends Component {
  state = {
    visible: false,
    categories: []
  }


  renderAlerModal() {
    return (
      <AlertModal />
    )
  }
  renderCatergoryModal() {
    return (
      <CategoryModal />
    )
  }
  render() {
    let { visible, categories } = this.state;

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
            <span style={{ marginLeft: "10px" }}>Add Brand</span>
          </CButton>
          <CForm className="w-50">
            <CInputGroup>
              <CFormControl
                type="text"
                id="floatingInput"
                placeholder="Search"
                className="p-2"
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
            List of Brand: <b>12</b>
          </CTableCaption>

          <CTableHead color="dark">
            <CTableRow className="text-center">
              <CTableHeaderCell scope="col">Brand Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Product</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="text-center" color="light">
            {categories.length > 0 ? (
              <>
                <CTableRow className="text-center">
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>100</CTableDataCell>
                  <CTableDataCell className="text-center w-25" colSpan="1">
                    <CButton
                      color="info"
                      className="me-2"
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        this.props.addCategoryModal(
                          !visible,
                          "Edit",
                          "category",
                          <MdIcons.MdModeEdit size="20" className="me-2" />,
                        )
                      }
                    >
                      <MdIcons.MdModeEdit size="20" />
                    </CButton>
                    <CButton
                      color="danger"
                      className="ms-2"
                      variant="ghost"
                      onClick={() => this.props.setAlertModal(!visible)}
                      size="sm"
                    >
                      <MdIcons.MdDelete size="20" />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </>
            ) : (
              <CTableRow>
                <CTableDataCell colSpan="4">No data</CTableDataCell>
              </CTableRow>
            )}
          </CTableBody>
        </CTable>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modelVisible: state.modalVisibleResponse
  }
}
export default connect(mapStateToProps, {
  setAlertModal, addCategoryModal
})(Category)
