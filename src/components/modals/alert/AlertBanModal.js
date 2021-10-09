import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
  CSpinner,
} from "@coreui/react"
import { connect } from "react-redux"
import { setAlertBanModal } from "src/service/apiActions/modalAction/modalAction"
import { banAccount } from "src/service/apiActions/accountAction/accountAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
export class AlertBanModal extends Component {
  state = {
    visible: false,
    id: "",
    action: "",
    module: "",
    loading: false,
    success: false,
    message: "",
    status: "",
    toast: "",
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageModalAlert(prevProps, prevState)
  }
  manageModalAlert = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { alert, id, module, action } = this.props.modalVisible
      console.log(this.props.modalVisible)
      if (action === "BANACCOUNT" && module === "CUSTOMER") {
        this.setState({
          visible: alert,
          id: id,
          module: module,
          action: action,
        })
      }
    }
  }
  handleOnBanAccount = () => {
    const { id, action, module } = this.state
    console.log(action + " " + module)
    if (action === "BANACCOUNT" && module === "CUSTOMER") {
      this.handleBanCustomerAccount(id)
    } else {
      console.log("ERRPR")
    }
  }
  handleBanCustomerAccount = (id) => {
    this.props
      .banAccount(id)
      .then(() => {
        let { data } = this.props.messageResponse
        this.setState({
          loading: false,
          toast: this.toastComponent(),
        })
        setInterval(function () {
          window.location.reload()
        }, 1000)
      })
      .catch(() => {
        let { status, data } = this.props.messageResponse
        if (status > 400 && status <= 403) {
          this.setState({
            message: data && data.message,
            successFully: false,
            loading: false,
            toast: this.toastComponent(),
          })
          setInterval(() => {
            this.props.logout()
            this.props.clearMessage()
          }, 1000)
        } else {
          this.setState({
            message: data && data.message,
            successFully: false,
            loading: false,
            toast: this.toastComponent(),
          })
        }
      })
  }
  toastComponent() {
    let { data, status } = this.props.messageResponse
    let color = ""
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
      <CToast
        color={color}
        className="text-white align-items-center"
        delay={3000}
      >
        <div className="d-flex">
          <CToastBody>{data.message}</CToastBody>
          <CToastClose className="me-2 m-auto" white />
        </div>
      </CToast>
    )
  }
  render() {
    let { visible, toast, loading } = this.state
    return (
      <div>
        <CToaster push={toast} placement="top-end" />

        <CModal
          visible={visible}
          onDismiss={() => this.props.setAlertBanModal(false)}
        >
          <CModalHeader onDismiss={() => this.props.setAlertBanModal(false)}>
            <CModalTitle>Confirmation</CModalTitle>
          </CModalHeader>
          <CModalBody className="text-center">
            <h6>Are you sure you want to Ban this Account?</h6>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() => {
                this.props.setAlertBanModal(false, "", "", "")
              }}
            >
              No
            </CButton>
            <CButton
              type="submit"
              color="primary"
              disabled={loading}
              onClick={() => this.handleOnBanAccount()}
            >
              {loading && <CSpinner size="sm" className="ms-1" />}
              Yes
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
    userResponse: state.userResponse,
  }
}
export default connect(mapStateToProps, {
  setAlertBanModal,
  logout,
  clearMessage,
  banAccount,
})(AlertBanModal)
