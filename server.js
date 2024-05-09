const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//
dotenv.config();
//data base connection
connectDB();

//rest Object

const app = express();

app.use(express.json());
app.use(moragan("dev"));

//routes

app.use("/api/v1/user", require("./routes/userRoutes"));
//listen
//port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `server running in ${process.env.PORT} ${process.env.DEV_MODE}`.bgBlue
      .bgWhite
  );
});
