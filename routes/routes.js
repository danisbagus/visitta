import express from "express";
import userRepository from "../repository/userRepository.js";
import spotRepository from "../repository/spotRepository.js";
import reviewRepository from "../repository/reviewRepository.js";
import userService from "../service/userService.js";
import spotService from "../service/spotService.js";
import reviewService from "../service/reviewService.js";
import userHandler from "../handler/userHandler.js";
import spotHandler from "../handler/spotHandler.js";
import reviewHandler from "../handler/reviewHandler.js";
import authMiddleware from "./middleware/auth.js";
import resHandling from "./middleware/resHandling.js";
import db from "../models/index.js";

export default (app) => {
  const _userRepository = userRepository(db);
  const _userService = userService(_userRepository);
  const _userHandler = userHandler(_userService);

  const _spotRepository = spotRepository(db);
  const _spotService = spotService(_spotRepository);
  const _spotHandler = spotHandler(_spotService);

  const _reviewRepository = reviewRepository(db);
  const _reviewService = reviewService(_reviewRepository);
  const _reviewHandler = reviewHandler(_reviewService);

  // VIEW ROUTE
  const viewRoute = express.Router();
  viewRoute.get("/", homeView);
  viewRoute.get("/register", _userHandler.registerView);
  viewRoute.get("/login", _userHandler.loginView);
  viewRoute.get("/logout", _userHandler.logoutView);
  viewRoute.get("/spot", _spotHandler.ListView);
  viewRoute.get("/spot/:id", _spotHandler.DetailView);
  viewRoute.post("/spot/:id/review", _reviewHandler.submit);
  viewRoute.post("/spot/:id/delete-review/:review_id", _reviewHandler.remove);

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
  apiRoute.get("/spot/:id", _spotHandler.getDetail);

  // review
  apiRoute.post("/review", authMiddleware, _reviewHandler.create);

  app.use("/api", apiRoute);
};

const homeView = (req, res) => {
  res.render("home");
};
