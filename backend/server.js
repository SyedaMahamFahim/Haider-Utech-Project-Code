const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase=require('./database/connection')

dotenv.config({ path: "configuration/config.env" });

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


// Connecting to database
connectDatabase()