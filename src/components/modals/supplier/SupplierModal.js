import React, { Component } from "react"
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
  CSpinner,
  CForm,
  CFormFloating,
  CFormControl,
  CFormLabel,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from "@coreui/react"
import { connect } from "react-redux"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import {
  createSupplier,
  updateSupplier,
} from "src/service/apiActions/supplierAction/supplierAction"
import { setSupplierModal } from "src/service/apiActions/modalAction/modalAction"
// import Supplier from "src/views/private/supplier/Supplier"
export class SupplierModal extends Component {
  state = {
    toast: "",
    action: "",
    loading: false,
    visible: false,
    icon: "",
    supplier: this.supplierState,
  }
  supplierState = {
    name: "",
    supplierId: "",
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageSupplierModal(prevProps, prevState)
  }

  manageSupplierModal = (prevProps, prevState) => {
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, icon, supplier } = this.props.modalVisible
      if (action === "Add") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
      } else if (action === "Edit") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
          name: supplier.name,
          supplierId: supplier.id,
        })
      } else {
        this.setState({
          visible: visible,
          action: "",
          icon: "",
          brandName: "",
          brandId: "",
        })
      }
    }
  }
  handleOnChange = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    this.setState({
      loading: true,
    })

    let { name, action, supplierId } = this.state

    if (name && name.length > 0) {
      if (action === "Add") {
        this.handleCreateSupplier(name)
      } else if (action === "Edit") {
        this.handleUpdateSupplier(supplierId, name)
      }
    } else {
      this.setState({
        loading: false,
      })
    }
  }
  handleCreateSupplier(name) {
    this.props
      .createSupplier(name)
      .then(() => {
        let { status, data } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            name: "",
            loading: false,
          })
        }
        setInterval(() => {
          this.props.clearMessage()
          window.location.reload()
        }, 1000)
      })
      .catch(() => {
        let { status, data } = this.props.messageResponse
        this.setState({
          loading: false,
          successFully: false,
        })
      })
  }
  handleUpdateSupplier = (id, name) => {
    this.props
      .updateSupplier(id, name)
      .then(() => {
        let { status } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            name: "",
            supplierId: "",
            loading: false,
          })
        }
        setInterval(() => {
          this.props.clearMessage()
          window.location.reload()
        }, 1000)
      })
      .catch(() => {
        let { status, data } = this.props.messageResponse
        this.setState({
          loading: false,
          successFully: false,
        })
      })
  }

  render() {
    let { action, toast, loading, icon, visible, name } = this.state
    return (
      <>
        <CToaster push={toast} placement="top-end" />
        <CModal visible={visible}>
          <CModalHeader
            onDismiss={() => {
              this.props.setSupplierModal(false, "close", "", "")
              this.props.clearMessage()
            }}
          >
            <CModalTitle>
              <div className="d-flex align-items-center">
                {icon}
                {action + " Supplier"}
              </div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm id="supplier-form" onSubmit={this.handleOnSubmit}>
              <div className="mb-3">
                <CFormFloating className="mb-3">
                  <CFormControl
                    name="name"
                    value={name}
                    onChange={this.handleOnChange}
                    type="text"
                    id="floatingSupplierInput"
                    placeholder="Enter Supplier Name"
                  />
                  <CFormLabel htmlFor="floatingSupplierInput">
                    Enter Supplier Name
                  </CFormLabel>
                </CFormFloating>
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() => {
                this.props.setSupplierModal(false, "close", "", "")
                this.props.clearMessage()
              }}
            >
              Close
            </CButton>
            <CButton
              type="submit"
              color="primary"
              disabled={loading}
              form="supplier-form"
            >
              {loading && <CSpinner size="sm" className="ms-1" />}
              {action === "Edit" ? "Update" : "Create"} Supplier
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.modalVisibleResponse,
    supplierResponse: state.supplierResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  clearMessage,
  createSupplier,
  updateSupplier,
  setSupplierModal,
})(SupplierModal)
