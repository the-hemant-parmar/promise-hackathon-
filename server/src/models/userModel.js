const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        userEmail: {
            type: String,
            required: true,
            max: 100,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
    },
    { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
