const mongoose = require("mongoose");

const doctoreSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      require: [true, "First Name is Required "],
    },
    lastName: {
      type: String,
      require: [true, "Last is Required"],
    },
    phone: {
      type: String,
      require: [true, "phone is required"],
    },
    email: {
      type: String,
      require: [true, "email is Required"],
    },
    website: {
      type: String,
      require: [],
    },
    address: {
      type: String,
      requires: [true, "address is Requires"],
    },
    Specialization: {
      type: String,
      require: [true, "Specization is required"],
    },
    experience: {
      type: String,
      required: [true, "exprence is required"],
    },
    feesPer: {
      type: Number,
      required: [true, "fess is reuired "],
    },
    timings: {
      type: Object,
      required: [true, "work Timing is Required"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("users", doctoreSchema);

module.exports = doctorModel;
