import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import routes from "./routes/routes.js";
import config from "./config/app.js";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// HTTP request logger middleware
app.use(morgan("dev"));

routes(app, express);

app.listen(config.port, () => {
  console.log(`Running app on port ${config.port}`);
});
