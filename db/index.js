import fs from "fs";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

sqlite3.verbose();

export default () => {
  console.log("connecting to db");
  const dbFilePath = `./testing.db`;

  if (fs.existsSync(dbFilePath)) {
    return open({
      filename: dbFilePath,
      driver: sqlite3.Database,
    });
  } else {
    console.log("db not exits");
    return open({
      filename: dbFilePath,
      driver: sqlite3.Database,
    }).then((db) => {
      createTable(db);
      return db;
    });
  }
};

const createTable = (db) => {
  db.exec(`
  CREATE TABLE users
  (
    name        VARCHAR(50),
    phone       VARCHAR(20),
    role        VARCHAR(10),
    password    VARCHAR(4),
    timestamp   INTEGER
  )
`);
};
