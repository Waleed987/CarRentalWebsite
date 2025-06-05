const express = require('express');
const router = express.Router();
const carController = require('../controllers/car-controllers');

router.route('/:id',carController.getCarInfoById);
router.route('/carsInfo',carController.getAllCarInfo);

module.exports = router;