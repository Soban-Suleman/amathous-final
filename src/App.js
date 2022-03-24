// @Importing Modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./db/connection.js";
import morgan from "morgan";
import apiRouter from "./routes/index.js";
import chalk from "chalk";
import path from "path";

//@Defining PORT
const PORT = process.env.PORT || 3000;

//@ config.env
dotenv.config();

//@initializing App
const app = express();

//@Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//@Routes
app.use("/api", apiRouter);

app.use("/", express.static(path.join(__dirname, "../client/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(
    chalk.bold.red(`ERROR MESSAGE: `),
    chalk.bold.blue(`${err.message}`)
  );
  // console.log(chalk.bold.red(`ERROR STACK: `), `${err.stack}`);
  console.log(chalk.red("Shutting Down Server due to Uncaught Exception"));
  process.exit(1);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(
    chalk.bold.red(`ERROR MESSAGE: `),
    chalk.bold.blue(`${err.message}`)
  );
  // console.log(chalk.bold.red(`ERROR STACK: `), `${err.stack}`);
  console.log(
    chalk.bold.red(
      "Shutting down the server due to Unhandled Promise rejection"
    )
  );
  process.exit(1);
});

//@Starting Server
app.listen(PORT, (err) => {
  if (err) console.log(chalk.bold.red(`${err.message}`), err);
  console.log(
    chalk.bold.green("✓"),
    chalk.bold.green(`Server Running on`),
    chalk.underline.bold.blue(`http://localhost:${PORT}/`)
  );
});

// @Connecting to Database
dbConnection();
