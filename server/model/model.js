const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        default:"-",
        type:String,
    },
    address:{
        type:String,
        default:"-"
    },
    debit:{
        type:String,
        default:"-"
    },
    credit:{
        type:String,
        default:"-"
    },
    advance:{
        type:String,
        default:"-"
    },
    loan:{
        type:String,
        default:"-"
    },
    liability:{
        type:String,
        default:"-"
    },
    remark:{
        type:String,
        default:"-"
    },
})

const Userdb = mongoose.model('userdb',schema);
module.exports =Userdb