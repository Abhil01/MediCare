const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
      name:{
        type:String,
        required:true,
        minLength:1,
        maxLength:50
      },
      email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxLength:50,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email");
            }

        }

      },
      password:{
        type:String,
        required:true,
        maxLength:50,
        validate(value){
            if(!validator.isStrongPassword(value))
            {
                throw new Error("Not valid password");
            }
        }
      }
},{
    timestamps:true
});

const User = mongoose.model("User",userSchema);

module.exports = User;