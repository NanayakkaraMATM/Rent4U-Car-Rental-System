const mongoose = require('mongoose')
const User = require('./User')

const brandSchema = new mongoose.Schema({
    brand_name:{
        type: String,
        default: ""
    },
    creation_date:{
        type:Date
    },
    updation_date:{
        type:Date
    },
   
},{
    timestamps:true
})

module.exports = mongoose.model('Brand', brandSchema);
