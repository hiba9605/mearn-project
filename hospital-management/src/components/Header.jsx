// // import React from 'react'
// // import groupprofiles from '../assets/group_profiles.png'
// // import arrowicon from '../assets/arrow_icon.svg'
// // import headerimg from '../assets/header_img.png'

// // const Header = () => {
// //   return (
// //     <div  className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
// //         <div  className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
// //             <p style={{marginLeft:'-300px'}}  className='md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointments <br /> With Trusted Doctors</p>
        
// //            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light' style={{marginLeft:'-300px'}}>
// //             <img className='w-28'  src={groupprofiles} alt="" />
// //             <p>Simply browse through our extensive list of trusted doctors , <br className='hidden sm:block' /> schedulrd your appointment hassled free </p>
// //            </div>
// //          <a style={{marginLeft:'-300px'}} className='flex items:center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">
// //             Book appointment <img className='w-3' style={{marginTop:'5px'}} src={arrowicon} alt="" />
// //             </a>
// //         </div>
       

// //         <div className='md:w-1/2 relative '>
// //             <img style={{marginLeft:'600px'}} className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={headerimg} alt="" />
// //         </div>
// //     </div>
// //   )
// // }

// // export default Header




// import React from 'react';
// import groupprofiles from '../assets/group_profiles.png';
// import arrowicon from '../assets/arrow_icon.svg';
// import headerimg from '../assets/header_img.png';

// const Header = () => {
//   return (
//     <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
//       {/* Text Content Section */}
//       <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]">
//         <p className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
//           Book Appointments <br /> With Trusted Doctors
//         </p>

//         <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
//           <img className="w-28" src={groupprofiles} alt="Group Profiles" />
//           <p className="text-center md:text-left">
//             Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" /> schedule your appointment hassle-free.
//           </p>
//         </div>

//         <a
//           className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
//           href="#speciality"
//         >
//           Book appointment
//           <img className="w-3 mt-1" src={arrowicon} alt="Arrow Icon" />
//         </a>
//       </div>

//       {/* Image Section */}
//       <div className="md:w-1/2 relative flex justify-center md:justify-end">
//         <img
//           className="w-3/4 md:w-full lg:w-4/5 md:absolute bottom-0 h-auto rounded-lg"
//           src={headerimg}
//           alt="Header Image"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;




// import React from 'react';
// import groupprofiles from '../assets/group_profiles.png';
// import arrowicon from '../assets/arrow_icon.svg';
// import headerimg from '../assets/header_img.png';

// const Header = () => {
//   return (
//     <div className="flex flex-col md:flex-row-reverse flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
//       {/* Text Content Section */}
//       <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]">
//         <p className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
//           Book Appointments <br /> With Trusted Doctors
//         </p>

//         <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
//           <img className="w-28" src={groupprofiles} alt="Group Profiles" />
//           <p className="text-center md:text-left">
//             Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" /> schedule your appointment hassle-free.
//           </p>
//         </div>

//         <a
//           className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
//           href="#speciality"
//         >
//           Book appointment
//           <img className="w-3 mt-1" src={arrowicon} alt="Arrow Icon" />
//         </a>
//       </div>

//       {/* Image Section */}
//       <div className="md:w-1/2 flex justify-center md:justify-start items-center">
//         <img
//           className="w-3/4 md:w-full lg:w-4/5 h-auto max-h-[500px] rounded-lg"
//           src={headerimg}
//           alt="Header Image"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;




import React from 'react';
import groupprofiles from '../assets/group_profiles.png';
import arrowicon from '../assets/arrow_icon.svg';
import headerimg from '../assets/header_img.png';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-start items-center">
        <img
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg"
          src={headerimg}
          alt="Header Image"
        />
      </div>

      {/* Text Content Section */}
      <div className="md:w-1/2 flex flex-col items-start md:items-start justify-center gap-4 md:gap-6 py-6">
        <p className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointments With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-white text-sm font-light">
          <img className="w-20 md:w-24" src={groupprofiles} alt="Group Profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
        </div>

        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
          href="#speciality"
        >
          Book appointment
          <img className="w-3 mt-1" src={arrowicon} alt="Arrow Icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;





