import userRoutes from "./userRoute.js";
import resHandling from "./middleware/resHandling.js";
import db from "../models/index.js";

export default async (app, express) => {
  app.use(resHandling);
  app.use("/api/user", userRoutes(express, db));
};
