import React, { Component } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CContainer,
    CCardHeader,
    CRow
} from '@coreui/react';
import { connect } from 'react-redux';
//action
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction';
import { getOrderByOrderId } from 'src/service/apiActions/orderAction/orderAction';

//helper
import { history } from 'src/_helper/history';
//icon
import * as IoIcons from "react-icons/io5"
import OrderCard from './OrderCard';
//npm
import ReactToPrint from 'react-to-print';
import QRCode from 'qrcode.react';

export class OrderDetails extends Component {
    state = {
        message: '',
        order: [],
        orderId: '',
        customerAddress: [],
        hasError: false
    }
    componentDidMount() {
        let orderId = this.props.location.state;
        this.props.getOrderByOrderId(orderId).catch(() => {
            this.setState({
                hasError: true
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageOrderResponse(prevProps, prevState);
    }

    manageOrderResponse = (prevProps, prevState) => {

        if (prevProps.orderResponse !== this.props.orderResponse) {
            let { status, action, data } = this.props.orderResponse;
            if (status === 200 && action === "GETORDERBYID") {
                this.setState({
                    order: data.order,
                    customerAddress: data.order.customerAddress,
                    orderId: data.order.orderId
                })
            }
        }
    }
    downloadQRCode = () => {
        let { orderId } = this.state.order;
        console.log(orderId);
        const qrCodeURL = document
            .getElementById('qrCodeEl').toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');

        let aEl = document.createElement('a');
        aEl.href = qrCodeURL;
        aEl.download = 'QR_Code' + orderId + '.png';
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }
    render() {
        let { order, message, hasError, customerAddress } = this.state;
        const {
            firstName,
            lastName,
            phoneNumber,
            street,
            barangay,
            province,
            region,
            city,
            postalCode } = customerAddress;
        let firstNameUpperCase = firstName && firstName.charAt(0).toUpperCase() + firstName.slice(1);
        let lastNameUpperCase = lastName && lastName.charAt(0).toUpperCase() + lastName.slice(1);
        let qrValue = order && order.orderId;
        return (
            <>
                <CButton
                    onClick={() => history.goBack()}
                    variant="ghost"
                    color="secondary"
                    className="d-flex align-items-center"
                >
                    <IoIcons.IoChevronBack size={20} />
                    <span className="ms-2">back</span>
                </CButton>

                {message && (
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}

                {hasError ? <></> :
                    <div className="mb-4">
                        <div className="d-flex align-items-end flex-row-reverse m-2">

                            <ReactToPrint
                                trigger={() =>
                                    <CButton
                                        color="info"
                                        className="d-flex align-items-center"
                                    >
                                        <IoIcons.IoPrintOutline size={20} />
                                    </CButton>
                                }
                                content={() => this.componentRef}
                            />
                        </div>
                        <div ref={(el) => (this.componentRef = el)} className="ps-4 pe-4 pt-3">
                            <CCard className="border-envelope">
                                <CCardBody>
                                    <h5 className="text-black-50">Customer Address</h5>

                                    <h6>
                                        <span className="mb-2 text-black-50 me-2 font-style ">Name:</span>

                                        {firstNameUpperCase + " " + lastNameUpperCase}
                                    </h6>
                                    <h6 >
                                        <span className="mb-2 text-black-50 me-2  font-style ">Contact:</span>
                                        {phoneNumber}
                                    </h6>
                                    <h6>
                                        <span className="mb-2 text-black-50 me-2  font-style ">Address:</span>

                                        {"# " + street + "," + barangay + "," + province + "," + region + "," + city + "," + postalCode}
                                    </h6>

                                </CCardBody>
                            </CCard>
                            <CCard className="mt-3">
                                <CCardHeader>
                                    <span style={{ fontSize: "14px", fontWeight: "400" }} className="text-black-50">
                                        Order ID: {order && order.orderId}
                                    </span>
                                </CCardHeader>
                                <CCardBody>
                                    <CContainer>
                                        {order.orderItems && order.orderItems.map((item, index) => {

                                            return (
                                                <OrderCard item={item} key={index} />
                                            )
                                        })}
                                    </CContainer>


                                </CCardBody>
                            </CCard>
                            <CCard className="mt-3">
                                <CCardHeader>
                                    <h5 className="text-black-50">Summary Payment Details</h5>

                                </CCardHeader>
                                <CCardBody className="d-flex justify-content-between">
                                    <div className="d-flex justify-content-center flex-column">
                                        <a onClick={this.downloadQRCode} style={{ cursor: "pointer" }}>
                                            <QRCode
                                                id="qrCodeEl"
                                                value={String(qrValue)}
                                                // renderAs="svg"
                                                includeMargin={true}
                                            />
                                        </a>

                                        <CButton onClick={this.downloadQRCode} color="link">Download QR</CButton>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="font-style mt-2">
                                            <span className="text-black-50 me-2">
                                                Date of Ordered:
                                            </span>
                                            <span className="font-style">{order.orderedAt}</span>
                                        </div>

                                        <div className="font-style mt-2">
                                            <span className="text-black-50 me-2 font-style">
                                                Payment Method:
                                            </span>
                                            <span className="font-style">{order.paymentMethod && order.paymentMethod.paymentMethod}</span>

                                        </div>
                                        <div className="font-style mt-2">
                                            <span className="text-black-50 me-2 font-style">
                                                Order Status:
                                            </span>
                                            <span className="text-danger" >{order.orderStatus}</span>

                                        </div>
                                        <div className="mt-2">
                                            <span className=" font-style text-black-50 me-2">
                                                Total Amount
                                            </span>
                                            <span className="font-style">
                                                &#8369;{order.totalAmount && order.totalAmount.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </div>

                    </div>
                }
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        orderResponse: state.orderResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    getOrderByOrderId,
    clearMessage
})(OrderDetails)
