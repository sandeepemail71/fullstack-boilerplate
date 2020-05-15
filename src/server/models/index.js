const mongoose = require('mongoose');


const test = new mongoose.Schema({
    Maximum_Voltage: Number,
    Minimum_Voltage: Number,
    Average_Volatage: Number,
    Maximum_Current: Number,
    Minimum_Current: Number,
    Average_Current: Number,
    Power: Number,
    Timestamp_of_Data_Looging: Date,
    clientName: String
});



const Test = mongoose.model("Test", test);

exports.Test = Test;

