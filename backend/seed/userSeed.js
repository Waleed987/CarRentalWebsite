const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User-model');

mongoose.connect('mongodb://localhost:27017/cars', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');

  // Check if test user already exists
  const existingUser = await User.findOne({ email: 'test@example.com' });
  
  if (existingUser) {
    console.log('Test user already exists');
    mongoose.connection.close();
    return;
  }

  // Generate salt and hash password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash('password123', saltRounds);

  // Create test user
  const testUser = new User({
    email: 'test@example.com',
    password: hashedPassword,
    isAdmin: false
  });

  await testUser.save();
  console.log('Test user created successfully');
  console.log('Email: test@example.com');
  console.log('Password: password123');
  
  mongoose.connection.close();
}).catch(err => console.error(err)); 