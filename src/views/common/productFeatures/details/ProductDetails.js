import React, { Component } from "react"
import {
  CButton,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,

} from "@coreui/react"
import * as Io5Icons from "react-icons/io5"
import * as IoIcons from "react-icons/io"

//helper
import { history } from "src/_helper/history"
import { connect } from "react-redux"
//action
import { getProductDetails } from "src/service/apiActions/productAction/productAction"
import ProductSummaryDetails from "src/components/products/ProductSummaryDetails"
import ProductDescriptions from "src/components/products/ProductDescriptions"
import ProductComments from "src/components/products/ProductComments"
import { saveComment, getComments } from "src/service/apiActions/commentAction/commentAction"
import { xor } from "lodash"
export class ProductDetails extends Component {
  state = {
    message: "",
    product: [],
    comments: {},
    formattedComments: []
  }
  componentDidMount() {
    const id = this.props.location.state
    this.props.getProductDetails(id)
    this.getComments(id);
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageProductResponse(prevProps, prevState)
  }

  getComments(productId, page = 0, limit = 10) {
    this.props.getComments(productId, page, limit).then(() => {
      const comments = this.props.commentResponse.data;
      let formattedComments = [];
      comments.data.forEach((comment) => {
        formattedComments.push({
          authorUrl: '#',
          avatarUrl: '/avatars/8.jpg',
          createdAt: new Date(comment.comment.createdAt),
          fullName: comment.name,
          text: comment.comment.message,
        })
      })
      console.log(formattedComments)
      this.setState({ comments: comments, formattedComments: formattedComments })
    })
  }

  manageProductResponse = (prevProps, prevState) => {
    if (prevProps.productResponse !== this.props.productResponse) {
      let { status, action, data } = this.props.productResponse
      if (action === "DETAILS" && status === 200) {
        this.setState({
          product: data,
        })
      }
    }
  }

  render() {
    const { product, message, formattedComments, comments } = this.state
    const getProduct = product && product.product;
    console.log(getProduct)
    const arrowStyles = {
      position: "absolute",
      zIndex: "2",
      top: "calc(4% - 16px)",
      // width: "30",
      height: "100%",
      cursor: "pointer",
      border: "none",
    }
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "500",
    }
    return (
      <>

        <CButton
          onClick={() => history.goBack()}
          variant="ghost"
          color="secondary"
          className="d-flex align-items-center mb-3"
        >
          <Io5Icons.IoChevronBack size={20} />
          <span className="ms-2">back</span>
        </CButton>
        {getProduct ? (<ProductSummaryDetails product={getProduct} button={true} />) :
          <></>
        }

        <CCard className="mt-2 mb-5  p-3">
          <h4 className="mb-4">Product Description</h4>
          <CCardBody className=" ps-0">
            {getProduct ? (<ProductDescriptions
              productDescription={
                getProduct.product.productDescription
              }
            />) :
              <></>
            }
          </CCardBody>
        </CCard>
        <CCard className="mt-2 mb-5  p-3">
          <h4 className="mb-4">Product Review</h4>
          <CCardBody className=" ps-0">
            <ProductComments key={getProduct?.product.id}
              productComments={formattedComments}
              productId={getProduct?.product.id}
              isAnonymous={true}
            />
          </CCardBody>
        </CCard>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    productResponse: state.productResponser,
    commentResponse: state.commentResponse
  }
}
export default connect(mapStateToProps, {
  getProductDetails,
  saveComment,
  getComments
})(ProductDetails)
