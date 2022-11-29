import crypto from "crypto";
import errs from "../utils/errs.js";

export default (ratingRepository) => {
  const insert = async (userID, spotID, body, rating) => {
    if (!userID) {
      throw errs.badRequestError("user id is required");
    }
    if (!spotID) {
      throw errs.badRequestError("spot id is required");
    }
    if (!rating) {
      throw errs.badRequestError("rating is required");
    }
    if (!(rating > 0 && rating <= 5)) {
      throw errs.badRequestError("rating must between 1-5");
    }

    const reviewID = crypto.randomUUID();
    const currentTime = new Date().getTime();

    const insertData = {
      id: reviewID,
      user_id: userID,
      spot_id: spotID,
      body,
      rating,
      timestamp: currentTime,
    };

    await ratingRepository.insert(insertData);

    return insertData;
  };

  const remove = async (reviewID) => {
    await ratingRepository.deleteByID(reviewID);
  };

  return { insert, remove };
};
