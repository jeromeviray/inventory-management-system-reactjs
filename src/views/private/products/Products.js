import React, { Component, lazy } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getProducts } from "../../../service/apiActions/productAction/productAction"
import { setProductModal } from "../../../service/apiActions/modalAction/modalAction"
import { getInventory } from "src/service/apiActions/inventoryAction/inventoryAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
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
import * as IoIcons from "react-icons/io"
import Barcode from "react-barcode"
import { Carousel } from "react-responsive-carousel"
import { logout } from "src/service/apiActions/userAction/userAction"

const ProductEditorModal = lazy(() =>
  import("../../../components/modals/product/ProductEditorModal.js"),
)
//action
class Products extends Component {
  state = {
    products: [],
    keyword: "",
    visible: false,
    inventory: [],
  }

  componentDidMount() {
    this.getInventory()
  }
  getInventory = () => {
    this.props.getInventory().catch(() => {
      let { status, data } = this.props.messageResponse
      if (status > 400 && status <= 403) {
        setInterval(() => {
          this.props.logout()
          this.props.clearMessage()
        }, 1000)
      }
      this.setState({
        message: data.message,
      })
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageInventoryResponse(prevProps, prevState)
    this.manageModalResponse(prevProps, prevProps)
  }
  manageModalResponse(prevProps, prevState) {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let response = this.props.modalVisibleResponse
      console.log(response.action === "close")
      this.setState({
        visible: response.visible,
      })
      if (response.action === "close") {
        this.getInventory()
      }
    }
  }
  manageInventoryResponse = (prevPros, prevState) => {
    if (prevPros.inventoryResponse !== this.props.inventoryResponse) {
      let { status, action, data } = this.props.inventoryResponse
      if (status === 200 && action === "GETINVENTORY") {
        this.setState({
          inventory: data.inventory,
        })
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
  render() {
    let { visible, message, inventory } = this.state

    const arrowStyles = {
      position: "absolute",
      zIndex: "2",
      top: "calc(4% - 16px)",
      // width: "30",
      height: "100%",
      cursor: "pointer",
      border: "none",
    }
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "500",
    }

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
        <CTable
          striped
          hover
          className="shadow-sm "
          responsive
          bordered
          align="middle"
        >
          <CTableCaption>
            List of Brand: <b>{inventory.length}</b>
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
            {inventory.length > 0 ? (
              inventory.map((item, index) => {
                let { product, threshold, totalStock, status } = item
                return (
                  <CTableRow className="text-center" key={index}>
                    <CTableDataCell style={{ width: "10%" }}>
                      <div>
                        <Carousel
                          showArrows={true}
                          infiniteLoop={true}
                          renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                              <button
                                type="button"
                                onClick={onClickHandler}
                                title={label}
                                className="arrow-style"
                                style={{ ...arrowStyles, left: 0 }}
                              >
                                <IoIcons.IoIosArrowBack
                                  size="40"
                                  style={{ color: "white" }}
                                />
                              </button>
                            )
                          }
                          renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                              <button
                                type="button"
                                onClick={onClickHandler}
                                title={label}
                                className="arrow-style"
                                style={{ ...arrowStyles, right: 0 }}
                              >
                                <IoIcons.IoIosArrowForward
                                  size="40"
                                  style={{ color: "white" }}
                                />
                              </button>
                            )
                          }
                        >
                          {product.fileImages &&
                            product.fileImages.map((image, index) => {
                              return (
                                <div key={index}>
                                  <img
                                    src={"/images/products/" + image.fileName}
                                  />
                                </div>
                              )
                            })}
                        </Carousel>
                      </div>
                    </CTableDataCell>
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
                    <CTableDataCell></CTableDataCell>
                    {/* <CTableDataCell className="text-center w-25" colSpan="1">
                      <CButton
                        color="info"
                        className="me-2"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          this.props.addBranchModal(
                            !visible,
                            "Edit",
                            branch,
                            <MdIcons.MdModeEdit size="20" className="me-2" />,
                          )
                        }
                      >
                        <MdIcons.MdModeEdit size="20" />
                      </CButton>
                      {permission === Roles.SUPER_ADMIN ? (
                        <CButton
                          color="danger"
                          className="ms-2"
                          variant="ghost"
                          onClick={() =>
                            this.props.setAlertModal(
                              !visible,
                              "DELETEBRANCH",
                              "BRANCH",
                              branch.id,
                            )
                          }
                          size="sm"
                        >
                          <MdIcons.MdDelete size="20" />
                        </CButton>
                      ) : (
                        <></>
                      )}
                    </CTableDataCell> */}
                  </CTableRow>
                )
              })
            ) : (
              <CTableRow>
                <CTableDataCell colSpan="4">No data</CTableDataCell>
              </CTableRow>
            )}
          </CTableBody>
        </CTable>
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
    inventoryResponse: state.inventoryResponse,
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setProductModal,
    getProducts,
    logout,
    getInventory,
    clearMessage,
  })(Products),
)
