const validator=require('validator')
const bcrypt=require('bcrypt')
const userModel = require('../models/userModel')
const jwt=require('jsonwebtoken')
const { v2: cloudinary } = require('cloudinary');
const mongoose=require('mongoose')
const doctorModel=require('../models/doctorModel');
const appointment = require('../models/appointmentModel');
const appointmentModel=require('../models/appointmentModel')






// API to register user
exports.registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body

        if(!name || !password || !email){
            return res.json({success:false,message:"Missing Deatils"})
        }

        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter a valid email"})


        }


        // validating strong password
        if(password.length<8){
            return res.json({success:false,message:"Enter a strong password"})
        }

        // hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const userData={
            name,
            email,
            password:hashedPassword
        }


        const newUser=new userModel(userData)
        const user=await newUser.save() 


        const token=jwt.sign({id:user._id},process.env.JWT_SECRET)

        res.json({success:true,token})


    }catch(error){
        res.json({success:false,message:error.message})

    }
}



// API for user login
exports.loginUser=async (req,res)=>{
    try{

        const {email,password}=req.body
        const user=await userModel.findOne({email})

        if(!user){
           return res.json({success:false,message:'User does not exist'})
        }


        const isMatch=await bcrypt.compare(password,user.password)

        if(isMatch){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true,token})

        }else{
            res.json({success:false,message:"Invalid Credentials"})
        }

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}



// API to get user profile data
exports.getProfile=async(req,res)=>{

    try{
        const {userId}=req.body
        const userData=await userModel.findById(userId).select('-password')

        res.json({success:true,userData})

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})

    }
}


// API to update user profile
exports.updateProfile=async(req,res)=>{
    try{

        const {userId,name,phone,address,dob,gender}=req.body
        const imageFile=req.file 

        if(!name || !phone || !dob || !gender){
            return res.json({success:false,message:"Data Missing"})

        }

        await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})

        if(imageFile){
            // upload image to cloudinary
            const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL=imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageURL})
        }


        res.json({success:true,message:"Profile updated"})

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}


// API to appointment
exports.bookAppointment=async(req,res)=>{
    try{

        const {userId,docId,slotDate,slotTime}=req.body

        const docData=await doctorModel.findById(docId).select('-password')

        if(!docData.available){
            return res.json({success:false,message:'doctor not available'})
        }


        let slots_booked=docData.slots_booked

        // checking for slot availability
        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
                return res.json({success:false,message:'slot not available'})

            }else{
                slots_booked[slotDate].push(slotTime)
            }
        }else{
            slots_booked[slotDate]=[]
            slots_booked[slotDate].push(slotTime)
        }


        const userData=await userModel.findById(userId).select('-password')

        delete docData.slots_booked

        const appointmentData={
            userId,
            docId,
            userData,
            docData,
            amount:docData.fees,
            slotTime,
            slotDate,
            date:Date.now()
        }


        const newAppointment=new appointment(appointmentData)

        await newAppointment.save()

        // save new slots data in doctordata
        await doctorModel.findByIdAndUpdate(docId,{slots_booked})


        res.json({success:true,message:'appointment booked'})

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}


// Api to get user appointents
exports.listAppointment=async(req,res)=>{
    try {

        const {userId}=req.body
        const appointments=await appointmentModel.find({userId})

        res.json({success:true,appointments})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}


// cancel the appointment
exports.cancelAppointment=async(req,res)=>{
    try{

        const {userId,appointmentId}=req.body

        const appointmentData=await appointmentModel.findById(appointmentId)

        // verify appointment user
        if(appointmentData.userId!==userId){
            return res.json({success:false,message:'Unauthorized action'})

        }


        await appointmentModel.findByIdAndUpdate(appointmentId,{cancel:true})

        // releasing doctor slot

        const {docId,slotDate,slotTime}=appointmentData

        const doctorData=await doctorModel.findById(docId)

        let slots_booked=doctorData.slots_booked

        slots_booked[slotDate]=slots_booked[slotDate].filter(e=>e!=slotTime)

        await doctorModel.findByIdAndUpdate(docId,{slots_booked})

        res.json({success:true,message:'Appointment cancelled'})

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}



