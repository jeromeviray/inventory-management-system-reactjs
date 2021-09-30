import React, { Component } from "react"
import { CCard, CCardBody, CPagination, CPaginationItem } from "@coreui/react"
import { connect } from "react-redux"
//action
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getIncomingSuppliesByPendingStatus } from "src/service/apiActions/incomingSupplyAction/incomingSupplyAction"
import IncomingSuppliesCard from "../IncomingSuppliesCard"
import ReactPaginate from "react-paginate"

export class IncomingSuppliesByPendingStatus extends Component {
  state = {
    incomingSuppliesByPendingStatus: [],
    message: "",
  }
  componentDidMount() {
    this.props.getIncomingSuppliesByPendingStatus().catch(() => {
      let { status, data } = this.props.messageResponse
      if (status > 400 && status <= 403) {
        this.props.logout()
        this.props.clearMessage()
      }
      this.setState({
        message: data.message,
      })
    })
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
  render() {
    let { message, incomingSuppliesByPendingStatus } = this.state
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
        <IncomingSuppliesCard supplies={incomingSuppliesByPendingStatus} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          // pageCount={inventories.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick}
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
  logout,
  clearMessage,
  getIncomingSuppliesByPendingStatus,
})(IncomingSuppliesByPendingStatus)
