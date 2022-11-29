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

  const insert = async (req, res) => {
    const { title, location, description } = req.body;
    const { isRedirect } = req.query;

    const userID = req.user.id;

    let uploadImages = req.files.map((f) => ({
      url: f.path,
      filename: f.uploadImages,
    }));

    try {
      await spotService.insert(
        userID,
        title,
        description,
        location,
        uploadImages
      );

      if (isRedirect) {
        req.flash("success", "Successfully insert a new spot");
        return res.redirect("/spot");
      }

      return res.sendSuccess("successfully insert new spot", null, 201);
    } catch (error) {
      if (isRedirect) {
        req.flash("error", error.message);
        return res.redirect("/spot/new");
      }
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const listView = async (req, res) => {
    let spots = [];
    try {
      spots = await spotService.getList();
    } catch (error) {
      req.flash("error", error.message);
    }
    return res.render("spot/list", { spots });
  };

  const detailView = async (req, res) => {
    try {
      const id = req.params.id;
      const spot = await spotService.getDetail(id);
      return res.render("spot/detail", { spot });
    } catch (error) {
      req.flash("error", error.message);
      return res.redirect("/spot");
    }
  };

  const newView = async (req, res) => {
    return res.render("spot/new");
  };

  return { getList, getDetail, insert, listView, detailView, newView };
};
