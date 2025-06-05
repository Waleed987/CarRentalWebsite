const mongoose = require('mongoose');
const Car = require('../models/Car-model');

mongoose.connect('mongodb://localhost:27017/cars', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');


  const dummyCars = [
    {
      pricePerDay: 97,
      currency: 'Euro',
      mileage: 'Unlimited',
      deposit: 500,
      class: 'Passenger Van',
      gearbox: 'Automatic',
      maxPassengers: 9,
      fuel: 'Diesel',
      fuelUsage: 8.2,
      engineCapacity: 2500,
      maxLuggage: 8,
      doors: 5,
      minDriverAge: 19,
      year: 2020,
      features: ['A/C', 'ABS', 'Air Bags', 'Central Locking', 'Electric Windows']
    },
    {
      pricePerDay: 65,
      currency: 'Euro',
      mileage: 'Unlimited',
      deposit: 300,
      class: 'Sedan',
      gearbox: 'Manual',
      maxPassengers: 5,
      fuel: 'Petrol',
      fuelUsage: 6.5,
      engineCapacity: 1600,
      maxLuggage: 4,
      doors: 4,
      minDriverAge: 21,
      year: 2019,
      features: ['A/C', 'Air Bags', 'Central Locking']
    },
    {
      pricePerDay: 80,
      currency: 'Euro',
      mileage: 'Unlimited',
      deposit: 400,
      class: 'SUV',
      gearbox: 'Automatic',
      maxPassengers: 7,
      fuel: 'Diesel',
      fuelUsage: 7.8,
      engineCapacity: 2200,
      maxLuggage: 6,
      doors: 5,
      minDriverAge: 23,
      year: 2021,
      features: ['A/C', 'ABS', 'Air Bags', 'Electric Windows']
    }
  ];

  await Car.insertMany(dummyCars);
  console.log('Dummy cars inserted');
  mongoose.connection.close();
}).catch(err => console.error(err));
