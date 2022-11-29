export default (reviewService) => {
  const create = async (req, res) => {
    const { rating, body, spot_id } = req.body;
    const userID = req.user.id;

    try {
      await reviewService.create(userID, spot_id, body, rating);
      return res.sendSuccess("successfully create review", null, 201);
    } catch (error) {
      return res.sendError(error.message, null, error.statusCode);
    }
  };

  const submit = async (req, res) => {
    const { rating, body } = req.body;
    const userID = req.session.user.id;
    const spotID = req.params.id;

    try {
      await reviewService.create(userID, spotID, body, rating);
      req.flash("success", "Successfully submit review");
      return res.redirect(`/spot/${spotID}`);
    } catch (error) {
      req.flash("error", error.message);
      return res.redirect(`/spot/${spotID}`);
    }
  };

  const remove = async (req, res) => {
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

  return { create, submit, remove };
};
