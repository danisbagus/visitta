import config from "./app.js";

import { dirname } from "path";

import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = `${__dirname}/../databases/visitta.db`;

export default {
  development: {
    dialect: "sqlite",
    // storage: `databases/${config.dbName}.db`,
    storage: dbPath,
  },
  test: {
    dialect: "sqlite",
    storage: dbPath,
  },
  production: {
    dialect: "sqlite",
    storage: dbPath,
  },
};
