import jwt from "jsonwebtoken";
import config from "../config/app.js";

const generateToken = (claims) => {
  return jwt.sign(claims, config.jwtSecret, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};

export default { generateToken, verifyToken };
