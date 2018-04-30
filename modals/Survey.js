const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipientSchema = require('./Recepient');

const surveySchema = new Schema({
    title: String,
    body:String,
    subject:String,
    recipients:[recipientSchema],
    yes:{type:Number,default:0},
    No:{type:Number,defalut:0},
    _user: {type:Schema.Types.ObjectId, ref:'User'},
    dateSent:Date,
    lastResponded:Date
})
mongoose.model('surveys',surveySchema);