const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Add the username"],
    },
    email: {
      type: String,
      required: [true, "Add the user email"],
      unique: [true, "Email already exist"],
    },
    password: {
      type: String,
      required: [true, "Add the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
