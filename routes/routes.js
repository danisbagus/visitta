import userRoutes from "./userRoute.js";
import viewRoutes from "./viewRoute.js";

import resHandling from "./middleware/resHandling.js";
import db from "../models/index.js";

export default async (app, express) => {
  app.use(resHandling);

  app.get("/", (req, res) => {
    res.render("home");
  });

  app.use("/view", viewRoutes(express));

  app.use("/api/user", userRoutes(express, db));
};
