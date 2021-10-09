import React, { Component } from "react"
import { connect } from "react-redux"
import {
  CRow,
  CCol,
  CCard,
  CFormCheck,
  CCardBody,
  CCardTitle,
} from "@coreui/react"
//action
import { getPaymentMethods } from "src/service/apiActions/paymentAction/paymentAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
export class PaymentMethod extends Component {
  state = {
    message: "",
    action: "",
    paymentMethods: [],
  }
  componentDidMount() {
    this.props.getPaymentMethods()
  }

  componentDidUpdate(prevProps, prevState) {
    this.managePaymentMethodRespons(prevProps, prevState)
  }
  managePaymentMethodRespons = (prevProps, prevState) => {
    if (prevProps.paymentMethodResponse !== this.props.paymentMethodResponse) {
      let { action, status, data } = this.props.paymentMethodResponse
      if (action === "PAYMENT_METHODS" && status === 200) {
        this.setState({
          paymentMethods: data.paymentMethods,
        })
      }
    }
  }
  handleOnChange = (event) => {
    let value = event.target.value
    this.props.paymentMethodOnChange(value)
  }

  render() {
    let { message, paymentMethods } = this.state
    const cursorStyle = {
      cursor: "pointer",
    }
    return (
      <>
        <CRow>
          {paymentMethods.map((method, index) => {
            let checked = this.props.getValue == method.id

            return (
              <CCol key={index} md={12} className="mb-3">
                <CCard className={checked ? " shadow" : ""}>
                  <CCardBody className="p-5">
                    <div className="d-flex justify-content-start align-items-center">
                      <CFormCheck
                        type="radio"
                        name="check"
                        id={method.paymentMethod}
                        style={cursorStyle}
                        value={method.id}
                        defaultChecked={
                          this.props.getValue !== undefined ? checked : false
                        }
                        onChange={this.handleOnChange}
                      />
                      <CCardTitle className="ps-4">
                        {method.paymentMethod}
                      </CCardTitle>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            )
          })}
          {message && (
            <div className="form-group d-flex justify-content-center align-items-center">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </CRow>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    paymentMethodResponse: state.paymentMethodResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  getPaymentMethods,
  logout,
  clearMessage,
})(PaymentMethod)
