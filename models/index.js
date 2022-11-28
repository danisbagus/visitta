import Sequelize from "sequelize";
import configs from "../config/sequelize.js";
import userModel from "./userModel.js";
import spotModel from "./spotModel.js";
import imageModel from "./imageModel.js";
import reviewModel from "./reviewModel.js";

const env = process.env.NODE_ENV || "development";
const config = configs[env];

const db = {};

const models = [userModel, spotModel, imageModel, reviewModel];

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

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
