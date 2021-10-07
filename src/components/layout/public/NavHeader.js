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
} from "src/service/apiActions/productAction/productAction"
import { getProductsByCategoryName } from "src/service/apiActions/productAction/productAction"
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
  }
  componentDidMount() {
    const { query, page, limit } = this.state
    this.searchProduct(query, page, limit)
  }
  searchProduct(query, page, limit) {
    this.props.searchProductByBarcodeOrName(query, page, limit).catch(() => {
      let { status, data } = this.props.messageResponse
      if (status > 400 && status <= 403) {
        setInterval(() => {
          this.props.logout()
          this.props.clearMessage()
        }, 1000)
        this.setState({
          toast: this.toastComponent,
        })
      }
    })
  }

  getDiscoverProducts = (query, page, limit) => {
    this.props.getDiscoverProducts(query, page, limit).catch(() => {
      let { data } = this.props.messageResponse
      if (data) {
        this.setState({
          loading: false,
          message: data.message,
        })
      }
    })
  }
  getProductsByCategoryName = (categoryName, query, page, limit) => {
    this.props
      .getProductsByCategoryName(categoryName, query, page, limit)
      .catch(() => {
        let { status, data } = this.props.messageResponse
        this.setState({
          message: data.message,
          hasError: true,
        })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
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
      this.getDiscoverProducts(string, page, limit)
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
      this.getDiscoverProducts(item.productName, page, limit)
    }
    this.props.history.push({
      pathname: "/products/" + item.productName,
      state: item.productName,
    })
  }

  handleOnClear = (item) => {
    const { page, limit, action } = this.state
    if (action === "GET_PRODUCT_BY_CATEGORY_NAME") {
      this.getProductsByCategoryName(this.props.location.state, "", page, limit)
    } else {
      this.getDiscoverProducts("", page, limit)
    }
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn
    let { items } = this.state
    return (
      <CHeader position="sticky">
        <CContainer>
          <Link className="nav-link" to="/home" style={{ cursor: "pointer" }}>
            <h2 className="nav-item">Logo</h2>
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
                <CNavLink href="/login">
                  <FiIcons.FiLogIn size={20} style={style} />
                  Login
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/register">
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
  }
}
export default connect(mapStateToProps, {
  searchProductByBarcodeOrName,
  getDiscoverProducts,
  getProductsByCategoryName,
})(withRouter(NavHeader))
