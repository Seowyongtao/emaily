const express = require("express");
const app = express();

app.get("/",(req,res) => {
  res.send({"hello":"hello"});
});


const PORT = process.env.PORT || 5000; //if there is no variable for p.e.PORT then listen to port 5000
app.listen(PORT);