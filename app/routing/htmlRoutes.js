//Use path package to get correct file path for our html
var path = require("path");

module.exports = function(app) {

  //Display survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};

