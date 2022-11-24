import sqlite3 from "sqlite3";
import { open } from "sqlite";

import config from "../config/app.js";

sqlite3.verbose();

export default () => {
  console.log("connecting to db");
  const dbFilePath = `./databases/${config.dbName}.db`;

  return open({
    filename: dbFilePath,
    driver: sqlite3.Database,
  });
};
