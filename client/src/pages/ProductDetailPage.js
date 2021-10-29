import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import React, { useState } from 'react';
import {Image, Carousel, Button}from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './ProductDetailPage.css';
import { QuantityPicker } from 'react-qty-picker';
import CommentSection from './../components/CommentSection'
const ProductDetailPage = ({data}) => {
    const [currentPrice, setCurrentPrice] = useState(data.product_price[0]);
    const [quant, setQuant] = useState(1);
    return (
        <>
        <HeaderMenu />
            <div className="container">
                <div className="row info">
                    <div className="col-12 col-sm-4 productPicConatiner" >
                        <Carousel className="CarouselContainer "variant="dark" prevLabel="" nextLabel="" prevIcon="" nextIcon="">
                            {data.product_pic_url && data.product_pic_url.map((pic, i) =>
                                <Carousel.Item>
                                    <Image className="productImag" src={pic} alt={i} width="70%" height="auto"/>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="productTitleContainter">
                            <h2>{data.product_name}</h2>
                            <p>by <strong>{data.product_origin}</strong></p>
                        </div>
                        <div className="productForm">
                            <div>
                                <h2 className="productPrice">$ {currentPrice}</h2>
                            </div>
                            <div className="productRating">
                                <p style={{margin: "0px"}}>rating: </p>
                                <ReactStars 
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={data.product_rating}
                                    isHalf={true}
                                    edit={false}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                />
                            </div>
                            <div className="productType">
                                {data.product_type && data.product_type.map((size, i) =>
                                    <Button 
                                        variant="outline-dark" 
                                        size="lg" 
                                        style={{margin: "1rem"}}
                                        onClick={() => setCurrentPrice(data.product_price[i])}
                                    >{size}</Button> 
                                )}
                            </div>
                            <div className="productQuant col-12">
                                <QuantityPicker className="quant-picker" value={quant} 
                                    min={1} max={10} 
                                    width='15rem'
                                    onChange={(value)=>{setQuant(value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-2 purchase-details">
                        <div className="d-grid gap-2">
                            <Button variant="warning" size="lg">Add to Cart</Button>
                            <Button variant="outline-warning" size="lg">Buy it Now</Button>
                        </div>
                    </div>
                </div>
                <div className="row detail">
                        <h1><strong>Description</strong></h1>
                        <p>{data.product_detail}</p>
                </div>
                <div className="col-12 comment">
                    <CommentSection comments={data.productComment}/>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default ProductDetailPage;
