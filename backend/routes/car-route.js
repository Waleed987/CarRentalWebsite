const express = require('express');
const router = express.Router();
const carController = require('../controllers/car-controllers');

router.route('/carsinfo/:id').get(carController.getCarInfoById);
router.route('/carsinfo').get(carController.getAllCarInfo);

module.exports = router;