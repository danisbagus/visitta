export default (spotService, reviewService) => {
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
      filename: f.filename,
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

  const update = async (req, res) => {
    const { title, location, description, deleteImages } = req.body;
    const { isRedirect } = req.query;
    const spotID = req.params.id;

    let uploadImages = req.files.map((f) => ({
      url: f.path,
      filename: f.filename,
    }));

    const formUpdate = {
      spotID,
      title,
      description,
      location,
      uploadImages,
      deleteImages,
    };

    try {
      await spotService.update(formUpdate);

      if (isRedirect) {
        req.flash("success", "Successfully update spot");
        return res.redirect("/spot");
      }

      return res.sendSuccess("successfully update spot", null, 200);
    } catch (error) {
      if (isRedirect) {
        req.flash("error", error.message);
        return console.log(error.message);
        // return res.redirect("/spot/edit");
      }
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const remove = async (req, res) => {
    const { isRedirect } = req.query;
    const spotID = req.params.id;

    try {
      await spotService.remove(spotID);

      if (isRedirect) {
        req.flash("success", "Successfully delete spot");
        return res.redirect("/spot");
      }

      return res.sendSuccess("successfully delete spot", null, 200);
    } catch (error) {
      if (isRedirect) {
        req.flash("error", error.message);
        return console.log(error.message);
        // return res.redirect("/spot/edit");
      }
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const insertReview = async (req, res) => {
    const { rating, body } = req.body;
    const { isRedirect } = req.query;

    const userID = req.user.id;
    const spotID = req.params.id;

    try {
      await reviewService.insert(userID, spotID, body, rating);

      if (isRedirect) {
        req.flash("success", "Successfully submit review");
        return res.redirect(`/spot/${spotID}`);
      }

      return res.sendSuccess("successfully insert review", null, 201);
    } catch (error) {
      if (isRedirect) {
        req.flash("error", error.message);
        return res.redirect(`/spot/${spotID}`);
      }
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const removeReview = async (req, res) => {
    const spotID = req.params.id;
    const reviewID = req.params.review_id;

    try {
      await reviewService.remove(reviewID);
      req.flash("success", "Successfully delete review");

      return res.redirect(`/spot/${spotID}`);
    } catch (error) {
      req.flash("error", error.message);
      return res.redirect(`/spot/${spotID}`);
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

  const editView = async (req, res) => {
    try {
      const id = req.params.id;
      const spot = await spotService.getDetail(id);
      return res.render("spot/edit", { spot });
    } catch (error) {
      req.flash("error", error.message);
      return res.redirect("spot/detail");
    }
  };

  return {
    getList,
    getDetail,
    insert,
    update,
    remove,
    insertReview,
    removeReview,
    listView,
    detailView,
    newView,
    editView,
  };
};
