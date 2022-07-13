const router = require('express').Router();
let Booking = require("./../models/Booking");



router.route("/book").post((req,res) =>{
    const name = req.body.name ;
    const contact_no = req.body.contact_no ;
    const handover_date = req.body.handover_date ;
    const  return_date = req.body. return_date ;


    const NewBooking = new Booking({
        name,
        contact_no,
        handover_date,
        return_date

    })

NewBooking.save().then(()=>{
    res.json("Booking Added")
}).catch(()=>{
    console.log(err);
})

})

router.route("/displaybook").get((req,res) =>{
    
    Booking.find().then((booking)=>{
        res.json(booking)
    }).catch((err)=>{
        console.log(err);
    })

    })

    router.route("/updatebook/:id").put(async(req,res)=>{
        let bookingId = req.params.id;
        const{name,contact_no,handover_date,return_date} =req.body;

        const updateBooking = {
            name,
            contact_no,
            handover_date,
            return_date
        }
        const update = await Booking.findByIdAndUpdate(bookingId,updateBooking)
        .then(()=>{
            res.status(200).send({status : "Booking updated" })
         }).catch((err)=>{
             console.log(err);
             res.status(500).send({status : "Error in updating booking data"});
         })
        })


      

        

module.exports = router;




