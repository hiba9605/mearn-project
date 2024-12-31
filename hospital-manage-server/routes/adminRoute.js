// const express=require('express')
// const addDoctor=require('../controllers/adminController')
// const upload=require('../middlewares/multer')


// const adminRouter=express.Router()

// adminRouter.post('/add-doctor',upload.single('image'),addDoctor)


// module.exports=adminRouter


// const express = require('express');
// const addDoctor = require('../controllers/adminController');
// const upload = require('../middlewares/multer');

// const adminRouter = express.Router();

// adminRouter.post('/add-doctor', upload.single('image'), addDoctor);

// module.exports = adminRouter;


const express = require('express');
const { addDoctor,loginAdmin, allDoctors, appointmentAdmin, appointmentCancel, adminDashboard } = require('../controllers/adminController'); // Use destructuring for named exports
const upload = require('../middlewares/multer');
const authAdmin = require('../middlewares/authAdmin');
const { changeAvailabilty } = require('../controllers/doctorController');

const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailabilty)
adminRouter.get('/appointments',authAdmin,appointmentAdmin)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)

module.exports = adminRouter;
