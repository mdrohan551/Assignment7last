import express from "express";
const router = express.Router();
import * as Controller from "../controllers/UserControllers.js"; // Assuming you have the right methods in your controllers
import * as SectionController from "../controllers/SectionControllers.js"; // Assuming you have the right methods in your controllers
import AuthMiddleware from "../middlewares/AuthVerification.js"; // Assuming you have your auth middleware
import uploads from "../middlewares/FileUpload.js";

// User Registration
router.post("/registration", Controller.registration);
//user Login with token cookie
router.post("/login", Controller.loginUser);
//user Logout Cookie deleted
router.get("/logout", AuthMiddleware, Controller.logoutUser);
// File upload multer
router.post('/upload-file-multer',AuthMiddleware,uploads.single('file'),Controller.uploadMulterAvatar);


//Create Blog 
router.post('/create-blog',AuthMiddleware,SectionController.CreateBlogController);

router.get('/read-blog',SectionController.ReadBlogController);
router.get('/read-single-blog/:slug',SectionController.ReadSingleBlogController);


export default router;
