export default (userService) => {
  const register = async (req, res) => {
    const { email, password } = req.body;
    const { isRedirect } = req.query;

    const role = "user";
    try {
      const user = await userService.register(email, password, role);

      if (isRedirect) {
        req.flash("success", "successfully register");
        return res.redirect("/login");
      }

      return res.sendSuccess("successfully register user", user, 201);
    } catch (error) {
      if (isRedirect) {
        req.flash("error", error.message);
        return res.redirect("/register");
      }

      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    const { isRedirect } = req.query;

    try {
      const tokenData = await userService.login(email, password);
      if (isRedirect) {
        req.flash("success", "welcome back!");
        const redirectUrl = req.session.returnTo || "/spots";
        delete req.session.returnTo;
        return res.redirect(redirectUrl);
      }

      res.sendSuccess("successfully login", tokenData, 200);
    } catch (error) {
      if (isRedirect) {
        req.flash("error", error.message);
        return res.redirect("/login");
      }

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
