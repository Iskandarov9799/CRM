const CustomError = require("../helpers/customError")

module.exports = function CustomErrorMiddleware(req, res, next){
    res.error = CustomError;
    next();
}