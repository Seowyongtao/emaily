const mongoose = require("mongoose");
const { Schema } = mongoose; //this is the same as Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String,
  credits:{ type:Number, default:0}
});

//create a collection called "users", and uses userSchema for this collection
mongoose.model('users',userSchema);
