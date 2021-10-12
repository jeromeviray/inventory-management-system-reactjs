import React, { Component } from "react"
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CImage,
  CFormLabel,
  CFormTextarea,
} from "@coreui/react"
import { NO_IMAGE_BASE64 } from "src/service/redux/constants"
import ReactStars from "react-rating-stars-component"

export class OrderCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderItem: this.props.item,
      canReview: this.props.canReview,
      orderId: this.props.orderId,
      comment: this.props.comment,
      rating: this.props.rating,
      submitted: this.props.submitted,
      canViewReview: this.props.canViewReview,
    }
  }
  render() {
    let {
      orderItem,
      canReview,
      rating,
      comment,
      orderId,
      submitted,
      canViewReview,
    } = this.state
    let isSubmitted = submitted
    if (canViewReview && !canReview) {
      submitted = true
    }
    const fontStyle = {
      fontSize: "14px",
      fontWeight: "400",
    }
    return (
      <CRow className="mb-3">
        <CCard>
          <CCardBody>
            <div className="d-flex align-items-start">
              <CImage
                rounded
                src={
                  orderItem.product.fileImages.length > 0
                    ? "/images/products/" +
                      orderItem.product.fileImages[0].path +
                      orderItem.product.fileImages[0].fileName
                    : NO_IMAGE_BASE64
                }
                width={100}
                height={100}
              />
              <div className="ms-2  w-100">
                <CRow className="d-flex justify-content-between">
                  <CCol className="ps-4 text-dark">
                    {orderItem.product.productName}
                  </CCol>
                  <CCol className="text-dark d-flex flex-column align-items-center">
                    <span style={fontStyle} className="text-black-50">
                      Price
                    </span>
                    <span className="pt-3">
                      &#8369;{orderItem.product.productPrice.toFixed(2)}
                    </span>
                  </CCol>
                  <CCol className="text-dark d-flex flex-column align-items-center">
                    <span style={fontStyle} className="text-black-50">
                      Quantity
                    </span>
                    <span className="pt-3">{orderItem.quantity}</span>
                  </CCol>
                  <CCol className="text-dark d-flex flex-column align-items-center">
                    <span style={fontStyle} className="text-black-50">
                      Amount
                    </span>
                    <span className="pt-3">
                      &#8369;{orderItem.amount.toFixed(2)}
                    </span>
                  </CCol>
                </CRow>
                {(canReview || (canViewReview && isSubmitted)) && (
                  <div>
                    <ReactStars
                      count={5}
                      value={rating}
                      size={24}
                      isHalf={false}
                      edit={!submitted}
                      onChange={(newRating) => {
                        this.props.handleOrderReview(
                          orderId,
                          orderItem,
                          newRating,
                          comment,
                        )
                      }}
                    />
                    <div className="mb-!2">
                      <textarea
                        disabled={submitted}
                        onChange={(event) => {
                          this.props.handleOrderReview(
                            orderId,
                            orderItem,
                            rating,
                            event.target.value,
                          )
                        }}
                        id="exampleFormControlTextarea1"
                        rows="3"
                        style={{ width: "100%" }}
                        placeholder="Please write a review."
                      >
                        {comment}
                      </textarea>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CRow>
    )
  }
}

export default OrderCard
