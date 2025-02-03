import SliderModel from "../models/SliderModel.js";
import BlogModel from "./../models/BlogModel.js";

export const CreateBlogService = async (req) => {
  try {
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

export const GetBlogHomeService = async (req) => {
  try {
    const findBlog = await BlogModel.find({}).sort({ _id: -1 }).limit(6);
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

export const CreateSliderService = async (req) => {
  try {
    const { title, subtile, file } = req.body;

    if (!title || !subtile || !file) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "All fields are required",
      };
    }
    const findSlider = await SliderModel.findOne({});
    if (findSlider) {
      const update = await SliderModel.findOneAndUpdate(
        { _id: findSlider._id },
        {
          title,
          subtile,
          file,
        },
        { new: true }
      );
      return {
        status: 200,
        success: true,
        error: false,
        message: "Slider updated successfully",
        data: update,
      };
    } else {
      const slider = await SliderModel.create({
        title,
        subtile,
        file,
      });
      return {
        status: 201,
        success: true,
        error: false,
        message: "Slider Created Successfully",
        data: slider,
      };
    }
  } catch (e) {
    return {
      status: 500,
      success: false,
      error: true,
      message: e.message || "Something went wrong",
    };
  }
};

export const GetSliderService = async (req) => {
  try {
    const findSlider = await SliderModel.findOne({});
    return {
      status: 200,
      success: true,
      error: false,
      message: "Slider Read successfully",
      data: findSlider,
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