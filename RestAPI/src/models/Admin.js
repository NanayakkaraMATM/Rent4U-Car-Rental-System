const mongoose =require('mongoose');

const adminSchema = new mongoose.Schema({

    fName:{
        type:String,
        required:true,
        min:3,
        max:255
    },
    lName:{
        type:String,
        required:false,
        min:3,
        max:255
    },
    email:{
        type:String,
        required:true,
        max:255,
        unique:true
    },
    password:{
        type:String,
        required:true,
        max:1024,
        
         
    },
    mobileNumber:{
        type:String,
        required:true,
        max:11,
        min:10
    },
    regDate:{
        type:Date,
        default:Date.now,
       
    },
    role:{
        type:String,
        default:'admin'
    }
})

module.exports = mongoose.model('Admin',adminSchema);