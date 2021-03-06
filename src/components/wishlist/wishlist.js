import React, { Component } from "react"
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CRow,
  CCol,
  CContainer,
  CImage,
  CButton,
  CCardTitle,
  CBadge,
} from "@coreui/react"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
//action
import {
  getWishlist,
  deleteWishlist,
} from "src/service/apiActions/wishlistAction/wishlistAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { connect } from "react-redux"
import OrderCard from "../orderTabContent/OrderCard"
import Roles from "src/router/config"
import ReactPaginate from "react-paginate"
import ProductCard from "src/components/products/ProductCard"
import ProductDetialsModal from "../modals/product/ProductDetialsModal"
import { NO_IMAGE_BASE64 } from "src/service/redux/constants"
import * as AiIcons from "react-icons/ai"

import config from "../../config"

export class Wishlist extends Component {
  state = {
    message: "",
    status: "",
    action: "",
    wishlist: [],
    token: "",
    permission: "",
    path: "",
    originalList: {
      totalPages: 0,
    },
    visible: false,
  }

  constructor(props) {
    super(props)
    this.state.status = props.status
    this.state.query = props.query
  }

  manageHrefLinkBasedInPermission = (permission) => {
    if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
      return "/app/order/"
    } else {
      return "/user/order/"
    }
  }
  componentDidMount() {
    let { type, accessToken, roles } = this.props.userResponse.credentials
    let token = type + accessToken
    let roleName = roles.roleName
    let getPermission = roleName ? roleName : roles
    let href = this.manageHrefLinkBasedInPermission(getPermission)

    this.setState({
      token: token,
      permission: roles.roleName ? roles.roleName : roles,
      path: href,
    })

    this.getWishlist()
  }

  getWishlist(page = 0, limit = 10) {
    const { query } = this.state
    this.props.getWishlist(query, page, limit)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageorderRepsonse(prevProps, prevState)
  }

  manageorderRepsonse = (prevProps, prevState) => {
    if (prevProps.wishlistResponse !== this.props.wishlistResponse) {
      let { status, action, data } = this.props.wishlistResponse
      if (status === 200 && action === "GET_WISHLIST") {
        this.setState({
          wishlist: data.data,
          originalList: data,
        })
      } else if (status === 200 && action === "DELETE_WISHLIST") {
        this.getWishlist()
      }
    }
  }

  deleteWishlist = (wishlistId) => {
    this.props.deleteWishlist(wishlistId)
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

  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query } = this.state
    this.getWishlist(query, page, limit)
  }

  render() {
    let { wishlist, originalList } = this.state
    console.log(wishlist.product ? product.rating : 0)
    const product = wishlist.product
    const rating = 0
    return (
      <>
        {wishlist.length === 0 ? (
          <CCard>
            <CCardBody>
              <div className="text-center">No Wishlist</div>
            </CCardBody>
          </CCard>
        ) : (
          <CRow className="mb-4" key={new Date()}>
            {wishlist.map((data, index) => {
              const productName = data.product.name
              const productPrice = data.product.price
              const id = data.product.id
              const fileImages = data.product.fileImages
              const totalStock = 0
              return (
                <>
                  <CCol xs="6" sm="6" md="4" lg="3" key={index}>
                    <ProductDetialsModal />
                    <CCard className="inner-card-container shadow-sm">
                      <div className="img-container">
                        <Link
                          to={{
                            pathname:
                              config.api.private.prefixFrontendUrl +
                              "/products/product/" +
                              productName,
                            state: id,
                          }}
                          className="link-product-content"
                        >
                          <div className="inner-img-container">
                            <img
                              className="border"
                              variant="top"
                              src={
                                fileImages.length > 0
                                  ? config.api.private.baseUrl + "/api/v1/products/getImages/bytesArrays/" +
                                  fileImages[0].path +
                                  fileImages[0].fileName
                                  : NO_IMAGE_BASE64
                              }
                              alt="product"
                            />
                          </div>
                        </Link>
                        <div className="eye-btn">
                          <span onClick={() => this.deleteWishlist(data.id)}>
                            <AiIcons.AiOutlineClose />
                          </span>
                        </div>
                      </div>
                      <CCardBody>
                        <Link
                          to={{
                            pathname:
                              config.api.private.prefixFrontendUrl +
                              "/products/product/" +
                              productName,
                            state: id,
                          }}
                          className="nav-link text-dark p-0"
                        >
                          <CCardTitle>{productName}</CCardTitle>
                        </Link>

                        <div className="card-label-price">
                          <CCardTitle>
                            &#8369;{productPrice.toFixed(2)}
                          </CCardTitle>
                          <div className="product-stock-container">
                            <span className="stock-label">Stock: </span>
                            {totalStock > 0 ? (
                              <span className="stock-label-value">
                                {totalStock}
                              </span>
                            ) : (
                              this.manageStatus(data.product.inventory.status)
                            )}
                          </div>
                        </div>
                        {rating ? (
                          <ReactStars
                            count={5}
                            value={rating ? rating : 0}
                            size={24}
                            edit={false}
                          />
                        ) : (
                          <div style={{ padding: "5px 0px" }}>
                            <span className="text-black-50 ">No Rating</span>
                          </div>
                        )}
                      </CCardBody>
                    </CCard>
                  </CCol>
                </>
              )
            })}
          </CRow>
        )}
        <br></br>
        {originalList.totalPages > 0 && (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={originalList.totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        )}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    wishlistResponse: state.wishlistResponse,
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  getWishlist,
  deleteWishlist,
  clearMessage,
})(Wishlist)
