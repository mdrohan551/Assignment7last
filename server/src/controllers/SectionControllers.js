import UserModel from "../models/UserModel.js";
import { CreateBlogService, GetBlogHomeService, GetBlogService, GetSingleBlogService } from "../services/SectionServices.js";

export const CreateBlogController = async (req, res) => {
  let result = await CreateBlogService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};

export const ReadBlogController = async (req, res) => {
  let result = await GetBlogService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};

export const GetBlogHomeController = async (req, res) => {
  let result = await GetBlogHomeService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};

export const ReadSingleBlogController = async (req, res) => {
  let result = await GetSingleBlogService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};
