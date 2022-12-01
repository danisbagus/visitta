import config from "./app.js";

export default {
  development: {
    dialect: "sqlite",
    storage: `databases/${config.dbName}.db`,
  },
  test: {
    dialect: "sqlite",
    storage: `databases/${config.dbName}.db`,
  },
  production: {
    dialect: "sqlite",
    storage: `databases/${config.dbName}.db`,
  },
};
