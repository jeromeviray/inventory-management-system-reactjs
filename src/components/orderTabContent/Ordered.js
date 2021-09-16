import React, { Component } from 'react'
import { CButton } from '@coreui/react'
import ReactToPrint from 'react-to-print'
import OrderDetails from './OrderDetails'
//icon
import * as IoIcons from "react-icons/io5"
// import { history } from 'src/_helper/history'
//action
import { getOrderByOrderId } from 'src/service/apiActions/orderAction/orderAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { connect } from 'react-redux'


export class Ordered extends Component {
    state = {
        orderId: ''
    }
    componentDidMount() {
        let orderId = this.props.location.state;

        this.props.getOrderByOrderId(orderId).catch(() => {
            let { status, data } = this.props.messageResponse;
            if (status > 400 && status <= 403) {
                this.props.clearMessage();
                setInterval(() => {
                    this.props.logout();
                }, 1000)
            }
            this.setState({
                message: data.message,
                hasError: true
            })
        })
    }
    render() {
        return (
            <>
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
                <div ref={(el) => (this.componentRef = el)}>
                    <OrderDetails />

                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    logout,
    clearMessage,
    getOrderByOrderId
})(Ordered)
