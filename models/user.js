const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const crypto = require('crypto')
const config = require('../config/database')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide username"],
    },
    email: {
        type: String,
        required: [true, "Please provide email address"],
        unique: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
        ],
    },
      password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

//pre saving function
userSchema.pre("save", async function(next){
  if(!this.isModified("password")){    //se la passw passata non è stata modificata non sarà ri-criptata
    next()
  }

  const salt = await bcrypt.genSalt(10)  
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

userSchema.methods.matchPasswords = async function (password) { //riceve la passw estratta dal body dell'utente e la compara con quella nel db
  return await bcrypt.compare(password, this.password);         //this.password si riferisce al campo passw di qualsiasi userSchema stiua eseguendo questa funzione 
};

userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRE,
  });
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // 10 min

  return resetToken;
};


module.exports = mongoose.model('User', userSchema)