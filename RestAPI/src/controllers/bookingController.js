const newBooking = require("../models/newBooking");
const asyncHandler = require("express-async-handler");
// const {roles} = require('../roles')

// get all bookings

const getBookings = asyncHandler(async (req, res) => {
  const newbookings = await newBooking.find();
  res.json(newbookings);
});

// get booking by ID

const getBookingById = asyncHandler(async (req, res) => {
  const newbooking = await newBooking.findById(req.params.id);

  if (newbooking) {
    res.json(newbooking);
  } else {
    res.status(400).json({ message: "Booking not found" });
  }
});

// create a booking

const createBooking = asyncHandler(async (req, res) => {
  // console.log(req.user);
  console.log("one")
  console.log(req.body)
  console.log("two")
  const {
    name,
    contact_no,
    email,
    location,
    handover_date,
    handover_time,
    return_date,
    brand,
    vehicle
   
  } = req.body;

  
    console.log(req.user)
    const newbooking = new newBooking({
      name,
      contact_no,
      email,
      location,
      handover_date,
      handover_time,
      return_date,
      brand,
      vehicle
      // car: req.car._id
      //   user: req.user._id
    });

    console.log(newBooking)

    const createdBooking = await newbooking.save();

    res.status(201).json(createdBooking);
  
});

// update a booking
const updateBooking = asyncHandler(async (req, res) => {
  const {
    name,
    contact_no,
    email,
    location,
    handover_date,
    handover_time,
    return_date,
    isCancelled,
    isConfirmed,
  } = req.body;

  const newbooking = await newBooking.findById(req.params.id);
  console.log(newbooking)

  if (newbooking) {
    // newbooking.name = name;
    // newbooking.contact_no = contact_no;
    // newbooking.location = location;
    // newbooking.handover_date = handover_date;
    // newbooking.handover_time = handover_time;
    // newbooking.return_date = return_date;
    newbooking.isCancelled = true;
    // newbooking.isConfirmed = isConfirmed;


    const updatedBooking = await newbooking.save();
    console.log(updatedBooking)
    res.json(updatedBooking);
  } else {
    res.status(404);
    throw new Error("Booking not found");
  }
});

// update newbookings

const updateNewBooking = asyncHandler(async (req, res) => {
  const {
    name,
    contact_no,
    email,
    location,
    handover_date,
    handover_time,
    return_date,
    isCancelled,
    isConfirmed,
  } = req.body;

  const newbooking = await newBooking.findById(req.params.id);
  console.log(newbooking)

  if (newbooking) {
     newbooking.name = name;
     newbooking.contact_no = contact_no;
     newbooking.email = email;
    newbooking.location = location;
     newbooking.handover_date = handover_date;
     newbooking.handover_time = handover_time;
     newbooking.return_date = return_date;
    newbooking.isCancelled = true;
     newbooking.isConfirmed = isConfirmed;


    const updatedBooking = await newbooking.save();
    console.log(updatedBooking)
    res.json(updatedBooking);
  } else {
    res.status(404);
    throw new Error("Booking not found");
  }
});


const updateConfirmedBooking = asyncHandler(async (req, res) => {
  const {
    name,
    contact_no,
    email,
    location,
    handover_date,
    handover_time,
    return_date,
    isCancelled,
    isConfirmed,
  } = req.body;

  const newbooking = await newBooking.findById(req.params.id);
  console.log(newbooking)

  if (newbooking) {
    // newbooking.name = name;
    // newbooking.contact_no = contact_no;
    // newbooking.location = location;
    // newbooking.handover_date = handover_date;
    // newbooking.handover_time = handover_time;
    // newbooking.return_date = return_date;
    // newbooking.isCancelled = true;
    newbooking.isConfirmed = true;


    const updatedBooking = await newbooking.save();
    console.log(updatedBooking)
    res.json(updatedBooking);
  } else {
    res.status(404);
    throw new Error("Booking not found");
  }
});

// get canceled bookings

const getCancelledBookings = asyncHandler(async (req, res) => {
  const canceledbooking = await newBooking.find({ isCancelled: true });

  if (canceledbooking) {
    res.json(canceledbooking);
  } else {
    res.status(400).json({ message: "Booking not found" });
  }
});

// get confirmed bookings

const getConfirmededBookings = asyncHandler(async (req, res) => {
  const confirmedbooking = await newBooking.find({ isConfirmed: true });

  if (confirmedbooking) {
    res.json(confirmedbooking);
  } else {
    res.status(400).json({ message: "Booking not found" });
  }
});

// delete a booking

const deleteBooking = asyncHandler(async (req, res) => {
  const newbooking = await newBooking.findById(req.params.id);

  if (newbooking) {
    await newbooking.remove();
    res.json({ message: "Booking removed" });
  } else {
    res.status(404);
    throw new Error("Booking not found");
  }
})

module.exports = {
  getBookingById,
  getBookings,
  createBooking,
  updateBooking,
  getCancelledBookings,
  getConfirmededBookings,
  updateConfirmedBooking,
  deleteBooking,
  updateNewBooking
};
