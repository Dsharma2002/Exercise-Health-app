require("dotenv").config();

const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Listening on port ", process.env.PORT);
});

app.get("/", (req, res) => {
    res.json({mssg: "Welcome to the App"});
})
