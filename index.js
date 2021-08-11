const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys.js");
require("./models/User");
require("./services/passport");


mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 *60 *60 * 1000, //this is the code that allow the cookie to last for 30 days
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

//only run this codes when it is in production mode
if(process.env.NODE_ENV === "production"){

  //Express will serve up production assets
  //like our Main.js file,or main.css file
  app.use(expess.static("client/build"));

  //Express will serve up the index.html file
  //if it doesn't recognise the route
  const path = require("path");
  app.get("*",(req,res) => {
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
  });

}

const PORT = process.env.PORT || 5000; //if there is no variable for p.e.PORT then listen to port 5000
app.listen(PORT);
