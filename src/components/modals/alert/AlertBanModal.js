import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
  CSpinner,
} from "@coreui/react"
import { connect } from "react-redux"
import { setAlertBanModal } from "src/service/apiActions/modalAction/modalAction"
import { banAccount } from "src/service/apiActions/accountAction/accountAction"
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
        })
        setInterval(function () {
          window.location.reload()
        }, 1000)
      })
      .catch(() => {
        this.setState({
          successFully: false,
          loading: false,
        })
      })
  }

  render() {
    let { visible, loading } = this.state
    return (
      <div>
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
  clearMessage,
  banAccount,
})(AlertBanModal)
