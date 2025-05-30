const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/crud");

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const UserModel = mongoose.model("users", UserSchema);

// Home route added here
app.get("/", (req, res) => {
    res.send("Welcome to the User API");
});

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then(function(users) {
        res.json(users);
    }).catch(function(err) {
        console.log(err);
    });
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
