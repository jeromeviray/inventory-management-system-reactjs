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
//action
import { deleteBranch } from "src/service/apiActions/branchAction/branchAction"
import { setAlertModal } from "src/service/apiActions/modalAction/modalAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { deleteBrand } from "src/service/apiActions/brandAction/brandAction"
import { deleteAccount } from "src/service/apiActions/accountAction/accountAction"
import { deleteSupplier } from "src/service/apiActions/supplierAction/supplierAction"
import { deleteCategory } from "src/service/apiActions/categoryAction/categoryAction"
import { deleteProduct } from "src/service/apiActions/productAction/productAction"
import { deletePromo } from "src/service/apiActions/promoAction/promoAction"
import { withRouter } from "react-router"
import { logout } from "src/service/apiActions/userAction/userAction"
export class AlertModal extends Component {
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
      switch (action) {
        case "DELETEBRANCH":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
          break
        case "DELETEBRAND":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
          break
        case "DELETEEMPLOYEE":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
        case "DELETECUSTOMER":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
        case "DELETESUPPLIER":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
        case "DELETECATEGORY":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
        case "DELETEPRODUCT":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
        case "DELETEPROMO":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
        case "DELETEME":
          this.setState({
            visible: alert,
            id: id,
            module: module,
            action: action,
          })
        default:
          this.setState({
            visible: alert,
          })
      }
    }
  }

  handleOnDelete = () => {
    let { id, action, module } = this.state
    let { accessToken, type } = this.props.userResponse.credentials
    let token = type + accessToken
    this.setState({
      loading: true,
    })
    if (action === "DELETEBRANCH" && module === "BRANCH") {
      this.branchDelete(id, token)
      console.log("BRANCH")
    } else if (action === "DELETEBRAND" && module === "BRAND") {
      this.handleDeleteBrand(id, token)
    } else if (action === "DELETEEMPLOYEE" && module === "EMPLOYEE") {
      this.handleAccountDelete(id)
    } else if (action === "DELETECUSTOMER" && module === "CUSTOMER") {
      this.handleAccountDelete(id)
    } else if (action === "DELETESUPPLIER" && module === "SUPPLIER") {
      this.handleSupplierDelete(id)
    } else if (action === "DELETECATEGORY" && module === "CATEGORY") {
      this.handleDeleteCategory(id)
    } else if (action === "DELETEPRODUCT" && module === "PRODUCT") {
      this.handleDeleteProduct(id)
    } else if (action === "DELETEPROMO" && module === "PROMO") {
      this.handleDeletePromo(id)
    } else if (action === "DELETEME" && module === "ACCOUNT") {
      this.handleDeleteMe(id)
    } else {
      console.log("ERRPR")
    }
  }
  branchDelete = (id, token) => {
    this.props
      .deleteBranch(id, token)
      .then(() => {
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
  handleDeleteBrand = (id, token) => {
    this.props
      .deleteBrand(id, token)
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
  handleAccountDelete = (id) => {
    this.props
      .deleteAccount(id)
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
  handleSupplierDelete = (id) => {
    this.props
      .deleteSupplier(id)
      .then(() => {
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
  handleDeleteCategory = (id) => {
    this.props
      .deleteCategory(id)
      .then(() => {
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
  handleDeleteProduct = (id) => {
    this.props
      .deleteProduct(id)
      .then(() => {
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
  handleDeletePromo = (id) => {
    this.props
      .deletePromo(id)
      .then(() => {
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
  handleDeleteMe = (id) => {
    this.props
      .deleteAccount(id)
      .then(() => {
        let { data } = this.props.messageResponse
        this.setState({
          loading: false,
        })
        setInterval(() => {
          this.props.logout()
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
          onDismiss={() => this.props.setAlertModal(false)}
        >
          <CModalHeader onDismiss={() => this.props.setAlertModal(false)}>
            <CModalTitle>Confirmation</CModalTitle>
          </CModalHeader>
          <CModalBody className="text-center">
            <h6>Are you sure you want to delete?</h6>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() => {
                this.props.setAlertModal(false, "", "", "")
              }}
            >
              No
            </CButton>
            <CButton
              type="submit"
              color="primary"
              disabled={loading}
              onClick={() => this.handleOnDelete()}
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
  setAlertModal,
  deleteBranch,
  clearMessage,
  deleteBrand,
  deleteAccount,
  deleteSupplier,
  deleteCategory,
  deleteProduct,
  deletePromo,
  logout
})(withRouter(AlertModal))
