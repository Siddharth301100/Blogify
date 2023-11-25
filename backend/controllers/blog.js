const Joi = require("joi");
const blog = require("../models/blog");
const { v4: uuidv4 } = require("uuid");

const Blog = {
  async createBlog(req, res, next) {
    const blogSchema = Joi.object({
      title: Joi.string().required(),
      body: Joi.string().required(),
      author: Joi.string().required(),
    });

    const { error } = blogSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    const { title, body, author } = req.body;

    blog
      .create({ title: title, body: body, author: author, slug: uuidv4() })
      .then(() => {
        return res.status(201).json({ message: "Blog created successfully" });
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
      });
  },

  async getAllBlogs(req, res, next) {
    try {
      doc = await blog.find();
      return res.status(200).json({ data: doc });
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getBlogById(req, res, next) {
    const schema = Joi.object({
      id: Joi.string().required(),
    });

    const { error } = schema.validate(req.params);
    if (error) {
      return next(error);
    }

    try {
      const { id } = req.params;
      const doc = await blog.findOne({ slug: id });
      return res.status(200).json({ data: doc });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteBlog(req, res, next) {
    const schema = Joi.object({
      id: Joi.string().required(),
    });

    const { error } = schema.validate(req.params);
    if (error) {
      return next(error);
    }

    try {
      const { id } = req.params;
      console.log(id)
      const doc = await blog.deleteOne({ _id: id });
      return res.status(200).json({ message: "Blog deleted successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = Blog;
