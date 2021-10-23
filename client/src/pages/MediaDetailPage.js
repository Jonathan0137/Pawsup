import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import React, { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import './MediaDetailPage.css';
import { Avatar } from '@mui/material';
import CommentSection from './../components/CommentSection';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const MediaDetailPage = ({data}) => {
    const [isClick, setClick] = useState(false);
    const [numLike, setNumLike] = useState(data.numberOfLikes);
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
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
                        data={data.mediaPictureURL}
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
                    <div className="col-10 detail">
                        <h1><strong>{data.mediaTitle}</strong></h1>
                        <p>{data.mediaDetail}</p>
                    </div>
                
                    <div className="col-2 authorInfo">
                        <Avatar alt="mediaAvatar" src={data.autorProfilePicURL} />
                        <p className="mediaAuthorName">{data.autorName}</p>

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
