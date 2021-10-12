import React, { Component } from "react"
import {
  CRow,
  CCol,
  //   CDropdown,
  //   CDropdownMenu,
  //   CDropdownItem,
  //   CDropdownToggle,
  CWidgetDropdown,
  CImage,
} from "@coreui/react"
// import { getStyle } from "@coreui/utils"
// import { CChartBar, CChartLine } from "@coreui/react-chartjs"
// import CIcon from "@coreui/icons-react"
import { getTotals } from "src/service/apiActions/dashboardAction/dashboardAction"
import { connect } from "react-redux"
// import * as BsIcons from "react-icons/bs"

export class WidgetsDropdown extends Component {
  state = {
    summaries: {
      totalProducts: 0,
      totalSold: 0,
      totalCustomers: 0,
    },
  }
  componentDidMount() {
    this.props.getTotals()
  }
  componentDidUpdate(prevPros, prevState) {
    this.manageDashboardResponse(prevPros, prevState)
  }
  manageDashboardResponse = (prevPros, prevState) => {
    if (prevPros.dashboardResponse !== this.props.dashboardResponse) {
      const { status, action, data } = this.props.dashboardResponse
      if (status === 200 && action === "GET_TOTALS") {
        this.setState({
          summaries: data.summaries,
        })
      }
    }
  }
  render() {
    const { summaries } = this.state
    return (
      <>
        {/* <CRow>
          <CCol sm="6" lg="3">
          <CWidgetDropdown
            className="mb-4"
            color="info"
            value="&#8369;100k"
            title="Revenue"
          />
        </CCol>
          <CCol sm="4" lg="4">
            <CWidgetDropdown
              className="mb-4"
              color="primary"
              value={summaries.totalSold}
              title="Products Sold"
            />
          </CCol>
          <CCol sm="4" lg="4">
            <CWidgetDropdown
              className="mb-4"
              color="warning"
              value={summaries.totalProducts}
              title="Total Products"
            />
          </CCol>
          <CCol sm="4" lg="4">
            <CWidgetDropdown
              className="mb-4"
              color="danger"
              value={summaries.totalCustomers}
              title="Total Customers"
            />
          </CCol>
        </CRow> */}
        <CRow>
          {/* <CCol sm="12" md="6" lg="3">
            <div className="container revenue">
              <div className="column-total-value">
                <span>&#8369;</span>
                <span>1,234</span>
              </div>
              <div className="column-title">
                <span>All Earnings</span>
              </div>

              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/images/background/pesosign.png)",
                }}
              ></div>
            </div>
          </CCol> */}
          <CCol sm="4" lg="4">
            <div className="container product">
              <div className="column-total-value">
                <span>{summaries.totalProducts}</span>
              </div>
              <div className="column-title">
                <span>Products</span>
              </div>

              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/background/products.png)",
                  zIndex: "1",
                }}
              ></div>
            </div>
          </CCol>
          <CCol sm="4" lg="4">
            <div className="container purchase">
              <div className="column-total-value">
                <span>{summaries.totalSold}</span>
              </div>
              <div className="column-title">
                <span>Sold</span>
              </div>

              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/background/purchased.png)",
                  zIndex: "1",
                }}
              ></div>
            </div>
          </CCol>
          <CCol sm="4" lg="4">
            <div className="container customer">
              <div className="column-total-value">
                <span>{summaries.totalCustomers}</span>
              </div>
              <div className="column-title">
                <span>Customers</span>
              </div>

              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/background/group.png)",
                  zIndex: "2",
                }}
              ></div>
            </div>
          </CCol>
        </CRow>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    dashboardResponse: state.dashboardResponse,
  }
}
export default connect(mapStateToProps, {
  getTotals,
})(WidgetsDropdown)
