
const mongoose = require('mongoose');
const carSchema = require('./Car-model');
const orderSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    area: String,
    car: Object,
    carId: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

const Order = new mongoose.model('Order',orderSchema);
module.exports = Order;

