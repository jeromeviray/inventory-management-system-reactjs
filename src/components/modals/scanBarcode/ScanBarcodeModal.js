import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
  CToaster,
  CToast,
  CToastBody,
  CToastClose,
} from "@coreui/react"

export class ScanBarcodeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      toast: "",
    }
  }
  componentDidMount() {
    this.setState({
      visible: this.props.visible,
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
      color = "primary"
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
    let { toast, visible } = this.state
    console.log(visible)
    return (
      <div>
        <CToaster push={toast} placement="top-end" />

        <CModal visible={visible} size="lg">
          <CModalHeader
            onDismiss={() =>
              this.setState({
                visible: false,
              })
            }
          >
            <CModalTitle>
              <div className="d-flex align-items-center"></div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody></CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() =>
                this.setState({
                  visible: false,
                })
              }
            >
              Close
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    )
  }
}

export default ScanBarcodeModal
