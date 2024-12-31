

require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/mongodb'); // Assuming MongoDB connection setup is in this file
const connectCloudinary=require('./config/cloudinary')

const adminRouter = require('./routes/adminRoute'); // Import the admin router
const doctorRouter = require('./routes/doctorRoute');
const userRouter = require('./routes/userRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
connectCloudinary()

// Routes
app.use('/api/admin', adminRouter);
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

const port = process.env.PORT||3000;

app.listen(port, () => {
    console.log(`Prescripto server running on port: ${port} and waiting for client requests!`);
});

// Test API route
app.get('/', (req, res) => {
    res.status(200).send('API WORKING');
});
