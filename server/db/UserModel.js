const mongoose = require("./index");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    password: {type: String, required: true}
});

const user = mongoose.model("user",userSchema);

module.exports = user;