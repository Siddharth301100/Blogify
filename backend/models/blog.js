const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: "string", required: true },
    body: { type: "string", required: true},
    author: { type: "string", required: true },
    slug: { type: "string", required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
