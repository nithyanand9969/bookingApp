const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Mongo DB Connect ${mongoose.connection.host}`.bgCyan,
      colors.bgMagenta
    );
  } catch (error) {
    console.log(`mongose Server issue ${error}`.bgRed.bgWhite);
  }
};

module.exports = connectDB;
