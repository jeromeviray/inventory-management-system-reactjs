import React, { Component } from "react"
import { getIncomingSupplies } from "src/service/apiActions/incomingSupplyAction/incomingSupplyAction"
import { connect } from "react-redux"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import IncomingSuppliesCard from "./IncomingSuppliesCard"
import ReactPaginate from "react-paginate"

export class IncomingSupplies extends Component {
  state = {
    message: "",
    status: "",
    action: "",
    incomingSupplies: {
      data: [],
      totalPages: 0,
    },
    query: "",
    page: 0,
    limit: 10,
    path: "",
  }
  constructor(props) {
    super(props)
    this.state.status = props.status
  }
  componentDidMount() {
    const { query, status, page, limit } = this.state
    this.getIncomingSupplies(query, status, page, limit)
  }
  getIncomingSupplies = (query, status, page, limit) => {
    this.props.getIncomingSupplies(query, status, page, limit).catch(() => {
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
    this.manageSupplyModal(prevProps, prevState)
    this.manageIncomingSupplies(prevProps, prevState)
  }
  manageIncomingSupplies = (prevProps, prevState) => {
    if (
      prevProps.incomingSupplyResponse !== this.props.incomingSupplyResponse
    ) {
      let { action, status, data } = this.props.incomingSupplyResponse
      if (action === "GET_INCOMING_SUPPLIES" && status === 200) {
        this.setState({
          incomingSupplies: data.incomingSupplies,
        })
      }
    }
  }
  manageSupplyModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { action } = this.props.modalVisible
      if (action === "close") {
        const { query, status, page, limit } = this.state
        this.getIncomingSupplies(query, status, page, limit)
      }
    }
  }
  handlePageClick = (data) => {
    let page = data.selected
    this.setState({ page: page }, () => {
      const { limit, query, status } = this.state
      this.props.getIncomingSupplies(query, status, page, limit)
    })
  }

  render() {
    const { incomingSupplies, status } = this.state
    return (
      <>
        <IncomingSuppliesCard
          supplies={incomingSupplies.data}
          status={status}
        />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={incomingSupplies.totalPages}
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
    modalVisible: state.modalVisibleResponse,
  }
}
export default connect(mapStateToProps, {
  getIncomingSupplies,
  logout,
  clearMessage,
})(IncomingSupplies)
