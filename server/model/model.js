const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    debit:{
        type:String,
    },
    credit:{
        type:String,
    },
    advance:{
        type:String,
    },
    loan:{
        type:String,
    },
    liability:{
        type:String,
    },
    remark:{
        type:String,
    },
})

const Userdb = mongoose.model('userdb',schema);
module.exports =Userdb