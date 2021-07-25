import React, { Component, lazy } from "react"

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react"
import { CChartBar, CChartLine } from "@coreui/react-chartjs"
const WidgetsDropdown = lazy(() =>
  import("../../../components/widgets/WidgetsDropdown.js"),
)

export class Dashboard extends Component {
  render() {
    const random = () => Math.round(Math.random() * 100)
    return (
      <>
        <WidgetsDropdown />
        <CCard className="mb-4">
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
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>Line Chart</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                    borderColor: "rgba(220, 220, 220, 1)",
                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                    pointBorderColor: "#fff",
                    data: [
                      random(),
                      random(),
                      random(),
                      random(),
                      random(),
                      random(),
                      random(),
                    ],
                  },
                  {
                    label: "My Second dataset",
                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                    borderColor: "rgba(151, 187, 205, 1)",
                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                    pointBorderColor: "#fff",
                    data: [
                      random(),
                      random(),
                      random(),
                      random(),
                      random(),
                      random(),
                      random(),
                    ],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default Dashboard
