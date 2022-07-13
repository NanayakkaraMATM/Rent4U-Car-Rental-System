const Brand = require("../models/Brand");
const asyncHandler = require("express-async-handler");
// const {roles} = require('../roles')

// get all brands

const getBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
});

// get brand by ID

const getBrandById = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params.id);

  if (brand) {
    res.json(brand);
  } else {
    res.status(400).json({ message: "Brand not found" });
  }
});

// create a brand

const createBrand = asyncHandler(async (req, res) => {
  const { brand_name, creation_date, updation_date } = req.body;

  if (!brand_name || !creation_date || !updation_date) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const brand = new Brand({
      brand_name,
      creation_date,
      updation_date,

      //   user: req.user._id
    });

    const createdBrand = await brand.save();

    res.status(201).json(createdBrand);
  }
});

// update a brand

const updateBrand = asyncHandler(async (req, res) => {
  const { brand_name, creation_date, updation_date } = req.body;

  const brand = await Brand.findById(req.params.id);

  if (brand) {
    brand.brand_name = brand_name;
    brand.creation_date = creation_date;
    brand.updation_date = updation_date;

    const updatedBrand = await brand.save();
    res.json(updatedBrand);
  } else {
    res.status(404);
    throw new Error("Brand not found");
  }
});

// delete a brand

const deleteBrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params.id);

  if (brand) {
    await brand.remove();
    res.json({ message: "Brand removed" });
  } else {
    res.status(404);
    throw new Error("Brand not found");
  }
});

module.exports = {
  getBrandById,
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
};
