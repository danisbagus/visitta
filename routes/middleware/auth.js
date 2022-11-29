import jwt from "../../utils/jwt.js";

export default (req, res, next) => {
  let token = req.session.token;

  if (typeof token == "undefined") {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res.sendError("token not found", null, 401);
    }

    if (authHeader.split(" ")[0] !== "Bearer") {
      return res.sendError("invalid token format", null, 401);
    }

    token = authHeader.split(" ")[1];
  }

  try {
    const decoded = jwt.verifyToken(token);
    req.user = decoded;
    return next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.sendError("token is expired", null, 401);
    }
    return res.sendError("invalid token", null, 401);
  }
};
