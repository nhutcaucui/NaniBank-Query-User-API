function timeValidate(req, res, next) {
    let date = req.headers.date;
    console.log(date);
    
    next();
}

module.exports = timeValidate;