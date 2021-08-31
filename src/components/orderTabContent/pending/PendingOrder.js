import React, { Component } from 'react'
import {
    CCard,
    CCardBody, CCardHeader, CCardFooter,
    CRow, CCol,
    CContainer, CImage
} from '@coreui/react'
//action 
import { getPendingOrders } from 'src/service/apiActions/orderAction/orderAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { connect } from 'react-redux'
import OrderCard from '../OrderCard'
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
        this.props.getPendingOrders(token).catch(() => {
            let failMessage = this.props.messageResponse
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
            if (status === 200 && action === "GETPENDINGORDER") {
                this.setState({
                    pendingOrders: data.pendingOrder
                })
            }
        }
    }
    render() {
        let { message, pendingOrders } = this.state;
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
                        const { firstName, lastName, street, barangay, province, region, city, postalCode } = pendingOrder.customerAddress;

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
                                    <CRow>
                                        <CCol sm="8" md="8" lg="8">
                                            <span style={fontStyle} >
                                                <h6 className="text-black-50 mb-3">Customer Address</h6>
                                                <span style={{
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    color: "black"
                                                }}> {firstName + " " + lastName}</span><br />
                                                <span className="mb-2">
                                                    {"#" + street + "," + barangay + "," + province + "," + region + "," + city + "," + postalCode}
                                                </span>

                                            </span>
                                        </CCol>
                                        <CCol sm="4" md="4" lg="4">
                                            <span style={fontStyle} className="text-black-50">
                                                Order Status: <span className="text-danger">{pendingOrder.orderStatus}</span>
                                            </span>
                                        </CCol>
                                    </CRow>
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
    getPendingOrders,
    logout,
    clearMessage
})(PendingOrder)
