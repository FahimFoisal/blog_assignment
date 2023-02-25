const model = require("../model/blogModel");

exports.CreatePost = ((req,res) => {
    let blogData = req.body;
    model.create(blogData,(err,data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err});
        }
        else {
            res.status(200).json({status: "success", data: data});
        }
    })
})

exports.ReadPost = ((req,res) => {
    model.find({},{},(err,data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err});
        }
        else {
            res.status(200).json({status: "success", data: data});
        }
    })
})

exports.UpdatePost = ((req,res) => {
    let reqBody = req.body;
    let id = req.params.id;
    model.updateOne({_id:id},reqBody,(err,data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err});
        }
        else {
            res.status(200).json({status: "success", data: data});
        }
    })
})

exports.DeletePost = ((req,res) => {
    let id = req.params.id;
    model.deleteOne({_id:id},(err,data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err});
        }
        else {
            res.status(200).json({status: "success", data: data});
        }
    })
})