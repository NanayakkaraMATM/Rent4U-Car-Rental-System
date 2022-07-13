const express = require('express')
const cors = require("cors");
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 5000
const connectDB = require('./DBConnection/conn')
const dotenv = require('dotenv');

const CarmanagementRoute = require("./Routers/CarmanagementRoute")
const UserRoute = require("./Routers/UserRoute.js");
const authRoute = require('./Routers/auth')
const bookingRoute =require('./Routers/booking');
const usersRoute = require('./Routers/user')
const bookingsRoute = require('./Routers/booking')
const newBookingRoute = require('./Routers/newbooking')
const brandRoute = require('./Routers/brand')

dotenv.config()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

// load routes
app.use(CarmanagementRoute)
app.use("/User",UserRoute);
app.use("/users", usersRoute)
app.use("/newbooking", newBookingRoute)
app.use("/brands", brandRoute)


app.get('/CarManagement', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    })

// db connection
connectDB()

//Admin Route middlewares
app.use('/api/user',authRoute)
//app.use('/api/booking',bookingRoute)


app.listen(port,() =>{
    console.log(`connection is setup at Port ${port}`)
})