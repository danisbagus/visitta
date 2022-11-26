import express from "express";
import userRoutes from "./userRoute.js";
import resHandling from "./middleware/resHandling.js";
import db from "../../models/index.js";

export default () => {
  const router = express.Router();

  router.use(resHandling);
  router.use("/user", userRoutes(db));

  return router;
};
