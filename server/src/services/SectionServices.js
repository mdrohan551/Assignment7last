import BlogModel from "./../models/BlogModel.js";

export const CreateBlogService = async (req) => {
  try {
    const userId = req.headers.user_id; // Auth Middleware
    const { title, content, image, author, category } = req.body;

    if (!title || !content || !image || !author || !category) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "All fields are required",
      };
    }
    let slugCre = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    let find = await BlogModel.findOne({ slug: slugCre });
    if (find) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "Title already exists",
      };
    }

    const blog = await BlogModel.create({
      title,
      slug: slugCre,
      content,
      image,
      author,
      category,
    });
    return {
      status: 201,
      success: true,
      error: false,
      message: "Blog created successfully",
      data: blog,
    };
  } catch (e) {
    return {
      status: 500,
      success: false,
      error: true,
      message: e.message || "Something went wrong",
    };
  }
};

export const GetBlogService = async (req) => {
  try {
    const findBlog = await BlogModel.find({});
    return {
      status: 200,
      success: true,
      error: false,
      message: "Blog Read successfully",
      data: findBlog,
    };
  } catch {
    return {
      status: 500,
      success: false,
      error: true,
      message: "Something went wrong",
    };
  }
};

export const GetSingleBlogService = async (req) => {
  try {
    const { slug } = req.params;
    const findSingleBlog = await BlogModel.findOne({ slug });
    return {
      status: 200,
      success: true,
      error: false,
      message: "Blog Read successfully",
      data: findSingleBlog,
    };
  } catch {
    return {
      status: 500,
      success: false,
      error: true,
      message: "Something went wrong",
    };
  }
};
