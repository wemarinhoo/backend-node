
const webRoutes = require("../routes/web");

exports.bootstrapApp = function (app) {

  app.set("view engine", "ejs");
  app.set("views", [
    "pages",
  ]);

  app.use("/", webRoutes);
}
