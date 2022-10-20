const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: { type: String, unique: true },
    password: {type: String, required: true},
  },
  {
    collection: "UserInfo",
  }
);

UserDetailsScehma.methods.generateAuthToken = function(){
  const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET,{ expiresIn:"7d"})
  return token
};
mongoose.model("UserInfo", UserDetailsScehma);

const validate = (data) => {
  const schema = Joi.object({
    fname: Joi.string().required().label("First Name"),
    lname: Joi.string().required().label("Last Name"),
    email: Joi.string().required().label("Email address"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

