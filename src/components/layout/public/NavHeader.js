import React, { Component } from "react"
import {
  CHeader,
  CContainer,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CHeaderDivider,
} from "@coreui/react"
import { Link, withRouter } from "react-router-dom"
// import { AppHeaderDropdown } from '../sidebar'
import { AppHeaderDropdown } from "src/components/header"
//icons
import * as FaIcons from "react-icons/fa"
import * as FiIcons from "react-icons/fi"
// import SearchField from "react-search-field"
import ReactSearchAutocomplete from "react-search-autocomplete/dist/components/ReactSearchAutocomplete"
import { connect } from "react-redux"
import {
  searchProductByBarcodeOrName,
  getDiscoverProducts,
  getProductsByCategoryName,
} from "src/service/apiActions/productAction/productAction"
import { getStoreInformation } from "src/service/apiActions/storeAction/StoreInformationAction"
import config from "../../../config"
const style = {
  marginRight: "10px",
}

export class NavHeader extends Component {
  state = {
    items: [],
    products: {
      data: [],
      totalPages: 0,
    },
    message: "",
    query: "",
    page: 0,
    limit: 12,
    action: "",
    categoryName: "",
    storeInfo: [],
  }
  componentDidMount() {
    const { query, page, limit } = this.state
    this.props.getStoreInformation()
  }

  searchProduct(query, page, limit) {
    this.props.searchProductByBarcodeOrName(query, page, limit)
  }

  getProductsByCategoryName = (categoryName, query, page, limit) => {
    this.props
      .getProductsByCategoryName(categoryName, query, page, limit)
      .catch(() => {
        this.setState({
          hasError: true,
        })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
    this.manageStoreInformationResponse(prevProps, prevState)
  }
  manageProductResponse = (prevProps, prevState) => {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { action, status, data } = this.props.productResponse
      if (action === "SEARCH_PRODUCT" && status === 200) {
        this.setState({
          items: data.products.data,
        })
      }
      this.setState({
        action: action,
      })
    }
  }

  manageStoreInformationResponse = (prevProps, prevState) => {
    if (
      prevProps.storeInformationResponse !== this.props.storeInformationResponse
    ) {
      const { action, status, data } = this.props.storeInformationResponse
      if (action === "GET_STORE_INFORMATION" && status === 200) {
        this.setState({
          storeInfo: data.storeInfo,
        })
      }
    }
  }
  handleOnSearch = (string, results) => {
    const { action, page, limit } = this.state
    if (action === "GET_PRODUCT_BY_CATEGORY_NAME") {
      this.getProductsByCategoryName(
        this.props.location.state,
        string,
        page,
        limit,
      )
    } else {
      this.searchProduct(string, page, limit)
    }
  }

  handleOnSelect = (item) => {
    const { action, page, limit } = this.state
    if (action === "GET_PRODUCT_BY_CATEGORY_NAME") {
      this.getProductsByCategoryName(
        this.props.location.state,
        item.productName,
        page,
        limit,
      )
    } else {
      this.searchProduct(item.productName, page, limit)
    }
    this.props.history.push({
      pathname:
        config.api.private.prefixFrontendUrl + "/products/" + item.productName,
      state: item.productName,
    })
  }

  handleOnClear = (item) => {
    const { page, limit, action } = this.state
    if (action === "GET_PRODUCT_BY_CATEGORY_NAME") {
      this.getProductsByCategoryName(this.props.location.state, "", page, limit)
    } else {
      this.searchProduct("", page, limit)
    }
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn
    let { items, storeInfo } = this.state
    const margin = {
      marginBottom: "12px",
    }
    return (
      <CHeader position="sticky">
        <CContainer>
          <Link
            className="nav-link"
            to={config.api.private.prefixFrontendUrl + "/home"}
            style={{ cursor: "pointer" }}
          >
            {storeInfo.acronym ? (
              <strong style={{ ...margin }}>{storeInfo.acronym}</strong>
            ) : storeInfo.storeName ? (
              <strong style={{ ...margin }}>{storeInfo.storeName}</strong>
            ) : (
              <strong style={{ ...margin }}>IMSs</strong>
            )}
          </Link>
          {isLoggedIn ? (
            <CHeaderNav className="ms-3">
              <div className="d-flex justify-content-center">
                <CNavItem>
                  <CNavLink href="/cart">
                    <FaIcons.FaShoppingCart size={25} />
                  </CNavLink>
                </CNavItem>

                <AppHeaderDropdown />
              </div>
            </CHeaderNav>
          ) : (
            <CHeaderNav className="ms-3 ">
              <CNavItem>
                <CNavLink
                  href={config.api.private.prefixFrontendUrl + "/login"}
                >
                  <FiIcons.FiLogIn size={20} style={style} />
                  Login
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href={config.api.private.prefixFrontendUrl + "/register"}
                >
                  <FaIcons.FaUserPlus size={20} style={style} />
                  Register
                </CNavLink>
              </CNavItem>
            </CHeaderNav>
          )}
        </CContainer>
        <CHeaderDivider />
        <CContainer className="d-flex justify-content-center align-items-center">
          <div className="w-50">
            <ReactSearchAutocomplete
              items={items}
              onSearch={this.handleOnSearch}
              onSelect={this.handleOnSelect}
              onClear={this.handleOnClear}
              fuseOptions={{ keys: ["productName", "barcode"] }}
              resultStringKeyName="productName"
              placeholder="Search Product"
              className="search-bar"
              autoFocus
              styling={{
                boxShadow: "none",
                fontSize: "16px",
                zIndex: 999,
                padding: "16px 24px",
                height: "50px",
                border: " 1px solid #b1b7c1",
                fontWiegth: "500",
                placeholderColor: "Black",
                width: "100%",
              }}
            />
          </div>
        </CContainer>
      </CHeader>
    )
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn, credentials } = state.userResponse
  return {
    isLoggedIn,
    credentials,
    productResponse: state.productResponser,
    messageResponse: state.messageResponse,
    storeInformationResponse: state.storeInformationResponse,
  }
}
export default connect(mapStateToProps, {
  searchProductByBarcodeOrName,
  getDiscoverProducts,
  getProductsByCategoryName,
  getStoreInformation,
})(withRouter(NavHeader))
