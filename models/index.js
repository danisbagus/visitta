import Sequelize from "sequelize";
import configs from "../config/sequelize.js";
import userModel from "./userModel.js";

const env = process.env.NODE_ENV || "development";
const config = configs[env];

const db = {};

const models = [userModel];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config);
}

models.map((initModel) => {
  const model = initModel(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
