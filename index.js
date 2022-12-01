import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import ejsMate from "ejs-mate";
import flash from "connect-flash";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/routes.js";
import config from "./config/app.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const secret = config.jwtSecret;
const oneDay = 1000 * 60 * 60 * 24;

const sessionConfig = {
  name: "session",
  secret,
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
};

// // code for testing db on prod
// const db = await connectToDB();

// const insertdata = () =>
//   db.exec(
//     ` INSERT INTO users values ('testing1', '085', 'user', '123', '111')`
//   );

// const getusers = () => db.get("SELECT count(*), * FROM users");

// import connectToDB from "./db/index.js";

// const handleTesting = async (req, res) => {
//   try {
//     await insertdata();
//     const userdata = await getusers();
//     console.log(userdata);

//     return res.status(200).send({ message: "success", data: userdata });
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).send({ message: error.message });
//   }
// };

// app.get("/testing", handleTesting);

// // end of code for testing db on prod

// template engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// cookie parser middleware
app.use(cookieParser());

// HTTP request logger middleware
app.use(morgan("dev"));

// session
app.use(session(sessionConfig));

// storing message with session
app.use(flash());

// static file
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.currentUser = req.session.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// routes
routes(app);

app.listen(config.port, () => {
  console.log(`Running app on port ${config.port}`);
});
