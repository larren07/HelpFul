const mongoose = require('mongoose');

const help = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        uniqure:true,
    },
    password:{
        type:String,
        required: true,
    },
    volunteerId:{
        type:String,
        required:true,
    },
    helpType:{
        type:String,
        required:true,
    }
    
})
    

module.exports = mongoose.model("Help",help);