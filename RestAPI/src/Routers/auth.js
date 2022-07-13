const router = require("express").Router();
const Admin = require("../models/Admin");
const ROLE = require('../models/ROLE')
const {authUser,authRole}=require('../Routers/verifyToken')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation')

//Admin Register Route

router.post("/register", async (req, res) => {
  //Validate data must be a save
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //If the user already in the DB
  const emailExists = await Admin.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email Already Exist!");

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Register New User
  const admin = new Admin({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    password: hashedPassword,
    mobileNumber: req.body.mobileNumber,
    
  });

  try {
    const savedAdmin = await admin.save();
    console.log(savedAdmin);
    res.json(savedAdmin);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Admin Login
router.post("/login",async (req, res) => {
  //Validate data must be a save
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

   //If the user already in the DB
   const admin = await Admin.findOne({ email: req.body.email });
   if (!admin) return res.status(400).send("Email is not found!");

   //Check password is correct
   const validPass = await bcrypt.compare(req.body.password,admin.password)
   if(!validPass) return res.status(400).send("Invalid Password!")

   //Create and assign a token
   const token = jwt.sign({_id:admin._id},process.env.TOKEN_SECRET)
   const data ={token:token,tokenType:'auth-token',role:admin.role}
   res.header('auth-token',token).send(token?data:null)

//    res.send("Logged in Success!")

});

module.exports = router;