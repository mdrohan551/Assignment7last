import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const BlogModel = mongoose.model("blog", blogSchema);
export default BlogModel;
