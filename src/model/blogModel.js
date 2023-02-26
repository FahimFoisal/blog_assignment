const mongoose = require('mongoose');


const blogSchema = mongoose.Schema({
    Title: {type: String},
    Content: {type: String},
    Date: {type: Date, default: Date.now()}
},{versionKey: false});

const blogModel = mongoose.model("blogPosts", blogSchema);

module.exports = blogModel;