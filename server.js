const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
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

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `server running in ${process.env.PORT} ${process.env.DEV_MODE}`.bgBlue
      .bgWhite
  );
});
