const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const upload = require("../middleware/upload");

// GET all posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// CREATE post with image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("FILE:", req.file);

    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      image: req.file ? req.file.path : "",
    });

    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE post
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;