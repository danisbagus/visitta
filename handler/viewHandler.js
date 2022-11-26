export default () => {
  const register = (req, res) => {
    res.render("users/register");
  };

  return { register };
};
