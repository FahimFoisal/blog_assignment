const registrationModel = require('../model/profileModel');

exports.newRegistration = ((req,res) => {
    let newUser = req.body;
    registrationModel.create(newUser,(err,data)=> {
        if (err) {
            res.status(400).json({status: "fail", data: err});
        }
        else {
            res.status(200).json({status: "success", data: data});
        }
    })
});