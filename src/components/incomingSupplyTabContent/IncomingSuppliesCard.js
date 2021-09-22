import React, { Component } from 'react'
import {
    CCard,
    CCardBody, CCardHeader, CCardFooter,
    CRow, CCol,
    CContainer, CImage,
    CButton
} from '@coreui/react'
import { Link } from 'react-router-dom';

export class IncomingSuppliesCard extends Component {

    render() {
        let supplies = this.props.supplies;
        const fontStyle = {
            fontSize: "14px",
            fontWeight: "400"
        }
        return (

            <>
                {supplies.length === 0 ?
                    <CCard>
                        <CCardBody>
                            <div className="text-center">No Pending Supplies</div>
                        </CCardBody>
                    </CCard> :
                    supplies.map((supply, index) => {
                        let { incomingSupplyItems, deliveredAt, purchasedAt, id, incomingSupplyStatus, supplier, updatedAt } = supply;
                        return (

                            <CCard className="mb-3" key={index}>

                                <CCardHeader>
                                    <div className="d-flex justify-content-between ">
                                        <div className="p-2">
                                            <span className="text-black-50" style={{ fontSize: "14px", fontWeight: "400" }}>
                                                Supplier Name:
                                            </span>
                                            <span style={{ fontSize: "14px", fontWeight: "600" }} className="text-bold ms-2">{supplier.name}</span>

                                        </div>
                                        <div className="p-2">
                                            <span className="text-black-50" style={{ fontSize: "14px", fontWeight: "400" }}>
                                                Product Items:
                                            </span>
                                            <span style={{ fontSize: "14px", fontWeight: "600" }} className="text-bold ms-2">{incomingSupplyItems.length}</span>

                                        </div>
                                    </div>
                                </CCardHeader>
                                <CCardBody>
                                    <CContainer>
                                        {incomingSupplyItems && incomingSupplyItems.slice(0, 5).map((item, index) => {
                                            return (
                                                <CRow className="mb-3" key={index}>
                                                    <CCard>
                                                        <CCardBody>
                                                            <div className="d-flex align-items-start">
                                                                {/* <CImage rounded
                                                                    src={"/images/products/" + orderItem.product.fileImages[0].fileName}
                                                                    width={100} height={100}
                                                                /> */}
                                                                <div className="ms-2  w-100">
                                                                    <CRow className="d-flex justify-content-between">
                                                                        <CCol
                                                                            className="text-dark d-flex flex-column align-items-center"
                                                                        >
                                                                            <span
                                                                                style={fontStyle}
                                                                                className="text-black-50"
                                                                            >
                                                                                Product Name
                                                                            </span>
                                                                            <span className="pt-3">
                                                                                {item.product.name}
                                                                            </span>
                                                                        </CCol>
                                                                        <CCol
                                                                            className="text-dark d-flex flex-column align-items-center"
                                                                        >
                                                                            <span
                                                                                style={fontStyle}
                                                                                className="text-black-50"
                                                                            >
                                                                                Quantity Receieved
                                                                            </span>
                                                                            <span className="pt-3">
                                                                                {item.numberReceived}
                                                                            </span>
                                                                        </CCol>
                                                                    </CRow>
                                                                </div>
                                                            </div>

                                                        </CCardBody>
                                                    </CCard>
                                                </CRow>
                                            )
                                        })}
                                    </CContainer>

                                </CCardBody>
                                <CCardFooter className="p-4">
                                    <div className="d-flex justify-content-between align-items-end">


                                        <div className="d-flex flex-column">
                                            <div style={fontStyle} className="mt-2">
                                                <span className="text-black-50 me-2">
                                                    Purchased Date:
                                                </span>
                                                <span style={{ fontWeight: "500" }}>{purchasedAt}</span>
                                            </div>

                                            <div style={fontStyle} className="mt-2">
                                                <span style={fontStyle} className="text-black-50 me-2">
                                                    Last Update:
                                                </span>
                                                <span style={{ fontWeight: "500" }}>{updatedAt}</span>

                                            </div>
                                            {deliveredAt && <div style={fontStyle} className="mt-2">
                                                <span style={fontStyle} className="text-black-50 me-2">
                                                    Delivered Date:
                                                </span>
                                                <span className="text-danger" style={{ fontWeight: "500" }}>{deliveredAt}</span>

                                            </div>}
                                            <div style={fontStyle} className="mt-2">
                                                <span style={fontStyle} className="text-black-50 me-2">
                                                    Supply Status:
                                                </span>
                                                <span className="text-danger" style={{ fontWeight: "500" }}>{incomingSupplyStatus}</span>

                                            </div>
                                        </div>
                                        <div className={incomingSupplyItems.length > 2 ? "d-flex align-items-bottom" : "d-none  "}>
                                            <Link
                                                to={{
                                                    pathname: "users/supply/" + id,
                                                    state: id
                                                }}
                                                className="m-2"
                                            >
                                                View More
                                            </Link>

                                            {/* {permission === Roles.SUPER_ADMIN ||
                                                permission === Roles.ADMIN ?
                                                <CButton>Confirm Order</CButton> :
                                                <></>
                                            } */}
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

export default IncomingSuppliesCard
