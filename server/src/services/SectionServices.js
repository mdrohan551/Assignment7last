import ContactModel from "../models/ContactModel.js";
import ServiceModel from "../models/ServiceModel.js";
import SliderModel from "../models/SliderModel.js";
import TeamModel from "../models/TeamModel.js";
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

export const UpdateBlogService = async (req) => {
  try {
    const { id } = req.params;
    const { title, content, image, author, category } = req.body;

    // Blog Exist Check
    const existingBlog = await BlogModel.findById(id);
    if (!existingBlog) {
      return {
        status: 404,
        success: false,
        error: true,
        message: "Blog not found",
      };
    }

    // Only generate slug if title is updated
    let slugCre = existingBlog.slug;
    if (title) {
      slugCre = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      // Check if new slug already exists (excluding current blog)
      let slugExists = await BlogModel.findOne({
        slug: slugCre,
        _id: { $ne: id },
      });
      if (slugExists) {
        return {
          status: 400,
          success: false,
          error: true,
          message: "Title already exists",
        };
      }
    }

    // Update Blog
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      id,
      {
        title: title || existingBlog.title,
        slug: slugCre,
        content: content || existingBlog.content,
        image: image || existingBlog.image,
        author: author || existingBlog.author,
        category: category || existingBlog.category,
      },
      { new: true }
    );

    return {
      status: 200,
      success: true,
      error: false,
      message: "Blog updated successfully",
      data: updatedBlog,
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

export const DeleteBlogService = async (req) => {
  try {
    const { id } = req.params;
    if (!id) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "Id is required",
      };
    }

    const Blog = await BlogModel.deleteOne({ _id: id });

    return {
      status: 201,
      success: true,
      error: false,
      message: "Blog Deleted Successfully",
      data: Blog,
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
// ...................................................................................................
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
// ...................................................................................................
export const CreateTeamService = async (req) => {
  try {
    const { name, designation, image } = req.body;

    if (!name || !designation || !image) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "All fields are required",
      };
    }
    const team = await TeamModel.create({
      name,
      designation,
      image,
    });
    return {
      status: 201,
      success: true,
      error: false,
      message: "Team member created successfully",
      data: team,
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

export const GetTeamService = async (req) => {
  try {
    const findBlog = await TeamModel.find({});
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

export const UpdateTeamService = async (req) => {
  try {
    const { id } = req.params;
    const { name, designation, image } = req.body;
    if (!id) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "Id is required",
      };
    }

    const team = await TeamModel.findOneAndUpdate(
      { _id: id },
      {
        name,
        designation,
        image,
      },
      { new: true }
    );

    return {
      status: 201,
      success: true,
      error: false,
      message: "Team member Updated successfully",
      data: team,
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

export const DeleteTeamService = async (req) => {
  try {
    const { id } = req.params;
    if (!id) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "Id is required",
      };
    }

    const team = await TeamModel.deleteOne({ _id: id });

    return {
      status: 201,
      success: true,
      error: false,
      message: "Team Member Deleted Successfully",
      data: team,
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
// ...................................................................................................
export const CreateServiceService = async (req) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description || !image) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "All fields are required",
      };
    }
    const findService = await ServiceModel.findOne({});
    if (findService) {
      const update = await ServiceModel.findOneAndUpdate(
        { _id: findService._id },
        {
          title,
          description,
          image,
        },
        { new: true }
      );
      return {
        status: 200,
        success: true,
        error: false,
        message: "Service updated successfully",
        data: update,
      };
    } else {
      const Service = await ServiceModel.create({
        title,
        description,
        image,
      });
      return {
        status: 201,
        success: true,
        error: false,
        message: "Service Created Successfully",
        data: Service,
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

export const GetServiceService = async (req) => {
  try {
    const findBlog = await ServiceModel.find({});
    return {
      status: 200,
      success: true,
      error: false,
      message: "Service Read successfully",
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

export const DeleteServiceService = async (req) => {
  try {
    const { id } = req.params;

    const Service = await ServiceModel.deleteOne({ _id: id });

    return {
      status: 201,
      success: true,
      error: false,
      message: "Service Deleted Successfully",
      data: Service,
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
// ...................................................................................................
export const CreateContactService = async (req) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "All fields are required",
      };
    }
    const contact = await ContactModel.create({
      name,
      email,
      subject,
      message,
    });
    return {
      status: 201,
      success: true,
      error: false,
      message: "Your Message successfully Send",
      data: contact,
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

export const GetContactService = async (req) => {
  try {
    const findBlog = await ContactModel.find({});
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
// ...................................................................................................
