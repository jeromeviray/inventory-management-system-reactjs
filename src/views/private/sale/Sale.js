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

export class Sale extends Component {
    state = {
        payments: []
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
            console.log(orderResponse.data.payments)
            if (orderResponse.status == 200 && orderResponse.action == "GET_PAYMENT_TRANSACTIONS") {
                this.setState({
                    payments: orderResponse.data.payments.data
                })
            }
        }
    }

    render() {
        const payments = this.state;
        console.log(payments.payments)

        return (
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
                            Delivered At
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            Paid At
                        </CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody className="text-center" color="light">
                    {payments.payments.length > 0 ? (
                        payments.payments.map((order, index) => {
                            return (
                                <CTableRow className="text-center" key={index}>
                                    <CTableDataCell>
                                        {order.orderId}
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        {order.totalAmount}
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        {order.deliveredAt}
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
