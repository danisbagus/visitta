export default (userService) => {
  // API
  const register = async (req, res) => {
    const { name, email, password } = req.body;
    const { isRedirect } = req.query;

    const role = "user";
    try {
      const user = await userService.register(name, email, password, role);

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
      const loginData = await userService.login(email, password);
      if (isRedirect) {
        req.session.user = loginData.user;
        req.flash("success", `Welcome back, ${loginData.user.name}`);

        const redirectUrl = req.session.returnTo || "/spot";
        delete req.session.returnTo;

        return res.redirect(redirectUrl);
      }

      res.sendSuccess("successfully login", loginData, 200);
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

  // VIEW
  const registerView = (req, res) => {
    res.render("register");
  };

  const loginView = (req, res) => {
    res.render("login");
  };

  const logoutView = (req, res) => {
    req.session.destroy();
    res.redirect("/");
  };

  return { register, login, getClaim, registerView, loginView, logoutView };
};
