const router = require("express").Router()
const {getBrandById, getBrands, createBrand, updateBrand, deleteBrand} = require('../controllers/brandController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getBrands)
router.route('/create').post(createBrand)
router.route('/:id').get(getBrandById).put(updateBrand).delete(deleteBrand)

module.exports = router