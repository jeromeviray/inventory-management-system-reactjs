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
    const { revenue } = summaries
    const getTotalRevenue = revenue ? revenue : 0
    return (
      <>
        <CRow>
          <CCol sm="12" md="6" lg="3">
            <div className="container revenue">
              <div className="column-total-value">
                <span>&#8369;</span>
                <span>{getTotalRevenue.toFixed(2)}</span>
              </div>
              <div className="column-title">
                <span>Total Revenue</span>
              </div>

              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/background/pesosign.png)",
                  zIndex: "1",
                }}
              ></div>
            </div>
          </CCol>
          <CCol sm="12" md="6" lg="3">
            <div className="container product">
              <div className="column-total-value">
                <span>{summaries.product}</span>
              </div>
              <div className="column-title">
                <span>Total Products</span>
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
          <CCol sm="12" md="6" lg="3">
            <div className="container purchase">
              <div className="column-total-value">
                <span>{summaries.sold}</span>
              </div>
              <div className="column-title">
                <span>Total Sold</span>
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
          <CCol sm="12" md="6" lg="3">
            <div className="container customer">
              <div className="column-total-value">
                <span>{summaries.customer}</span>
              </div>
              <div className="column-title">
                <span>Total Customers</span>
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
