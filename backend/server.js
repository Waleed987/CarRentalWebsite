const express = require('express');
const app = express();
const connectDB = require("./utils/db");
const userRouter = require('./routes/auth-route');
const carRouter = require('./routes/car-route');
const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Vite's default port
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
  
app.use('/api/user',userRouter);
app.use('/api/cars',carRouter);

connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log('Server is running on port 5000');
    });
});