import UserModel from "../models/UserModel.js";
import {
  loginUserService,
  registrationService,
  uploadMulterService,
} from "../services/Services.js";

export const registration = async (req, res) => {
  let result = await registrationService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
  });
};

//User Login
export const loginUser = async (req, res) => {
  let result = await loginUserService(req);

  if (result.status === 200) {
    res.cookie("token", result.token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 5), // 5 hours
      httpOnly: true,
      secure: true, // Only in HTTPS
      sameSite: "Strict",
    });

    return res.status(result.status).json({
      success: result.success,
      message: result.message,
      token: result.token, // Send token if needed
    });
  } else {
    return res.status(result.status).json({
      success: result.success,
      message: result.message,
    });
  }
};

//User Logout
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error: " + err.toString(),
    });
  }
};

// Use Multer File Upload Controller
export const uploadMulter = async (req, res) => {
  let result = await uploadMulterService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};
