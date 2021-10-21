import React, { Component } from "react"
import { getCarouselImages } from "../../service/apiActions/carouselAction/carouselAction"
import { connect } from "react-redux"
import { Carousel } from "react-responsive-carousel"
import * as IoIcons from "react-icons/io"
import { NO_IMAGE_BASE64 } from "src/service/redux/constants"
import config from "src/config"

export class HeroCarousel extends Component {
  state = {
    carouselImages: [],
  }
  componentDidMount() {
    this.props.getCarouselImages()
  }
  componentDidUpdate = (prevProps, prevState) => {
    this.getResponseCarouselImages(prevProps, prevState)
  }
  getResponseCarouselImages = (prevProps, prevState) => {
    if (prevProps.carouselResponser !== this.props.carouselResponser) {
      let response = this.props.carouselResponser
      if (response.action === "RETRIEVE") {
        if (response.status >= 200 && response.status <= 300) {
          this.setState({
            carouselImages: response.carouselData,
          })
        } else if (response.status < 400) {
          console.log("ERROR")
        }
      }
    }
  }
  render() {
    let { carouselImages } = this.state
    const arrowStyles = {
      position: "absolute",
      zIndex: "2",
      top: "calc(4% - 16px)",
      // width: "30",
      height: "100%",
      cursor: "pointer",
      border: "none",
    }
    return (
      <>
        <Carousel
          showArrows={true}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          dynamicHeight={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow-style"
                style={{ ...arrowStyles, left: 0 }}
              >
                <IoIcons.IoIosArrowBack size="40" style={{ color: "white" }} />
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
          {carouselImages.length > 0 ? (
            carouselImages.map((image, index) => {
              console.log(
                config.api.private.baseUrl +
                  "/api/v1/carousel/getImages/bytesArrays/" +
                  image.imageName,
              )
              return (
                <div key={index}>
                  <img
                    className="d-block "
                    height="400"
                    src={
                      config.api.private.baseUrl +
                      "/api/v1/carousel/getImages/bytesArrays/" +
                      image.imageName
                    }
                    alt={image.imageName}
                  />
                </div>
              )
            })
          ) : (
            <img
              className="d-block "
              height="400"
              src={NO_IMAGE_BASE64}
              alt="unavailable"
            />
          )}
        </Carousel>
      </>
    )
  }
}
const mapStatetoProps = (state) => {
  return {
    carouselResponser: state.carouselResponser,
  }
}
export default connect(mapStatetoProps, { getCarouselImages })(HeroCarousel)
