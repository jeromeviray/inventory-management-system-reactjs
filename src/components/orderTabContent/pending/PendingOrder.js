import React, { Component } from 'react'
import {
    CCard,
    CCardBody, CCardHeader, CCardFooter,
    CRow, CCol,
    CContainer, CImage,
    CButton
} from '@coreui/react'
import { Link } from 'react-router-dom'
//action 
import { pendingOrder } from 'src/service/apiActions/orderAction/orderAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { connect } from 'react-redux'
import OrderCard from '../OrderCard'
import Roles from 'src/router/config'
export class PendingOrder extends Component {
    state = {
        message: '',
        status: '',
        action: '',
        pendingOrders: [],
        token: '',
        permission: ''
    }
    componentDidMount() {
        let { type, accessToken, roles } = this.props.userResponse.credentials;
        let token = type + accessToken;
        this.setState({
            token: token,
            permission: roles.roleName ? roles.roleName : roles
        })
        this.props.pendingOrder().catch(() => {
            let failMessage = this.props.messageResponse;
            if (failMessage.status > 400 && failMessage.status <= 403) {
                // this.props.clearMessage();
                setInterval(() => {
                    this.props.logout();
                }, 1000)
            }
            this.setState({
                message: failMessage.data.message
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.managePendingOrderRepsonse(prevProps, prevState);
    }
    managePendingOrderRepsonse = (prevProps, prevState) => {
        if (prevProps.orderResponse !== this.props.orderResponse) {
            let { status, action, data } = this.props.orderResponse;
            console.log(this.props.orderResponse);
            if (status === 200 && action === "GETPENDINGORDER") {
                this.setState({
                    pendingOrders: data.pendingOrder
                })
            }
        }
    }
    render() {
        let { message, pendingOrders, permission } = this.state;
        const fontStyle = {
            fontSize: "14px",
            fontWeight: "400"
        }

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
                {pendingOrders.length === 0 ?
                    <CCard>
                        <CCardBody>
                            <div className="text-center">No Order Pending</div>
                        </CCardBody>
                    </CCard> :
                    pendingOrders.map((pendingOrder, index) => {
                        // const { firstName, lastName, street, barangay, province, region, city, postalCode } = pendingOrder.customerAddress;
                        return (
                            <CCard className="mb-3" key={index}>
                                <CCardHeader>
                                    <CRow className="p-2">
                                        <span style={{ fontSize: "14px", fontWeight: "400" }} className="text-black-50">
                                            Order ID: {pendingOrder.orderId}
                                        </span>
                                    </CRow>
                                </CCardHeader>
                                <CCardBody>
                                    <CContainer>
                                        {pendingOrder.orderItems.map((item, index) => {

                                            return (
                                                <OrderCard item={item} key={index} />
                                            )
                                        })}

                                    </CContainer>

                                </CCardBody>
                                <CCardFooter className="p-4">
                                    <div className="d-flex justify-content-between align-items-end">

                                        <div className="d-flex align-items-bottom">
                                            {/* {pendingOrder.orderItems.map((item, index) => {
                                                return (

                                                )

                                            })} */}
                                            <Link
                                                to={{
                                                    pathname: "/app/order/" + pendingOrder.orderId,
                                                    state: pendingOrder.orderId
                                                }}
                                                className="m-2"
                                            >
                                                View More
                                            </Link>

                                            {permission === Roles.SUPER_ADMIN ||
                                                permission === Roles.ADMIN ?
                                                <CButton>Confirm Order</CButton> :
                                                <></>
                                            }
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div style={fontStyle} className="mt-2">
                                                <span className="text-black-50 me-2">
                                                    Date of Ordered:
                                                </span>
                                                <span style={{ fontWeight: "500" }}>{pendingOrder.orderedAt}</span>
                                            </div>

                                            <div style={fontStyle} className="mt-2">
                                                <span style={fontStyle} className="text-black-50 me-2">
                                                    Payment Method:
                                                </span>
                                                <span style={{ fontWeight: "500" }}>{pendingOrder.paymentMethod.paymentMethod}</span>

                                            </div>
                                            <div style={fontStyle} className="mt-2">
                                                <span style={fontStyle} className="text-black-50 me-2">
                                                    Order Status:
                                                </span>
                                                <span className="text-danger" style={{ fontWeight: "500" }}>{pendingOrder.orderStatus}</span>

                                            </div>
                                            <div className="mt-2">
                                                <span style={fontStyle} className="text-black-50 me-2">
                                                    Total Amount
                                                </span>
                                                <span style={{ fontWeight: "500" }}>
                                                    &#8369;{pendingOrder.totalAmount.toFixed(2)}
                                                </span>
                                            </div>



                                        </div>
                                    </div>
                                </CCardFooter>
                            </CCard>
                        )
                    })

                }

            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        orderResponse: state.orderResponse,
        messageResponse: state.messageResponse,
        userResponse: state.userResponse
    }
}
export default connect(mapStateToProps, {
    pendingOrder,
    logout,
    clearMessage
})(PendingOrder)
