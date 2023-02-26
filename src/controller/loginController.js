const jwt = require('jsonwebtoken');
const profileModel = require('../model/profileModel');

// exports.createToken = ((req,res) => {
//     let 
//     let Payload = {
//         exp: Math.floor(Date.now()/1000)+(60*60),
//         data:{ugv: "fffffff"}
//     }
//     let Token = jwt.sign(Payload,"blogsite");
//     res.send(Token)
// })

exports.userLogin = ((req,res) => {
    let email = req.body['Email'];
    let password = req.body['Password'];
    profileModel.find({Email:email, Password: password}, (err,data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err});
        }
        else {
            if(data.length > 0) {
                let Payload = {
                    exp: Math.floor(Date.now()/1000)+(60*60),
                    data: data[0]
                }
                let Token = jwt.sign(Payload,"blogsite");
                res.status(200).json({status: 'success', token: Token, data:data});
            }
            else {
                res.status(401).json({status: 'fail', data: "Unauthorized"});
            }
        }
    })
})