export default (userService) => {
  const register = async (req, res) => {
    const { email, password } = req.body;

    const role = "user";
    try {
      const user = await userService.register(email, password, role);
      return res.sendSuccess("successfully register user", user, 201);
    } catch (error) {
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const tokenData = await userService.login(email, password);
      res.sendSuccess("successfully login", tokenData, 200);
    } catch (error) {
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const getClaim = (req, res) => {
    try {
      const user = userService.getClaim(req.user);
      return res.sendSuccess("successfully get claim", user, 200);
    } catch (error) {
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  return { register, login, getClaim };
};
