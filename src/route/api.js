const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const { newRegistration } = require('../controller/registrationController');
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware');
const { userLogin } = require('../controller/loginController');


router.post("/createBlog",TokenVerifyMiddleware,blogController.CreatePost);
router.get("/readBlog",TokenVerifyMiddleware,blogController.ReadPost);
router.post("/updateBlog/:id",TokenVerifyMiddleware,blogController.UpdatePost);
router.post("/deleteBlog/:id",TokenVerifyMiddleware,blogController.DeletePost);


router.post("/signUp",newRegistration);
router.post("/login",userLogin);





module.exports = router;