import React, { Component } from 'react'
import {
    CRow,
    CCol,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardFooter,
    CToast,
    CToastBody, CToastClose, CToaster,
    CSpinner
} from '@coreui/react';
import Checkout from './checkout/Checkout'
import CustomerAddress from './customerAddress/CustomerAddress';
import PaymentMethod from './payment/PaymentMethod';
import { connect } from 'react-redux';
//action
import { logout } from 'src/service/apiActions/userAction/userAction';
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction';
import { placeOrder } from 'src/service/apiActions/orderAction/orderAction';
import { history } from 'src/_helper/history';
import { Redirect } from 'react-router-dom';
import Roles from 'src/router/config';
import SuccessOrderPlace from './SuccessOrderPlace';

export class Cart extends Component {
    state = {
        step: 1,
        items: [],
        Tquantity: 0,
        Tamount: 0,
        isLoggedIn: false,
        permission: '',
        addressId: undefined,
        paymentMethodId: undefined,
        toast: '',
        successfull: false,
        loading: false
    }
    componentDidMount() {
        if (!this.props.userResponse.isLoggedIn) {
            history.push("/login");
        } else {
            this.redirectUser();
            this.handleLogout();
        }

    }
    handleLogout = () => {
        let { status, data } = this.props.messageResponse
        if (status > 400 && status <= 403) {
            this.props.logout();
            this.props.clearMessage();
            window.location.reload();
        }
    }
    redirectUser = () => {
        const isLoggedIn = this.props.userResponse.isLoggedIn;
        if (isLoggedIn) {
            let roleName = this.props.userResponse.credentials.roles.roleName;
            let permission = roleName ? roleName : this.props.userResponse.credentials.roles;

            this.setState({
                isLoggedIn: isLoggedIn,
                permission: permission
            })
        }
    }
    handleCartOnChange = (items, Tquantity, Tamount) => {
        this.setState({
            items: items,
            Tquantity: Tquantity,
            Tamount: Tamount
        })
    }
    handleAddressOnChange = (id) => {
        this.setState({
            addressId: id
        })
    }
    handlePaymentMethodOnChange = (id) => {
        this.setState({
            paymentMethodId: id
        })
    }
    handleOnNext = () => {
        let { step } = this.state;
        if (step === 3) return;
        this.setState({
            step: ++step
        })
    }
    handleOnPre = () => {
        let { step } = this.state;
        if (step === 1) return;
        this.setState({
            step: --step
        })
    }
    renderSteps = () => {
        let { step, addressId, paymentMethodId } = this.state;
        let stepComponent = <Checkout paymentDetailsOnChange={this.handleCartOnChange} />;
        switch (step) {
            case 1:
                stepComponent = <Checkout
                    paymentDetailsOnChange={this.handleCartOnChange}
                />
                return stepComponent;
            case 2:
                stepComponent = <CustomerAddress
                    checkValueOnChange={this.handleAddressOnChange}
                    getValue={addressId}
                />
                return stepComponent;

            case 3:
                stepComponent = <PaymentMethod
                    paymentMethodOnChange={this.handlePaymentMethodOnChange}
                    getValue={paymentMethodId}
                />
                return stepComponent;

            default:
                return stepComponent;

        }
    }
    renderHeader = () => {
        let { step } = this.state;
        let stepHeader = 'Shopping Cart';
        switch (step) {
            case 1:
                return stepHeader = "Shopping Cart";
            case 2:
                return stepHeader = "Customer Address";

            case 3:
                return stepHeader = "Payment Method";
            case 4:
                return stepHeader = "";


            default:
                return stepHeader;

        }
    }
    handleOnPlaceOrder = (event) => {
        let { addressId, paymentMethodId, items } = this.state;
        let orderDetails = {
            addressId: addressId,
            paymentMethodId: paymentMethodId,
            items: items
        }
        this.setState({
            loading: true
        })
        this.props.placeOrder(orderDetails)
            .then(() => {
                this.setState({
                    successfull: true,
                    toast: this.toastComponent(),
                    loading: false,
                    step: 4
                })
            })
            .catch(() => {
                let { status, data } = this.props.messageResponse
                if (status > 400 && status <= 403) {
                    this.props.logout();
                    this.props.clearMessage();
                    window.location.reload();
                } else {
                    this.setState({
                        toast: this.toastComponent(),
                        successfull: false,
                        loading: false
                    })
                }
            })

    }
    toastComponent() {
        let { data, status } = this.props.messageResponse;
        let color = '';
        if (status === 200) {
            color = "success"
        } else if (status > 400 && status <= 403) {
            color = "danger"
        } else if (status > 405 && status <= 500) {
            color = "warning"
        } else {
            color = "warning"
        }
        return (
            <CToast color={color} className="text-white align-items-center" delay={3000}>
                <div className="d-flex">
                    <CToastBody>{data.message}</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                </div>
            </CToast>
        )
    }
    render() {
        let {
            step,
            items,
            Tamount,
            Tquantity,
            isLoggedIn,
            permission,
            addressId,
            paymentMethodId,
            successfull,
            toast,
            loading
        } = this.state;
        const headerStyle = {
            fontWeight: "800"
        }
        if (isLoggedIn) {
            if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
                return <Redirect to="/app" />
            }
        } else if (!this.props.userResponse.isLoggedIn) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                <CToaster push={toast} placement="top-end" />

                <CRow>
                    <h3 className="mt-2 mb-4">{this.renderHeader()}</h3>
                </CRow>
                {successfull ? <SuccessOrderPlace /> :
                    <CRow>
                        <CCol sm="12" lg="8">
                            {this.renderSteps()}
                        </CCol>
                        <CCol sm="12" lg="4" className="mb-5">
                            <CCard>
                                <CCardHeader>
                                    <span className="" style={{ fontSize: "18px", ...headerStyle }}>Summary Payment</span>
                                </CCardHeader>
                                <CCardBody className="border-bottom">
                                    <div className="d-flex justify-content-between bg-light p-2">
                                        <div>
                                            <span style={{ ...headerStyle }}>Item</span>
                                        </div>
                                        <div>
                                            <span style={{ ...headerStyle }}>Amount</span>
                                        </div>

                                    </div>

                                    {items.length > 0 ? items.map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className="p-2 d-flex justify-content-between align-items-center">
                                                    <span className="text-truncate d-inline-block"
                                                        style={{ maxWidth: "150px" }}
                                                    >
                                                        {item.product.productName}
                                                    </span>
                                                    <span>{item.amount.toFixed(2)}</span>
                                                </div>
                                            </>

                                        )
                                    }) :
                                        <CCol style={{ fontStyle: "italic", textAlign: "center", }} className="p-2">
                                            No Item
                                        </CCol>
                                    }
                                </CCardBody>
                                <div className="p-3 ">
                                    <div className="d-flex justify-content-between align-items-center pb-2">
                                        <span className="text-muted font-style me-2">
                                            Total Quantity
                                        </span>
                                        <span style={{ fontWeight: "500" }}>
                                            {Tquantity}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center pb-2">
                                        <span className="text-muted font-style me-2">
                                            Total Amount
                                        </span>
                                        <span style={{ fontWeight: "500" }}>
                                            &#8369;{Tamount.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <CCardFooter>
                                    <div className="d-grid gap-2 mx-auto">
                                        {step > 1 ?
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <CButton
                                                    variant="ghost"
                                                    color="dark"
                                                    onClick={this.handleOnPre}
                                                    className="w-100">
                                                    Back
                                                </CButton>
                                                {step === 3 ?
                                                    <CButton
                                                        className="w-100"
                                                        color="info"
                                                        disabled={paymentMethodId === undefined ? true : false}
                                                        onClick={this.handleOnPlaceOrder}
                                                    >
                                                        {loading && <CSpinner size="sm" className="ms-1" />}
                                                        Place Order
                                                    </CButton> :
                                                    <CButton
                                                        className="w-100"
                                                        color="info"
                                                        onClick={this.handleOnNext}
                                                        disabled={addressId === undefined ? true : false}
                                                    >
                                                        Next
                                                    </CButton>}
                                            </div>

                                            :
                                            <CButton
                                                type="submit"
                                                color="info"
                                                disabled={items.length <= 0 ? true : false}
                                                className="d-flex justify-content-center align-items-center"
                                                onClick={this.handleOnNext}
                                            >
                                                {/* <IoIcons.IoBagCheckOutline size="23" /> */}
                                                <span className="ms-2">Checkout</span>
                                            </CButton>}
                                    </div>
                                </CCardFooter>
                            </CCard>
                        </CCol>
                    </CRow>
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userResponse: state.userResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    logout, clearMessage, placeOrder
})(Cart)
