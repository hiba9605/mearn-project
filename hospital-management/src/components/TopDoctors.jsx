// import React from 'react'
// import { doctors } from '../assets/assets'

// const TopDoctors = () => {
//   return (
//     <div>
//         <h1>Top Doctors To Book</h1>
//         <p>Simply Browse through our extensive list of trusted doctors</p>
//         <div>
//             {
//                 doctors.slice(0,10).map((item,index)=>{
//                     <div>
//                         <img src={item.image} alt="" />
//                         <div>
//                             <div>
//                                 <p>Available</p>
//                             </div>
//                             <p>{item.name}</p>
//                             <p>{item.speciality}</p>
//                         </div>
//                     </div>

//                 })
//             }
//         </div>
//         <button>more</button>
//     </div>
//   )
// }

// export default TopDoctors

import React, { useContext } from 'react';
// import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const navigate=useNavigate()
    const {doctors}=useContext(AppContext)


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply Browse through our extensive list of trusted doctors</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 sm:px-0'>
        {doctors.slice(0, 10).map((item) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={item._id}>
            <img className='bg-blue-50' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className={`flex items-center gap-2  text-sm text-center ${item.available?' text-green-500':'text-gray-500'}`}>
               <p className={`w-2 h-2 ${item.available ? ' bg-green-500 ':'bg-gray-500'} rounded-full`}></p> <p>{item.available ? 'Available':'Not Available'}</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  );
};

export default TopDoctors;