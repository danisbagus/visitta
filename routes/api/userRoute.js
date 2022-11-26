import express from "express";
import userRepository from "../../repository/userRepository.js";
import userService from "../../service/userService.js";
import userHandler from "../../handler/userHandler.js";
import authMiddleware from "./middleware/auth.js";

export default (db) => {
  const router = express.Router();
  const repository = userRepository(db);
  const service = userService(repository);
  const handler = userHandler(service);

  router.post("/register", handler.register);
  router.post("/login", handler.login);
  router.get("/claim", authMiddleware, handler.getClaim);

  return router;
};
