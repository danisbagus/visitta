export default (spotService) => {
  const getList = async (req, res) => {
    try {
      const spots = await spotService.getList();
      return res.sendSuccess("successfully get spot", spots, 200);
    } catch (error) {
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const getDetail = async (req, res) => {
    try {
      const id = req.params.id;
      const spot = await spotService.getDetail(id);
      return res.sendSuccess("successfully get spot", spot, 200);
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

  const DetailView = async (req, res) => {
    try {
      const id = req.params.id;
      const spot = await spotService.getDetail(id);
      return res.render("spot/detail", { spot });
    } catch (error) {
      req.flash("error", error.message);
      return res.redirect("/spot");
    }
  };

  return { getList, getDetail, ListView, DetailView };
};
