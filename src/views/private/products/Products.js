import React, { Component, lazy } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getProducts } from "../../../service/apiActions/productAction"
import { setProductModal } from "../../../service/apiActions/modalAction/modalAction"
import { CRow, CCol, CButton } from "@coreui/react"
import * as FaIcons from 'react-icons/fa'



const ProductCard = lazy(() =>
  import("../../../components/admin/products/ProductCard.js")
)
const ProductEditorModal = lazy(() =>
  import("../../../components/admin/products/modals/ProductEditorModal.js")
)


class Products extends Component {
  state = {
    products: [],
    keyword: "",
    showModal: false,
    recommendedProducts: [],
    visible: false
  }

  componentDidMount() {
    this.props.getProducts()
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
    this.manageModalResponse(prevProps, prevProps)
  }
  manageModalResponse(prevProps, prevState) {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let response = this.props.modalVisibleResponse
      this.setState({
        visible: response.state.visible
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
    return (
      < ProductEditorModal />
    )
  }
  render() {

    let { visible } = this.state;
    return (
      <>
        {this.renderProductEditorModal()}
        <CRow>
          <CCol>
            <CButton
              shape="rounded-pill"
              color="primary"
              variant="outline"
              className="d-flex justify-content-center align-items-center"
              onClick={() => this.props.setProductModal(!visible)}>

              <FaIcons.FaPlus size={20} />
              <span style={{ marginLeft: "10px" }}>
                Add Product
              </span>
            </CButton>
          </CCol>
        </CRow>
        <CRow>
          {this.state.products.map((productFilted) => {
            return (
              <CCol xs="6" sm="6" md="4" lg="3" key={productFilted.productName}>
                <ProductCard product={productFilted} iconModal="edit" imageLink={false} />

              </CCol>
            )
          })}
        </CRow>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productResponser: state.productResponser,
    modalVisibleResponse: state.modalVisibleResponse
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setProductModal,
    getProducts,
  })(Products),
)
