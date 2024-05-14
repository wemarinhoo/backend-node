const express = require("express");

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", [
  "pages",
]);

app.get("/contato", (req, res) => {
  res.render("contato");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/users", (req, res) => {
  res.render("usuarios/lista");
});

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World Web Server! </h1>").status(200);
// });

app.listen(80, () => {
  console.log("Server is running on port http://localhost:80");
});


