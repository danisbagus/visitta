import express from "express";
import viewHandler from "../../handler/viewHandler.js";

export default () => {
  const router = express.Router();
  const handler = viewHandler();

  router.get("/", handler.home);
  router.get("/register", handler.register);
  router.get("/login", handler.login);

  return router;
};
