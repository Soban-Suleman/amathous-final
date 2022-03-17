import mongoose from "mongoose";
import config from "../config/index.js";
import chalk from "chalk";

const dbConnection = async () => {
  try {
    await mongoose.connect(
      config.MONGO_URI || process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      () => {
        console.log(chalk.bold.green("✓"), chalk.yellow("Db Connected"));
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
