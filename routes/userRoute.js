import userRepository from "../repository/userRepository.js";
import userService from "../service/userService.js";
import userHandler from "../handler/userHandler.js";
import authMiddleware from "./middleware/auth.js";

export default (express, db) => {
  const router = express.Router();
  const _repository = userRepository(db);
  const _service = userService(_repository);
  const _handler = userHandler(_service);

  router.post("/register", _handler.register);
  router.post("/login", _handler.login);
  router.get("/claim", authMiddleware, _handler.getClaim);

  return router;
};
