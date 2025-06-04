const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User-model');

const registerUser = async (req, res) => {
    try {
      const { email, password,isAdmin } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
      }
  
      // Generate salt and hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create new user
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({msg:newUser,token: await newUser.generateToken(),userId: newUser._id.toString() });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Server error" });
    }
  };

const getLogin = async(req,res)=>{
    try {
    const {email,password,isAdmin} = req.body;
    const userExists = await User.findOne({email});
    if(!userExists){
        return res.status(400).json({msg:"Sign Up First"});
    }
    const isMatch = await bcrypt.compare(password,userExists.password);
    if(!isMatch){
        return res.status(400).json({msg:"Invalid Credentials"});
    }

    return res.status(200).json({msg:"Login Successful",token: await userExists.generateToken()});

    } catch (error) {
        console.log(error);
    }
};


module.exports = {getLogin,registerUser};