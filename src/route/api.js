const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');

router.post("/createBlog",blogController.CreatePost);
router.get("/readBlog",blogController.ReadPost);
router.post("/updateBlog/:id",blogController.UpdatePost);
router.post("/deleteBlog/:id",blogController.DeletePost);



module.exports = router;