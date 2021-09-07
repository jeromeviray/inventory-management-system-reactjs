import React, { Component } from 'react'
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter, CRow, CCol,
    CButton,
    CSpinner,
    CToast,
    CToastBody, CToastClose, CToaster,
} from '@coreui/react';
import { connect } from 'react-redux';
//action
import { setProductDetailsModal } from 'src/service/apiActions/modalAction/modalAction';
import { setLoginModal } from 'src/service/apiActions/modalAction/modalAction';
import { addToCart } from 'src/service/apiActions/cartAction/cartAction';
import { logout } from 'src/service/apiActions/userAction/userAction';
//icons
// import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import * as FaIcons from 'react-icons/fa'
import ProductDetails from '../../products/ProductDetails';
import LoginModal from '../shortcut/LoginModal';

export class ProductDetialsModal extends Component {
    state = {
        visible: false,
        product: [],
        loading: false,
        message: '',
        toast: ''
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageModalVisibleResponse(prevProps, prevState);
    }
    manageModalVisibleResponse = (prevProps, prevState) => {
        if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
            let { action, visible, product } = this.props.modalVisibleResponse;
            if (action === "PRODUCTDETAILS") {
                this.setState({
                    visible: visible,
                    product: product
                })
            } else if (action === 'close') {
                this.setState({
                    visible: visible,
                    product: product
                })
            }
        }
    }
    handleAddToCart = (event) => {
        let { product } = this.state;
        let { isLoggedIn, credentials } = this.props.userResponse;

        this.setState({
            loading: true
        })
        if (!isLoggedIn) {
            this.setState({
                loading: false
            })
            this.props.setLoginModal(true, "LOGIN");
        } else {
            let token = credentials.type + credentials.accessToken
            this.props.addToCart(product.id, token)
                .then(() => {
                    console.log("success added")
                    this.setState({
                        toast: this.toastComponent(),
                        loading: false
                    });
                })
                .catch(() => {
                    console.log(this.props.messageResponse)
                    let { status, action } = this.props.messageResponse;
                    if (status > 400 && status <= 403) {
                        this.setState({
                            toast: this.toastComponent(),
                            loading: false
                        })
                        setInterval(() => {
                            this.props.logout();
                            window.location.reload();
                        }, 1000)
                    }
                    this.setState({
                        toast: this.toastComponent(),
                        loading: false
                    })

                })
        }
    }
    toastComponent() {
        let { data, status } = this.props.messageResponse;
        console.log(this.props.messageResponse)
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
                    <CToastBody>{data && data.message}</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                </div>
            </CToast>
        )
    }
    render() {
        let { visible, product, loading, toast } = this.state;
        console.log(loading);
        return (
            <>
                <LoginModal />
                <CToaster push={toast} placement="top-end" />
                <CModal
                    backdrop={false}
                    scrollable={true}
                    size="xl"
                    visible={visible}
                    onDismiss={() => this.props.setProductDetailsModal(false, 'close', '')}
                >
                    <CModalHeader onDismiss={() => this.props.setProductDetailsModal(false, 'close', '')}>
                        <CModalTitle>Product Details</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <ProductDetails product={product} />

                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            variant="ghost"
                            color="dark"
                            className="d-flex justify-content-center align-items-center"
                        >
                            <span className='text-black'>View Detailed</span>
                        </CButton>
                        <CButton
                            type="button"
                            color="info"
                            className="d-flex justify-content-center align-items-center"
                            onClick={this.handleAddToCart}
                            disabled={loading}

                        >
                            {loading ? <CSpinner size="sm" /> :
                                <span className="d-flex align-items-center login-icon me-2">
                                    <FaIcons.FaCartPlus />

                                </span>
                            }
                            <span className="ms-2">Add To Cart</span>
                        </CButton>
                        {/* FaCartPlus, FaShoppingCart */}
                    </CModalFooter>
                </CModal>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        modalVisibleResponse: state.modalVisibleResponse,
        userResponse: state.userResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    setProductDetailsModal,
    setLoginModal,
    logout,
    addToCart
})(ProductDetialsModal)
