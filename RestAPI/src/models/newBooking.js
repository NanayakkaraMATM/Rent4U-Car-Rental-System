const mongoose = require('mongoose')
const User = require('./User')

const newBookingSchema = new mongoose.Schema({
    name:{
        type: String,
        default: ""
    },
    contact_no:{
        type:Number
    },
    email:{
        type:String,
        default:""
    },
    location:{
        type:String,
        default:false
    },
    handover_date:{
        type:Date
    },
    handover_time:{
        type:String
    },
    return_date:{
        type:Date
    },
    isCancelled:{
        type:Boolean,
        default: false
    },
    isConfirmed:{
        type:Boolean,
        default:false
    },
    brand:{
        type:String,
        default:''
    }
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:"User"
    // },
    // car:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"Carmanagement"
    // }
   
},{
    timestamps:true
})

module.exports = mongoose.model('newBooking',newBookingSchema);