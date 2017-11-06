var db = require("../models");
var bCrypt = require('bcrypt-nodejs');
var passport   = require('passport');

module.exports = function(app){

    app.post("/login", passport.authenticate('local'), (req,res) =>{
              res.send(req.user);
          }
    );
    
    app.post("/newlogin", function(req,res){
        
        console.log(req.body);
      
    db.user_Stuff.create({
        userName : req.body.username,
        password : bCrypt.hashSync(req.body.password)
      }).then(function(){
        console.log("its done!!!");
      });
    });
}