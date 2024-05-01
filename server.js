const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World Web Server! </h1>").status(200);
});

app.listen(80, () => {
    console.log("Server is running on port 80");
});


