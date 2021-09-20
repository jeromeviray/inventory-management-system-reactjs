import React, { Component, lazy } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getProducts } from "../../../service/apiActions/productAction/productAction"
import { setProductModal } from "../../../service/apiActions/modalAction/modalAction"
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
import * as FaIcons from "react-icons/fa"

import { logout } from "src/service/apiActions/userAction/userAction"
// import eventBus from "src/_helper/EventBus"
const ProductCard = lazy(() =>
  import("../../../components/products/ProductCard.js"),
)
const ProductEditorModal = lazy(() =>
  import("../../../components/modals/product/ProductEditorModal.js"),
)

class Products extends Component {
  state = {
    products: [],
    keyword: "",
    recommendedProducts: [],
    visible: false,
  }

  componentDidMount() {
    let accessToken = this.props.userResponse.credentials.accessToken
    let type = this.props.userResponse.credentials.type

    let token = type + accessToken
    this.props.getProducts(token).catch(() => {
      let failMessage = this.props.messageResponse
      if (failMessage.status > 400 && failMessage.status <= 403) {
        this.props.logout()
      }
      this.setState({
        loading: false,
        message: failMessage.data.message,
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
    this.manageModalResponse(prevProps, prevProps)
  }
  // componentWillUnmount() {
  //   eventBus.remove("logout");
  //   this.setState({
  //     products: [],
  //     keyword: "",
  //     recommendedProducts: [],
  //     visible: false,
  //   })
  // }
  manageModalResponse(prevProps, prevState) {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let response = this.props.modalVisibleResponse
      this.setState({
        visible: response.visible,
      })
    }
  }
  manageProductResponse(prevProps, prevState) {
    if (prevProps.productResponser !== this.props.productResponser) {
      let response = this.props.productResponser

      if (response.action === "LIST") {
        if (response.status >= 200 && response.status <= 300) {
          this.setState({
            products: response.data,
          })
        }
      } else if (response.status < 400) {
        // alert message
      }
    }
  }

  renderProductEditorModal() {
    return <ProductEditorModal />
  }
  render() {
    let { visible, products, message } = this.state
    console.log(products)
    return (
      <>
        {this.renderProductEditorModal()}
        <div className="d-flex justify-content-between mb-2">
          <CButton
            shape="rounded-pill"
            color="primary"
            variant="ghost"
            className="d-flex justify-content-center align-items-center"
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
        {/* <CRow>
          {message && (
            <div className="form-group d-flex justify-content-center align-items-center">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          {products.length === 0 ? (
            <div className="form-group d-flex justify-content-center align-items-center">
              No Product Available
            </div>
          ) : (
            products.map((product, indx) => {
              return (
                <CCol xs="6" sm="6" md="4" lg="3" key={indx}>
                  <ProductCard
                    product={product}
                    fileImage={product.fileImages}
                    iconModal="edit"
                    imageLink={false}
                  />
                </CCol>
              )
            })
          )}
        </CRow> */}
        <CTable
          striped
          hover
          className="shadow-sm "
          responsive="md"
          bordered
          align="middle"
        >
          <CTableCaption>
            List of Brand: <b>{products.length}</b>
          </CTableCaption>

          <CTableHead color="dark">
            <CTableRow className="text-center">
              <CTableHeaderCell scope="col">Image</CTableHeaderCell>
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
          </CTableBody>
        </CTable>
        {/* {employee.length > 0 ? (
              <>
                {employee.map((employee, index) => {
                  let { firstName, lastName, phoneNumber, account } = employee
                  return (
                    <CTableRow className="text-center" key={index}>
                      <CTableDataCell>
                        {firstName + " " + lastName}
                      </CTableDataCell>
                      <CTableDataCell>{phoneNumber}</CTableDataCell>
                      <CTableDataCell>{account.username}</CTableDataCell>
                      <CTableDataCell>{account.email}</CTableDataCell>
                      <CTableDataCell>
                        {account.roles[0].roleName}
                      </CTableDataCell>
                      <CTableDataCell>{account.created}</CTableDataCell>
                      <CTableHeaderCell className="text-center" colSpan="1">
                        <CButton
                          color="info"
                          className="me-2"
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            this.props.addEmployeeModal(
                              !visible,
                              "Edit",
                              employee,
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
                          onClick={() =>
                            this.props.setAlertModal(
                              !visible,
                              "DELETEEMPLOYEE",
                              "EMPLOYEE",
                              account.id,
                            )
                          }
                          size="sm"
                        >
                          <MdIcons.MdDelete size="20" />
                        </CButton>
                      </CTableHeaderCell>
                    </CTableRow>
                  )
                })}
              </>
            ) : (
              <CTableRow>
                <CTableDataCell colSpan="7">No data</CTableDataCell>
              </CTableRow>
            )} */}

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productResponser: state.productResponser,
    modalVisibleResponse: state.modalVisibleResponse,
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setProductModal,
    getProducts,
    logout,
  })(Products),
)
