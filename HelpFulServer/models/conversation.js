const mongoose = require('mongoose');

const conversation = new mongoose.Schema({
    member:{
        type:Array,
    },
});
    

module.exports = mongoose.model("Conversation",conversation);