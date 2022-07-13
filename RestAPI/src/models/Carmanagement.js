const mongoose = require('mongoose')
const validator = require('validator') 

const carManagementSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique:[true, "this number is already exist"],
        validate(value){
            if (!validator.isEmail(value)){
                 throw new Error("this Registration number is not valid")
            }
        }
    },
    brand: {
        type:String,
        required: true
    },
    price: {
        type:String,
        required: true
    },
    fuel: {
        type:String,
        required: true
    },
    model: {
        type:String,
        required: true
    },
    pic:{
        type:String,
        default:""
    }
}) 

const CarManagement = new mongoose.model('Carmanagement', carManagementSchema);

module.exports = CarManagement;