module.exports = function (err, req, res, next){
    console.log(err.stack);
    res.status(errorCode|| 500).json({
        ok: false,
        message: err.message || 'Internal Server Error'
    });
};

