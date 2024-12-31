// const express = require('express');
// const { registerUser, loginUser, getProfile, updateProfile } = require('../controllers/userController'); // Use destructuring for named exports
// const authUser = require('../middlewares/authUser');
// const { single,upload } = require('../middlewares/multer');
// // const upload=require('../middlewares/multer')

// const userRouter=express.Router()


// userRouter.post('/register',registerUser)
// userRouter.post('/login',loginUser)

// userRouter.get('/get-profile',authUser,getProfile)


// userRouter.post('/update-profile',upload,single('image'),authUser,updateProfile)




// module.exports = userRouter;






const express = require('express');
const {registerUser,loginUser,getProfile,updateProfile, bookAppointment, listAppointment, cancelAppointment,} = require('../controllers/userController'); // Use destructuring for named exports
const authUser = require('../middlewares/authUser');
const upload = require('../middlewares/multer');

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/get-profile', authUser, getProfile);
userRouter.post('/update-profile', authUser, upload.single('image'), updateProfile);
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)

module.exports = userRouter;

