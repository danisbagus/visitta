import express from "express";
import multer from "multer";
import userRepository from "../repository/userRepository.js";
import spotRepository from "../repository/spotRepository.js";
import reviewRepository from "../repository/reviewRepository.js";
import imageRepository from "../repository/imageRepository.js";
import userService from "../service/userService.js";
import spotService from "../service/spotService.js";
import reviewService from "../service/reviewService.js";
import userHandler from "../handler/userHandler.js";
import spotHandler from "../handler/spotHandler.js";
import authMiddleware from "./middleware/auth.js";
import resHandling from "./middleware/resHandling.js";
import db from "../models/index.js";
import cloudinary from "../utils/cloudinary.js";

const upload = multer({ storage: cloudinary.storage });

export default (app) => {
  const _userRepository = userRepository(db);
  const _spotRepository = spotRepository(db);
  const _reviewRepository = reviewRepository(db);
  const _imageRepository = imageRepository(db);

  const _userService = userService(_userRepository);
  const _spotService = spotService(_spotRepository, _imageRepository);
  const _reviewService = reviewService(_reviewRepository);

  const _userHandler = userHandler(_userService);
  const _spotHandler = spotHandler(_spotService, _reviewService);

  // VIEW ROUTE
  const viewRoute = express.Router();
  viewRoute.get("/", homeView);
  viewRoute.get("/register", _userHandler.registerView);
  viewRoute.get("/login", _userHandler.loginView);
  viewRoute.get("/logout", _userHandler.logoutView);
  viewRoute.get("/spot", _spotHandler.listView);
  viewRoute.get("/spot/new", _spotHandler.newView);
  viewRoute.get("/spot/:id/edit", _spotHandler.editView);
  viewRoute.get("/spot/:id", _spotHandler.detailView);

  app.use("/", viewRoute);

  // API ROUTE
  const apiRoute = express.Router();
  apiRoute.use(resHandling);

  // user
  apiRoute.post("/user/register", _userHandler.register);
  apiRoute.post("/user/login", _userHandler.login);
  apiRoute.get("/user/claim", authMiddleware, _userHandler.getClaim);

  // spot
  apiRoute.get("/spot", _spotHandler.getList);
  apiRoute.get("/spot/update/:id", _spotHandler.getDetail);
  apiRoute.get("/spot/:id", _spotHandler.getDetail);
  apiRoute.post(
    "/spot",
    authMiddleware,
    upload.array("images"),
    _spotHandler.insert
  );
  apiRoute.post(
    "/spot/update/:id",
    authMiddleware,
    upload.array("images"),
    _spotHandler.update
  );
  apiRoute.post("/spot/delete/:id", authMiddleware, _spotHandler.remove);
  apiRoute.post("/spot/:id/review", authMiddleware, _spotHandler.insertReview);
  apiRoute.post(
    "/spot/:id/delete-review/:review_id",
    authMiddleware,
    _spotHandler.removeReview
  );

  app.use("/api", apiRoute);
};

const homeView = (req, res) => {
  res.render("home");
};
