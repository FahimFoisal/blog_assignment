const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    let token = req.headers['token-key'];
    jwt.verify(token,"blogsite",(err,decoded) => {
        if (err) {
            res.status(401).json({status:"fail", data: "Unauthorized"});
        }
        else {
            let email = decoded['data']['Email'];
            let author = decoded['data']['UserName'];
            req.headers.Email = email;
            req.headers.Author = author;
            next();
        }
    })
}