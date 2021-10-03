import React, { Component } from "react"
import { connect } from "react-redux"
//action
import { getCategoriesList } from "src/service/apiActions/categoryAction/categoryAction"
export class CategoryList extends Component {
  state = {
    message: "",
    categoriesList: [],
  }
  componentDidMount() {
    this.getCategoriesList()
  }

  getCategoriesList = () => {
    this.props.getCategoriesList().catch(() => {
      let failMessage = this.props.messageResponse
      this.setState({
        loading: false,
        message: failMessage.data.message,
      })
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageCategoriesListResponse(prevProps, prevState)
  }
  manageCategoriesListResponse = (prevProps, prevState) => {
    if (prevProps.categoryResponse !== this.props.categoryResponse) {
      let { status, action, data } = this.props.categoryResponse
      if (status === 200 && action === "GET_CATEGORIES_LIST") {
        this.setState({
          categoriesList: data.categoriesList,
        })
      }
    }
  }
  render() {
    let { message, categoriesList } = this.state
    console.log(categoriesList)
    return (
      <>
        {message && (
          <div className="form-group d-flex justify-content-center align-items-center">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <div className="overflow-hidden category-wrapper">
          <div className="category-header">
            <span>Categories</span>
          </div>
          <div className="list-container">
            <ul>
              {categoriesList > 0 ? (
                categoriesList.map((category, index) => {
                  return (
                    <li className="drop-list-item  text-break" key={index}>
                      <a href="product" className="list-item-link">
                        {category.categoryName}
                      </a>
                    </li>
                  )
                })
              ) : (
                <li className="drop-list-item">
                  <span
                    className="list-item-link "
                    style={{ fontStyle: "italic" }}
                  >
                    No Category List Available
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    categoryResponse: state.categoryResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  getCategoriesList,
})(CategoryList)
