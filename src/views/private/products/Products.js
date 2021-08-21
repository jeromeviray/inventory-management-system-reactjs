import React, { Component, lazy } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getProducts } from "../../../service/apiActions/productAction/productAction"
import { setProductModal } from "../../../service/apiActions/modalAction/modalAction"
import { CRow, CCol, CButton } from "@coreui/react"
import * as FaIcons from 'react-icons/fa'

import { logout } from "src/service/apiActions/userAction/userAction"
import eventBus from "src/_helper/EventBus"
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
    recommendedProducts: [],
    visible: false,
  }

  componentDidMount() {
    let accessToken = this.props.userResponse.credentials.accessToken;
    let type = this.props.userResponse.credentials.type;

    let token = type + accessToken;
    this.props.getProducts(token)
      .catch(() => {
        let failMessage = this.props.messageResponse
        if (failMessage.status > 400 && failMessage.status <= 403) {
          this.props.logout();

        }
        this.setState({
          loading: false,
          message: failMessage.data.message
        })
      }
      )
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
        visible: response.visible
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
      <ProductEditorModal />
    )
  }
  render() {

    let { visible, products, message } = this.state;
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
              onClick={() => this.props.setProductModal(!visible, "Add", <FaIcons.FaPlus size={20} />)}>

              <FaIcons.FaPlus size={20} />
              <span style={{ marginLeft: "10px" }}>
                Add Product
              </span>
            </CButton>
          </CCol>
        </CRow>
        <CRow>
          {message && (
            <div className="form-group d-flex justify-content-center align-items-center">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          {products.length === 0 ? <div className="form-group d-flex justify-content-center align-items-center">
            No Product Available
          </div> :
            products.map((product, indx) => {
              return (
                <CCol xs="6" sm="6" md="4" lg="3" key={indx}>
                  <ProductCard product={product} fileImage={product.fileImages} iconModal="edit" imageLink={false} />

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
    modalVisibleResponse: state.modalVisibleResponse,
    userResponse: state.userResponse,
    messageResponse: state.messageResponse
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setProductModal,
    getProducts,
    logout
  })(Products),
)
