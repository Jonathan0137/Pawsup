const express = require("express");
const { MediaPageModel } = require("../models/MediaPageModel");
// Base route: /api/mediapages
const MediaPagesController = express.Router();

// GET /api/mediapages
MediaPagesController.get("/", async (req, res) => {
  try {
    const mediapages = await MediaPageModel.getMediaPages();
    res.json(mediapages.map((mediapage) => mediapage.cleanCopy()));
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while fetching mediapages" });
  }
});

//GET /api/mediapages/:id
MediaPagesController.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const mediaPage = await MediaPageModel.getMediaPagesByID(id);
    if (!mediaPage) {
      return res.status(404).json({
        message: `mediaPage with ID '${id}' not found`,
      });
    }
    res.status(200).json(mediaPage.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while fetching mediaPage with ID '${id}'" });
  }
});

// POST /api/mediapages
MediaPagesController.post("/", async (req, res) => {
  const { author_id, media_picture_url, media_title, media_detail, published_time, number_of_likes} = req.body;

  if (!author_id || !media_picture_url || !media_title || !media_detail || !published_time || !number_of_likes) {
    return res.status(400).json({
      message: "[authorId, mediaPictureURL, mediaTitle, mediaDetail, publishedTime, numberOfLikes] cannot be empty in response body",
    });
  }

  /*if (isNaN(priceperday))
  {
    return res.status(401).json({
      message: "[pricePerDay] is not of numerical form]",
    });
  }*/
  const user_check = await UserModel.getUserByID(author_id);

  if (!user_check) {
    return res.status(401).json({
      message: `No user with that user ID exists.`,
    });
  }

  const mediapage = new MediaPageModel({
    author_id: author_id,
    media_picture_url: media_picture_url,
    media_title: media_title,
    media_detail: media_detail,
    published_time: published_time,
    number_of_likes: number_of_likes,
  });

  try {
    await mediapage.insert();
    res.status(201).json(mediapage.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while creating mediapage" });
  }
});

exports.MediaPagesController = MediaPagesController;
