const express = require('express');
const { doctorList, loginDoctor, appointmentsDoctor,appointmentComplete, doctorDashboard, doctorProfile, updateDoctorProfile } = require('../controllers/doctorController'); // Use destructuring for named exports
const authDoctor = require('../middlewares/authDoctor');
const { appointmentCancel } = require('../controllers/adminController');



const doctorRouter=express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)
doctorRouter.get('/profile',authDoctor,doctorProfile)
doctorRouter.post('/update-profile',authDoctor,updateDoctorProfile)



module.exports = doctorRouter;
