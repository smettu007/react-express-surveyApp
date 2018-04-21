const passport = require("passport");

module.exports = (app) => {
  //login url
  app.get("/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //redirect url handler
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get('/api/current_user',(req,res)=>{

    // res.send(req.user)
    res.send(req.session)

  })

  app.get('/api/logout',(req,res)=>{

    req.logout();//passport attaches logout to req
    res.send(req.user)
  })
};
