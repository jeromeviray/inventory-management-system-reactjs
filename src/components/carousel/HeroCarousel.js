import React, { Component } from 'react'
import {
    CCarousel,
    CCarouselItem,

} from '@coreui/react'
import { getCarouselImages } from '../../service/apiActions/carouselAction/CarouselAction'
import { connect } from 'react-redux'

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

        return (

            <>
                <CCarousel
                    controls
                    indicators
                    dark
                    interval={4000}
                    className="carousel-container" >

                    {carouselImages.map((image, index) =>
                        <CCarouselItem key={index} className="carousel-item">
                            <img className="d-block carousel-image" src={image.fileName} alt={image.fileName} />
                        </CCarouselItem>
                    )}
                </CCarousel>
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
