import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import React from 'react';
import {Image, Carousel}from 'react-bootstrap';
import CommentSection from './../components/CommentSection'
import ReactStars from "react-rating-stars-component";
import './ServiceDetailPage.css'
import { Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const ServiceDetailPage = ({data}) => {

    return (
        <>
        <HeaderMenu />
            <div className="container">
                <div className="row info">
                    <div className="col-12 col-sm-6 servicePicConatiner" >
                        <Carousel className="CarouselContainer">
                            {data.servicePicURL && data.servicePicURL.map((pic, i) =>
                                <Carousel.Item>
                                    <Image className="serviceImg" src={pic} alt={i} width="100%" height="auto"/>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                    <div className="col-12 col-sm-6 serviceInfoConatiner">
                        <div className="col-12 serviceDetailContainter">
                            <h2 className="serviceTitle">{data.serviceTitle}</h2>
                            <div className="serviceRating">
                                <p style={{margin: "0px"}}>rating: </p>
                                <ReactStars 
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={data.rating}
                                    isHalf={true}
                                    edit={false}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                />
                            </div>
                        </div>
                        <h2 className="price">$<strong>{data.pricePerday}</strong>/day</h2>
                        <div className="serviceLocation">
                            <p className="serviceLocationFont">Location: <strong>{data.Location}</strong></p>
                        </div>
                        <div className="serviceProviderInformation">
                            <div className="d-flex serviceProviderIconAndName">
                                <Avatar alt="serviceAvatar" src={data.serviceProviderAvatar} />
                                <p className="serviceProviderName">{data.serviceProviderName}</p>
                            </div>
                            <div className="d-flex serviceProviderEmail">
                                <EmailIcon />
                                <p className="serviceProviderEmailFont">{data.serviceProviderEmail}</p>
                            </div>
                            <div className="d-flex serviceProviderPhone">
                                <CallIcon />
                                <p className="serviceProviderPhoneFont">{data.serviceProviderPhone}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 detail">
                    <h1>Description</h1>
                    <p>{data.serviceDetail}</p>
                    <h1>Facility</h1>
                    <div className="d-flex justify-content-around serviceFacility">
                        {data.serviceFacility && data.serviceFacility.map((facility, i) =>
                            <p>{facility}</p>
                        )}
                    </div>

                </div>
                <div className="col-12 serviceComment">
                    <CommentSection comments={data.ListOfComments}/>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default ServiceDetailPage;
