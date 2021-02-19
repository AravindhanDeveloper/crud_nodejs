const mongoose = require("mongoose");

const bookschema = new mongoose.Schema({
    Bookname:{
        type:String,
        required:true,
        trim:true
    },
    Page:{
        type:Number,
        required:true
    },  
    Author:{
        type:String,
        required:true
    },
publishedTime:{
    type:Date,
    default:Date.now
}
})
module.exports = mongoose.model("book",bookschema);