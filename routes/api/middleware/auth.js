import jwt from "../../../utils/jwt.js";

export default (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.sendError("token not found", null, 401);
  }

  if (token.split(" ")[0] !== "Bearer") {
    return res.sendError("invalid token format", null, 401);
  }

  try {
    const decoded = jwt.verifyToken(token.split(" ")[1]);
    req.user = decoded;
    return next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.sendError("token is expired", null, 401);
    }
    return res.sendError("invalid token", null, 401);
  }
};
