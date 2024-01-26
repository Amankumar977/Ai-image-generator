import express from "express";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/post.js";
const router = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    return res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
