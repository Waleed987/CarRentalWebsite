const Car = require('../models/Car-model');

const getCarInfoById = async(req,res)=>{
    try {
        const id = req.param.id;
        const car = await Car.findOne({id});
        if(!car){
            return res.status(500).json({msg:"Car not found"});
        }
        return res.status(200).json(car);
    } catch (error) {
        console.log(error);
    }
};

const getAllCarInfo = async(req,res)=>{
    
    try {
        const car = await Car.find();
        if(!car){
            return res.status(500).json({msg:"Not found"});
        }
        return res.status(200).json(car);
        
    } catch(error) {
        console.log(error);
    }
};

module.exports = {getCarInfoById,getAllCarInfo};