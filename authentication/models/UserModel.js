const mongoose = require("mongoose");

const userSchems = {
    name: String,
    email: String,
    password: String,
    userRole:String
}

const Users = mongoose.model("Users", userSchems);

module.exports = Users;