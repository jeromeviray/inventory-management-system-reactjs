import React, { Component, lazy } from "react"
import { Link } from "react-router-dom"
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CTableCaption,
  CBadge,
  CWidgetDropdown,
} from "@coreui/react"
import { getStyle } from "@coreui/utils"
import { CChartBar, CChartLine } from "@coreui/react-chartjs"
import { getProductsByStatus } from "src/service/apiActions/productAction/productAction.js"
import { connect } from "react-redux"
import Barcode from "react-barcode"
import {
  getProductsAndCountTatolSold,
  getTotalRevenues,
} from "src/service/apiActions/dashboardAction/dashboardAction.js"
import config from "../../../config"

const WidgetsDropdown = lazy(() =>
  import("../../../components/widgets/WidgetsDropdown.js"),
)

export class Dashboard extends Component {
  state = {
    products: {
      data: [],
      totalPages: 0,
    },
    status: "OUT_OF_STOCK",
    page: 0,
    limit: 10,
    query: "",
    productsTotalSold: {
      data: [],
      totalPages: 0,
    },
    year: null,
    revenue: [],
    getRevenue: {
      totalRevenue: [],
      month: [],
      year: "",
    },
  }

  componentDidMount() {
    const { page, status, limit, query, year } = this.state
    this.getProducts(page, status, limit, query)
    this.getProductsAndCountTatolSold(query, page, limit)
    this.getTotalRevenues(year)
  }
  getProductsAndCountTatolSold = (query, page, limit) => {
    this.props.getProductsAndCountTatolSold(query, page, limit)
  }
  getTotalRevenues = (year) => {
    this.props.getTotalRevenues(year)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
    this.manageDashboardResponse(prevProps, prevState)
  }

  manageProductResponse(prevProps, prevState) {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { action, status, data } = this.props.productResponse
      if (status === 200 && action === "GET_PRODUCTS_BY_STATUS") {
        this.setState({
          products: data.products,
        })
      }
    }
  }

  manageDashboardResponse = (prevPros, prevState) => {
    if (prevPros.dashboardResponse !== this.props.dashboardResponse) {
      const { status, action, data } = this.props.dashboardResponse
      if (status === 200 && action === "GET_PRODUCTS_COUNT_TOTAL_SOLD") {
        this.setState({
          productsTotalSold: data.products,
        })
      } else if (status === 200 && action === "GET_TOTAL_REVENUES") {
        let gettotalRevenue = []
        let getMonthly = []
        data.revenue.map((item, index) => {
          gettotalRevenue.push(item.totalRevenue)
          getMonthly.push(this.manageMonth(item.month))
        })
        this.setState({
          revenue: data.revenue,
          totalRevenue: gettotalRevenue,
          month: getMonthly,
          year: data.revenue[0].year,
        })
      }
    }
  }
  getProducts(page, status, limit, query) {
    this.props.getProductsByStatus(query, status, page, limit)
  }
  handleProductPage = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query, status } = this.state
    this.getProducts(query, status, page, limit)
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
  manageMonth = (month) => {
    let monthly = ""

    switch (month) {
      case 1:
        return (monthly = "Junuary")
      case 2:
        return (monthly = "Febrary")
      case 3:
        return (monthly = "March")
      case 4:
        return (monthly = "April")
      case 5:
        return (monthly = "May")
      case 6:
        return (monthly = "June")
      case 7:
        return (monthly = "July")
      case 8:
        return (monthly = "August")
      case 9:
        return (monthly = "September")
      case 10:
        return (monthly = "October")
      case 11:
        return (monthly = "November")
      case 12:
        return (monthly = "December")
    }
  }
  handleStatusOnClick = (status) => {
    this.setState({
      status: status,
    })
    const { query, page, limit } = this.state
    this.getProducts(page, status, limit, query)
  }
  render() {
    const {
      products,
      status,
      productsTotalSold,
      revenue,
      totalRevenue,
      month,
      year,
    } = this.state
    let totalSold = []
    let productNames = []
    console.log(month && month.slice(-1)[0])
    productsTotalSold.data.map((item, index) => {
      totalSold.push(item.totalSold)
      productNames.push(item.productName)
    })
    return (
      <>
        <WidgetsDropdown />
        <CCard className="mb-4 d-none d-md-block">
          <CCardHeader>
            <CRow>
              <CCol sm="5">
                <h4 id="traffic" className="card-title mb-0">
                  Revenue
                </h4>
                <div className="small text-medium-emphasis">
                  {month && month[0] + " - " + month.slice(-1)[0] + " " + year}
                </div>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              title="Reveneu"
              data={{
                labels: month,
                datasets: [
                  {
                    label: "Monthly Revenue",
                    backgroundColor: "#08B7F4",
                    data: totalRevenue,
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
        <CCard className="mb-4 d-none d-md-block">
          <CCardHeader>
            <CRow>
              <CCol sm="5">
                <h4 id="traffic" className="card-title mb-0">
                  Top 10 Most Sold Product
                </h4>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: productNames,
                datasets: [
                  {
                    label: "Sold Product",
                    backgroundColor: "#f87979",
                    data: totalSold,
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
        <CCard className="mb-4 bg-transparent border-0">
          <CCardHeader>
            <CRow>
              <CCol sm="5" className="d-flex align-items-center">
                <h4 className="card-title mb-0 ">Products need Action</h4>
              </CCol>
              <CCol sm="7">
                <CButtonGroup className="float-end">
                  {["OUT_OF_STOCK", "LOW"].map((value) => (
                    <CButton
                      color={
                        value === "LOW" ? "outline-warning" : "outline-danger"
                      }
                      key={value}
                      className="mx-0"
                      active={value === status}
                      onClick={() => this.handleStatusOnClick(value)}
                    >
                      {value}
                    </CButton>
                  ))}
                </CButtonGroup>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody className="p-0 m-0 ">
            <CTable
              striped
              hover
              className="shadow-sm "
              responsive
              bordered
              align="middle"
            >
              <CTableCaption>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link
                      to={{
                        pathname:
                          config.api.private.prefixFrontendUrl +
                          "/app/products/products",
                        state: status,
                      }}
                    >
                      View More
                    </Link>
                  </div>
                  <div>
                    List of Products: <b>{products.totalItems}</b>
                  </div>
                </div>
              </CTableCaption>

              <CTableHead color="dark">
                <CTableRow className="text-center">
                  {/* <CTableHeaderCell scope="col">Image</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">Barcode</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Alert Stocks Threshold
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Total Stocks</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody className="text-center" color="light">
                {products.data && products.data.length > 0 ? (
                  products.data.map((product, index) => {
                    const { id, barcode, productName, productPrice } =
                      product.product
                    const { threshold, status, totalStock } = product.inventory
                    return (
                      <CTableRow className="text-center" key={index}>
                        <CTableDataCell>
                          <Barcode
                            value={String(barcode)}
                            height={50}
                            width={1}
                            fontSize={14}
                            margin={7}
                            background="#f5f5f548"
                          />
                        </CTableDataCell>
                        <CTableDataCell>{productName}</CTableDataCell>
                        <CTableDataCell>
                          &#8369;{productPrice.toFixed(2)}
                        </CTableDataCell>
                        <CTableDataCell>{threshold}</CTableDataCell>
                        <CTableDataCell>{totalStock}</CTableDataCell>
                        <CTableDataCell>
                          {this.manageStatus(status)}
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })
                ) : (
                  <CTableRow>
                    <CTableDataCell colSpan="7">No data</CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    productResponse: state.productResponser,
    dashboardResponse: state.dashboardResponse,
  }
}
export default connect(mapStateToProps, {
  getProductsByStatus,
  getProductsAndCountTatolSold,
  getTotalRevenues,
})(Dashboard)
