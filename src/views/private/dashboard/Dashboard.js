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
} from "@coreui/react"
import { CChartBar } from "@coreui/react-chartjs"
import { getProductsByStatus } from "src/service/apiActions/productAction/productAction.js"
import { connect } from "react-redux"
import Barcode from "react-barcode"
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
  }

  componentDidMount() {
    const { page, status, limit, query } = this.state
    this.getProducts(page, status, limit, query)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
  }

  manageProductResponse(prevProps, prevState) {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { action, status, data } = this.props.productResponse
      console.log(this.props.productResponse)
      if (status === 200 && action === "GET_PRODUCTS_BY_STATUS") {
        this.setState({
          products: data.products,
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
  handleStatusOnClick = (status) => {
    this.setState({
      status: status,
    })
    const { query, page, limit } = this.state
    this.getProducts(page, status, limit, query)
  }
  render() {
    const { products, status } = this.state
    const random = () => Math.round(Math.random() * 100)
    return (
      <>
        <WidgetsDropdown />
        {/* <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol sm="5">
                <h4 id="traffic" className="card-title mb-0">
                  Traffic
                </h4>
                <div className="small text-medium-emphasis">
                  January - July 2021
                </div>
              </CCol>
              <CCol sm="7" className="d-none d-md-block">
                <CButtonGroup className="float-end me-3">
                  {["Day", "Month", "Year"].map((value) => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === "Month"}
                    >
                      {value}
                    </CButton>
                  ))}
                </CButtonGroup>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                ],
                datasets: [
                  {
                    label: "Revenue",
                    backgroundColor: "#f87979",
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard> */}
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
                        pathname: "/app/products/products",
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
  }
}
export default connect(mapStateToProps, {
  getProductsByStatus,
})(Dashboard)
