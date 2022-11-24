export default (req, res, next) => {
  res.sendSuccess = (message, data = null, code = 200) => {
    return res.status(code).send({
      message,
      data,
    });
  };

  res.sendError = (message, data = null, code = 500) => {
    return res.status(code).send({
      message,
      data,
    });
  };

  return next();
};
