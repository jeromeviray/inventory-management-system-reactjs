import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    CCard,
    CCardBody, CCardHeader, CCardFooter,
    CRow, CCol,
    CContainer,
} from '@coreui/react'
//action
import { getCompletedOrder } from 'src/service/apiActions/orderAction/orderAction'
import OrderCard from '../OrderCard'
import ReactPaginate from 'react-paginate'

export class CompletedOrder extends Component {
    state = {
        message: '',
        status: '',
        action: '',
        completedOrder: [],
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
        this.props.getCompletedOrder(token).catch(() => {
            let failMessage = this.props.messageResponse

            this.setState({
                message: failMessage.data.message
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageCompletedOrder(prevProps, prevState);
    }
    manageCompletedOrder = (prevProps, prevState) => {
        if (prevProps.orderResponse !== this.props.orderResponse) {
            let { status, action, data } = this.props.orderResponse;

            if (status === 200 && action === "GETCOMPLETEDORDER") {
                this.setState({
                    confirmOrder: data.confirmedOrder
                })
            }
        }
    }
    render() {
        let { completedOrder, message } = this.state;
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
            {completedOrder.length === 0 ? (
              <CCard>
                <CCardBody>
                  <div className="text-center">No Order Completed</div>
                </CCardBody>
              </CCard>
            ) : (
              completedOrder.map((order, index) => {
                const {
                  firstName,
                  lastName,
                  street,
                  barangay,
                  province,
                  region,
                  city,
                  postalCode,
                } = order.customerAddress

                return (
                  <CCard className="mb-3" key={index}>
                    <CCardHeader>
                      <CRow className="p-2">
                        <span
                          style={{ fontSize: "14px", fontWeight: "400" }}
                          className="text-black-50"
                        >
                          Order ID: {order.orderId}
                        </span>
                      </CRow>
                    </CCardHeader>
                    <CCardBody>
                      <CContainer>
                        {order.orderItems.map((item, index) => {
                          return <OrderCard item={item} key={index} />
                        })}
                      </CContainer>
                    </CCardBody>
                    <CCardFooter className="p-4">
                      <CRow>
                        <CCol sm="8" md="8" lg="8">
                          <span style={fontStyle}>
                            <h6 className="text-black-50 mb-3">
                              Customer Address
                            </h6>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "black",
                              }}
                            >
                              {" "}
                              {firstName + " " + lastName}
                            </span>
                            <br />
                            <span className="mb-2">
                              {"#" +
                                street +
                                "," +
                                barangay +
                                "," +
                                province +
                                "," +
                                region +
                                "," +
                                city +
                                "," +
                                postalCode}
                            </span>
                          </span>
                        </CCol>
                        <CCol sm="4" md="4" lg="4">
                          <span style={fontStyle} className="text-black-50">
                            Order Status:{" "}
                            <span className="text-danger">
                              {order.orderStatus}
                            </span>
                          </span>
                        </CCol>
                      </CRow>
                    </CCardFooter>
                  </CCard>
                )
              })
            )}
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              // pageCount={inventories.totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              // onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </>
        )
    }
}
const mapStateToPros = (state) => {
    return {
        orderResponse: state.orderResponse,
        userResponse: state.userResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToPros, {
    getCompletedOrder,
})(CompletedOrder)
