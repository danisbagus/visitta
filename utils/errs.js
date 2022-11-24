const newBadRequestError = (message) => {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
};

const newUnexpectedError = (message) => {
  const error = new Error(message);
  error.statusCode = 500;
  return error;
};

const newUnauthorizedError = (message) => {
  const error = new Error(message);
  error.statusCode = 401;
  return error;
};

export default {
  badRequestError: newBadRequestError,
  unexpectedError: newUnexpectedError,
  unauthorizedError: newUnauthorizedError,
};
