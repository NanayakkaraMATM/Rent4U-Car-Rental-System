const Joi = require('@hapi/joi')

//Register Validation
const registerValidation = (data) =>{
    const Schema = Joi.object({
        fName:Joi.string().min(3).required(),
        lName:Joi.string().min(3).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(3).required(),
        mobileNumber:Joi.string().min(10).max(11).required(),
        // homeNumber: Joi.string().min(10).max(11).required(),
        // role:Joi.string().min(3).required()
    });

    return Schema.validate(data)
}

//Login Validation
const loginValidation = (data)=>{
    const Schema = Joi.object({
       
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(3).required(),
      
    });

    return Schema.validate(data)
}

//Add bokking validation
const addBookingValidation = (data)=>{
    const Schema = Joi.object({
        brand:Joi.string().min(3).required(),
        vehicle:Joi.string().min(3).required(),
        user:Joi.string().min(3).required(),
        contact:Joi.string().min(3).required(),
        handoverDate:Joi.string().required(),
        returnDate:Joi.string().required(),
 
   
    });

    return Schema.validate(data)
}


module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;
module.exports.addBookingValidation=addBookingValidation;
