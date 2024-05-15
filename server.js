const express = require("express");

const app = express();
app.use(express.static("public"));

const { bootstrapApp } = require('./app/bootstrap');

bootstrapApp(app);

app.listen(80, () => {
  console.log("Server is running on port http://localhost:80");
});


