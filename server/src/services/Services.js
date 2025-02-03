import UserModel from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import { EncodeToken } from "../utils/TokenHelper.js";

export const registrationService = async (req) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "All fields are required",
      };
    }

    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "Email already exists",
      };
    }

    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      password: hashpassword,
    };
    const data = await UserModel.create(payload);
    return {
      status: 201,
      success: true,
      error: false,
      message: "User registered successfully",
    };
  } catch (err) {
    return {
      status: 500,
      success: false,
      error: true,
      message: err.message || "Something went wrong",
    };
  }
};

export const loginUserService = async (req) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "All fields are required",
      };
    }

    let User = await UserModel.findOne({ email: email });

    if (!User) {
      return {
        status: 404,
        success: false,
        error: true,
        message: "User not found",
      };
    }
    let matchPassword = await bcryptjs.compare(password, User.password);
    if (!matchPassword) {
      return {
        status: 401,
        success: false,
        error: true,
        message: "Invalid Password",
      };
    }
    const token = EncodeToken(email, User._id);

    return {
      status: 200,
      success: true,
      error: false,
      message: "User logged in successfully",
      token: token,
    };
  } catch (err) {
    return {
      status: 500,
      success: false,
      error: true,
      message: err.message || "Something went wrong",
    };
  }
};

export const uploadMulterAvatarService = async (req) => {
  try {
    const userId = req.headers.user_id; // Auth Middleware
    const avatar = req.file; // multer Middleware
    if (!avatar) {
      return {
        status: 400,
        success: false,
        error: true,
        message: "No avatar provided",
      };
    }

    const fileName = avatar.filename;

    const updateUser = await UserModel.findByIdAndUpdate(userId, {
      avatar: fileName,
    });
    
    return {
      status: 200,
      success: true,
      error: false,
      message: "User Avatar uploaded successfully",
    };
  } catch (err) {
    return {
      status: 500,
      success: false,
      error: true,
      message: err.message || "Something went wrong",
    };
  }
};
