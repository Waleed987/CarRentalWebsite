const mongoose = require('mongoose');
const Car = require('../models/Car-model');

mongoose.connect('mongodb://localhost:27017/cars', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');

 await Car.deleteMany({});
  const dummyCars = [
    {
      imageUrl:"/src/assets/car1.jpeg",  
      name: "Ford_Transit",
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
      imageUrl: "/src/assets/BugattiTourbillon.jpg",
      name: "Bugatti_Tourbillon",
      pricePerDay: 4500,
      currency: "Euro",
      mileage: "250 km/day",
      deposit: 10000,
      class: "Hypercar",
      gearbox: "Automatic",
      maxPassengers: 2,
      fuel: "Hybrid",
      fuelUsage: 12.0,
      engineCapacity: 8000,
      maxLuggage: 1,
      doors: 2,
      minDriverAge: 30,
      year: 2025,
      features: ["A/C", "Air Bags", "Central Locking", "Launch Control", "Adaptive Cruise Control", "Carbon Ceramic Brakes"]
    }
    
    ,
    {
      imageUrl: "/src/assets/bugatti_chiron.png",
      name: "Bugatti_Chiron",
      pricePerDay: 6000,
      currency: "Euro",
      mileage: "250 km/day",
      deposit: 15000,
      class: "Hypercar",
      gearbox: "Automatic",
      maxPassengers: 2,
      fuel: "Petrol",
      fuelUsage: 15.0,
      engineCapacity: 8000,
      maxLuggage: 1,
      doors: 2,
      minDriverAge: 30,
      year: 2021,
      features: ["A/C", "Carbon Ceramic Brakes", "Launch Control"]
    },
    {
      imageUrl: "/src/assets/la_voiture.png",
      name: "Bugatti_Tourbillon",
      pricePerDay: 6500,
      currency: "Euro",
      mileage: "250 km/day",
      deposit: 16000,
      class: "Hypercar",
      gearbox: "Automatic",
      maxPassengers: 2,
      fuel: "Hybrid",
      fuelUsage: 12.0,
      engineCapacity: 8000,
      maxLuggage: 1,
      doors: 2,
      minDriverAge: 30,
      year: 2025,
      features: ["A/C", "Hybrid Drive", "Luxury Interior", "Digital Display"]
    },
    {
      imageUrl: "/src/assets/bugattiDivo.jpg",
      name: "Bugatti_Divo",
      pricePerDay: 6300,
      currency: "Euro",
      mileage: "200 km/day",
      deposit: 15500,
      class: "Hypercar",
      gearbox: "Automatic",
      maxPassengers: 2,
      fuel: "Petrol",
      fuelUsage: 16.0,
      engineCapacity: 8000,
      maxLuggage: 1,
      doors: 2,
      minDriverAge: 30,
      year: 2020,
      features: ["A/C", "Track-Tuned", "Luxury Finish"]
    },
  ];
  

  await Car.insertMany(dummyCars);
  console.log('Dummy cars inserted');
  mongoose.connection.close();
}).catch(err => console.error(err));
