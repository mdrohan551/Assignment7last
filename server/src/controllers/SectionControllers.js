import UserModel from "../models/UserModel.js";
import { CreateBlogService, CreateSliderService, CreateTeamService, DeleteTeamService, GetBlogHomeService, GetBlogService, GetSingleBlogService, GetSliderService, GetTeamService, UpdateTeamService } from "../services/SectionServices.js";

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


export const CreateSliderController = async (req, res) => {
  let result = await CreateSliderService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};

export const ReadSliderController = async (req, res) => {
  let result = await GetSliderService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};

export const CreateTeamController = async (req, res) => {
  let result = await CreateTeamService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};

export const ReadTeamController = async (req, res) => {
  let result = await GetTeamService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};
export const UpdateTeamController = async (req, res) => {
  let result = await DeleteTeamService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};
export const DeleteTeamController = async (req, res) => {
  let result = await DeleteTeamService(req);
  return res.status(result.status).json({
    success: result.success,
    error: result.error,
    message: result.message,
    data: result.data,
  });
};