import React, { Component } from "react"
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardTitle,
  CCardBody,
} from "@coreui/react"
import * as IoIcons from "react-icons/io"
import { Carousel } from "react-responsive-carousel"
import ReactStars from "react-rating-stars-component"
import { NO_IMAGE_BASE64 } from "src/service/redux/constants"

export class ProductDetails extends Component {
  state = {
    product: this.props.product,
  }
  render() {
    const { product, inventory } = this.state.product
    console.log(product)
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
      <div>
        <CRow>
          <CCol sm="12" md="5" lg="5">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="arrow-style"
                    style={{ ...arrowStyles, left: 0 }}
                  >
                    <IoIcons.IoIosArrowBack
                      size="40"
                      style={{ color: "white" }}
                    />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="arrow-style"
                    style={{ ...arrowStyles, right: 0 }}
                  >
                    <IoIcons.IoIosArrowForward
                      size="40"
                      style={{ color: "white" }}
                    />
                  </button>
                )
              }
            >
              {product.fileImages.length > 0 ? (
                product.fileImages.map((image, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={"/images/products/" + image.path + image.fileName}
                      />
                    </div>
                  )
                })
              ) : (
                <img src={NO_IMAGE_BASE64} />
              )}
            </Carousel>
          </CCol>
          <CCol sm="12" md="7" lg="7">
            <CCard className="border-0">
              <CCardTitle>{product.productName}</CCardTitle>
              <CCardBody className=" ps-0">
                <div className="d-flex justify-content-start align-items-center">
                  <ReactStars
                    count={5}
                    value={3.5}
                    size={24}
                    isHalf={true}
                    edit={false}
                  />
                  <span className="text-black-50 ms-3">4.4</span>
                </div>
                <div className="mt-2 mb-2" style={{ ...fontStyle }}>
                  <span className="text-black-50 me-3 ">SKU</span>
                  <span className="text-black-50 me-3 ">112354879</span>
                </div>
                <div className="mt-2 mb-2" style={{ ...fontStyle }}>
                  <span className="me-3 text-black-50">Brand</span>
                  <span className="me-3">
                    {product.brand ? product.brand.brand : "No Brand"}
                  </span>
                </div>
                <div className="mt-3 mb-3  d-flex align-items-center justify-content-between">
                  <h5 className="peso-price">
                    &#8369;{product.productPrice.toFixed(2)}
                  </h5>
                  <span style={{ ...fontStyle }} className="peso-price">
                    21k <span className="text-muted">sold</span>
                  </span>
                </div>
                <hr />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    )
  }
}

export default ProductDetails
