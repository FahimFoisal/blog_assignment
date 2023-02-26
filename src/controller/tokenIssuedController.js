const jwt = require('jsonwebtoken');

exports.createToken = ((req,res) => {
    let Payload = {
        exp: Math.floor(Date.now()/1000)+(60*60),
        data:{ugv: "fffffff"}
    }
    let Token = jwt.sign(Payload,"blogsite");
    res.send(Token)
})

exports.decodeToken = ((req,res) => {
    let token = req.headers['token-key'];
    jwt.verify(token,"blogsite",(err,decoded) => {
        if (err) {
            res.status(401).json({status:"fail", data: "Unauthorize"});
        }
        else {
            res.status(200).json({status:"success", data: decoded});
        }
    })
})