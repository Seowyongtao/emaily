const mongoose = require("mongoose");
const { Schema } = mongoose; //this is the same as Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String
});

//create a collection called "users", and uses userSchema for this collection
mongoose.model('users',userSchema);
