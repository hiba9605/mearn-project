import React from 'react'
// import generalphy from '../assets/general_physician.svg'
// import gynaco from '../assets/gynecologist.svg'
// import dermo from '../assets/dermatologist.svg'
// import pedi from '../assets/pediatricians.svg'
// import gastro from '../assets/gastroenterologist.svg'
// import neuro from '../assets/neurologist.svg'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'


const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 ' id='speciality'>
        <h1 className='text-3xl  font-medium'>Find By Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors , schedulrd your appointment hassled free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {/* <Link to={'/doctors/speciality'} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
            <img className='w-16 sm:w-24 mb-2' src={generalphy} alt="" />
            <p>General physician</p>
            </Link>

            <Link to={'/doctors/speciality'} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
            <img className='w-16 sm:w-24 mb-2' src={gynaco} alt="" />
            <p>Gynecologist</p>
            </Link>

            <Link to={'/doctors/speciality'} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
            <img className='w-16 sm:w-24 mb-2' src={dermo} alt="" />
            <p>Dermatologist</p>
            </Link>

            <Link to={'/doctors/speciality'} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
            <img className='w-16 sm:w-24 mb-2' src={pedi} alt="" />
            <p>Dermatologist</p>
            </Link>

            <Link to={'/doctors/speciality'} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
            <img className='w-16 sm:w-24 mb-2' src={neuro} alt="" />
            <p>gastroenterologist</p>
            </Link>

            <Link to={'/doctors/speciality'} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
            <img className='w-16 sm:w-24 mb-2' src={gastro} alt="" />
            <p>gastroenterologist</p>
            </Link>
             */}

             {
              specialityData.map((item,index)=>(
                <Link key={index} to={`/doctors/${item.speciality}`}>
                  <img src={item.image} alt="" />
                  <p>{item.speciality}</p>

                </Link>

              ))
             }

        </div>

    </div>
  )
}

export default SpecialityMenu




// import React from 'react';
// import { Link } from 'react-router-dom';
// import generalphy from '../assets/general_physician.svg';
// import gynaco from '../assets/gynecologist.svg';
// import dermo from '../assets/dermatologist.svg';
// import pedi from '../assets/pediatricians.svg';
// import gastro from '../assets/gastroenterologist.svg';
// import neuro from '../assets/neurologist.svg';

// const specialties = [
//   { name: 'General Physician', img: generalphy, path: '/doctors/speciality/general-physician' },
//   { name: 'Gynecologist', img: gynaco, path: '/doctors/speciality/gynecologist' },
//   { name: 'Dermatologist', img: dermo, path: '/doctors/speciality/dermatologist' },
//   { name: 'Pediatrician', img: pedi, path: '/doctors/speciality/pediatrician' },
//   { name: 'Gastroenterologist', img: gastro, path: '/doctors/speciality/gastroenterologist' },
//   { name: 'Neurologist', img: neuro, path: '/doctors/speciality/neurologist' },
// ];

// const SpecialityMenu = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-800 ' id='speciality'>
//       <h1 className='text-3xl font-medium'>Find By Speciality</h1>
//       <p className='sm:w-1/3 text-center text-sm'>
//         Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
//       </p>
//       <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
//         {specialties.map((specialty, index) => (
//           <Link
//           onClick={()=>scrollTo(0,0)}
//             key={index}
//             to={specialty.path}
//             className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
//           >
//             <img className='w-16 sm:w-24 mb-2' src={specialty.img} alt={specialty.name} />
//             <p>{specialty.name}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;
