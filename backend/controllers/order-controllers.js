const Order = require('../models/Order-model');
const mongoose = require('mongoose');
const postOrder = async (req, res) => {
    try {
      const data = req.body;
  
      // Optional: Validate required fields
      if (!data.firstname || !data.lastname || !data.email || !data.car) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      const order = new Order({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        area: data.area,
        car: {
          ...data.car,
          _id: new mongoose.Types.ObjectId(data.car._id) // Ensure correct ObjectId format
        },
        carId: data.carId
      });
  
      const savedOrder = await order.save();
      res.status(201).json(savedOrder);
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

const getOrder = async(req,res)=>{
    console.log("hello");
};


module.exports = {postOrder,getOrder};