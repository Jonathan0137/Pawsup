import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-carousel-minimal';
import './MediaDetailPage.css';
import { Avatar } from '@mui/material';
import CommentSection from './../components/CommentSection';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";

const MediaDetailPage = ({data}) => {
    const [isClick, setClick] = useState(false);
    const [numLike, setNumLike] = useState(data.number_of_likes);
    const [authorInfo, setAuthorInfo] = useState({ data: null, error: false });

    useEffect(() => {
        const getAuthorInfo = () => {
            axios
              .get(`/api/user/${data.author_id}`)
              .then((res) => {
                setAuthorInfo({
                  data: res.data,
                  error: false,
                });
            })
              .catch(() => setAuthorInfo({ error: true }));
        }
        getAuthorInfo();

    }, [data.id]);
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    const fixFormatForMediaPic = () =>{
        const mediaPics = [];
        data.media_picture_url.map((pic, i) => {
            mediaPics.push({
                image: pic
            });
        });
        return mediaPics;
    }
    if(authorInfo.data === null){
        return (
            <p>Loading</p>
        )
    }

    if(authorInfo.error){
        return(
            <div className="alert author-alert-warning" role="alert">
                Error while fetching author Info, please try again later.
            </div>
        )
    }

    return (
        <>
        <HeaderMenu />
        <div className="conatiner">
            <div className="row" style={{ textAlign: "center" }}>
                <div style={{
                padding: "0 20px"
                }}>
                    <Carousel
                        data={fixFormatForMediaPic()}
                        time={2000}
                        width="850px"
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
            
            <div className="container">
                <hr/>
                <div className="row">
                    <div className="col-10 detailPagInformation">
                        <h1>{data.media_title}</h1>
                        <p>{data.media_detail}</p>
                    </div>
                
                    <div className="col-2 authorInfo">
                        <Avatar alt="mediaAvatar" src={authorInfo.data.avatar} />
                        <p className="mediaAuthorName">{authorInfo.data.fname} {authorInfo.data.lname}</p>

                        <button type="button" className ="iconButton"isClick={true} onClick={() => {
                            setClick(true);
                            setNumLike(numLike + 1);
                        }} >
                            {isClick === true ? (
                                <FavoriteIcon className="icon"/>
                            ):(
                                <FavoriteBorderIcon />
                            )}
                        </button>
                        <p>Like: {numLike}</p>
                    </div>
                </div>
                <div className="row comments">
                    <CommentSection comments={data.ListOfComments}/>
                </div>

            </div>

        </div>

        <Footer />
        </>
    );
};

export default MediaDetailPage;
