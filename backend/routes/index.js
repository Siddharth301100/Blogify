const express = require("express");
const router = express.Router();

const Blog = require("../controllers/blog")
router.post("/blogs", Blog.createBlog);
router.get("/blogs", Blog.getAllBlogs);
router.get("/blogs/:id", Blog.getBlogById);
router.delete("/blogs/:id",Blog.deleteBlog)

module.exports = router;
