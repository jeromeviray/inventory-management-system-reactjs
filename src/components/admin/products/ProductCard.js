import React, { Component } from 'react'
import {
    CCard,
    CCardBody,
    CCardTitle
} from '@coreui/react'
import ReactStars from "react-rating-stars-component";
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'

export class ProductCard extends Component {
    state = {
        iconModal: 'eye',
        product: [],
        imageLink: false
    }
    componentDidMount = () => {
        this.handleIconModal();
        this.handleProduct();
        this.handleImageLink();
    }
    handleProduct = () => {
        this.setState({
            product: this.props.product
        })
    }
    handleIconModal = () => {
        this.setState({
            iconModal: this.props.iconModal,
        });
    };
    handleImageLink = () => {
        this.setState({
            imageLink: this.props.imageLink
        })
    }
    render() {
        let { iconModal, product, imageLink } = this.state;
        return (
            <>
                <CCard className="inner-card-container">
                    <div className="img-container">
                        {imageLink ?
                            <a
                                href="/#"
                                className="link-product-content"
                            >
                                <div className="inner-img-container">
                                    <img
                                        variant="top"
                                        src={"/categories/" + product.productImageName}
                                        alt="product"
                                    />
                                </div>
                            </a>
                            : <div className="inner-img-container">
                                <img
                                    variant="top"
                                    src={"/categories/" + product.productImageName}
                                    alt="product"
                                />
                            </div>
                        }
                        <div className="eye-btn">
                            {iconModal === "eye" ? (
                                <span onClick={() => this.setState({ showModal: true })}>
                                    <BsIcons.BsEye />
                                </span>
                            ) : (
                                <span>
                                    <FaIcons.FaEdit size={14} />
                                </span>
                            )}
                        </div>
                    </div>
                    <CCardBody>
                        <CCardTitle>dasdasdasdasd adasd as dasd asd asd asd </CCardTitle>
                        <div className="card-label-price">
                            <CCardTitle >
                                <span className="peso-sign">&#8369; </span>
                                <span className="peso-price">{product.productPrice}</span>
                            </CCardTitle>
                            <div className="product-stock-container">
                                <span className="stock-label">Stock: </span>
                                {product.stock ? (
                                    <span className="stock-label-value">{product.stock}</span>
                                ) : (
                                    <span className="sold-out-label">Sold Out</span>
                                )}
                            </div>
                        </div>
                        <ReactStars
                            count={5}
                            value={3.5}
                            size={24}
                            isHalf={true}
                            edit={false}
                        />



                    </CCardBody>
                </CCard>
            </>
        )
    }
}

export default ProductCard
