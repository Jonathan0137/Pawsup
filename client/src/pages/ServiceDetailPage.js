import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import {Image, Carousel}from 'react-bootstrap';
import CommentSection from './../components/CommentSection'
import ReactStars from "react-rating-stars-component";
import './ServiceDetailPage.css'
import { Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import React, { useState, useEffect } from "react";
import axios from "axios";

const ServiceDetailPage = ({data}) => {
    const [providerInfo, setProviderInfo] = useState({ data: null, error: false });

    useEffect(() => {
        const getProviderInfo = () => {
            axios
              .get(`/api/user/${data.pid}`)
              .then((res) => {
                  setProviderInfo({
                  data: res.data,
                  error: false,
                });
            })
              .catch(() => setProviderInfo({ error: true }));
        }
        getProviderInfo();

    }, []);

    if(providerInfo.data === null){
        return (
            <p>Loading</p>
        )
    }
    if(providerInfo.error){
        return(
            <div className="alert provider-alert-warning" role="alert">
                Error while fetching provider Info, please try again later.
            </div>
        )
    }
    return (
        <>
        <HeaderMenu />
            <div className="container">
                <div className="row info">
                    <div className="col-12 col-sm-6 servicePicConatiner" >
                        <Carousel className="CarouselContainer">
                            {data.service_pic_url && data.service_pic_url.map((pic, i) =>
                                <Carousel.Item>
                                    <Image className="serviceImg" src={pic} alt={i} width="100%"/>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                    <div className="col-12 col-sm-6 serviceInfoConatiner">
                        <div className="col-12 serviceDetailContainter">
                            <h2 className="serviceTitle">{data.service_title}</h2>
                            <div className="serviceRating">
                                <p style={{margin: "0px"}}>rating: </p>
                                <ReactStars 
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={data.service_rating}
                                    isHalf={true}
                                    edit={false}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                />
                            </div>
                        </div>
                        <h2 className="price">$<strong>{data.price_per_day}</strong>/day</h2>
                        <div className="serviceLocation">
                            <p className="serviceLocationFont">Location: <strong>{data.location}</strong></p>
                        </div>
                        <div className="serviceProviderInformation">
                            <div className="d-flex serviceProviderIconAndName">
                                <Avatar alt="serviceAvatar" src={providerInfo.data.avatar} />
                                <p className="serviceProviderName">{providerInfo.data.fname} {providerInfo.data.lname}</p>
                            </div>
                            <div className="d-flex serviceProviderEmail">
                                <EmailIcon />
                                <p className="serviceProviderEmailFont">{providerInfo.data.email}</p>
                            </div>
                            <div className="d-flex serviceProviderPhone">
                                <CallIcon />
                                <p className="serviceProviderPhoneFont">{providerInfo.data.phone_number}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row detail">
                    <h1>Description</h1>
                        <p>{data.service_detail}</p>
                    <h1>Facility</h1>
                    <div className="d-flex justify-content-around serviceFacility">
                        {data.service_facility && data.service_facility.map((facility, i) =>
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
