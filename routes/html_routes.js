var path = require("path");
var passport = require('passport')



module.exports = function(app){  
  var IsAuthenticated = function(req, res, next){
    
    if(req.isAuthenticated()){
      next();
    } else {
      next(new Error(401));
    }
  }

  var destroySession = function(req, res, next) {
    req.logOut();
    req.session.destroy()
    res.redirect("/")
  }
    
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homePage.html"));
  });

  app.get("/main", IsAuthenticated,function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainView.html"));
  });
  app.get("/newLogin",function(req, res) {
    res.sendFile(path.join(__dirname, "../public/registerPage.html"));
  });

  app.get('/logout',destroySession);
}