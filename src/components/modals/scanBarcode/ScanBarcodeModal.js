import React, { Component, Suspense } from "react"
import {
  CContainer,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
  CAlert,
} from "@coreui/react"
import { connect } from "react-redux"
//action
import { setScanModal } from "src/service/apiActions/modalAction/modalAction"
import { getDecodedBarcode } from "src/service/apiActions/scannerAction/scannerAction"
import { DotLoader } from "react-spinners"
import * as FaIcons from "react-icons/fa"

const BarcodeScannerComponent = React.lazy(() =>
  import("react-qr-barcode-scanner"),
)

export class ScanBarcodeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,

      decodeBarcode: "",
      stopStreaming: false,
    }
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageModalVisible(prevProps, prevState)
  }
  manageModalVisible = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      const { action, visible } = this.props.modalVisible
      if (action === "barcode") {
        this.setState({
          visible: visible,
          stopStreaming: false,
          decodeBarcode: "",
        })
      } else if (action === "close") {
        this.setState({
          visible: visible,
          stopStreaming: false,
          decodeBarcode: "",
        })
      }
    }
  }
  handleDecodeBarcode = (decoded) => {
    if (decoded) {
      this.setState({
        decodeBarcode: decoded,
        stopStreaming: true,
      })
      // this.props.getDecodedBarcode(decoded, "DECODEDBARCODE");
      // this.props.setScanModal(false, "close")
    }
  }

  render() {
    let { visible, decodeBarcode, stopStreaming } = this.state
    return (
      <div>
        <CModal
          visible={visible}
          alignment="center"
          onDismiss={() => this.props.setScanModal(false, "close")}
        >
          <CModalHeader
            onDismiss={() => this.props.setScanModal(false, "close")}
          >
            <CModalTitle>
              <div className="d-flex align-items-center">Scanner</div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CContainer className="text-center">
              <Suspense
                fallback={
                  <div className="d-flex justify-content-center align-items-center  position-fixed ">
                    <DotLoader color="#36D7B7" size={100} />
                  </div>
                }
              >
                <CAlert color="info" dismissible>
                  <strong>Scan Product Barcode to Search</strong>
                </CAlert>
                <BarcodeScannerComponent
                  className="w-25"
                  delay={500}
                  facingMode
                  stopStream={stopStreaming}
                  torch="true"
                  onUpdate={(err, result) => {
                    if (result) this.handleDecodeBarcode(result.text)
                  }}
                />
              </Suspense>

              <div>
                <h4>{decodeBarcode}</h4>
                {decodeBarcode && (
                  <CButton
                    onClick={() => {
                      this.props.getDecodedBarcode(
                        decodeBarcode,
                        "DECODEDBARCODE",
                      )
                      this.setState({
                        visible: false,
                      })
                    }}
                    color="info"
                    variant="outline"
                    className=""
                  >
                    <FaIcons.FaSearch />
                    <span className="ms-2">Search</span>
                  </CButton>
                )}
              </div>
            </CContainer>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() => this.props.setScanModal(false, "close")}
            >
              Close
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
  }
}
export default connect(mapStateToProps, {
  setScanModal,
  getDecodedBarcode,
})(ScanBarcodeModal)
