import userRoutes from "./userRoute.js";
import connectDb from "../utils/db.js";
import resHandling from "./middleware/resHandling.js";

export default async (app, express) => {
  const db = await connectDb();

  app.use(resHandling);
  app.use("/api/user", userRoutes(express, db));
};
