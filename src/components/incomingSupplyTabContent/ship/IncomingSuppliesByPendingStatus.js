import React, { Component } from "react"
import {
  CCard,
  CCardBody,
  CButton,
  CForm,
  CInputGroup,
  CFormControl,
} from "@coreui/react"
import * as FaIcons from "react-icons/fa"

import { connect } from "react-redux"
//action
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getIncomingSuppliesByPendingStatus } from "src/service/apiActions/incomingSupplyAction/incomingSupplyAction"
import IncomingSuppliesCard from "../IncomingSuppliesCard"
import ReactPaginate from "react-paginate"

export class IncomingSuppliesByPendingStatus extends Component {
  state = {
    incomingSuppliesByPendingStatus: {
      data: [],
      totalPages: 0,
    },
    message: "",
    query: "",
    page: 0,
    limit: 10,
  }
  componentDidMount() {
    const { query, page, limit } = this.state
    this.getIncomingSupplies(query, page, limit)
  }
  getIncomingSupplies = (query, page, limit) => {
    this.props
      .getIncomingSuppliesByPendingStatus(query, page, limit)
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageIncomingSuppliesByShipStatus(prevProps, prevState)
  }
  manageIncomingSuppliesByShipStatus = (prevProps, prevState) => {
    if (
      prevProps.incomingSupplyResponse !== this.props.incomingSupplyResponse
    ) {
      let { action, status, data } = this.props.incomingSupplyResponse
      if (
        action === "GET_INCOMING_SUPPLIES_BY_PENDING_STATUS" &&
        status === 200
      ) {
        this.setState({
          incomingSuppliesByPendingStatus: data.incomingSuppliesByPendingStatus,
        })
      }
    }
  }
  handleOnChange = (event) => {
    this.setState({
      query: event.target.value,
    })
  }
  handleSearch = (event) => {
    event.preventDefault()
    const { page, limit } = this.state
    this.props.getIncomingSuppliesByPendingStatus(
      event.target.value,
      page,
      limit,
    )
    this.setState({ query: event.target.value })
  }

  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page })
    const { limit, query } = this.state
    this.props.getIncomingSuppliesByPendingStatus(query, page, limit)
  }
  render() {
    let { message, incomingSuppliesByPendingStatus, query } = this.state
    return (
      <>
        {message && (
          <CCard className="mb-3">
            <CCardBody>
              {/* <div className="form-group d-flex justify-content-center align-items-center"> */}
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
              {/* </div> */}
            </CCardBody>
          </CCard>
        )}
        <div className="d-flex justify-content-end mb-4">
          <CForm className="w-50">
            <CInputGroup>
              <CFormControl
                type="text"
                id="floatingInput"
                placeholder="Search Pending Supply (e.g: IS-FEF-1000000)"
                className="p-2"
                value={query}
                onChange={this.handleSearch}
              />
              <CButton
                type="button"
                color="info"
                variant="outline"
                id="button-addon2"
                className=""
              >
                <FaIcons.FaSearch />
              </CButton>
            </CInputGroup>
          </CForm>
        </div>

        <IncomingSuppliesCard supplies={incomingSuppliesByPendingStatus.data} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={incomingSuppliesByPendingStatus.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    incomingSupplyResponse: state.incomingSupplyResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  clearMessage,
  getIncomingSuppliesByPendingStatus,
})(IncomingSuppliesByPendingStatus)
