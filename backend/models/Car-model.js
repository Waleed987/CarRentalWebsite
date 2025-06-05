
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  imageUrl:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  pricePerDay: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
    type: String,
    default: 'Euro',
  },
  mileage: {
    type: String,
    default: 'Unlimited',
  },
  deposit: {
    type: Number,
    default: 0,
  },
  class: {
    type: String,
  },
  gearbox: {
    type: String,
    enum: ['Automatic', 'Manual'],
  },
  maxPassengers: {
    type: Number,
  },
  fuel: {
    type: String,
    enum: ['Diesel', 'Petrol', 'Electric', 'Hybrid'],
  },
  fuelUsage: {
    type: Number, // in L/100km
  },
  engineCapacity: {
    type: Number, // in CC
  },
  maxLuggage: {
    type: Number,
  },
  doors: {
    type: Number,
  },
  minDriverAge: {
    type: Number,
    default: 18,
  },
  year: {
    type: Number,
  },
  features: {
    type: [String],
  },
});

module.exports = mongoose.model('Car', carSchema);

const Car = new mongoose.model('Car',carSchema);

module.export = Car;