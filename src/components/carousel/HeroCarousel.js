import React, { Component } from 'react'
import {
    CCarousel,
    CCarouselItem,

} from '@coreui/react'
import { getCarouselImages } from '../../service/apiActions/carouselAction/carouselAction'
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import * as IoIcons from "react-icons/io";

export class HeroCarousel extends Component {
    state = {
        carouselImages: []
    }
    componentDidMount() {
        this.props.getCarouselImages()

    }
    componentDidUpdate = (prevProps, prevState) => {
        this.getResponseCarouselImages(prevProps, prevState)
    }
    getResponseCarouselImages = (prevProps, prevState) => {
        if (prevProps.carouselResponser !== this.props.carouselResponser) {
            let response = this.props.carouselResponser;
            if (response.action === 'RETRIEVE') {
                if (response.status >= 200 && response.status <= 300) {
                    this.setState({
                        carouselImages: response.carouselData
                    })
                } else if (response.status < 400) {
                    console.log("ERROR");
                }
            }
        }
    }
    render() {
        let { carouselImages, } = this.state;
        const arrowStyles = {
            position: 'absolute',
            zIndex: "2",
            top: 'calc(4% - 16px)',
            // width: "30",
            height: "100%",
            cursor: 'pointer',
            border: "none",

        };
        return (

            <>
                {/* <CCarousel
                    controls
                    indicators
                    dark
                    interval={4000}
                    className="carousel-container" >

                    {carouselImages && (carouselImages.map((image, index) => {
                        return (
                            <CCarouselItem key={index} className="carousel-item">
                                <img className="d-block carousel-image" src={image.fileName} alt={image.fileName} />
                            </CCarouselItem>
                        )
                    }
                    ))}
                </CCarousel> */}
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    dynamicHeight={false}
                    // renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    //     hasPrev && (
                    //         <button type="button" onClick={onClickHandler} title={label} className="arrow-style">
                    //             <IoIcons.IoIosArrowBack size="40" style={{ color: "white" }} />
                    //         </button>
                    //     )
                    // }
                    // renderArrowNext={(onClickHandler, hasNext, label) =>
                    //     hasNext && (
                    //         <button type="button" onClick={onClickHandler} title={label} >
                    //             <IoIcons.IoIosArrowForward size="40" style={{
                    //                 color: "white"
                    //             }} />
                    //         </button>
                    //     )
                    // }
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label} className="arrow-style" style={{ ...arrowStyles, left: 0 }}>
                                <IoIcons.IoIosArrowBack size="40" style={{ color: "white" }} />
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} className="arrow-style" style={{ ...arrowStyles, right: 0 }}>
                                <IoIcons.IoIosArrowForward size="40" style={{ color: "white" }} />
                            </button>
                        )
                    }
                >
                    {carouselImages && (
                        carouselImages.map((image, index) => {
                            return (
                                <div key={index} >
                                    <img className="d-block " height="400" src={image.fileName} alt={image.fileName} />
                                </div>
                            )
                        })
                    )}
                </Carousel>
            </>

        )
    }
}
const mapStatetoProps = (state) => {
    return {
        carouselResponser: state.carouselResponser
    }
}
export default connect(mapStatetoProps, { getCarouselImages })(HeroCarousel)
