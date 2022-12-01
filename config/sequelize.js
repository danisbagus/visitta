import config from "./app.js";

export default {
  development: {
    dialect: "sqlite",
    storage: `${config.dbName}.sqlite`,
  },
  test: {
    dialect: "sqlite",
    storage: `${config.dbName}.sqlite`,
  },
  production: {
    dialect: "sqlite",
    storage: `${config.dbName}.sqlite`,
  },
};
