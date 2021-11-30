const mongoose = require('mongoose');

const client = new mongoose.Schema({
    firstName: {
        type: String,
        rquired:true,

    },
    lastName: {
        type: String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    }
    
})
    

module.exports = mongoose.model("Client",client);