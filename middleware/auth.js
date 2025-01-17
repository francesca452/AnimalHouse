const jwt = require("jsonwebtoken")
const ErrorResponse = require("../utils/errorResponse")
const User = require("../models/user")
const config = require('../config/database')

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    //(es) token della seguente forma: "Bearer hgwd7qfe7ggf72fb98"
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.user = user;
    next();
    
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this router", 401));
  }
};