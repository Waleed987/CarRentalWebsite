const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order-controllers');

router.route('/orders').get(orderController.getOrder);
router.route('/orderinfo').post(orderController.postOrder);

module.exports = router;
