import * as dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME || "auth",
  jwtSecret: process.env.JWT_SECRET || "jwtsecret",
};
