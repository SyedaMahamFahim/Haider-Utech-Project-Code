const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "configuration/config.env" });

const URL = process.env.DB_URL;
const connectDatabase = () => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((error) => {
      console.log("Something went wrong due to this error: ", error);
    });
};

module.exports = connectDatabase;
