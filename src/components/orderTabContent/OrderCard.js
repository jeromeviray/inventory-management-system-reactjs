import React, { Component } from 'react'
import {
    CCard,
    CCardBody,
    CRow, CCol, CImage
} from '@coreui/react'
export class OrderCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderItem: this.props.item
        }
    }
    render() {
        let { orderItem } = this.state;
        const fontStyle = {
            fontSize: "14px",
            fontWeight: "400"
        }
        return (
            <CRow className="mb-3">
                <CCard>
                    <CCardBody>
                        <div className="d-flex align-items-start">
                            <CImage rounded
                                src={orderItem.product.fileImages.length > 0 && "/images/products/" + orderItem.product.fileImages[0].fileName}
                                width={100} height={100}
                            />
                            <div className="ms-2  w-100">
                                <CRow className="d-flex justify-content-between">
                                    <CCol className="ps-4 text-dark" >
                                        {orderItem.product.productName}
                                    </CCol>
                                    <CCol
                                        className="text-dark d-flex flex-column align-items-center"
                                    >
                                        <span
                                            style={fontStyle}
                                            className="text-black-50"
                                        >
                                            Price
                                        </span>
                                        <span className="pt-3">
                                            &#8369;{orderItem.product.productPrice.toFixed(2)}

                                        </span>
                                    </CCol>
                                    <CCol
                                        className="text-dark d-flex flex-column align-items-center"
                                    >
                                        <span
                                            style={fontStyle}
                                            className="text-black-50"
                                        >
                                            Quantity
                                        </span>
                                        <span className="pt-3">
                                            {orderItem.quantity}

                                        </span>
                                    </CCol>
                                    <CCol
                                        className="text-dark d-flex flex-column align-items-center"
                                    >
                                        <span
                                            style={fontStyle}
                                            className="text-black-50"
                                        >
                                            Amount
                                        </span>
                                        <span className="pt-3">
                                            &#8369;{orderItem.amount.toFixed(2)}

                                        </span>

                                    </CCol>
                                </CRow>
                            </div>
                        </div>

                    </CCardBody>
                </CCard>
            </CRow>
        )
    }
}

export default OrderCard
