const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GarmentSchema = new Schema({
  type: {
    type: String,
    required: [true, "Type of garment is required"],
  },
  img: {
    type: String,
    required: [true, "Image is required"],
  },
});

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  garments: [GarmentSchema],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
