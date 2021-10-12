import React, { Component } from "react"
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCardFooter,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell,
    CTableBody,
} from "@coreui/react"
import { Link } from "react-router-dom"
import Barcode from "react-barcode"
import { getPaymentTransactions } from "src/service/apiActions/orderAction/orderAction"
import { connect } from "react-redux"
import ReactPaginate from "react-paginate"

export class Sale extends Component {
    state = {
        payments: [],
        limit: 10
    }

    componentDidMount() {
        this.props.getPaymentTransactions("", 0, 10)
    }

    componentDidUpdate(prevProps, prevState) {
        this.manageResponse(prevProps, prevState);
    }

    manageResponse(prevProps, prevState) {
        if (this.props.orderResponse != prevProps.orderResponse) {
            let orderResponse = this.props.orderResponse;
            if (orderResponse.status == 200 && orderResponse.action == "GET_PAYMENT_TRANSACTIONS") {
                this.setState({
                    payments: orderResponse.data.payments.data,
                    originalList: orderResponse.data.payments
                })
                console.log(orderResponse.data)
            }
        }
    }

    handlePageClick = (data) => {
        let page = data.selected
        console.log(page)
        this.setState({ page: page }, () => {
            const { limit, query, status } = this.state
            this.props.getPaymentTransactions("", page, limit)
        })
    }

    render() {
        const { payments, originalList } = this.state;
        console.log(originalList)

        return (
            <>
                <CTable
                    striped
                    hover
                    className="shadow-sm "
                    responsive="md"
                    bordered
                    align="middle"
                >
                    <CTableHead color="dark">
                        <CTableRow className="text-center">
                            <CTableHeaderCell scope="col">
                                Order ID
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Order Amount
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Payment Method
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Payment Status
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                External Reference
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Paid At
                            </CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody className="text-center" color="light">
                        {payments.length > 0 ? (
                            payments.map((order, index) => {
                                let paymentStatus = "Payment Pending";
                                switch (order.paymentStatus) {
                                    case 1:
                                        paymentStatus = "Paid";
                                        break;
                                    case 2:
                                        paymentStatus = "Failed";
                                        break;
                                }
                                return (
                                    <CTableRow className="text-center" key={index}>
                                        <CTableDataCell>
                                            {order.orderId}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            ₱ {order.totalAmount}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {order.paymentMethod.paymentMethod}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {paymentStatus}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {order.externalReference}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {order.paidAt}
                                        </CTableDataCell>
                                    </CTableRow>
                                )
                            })
                        ) : (
                            <CTableRow>
                                <CTableDataCell colSpan="4">No Payment Transactions</CTableDataCell>
                            </CTableRow>
                        )}
                    </CTableBody>
                </CTable>
                {originalList &&
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={originalList.totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                    />
                }
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        orderResponse: state.orderResponse,
    }
}
export default connect(mapStateToProps, {
    getPaymentTransactions
})(Sale)
