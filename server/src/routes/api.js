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
router.post(
  "/upload-file-multer",
  AuthMiddleware,
  uploads.single("file"),
  Controller.uploadMulter
);

//Create Blog
router.post(
  "/create-blog",
  AuthMiddleware,
  SectionController.CreateBlogController
);
router.post(
  "/update-blog/:id",
  AuthMiddleware,
  SectionController.UpdateBlogController
);
router.get(
  "/delete-blog/:id",
  AuthMiddleware,
  SectionController.DeleteBlogController
);

router.get("/read-blog", SectionController.ReadBlogController);
//get blog for homepage
router.get("/read-blog-home", SectionController.GetBlogHomeController);
router.get(
  "/read-single-blog/:slug",
  SectionController.ReadSingleBlogController
);

// Create Slider
router.post(
  "/create-slider",
  AuthMiddleware,
  SectionController.CreateSliderController
);

router.get("/read-slider", SectionController.ReadSliderController);

// Create Team
router.post(
  "/create-team",
  AuthMiddleware,
  SectionController.CreateTeamController
);
router.post(
  "/update-team/:id",
  AuthMiddleware,
  SectionController.UpdateTeamController
);
router.get(
  "/delete-team/:id",
  AuthMiddleware,
  SectionController.DeleteTeamController
);

router.get("/read-team", SectionController.ReadTeamController);

//Create Services
router.post(
  "/create-service",
  AuthMiddleware,
  SectionController.CreateServiceController
);
router.get(
  "/delete-service/:id",
  AuthMiddleware,
  SectionController.DeleteServiceController
);

router.get("/read-service", SectionController.ReadServiceController);

// Create Contact
router.post("/create-contact", SectionController.CreateContactController);

router.get(
  "/read-contact",
  AuthMiddleware,
  SectionController.ReadContactController
);

export default router;
