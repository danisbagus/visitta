export default (spotService) => {
  const getList = async (req, res) => {
    try {
      const spots = await spotService.getList();
      return res.sendSuccess("successfully get spot", spots, 200);
    } catch (error) {
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const ListView = async (req, res) => {
    let spots = [];
    try {
      spots = await spotService.getList();
    } catch (error) {
      req.flash("error", error.message);
    }
    return res.render("spot/list", { spots });
  };
  return { getList, ListView };
};
