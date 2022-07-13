const express = require('express')
const CarManagement = require("./../models/Carmanagement")

const router = express.Router();

// create car

router.post("/Carmanagement", async (req,res)=>{
    console.log(req.body)
    const data = new CarManagement(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message:"car is not register successfully"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"car register successfully ",
            data:result
        })
    }
})

// fetch all cars

router.get('/get-all-cars', async(req, res) => {
    const cars = await CarManagement.find()
    res.json(cars)
})

// get all cars

router.get("/Carmanagement", async (req,res)=>{
    await CarManagement.find()
    .then(result => {
        if(!result){
            res.json({
                status:"FAILED",
                message:"zero records"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:`${result.length} cars found successfully`,
                data:result
            })
        }
    })
    .catch(error => {
        res.status(400).json({error: error})
    })
})

// get car by id

router.get("/Carmanagement/:id", async (req, res) => {
    const car = await CarManagement.findById(req.params.id)

    if(car) {
        res.json(car)
    } else {
        res.status(404)
        throw new Error("Car not found")
    }
})

// edit car

router.put("/Carmanagement/:id", async (req, res) => {
   
    console.log(req.body)

    const {title, email, brand, price, fuel, model } = req.body

    const car = await CarManagement.findById(req.params.id)

    if(car) {
       
        car.title = title
        car.email = email
        car.brand = brand
        car.price = price
        car.fuel = fuel
        car.model = model

        const updatedCar = await car.save()
        res.json(updatedCar)

        // res.json(car)
    } else {
        res.status(404)
        throw new Error("Car not found")
    }
})

// delete car

router.delete("/Carmanagement/:id", async (req, res) => {
    const car = await CarManagement.findById(req.params.id)

    console.log(req.params.id)

    if(car) {
        await car.remove()
        res.json({message: "Car removed"})
    } else {
        res.status(404)
        throw new Error("Car not found")
    }
})


module.exports = router