import errs from "../utils/errs.js";

export default (spotRepository) => {
  const getList = async () => {
    const spots = await spotRepository.findAll();
    return spots;
  };

  const getDetail = async (id) => {
    const spot = await spotRepository.findOneByID(id);

    if (!spot) {
      throw errs.badRequestError("spot not found");
    }

    return spot;
  };

  return { getList, getDetail };
};
