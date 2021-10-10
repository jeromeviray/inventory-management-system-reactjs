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
} from "@coreui/react"
import { connect } from "react-redux"
import { addCategoryModal } from "src/service/apiActions/modalAction/modalAction"
import {
  saveCategory,
  updateCategory,
} from "src/service/apiActions/categoryAction/categoryAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
export class CategoryModal extends Component {
  state = {
    visible: false,
    action: "",
    icon: "",
    loading: false,
    category: this.categoryState,

  }
  categoryState = {
    categoryName: "",
    categoryId: "",
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageCategoryModal(prevProps, prevState)
  }
  manageCategoryModal = (prevProps, prevState) => {
    console.log()
    if (prevProps.modalVisible !== this.props.modalVisible) {
      let { visible, action, category, icon } = this.props.modalVisible
      console.log(category)
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
          categoryId: category.id,
          categoryName: category.categoryName,
        })
      } else {
        this.setState({
          visible: visible,
          categoryId: "",
          categoryName: "",
        })
      }
    }
  }
  handleOnChange = (event) => {
    this.setState({
      categoryName: event.target.value,
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    let { action, categoryName, categoryId } = this.state
    this.setState({
      loading: true,
    })
    if (action === "Add") {
      this.handleOnSave(categoryName)
    } else {
      this.handleOnUpdate(categoryId, categoryName)
    }
  }
  handleOnSave = (categoryName) => {
    this.props
      .saveCategory(categoryName)
      .then(() => {
        let { status, data } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            categoryName: "",
            loading: false,
          })
        }
        setInterval(() => {
          this.props.clearMessage()
        }, 1000)
      })
      .catch(() => {
        this.setState({
          loading: false,
        })
      })
  }
  handleOnUpdate = (id, name) => {
    this.props
      .updateCategory(id, name)
      .then(() => {
        let { status, data } = this.props.messageResponse
        if (status === 200) {
          this.setState({
            categoryName: "",
            categoryId: "",
            loading: false,
          })
        }
        setInterval(() => {
          this.props.clearMessage()
        }, 1000)
      })
      .catch(() => {
        let { status, data } = this.props.messageResponse
        this.setState({
          loading: false,
        })
      })
  }

  render() {
    let { visible, categoryName, icon, action, loading } = this.state
    return (
      <div>

        <CModal visible={visible}>
          <CModalHeader
            onDismiss={() =>
              this.props.addCategoryModal(false, "close", "", "")
            }
          >
            <CModalTitle>
              <div className="d-flex align-items-center">
                {icon}
                {action + " Category"}
              </div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm onSubmit={this.handleOnSubmit} id="category-form">
              <div className="mb-3">
                <CFormFloating className="mb-3">
                  <CFormControl
                    name="categoryName"
                    value={categoryName}
                    onChange={this.handleOnChange}
                    type="text"
                    id="floatingCategoryName"
                    placeholder="Enter Category Name"
                  />
                  <CFormLabel htmlFor="floatingCategoryName">
                    Category Name
                  </CFormLabel>
                </CFormFloating>
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="dark"
              variant="ghost"
              onClick={() =>
                this.props.addCategoryModal(false, "close", "", "")
              }
            >
              Close
            </CButton>
            <CButton
              type="submit"
              form="category-form"
              color="primary"
              disabled={loading}
            >
              {loading && <CSpinner size="sm" className="ms-1" />}
              Save {action === "Edit" ? "Changes" : "Brand"}
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
  }
}

export default connect(mapStateToProps, {
  addCategoryModal,
  saveCategory,
  clearMessage,
  updateCategory,
})(CategoryModal)
