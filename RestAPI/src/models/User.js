const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type:String,
        required: true
        
    },
    nic: {
        type:String,
        required: true,
                
    },
    email: {
        type:String,
        required: true,
        
    },
    password: {
        type:String,
        required: true
    },
   
   
   
}) 


// encrypt user password

UserSchema.pre("save", async function (next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// decrypt password
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User =  mongoose.model('User', UserSchema);

module.exports = User;