// // import React, { useState } from 'react'
// // import { NavLink, useNavigate } from 'react-router-dom'
// // import logo from '../assets/logo.svg'
// // import profilepic from '../assets/profile_pic.png'
// // import dropdown from '../assets/dropdown_icon.svg'
// // import menuicon from '../assets/menu_icon.svg'
// // import crossicon from '../assets/cross_icon.png'

// // const Navbar = () => {

// //     const navigate=useNavigate()

// //     const [showMenu,setShowMenu]=useState(false)
// //     const [token,setToken]=useState(true)

    
// //   return (
// //     <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
// //         <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={logo} alt="" />
// //         <ul className='hidden md:flex items-start gap-5 font-medium'>
// //             <NavLink to='/'>
// //                 <li className='py-1'>HOME</li>
// //                 <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
// //             </NavLink>
// //             <NavLink to='/doctors'>
// //                 <li className='py-1'>ALL DOCTORS</li>
// //                 <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />

// //             </NavLink>
// //             <NavLink to='/about'>
// //                 <li className='py-1'>ABOUT</li>
// //                 <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />

// //             </NavLink>
// //             <NavLink to='/contact'>
// //                 <li className='py-1'>CONTACT</li>
// //                 <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />

// //             </NavLink>
// //         </ul>
// //         <div className='flex items-center gap-4'>
// //             {
// //                 token 
// //                 ? <div className='flex items-center gap-2 cursor-pointer group relative'>
// //                     <img className='w-8 rounded-full' src={profilepic} alt="" />
// //                     <img className='w-2.5' src={dropdown} alt="" />
// //                     <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
// //                     <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
// //                         <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
// //                         <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
// //                         <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
// //                     </div>
// //                     </div>
// //                 </div>
// //                 : <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
// //             }

// //             <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={menuicon} alt="" />
// //             <div className={` ${showMenu? 'fixed w-full' : 'h-0 w-0'}md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
// //                 <div className='flex items-center justify-between px-5 py-6'>
// //                     <img className='w-36' src={logo} alt="" />
// //                     <img className='w-7' onClick={()=>setShowMenu(false)} src={crossicon} alt="" />
// //                 </div>
// //                 <ul>
// //                     <NavLink>Home</NavLink>
// //                     <NavLink>ALL DOCTORS</NavLink>
// //                     <NavLink>ABOUT</NavLink>
// //                     <NavLink>CONTACT</NavLink>
// //                 </ul>
// //             </div>
            
// //         </div>
// //     </div>
// //   )
// // }

// // export default Navbar




// // import React, { useState } from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import logo from '../assets/logo.svg';
// // import profilepic from '../assets/profile_pic.png';
// // import dropdown from '../assets/dropdown_icon.svg';
// // import menuicon from '../assets/menu_icon.svg';
// // import crossicon from '../assets/cross_icon.png';

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const [showMenu, setShowMenu] = useState(false);
// //   const [token, setToken] = useState(true);

// //   return (
// //     <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 border-b border-gray-400 bg-white">
// //       {/* Logo */}
// //       <img
// //         onClick={() => navigate('/')}
// //         className="w-44 cursor-pointer"
// //         src={logo}
// //         alt="Logo"
// //       />

// //       {/* Navigation Links for Desktop */}
// //       <ul className="hidden md:flex items-center gap-5 font-medium text-gray-700">
// //         <NavLink to="/" className="py-1 hover:text-primary">
// //           <li>HOME</li>
// //         </NavLink>
// //         <NavLink to="/doctors" className="py-1 hover:text-primary">
// //           <li>ALL DOCTORS</li>
// //         </NavLink>
// //         <NavLink to="/about" className="py-1 hover:text-primary">
// //           <li>ABOUT</li>
// //         </NavLink>
// //         <NavLink to="/contact" className="py-1 hover:text-primary">
// //           <li>CONTACT</li>
// //         </NavLink>
// //       </ul>

// //       {/* Profile Section */}
// //       <div className="flex items-center gap-4">
// //         {token ? (
// //           <div className="flex items-center gap-2 cursor-pointer group relative">
// //             <img
// //               className="w-8 h-8 rounded-full"
// //               src={profilepic}
// //               alt="Profile"
// //             />
// //             <img className="w-2.5" src={dropdown} alt="Dropdown Icon" />
// //             <div className="absolute top-12 right-0 text-base font-medium text-gray-600 bg-stone-100 rounded shadow-md hidden group-hover:block z-20">
// //               <div className="min-w-48 p-4 flex flex-col gap-4">
// //                 <p
// //                   onClick={() => navigate('/my-profile')}
// //                   className="hover:text-black cursor-pointer"
// //                 >
// //                   My Profile
// //                 </p>
// //                 <p
// //                   onClick={() => navigate('/my-appointments')}
// //                   className="hover:text-black cursor-pointer"
// //                 >
// //                   My Appointments
// //                 </p>
// //                 <p
// //                   onClick={() => setToken(false)}
// //                   className="hover:text-black cursor-pointer"
// //                 >
// //                   Logout
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <button
// //             onClick={() => navigate('/login')}
// //             className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block"
// //           >
// //             Create Account
// //           </button>
// //         )}

// //         {/* Hamburger Menu for Mobile */}
// //         <img
// //           onClick={() => setShowMenu(true)}
// //           className="w-6 cursor-pointer md:hidden"
// //           src={menuicon}
// //           alt="Menu Icon"
// //         />
// //       </div>

// //       {/* Mobile Menu */}
// //       <div
// //         className={`${
// //           showMenu ? 'fixed' : 'hidden'
// //         } top-0 right-0 w-full h-full bg-white z-20 transition-transform`}
// //       >
// //         <div className="flex items-center justify-between px-5 py-6">
// //           <img className="w-36" src={logo} alt="Logo" />
// //           <img
// //             className="w-7 cursor-pointer"
// //             onClick={() => setShowMenu(false)}
// //             src={crossicon}
// //             alt="Close Icon"
// //           />
// //         </div>
// //         <ul className="flex flex-col items-center gap-5 text-lg font-medium text-gray-700 mt-10">
// //           <NavLink
// //             to="/"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary"
// //           >
// //             HOME
// //           </NavLink>
// //           <NavLink
// //             to="/doctors"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary"
// //           >
// //             ALL DOCTORS
// //           </NavLink>
// //           <NavLink
// //             to="/about"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary"
// //           >
// //             ABOUT
// //           </NavLink>
// //           <NavLink
// //             to="/contact"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary"
// //           >
// //             CONTACT
// //           </NavLink>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;







// // import React, { useContext, useState } from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import logo from '../assets/logo.svg';
// // import profilepic from '../assets/profile_pic.png';
// // import dropdown from '../assets/dropdown_icon.svg';
// // import menuicon from '../assets/menu_icon.svg';
// // import crossicon from '../assets/cross_icon.png';
// // import { AppContext } from '../context/AppContext';

// // const Navbar = () => {
// //   const navigate = useNavigate();

// //   const {token,setToken}=useContext(AppContext)


// //   const [showMenu, setShowMenu] = useState(false);

// //   const logout=()=>{
// //     setToken(false)
// //     localStorage.removeItem('token')
// //   }

// //   return (
// //     <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 border-b border-gray-400 bg-white">
// //       {/* Logo */}
// //       <img
// //         onClick={() => navigate('/')}
// //         className="w-44 cursor-pointer"
// //         src={logo}
// //         alt="Logo"
// //       />

// //       {/* Navigation Links for Desktop */}
// //       <ul className="hidden md:flex items-center gap-5 font-medium text-gray-700">
// //         <NavLink to="/" className="py-1 hover:text-primary">
// //           <li>HOME</li>
// //         </NavLink>
// //         <NavLink to="/doctors" className="py-1 hover:text-primary">
// //           <li>ALL DOCTORS</li>
// //         </NavLink>
// //         <NavLink to="/about" className="py-1 hover:text-primary">
// //           <li>ABOUT</li>
// //         </NavLink>
// //         <NavLink to="/contact" className="py-1 hover:text-primary">
// //           <li>CONTACT</li>
// //         </NavLink>
// //         {/* Admin Button */}
// //         <button
// //           onClick={() => navigate('/admin')}
// //           className="bg-blue-500 text-white px-6 py-2 rounded-full font-light"
// //         >
// //           Admin
// //         </button>
// //       </ul>

// //       {/* Profile Section */}
// //       <div className="flex items-center gap-4">
// //         {token ? (
// //           <div className="flex items-center gap-2 cursor-pointer group relative">
// //             <img
// //               className="w-8 h-8 rounded-full"
// //               src={profilepic}
// //               alt="Profile"
// //             />
// //             <img className="w-2.5" src={dropdown} alt="Dropdown Icon" />
// //             <div className="absolute top-12 right-0 text-base font-medium text-gray-600 bg-stone-100 rounded shadow-md hidden group-hover:block z-20">
// //               <div className="min-w-48 p-4 flex flex-col gap-4">
// //                 <p
// //                   onClick={() => navigate('/my-profile')}
// //                   className="hover:text-black cursor-pointer"
// //                 >
// //                   My Profile
// //                 </p>
// //                 <p
// //                   onClick={() => navigate('/my-appointments')}
// //                   className="hover:text-black cursor-pointer"
// //                 >
// //                   My Appointments
// //                 </p>
// //                 <p
// //                   onClick={logout}
// //                   className="hover:text-black cursor-pointer"
// //                 >
// //                   Logout
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <button
// //             onClick={() => navigate('/login')}
// //             className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block"
// //           >
// //             Create Account
// //           </button>
// //         )}

// //         {/* Hamburger Menu for Mobile */}
// //         <img
// //           onClick={() => setShowMenu(true)}
// //           className="w-6 cursor-pointer md:hidden"
// //           src={menuicon}
// //           alt="Menu Icon"
// //         />
// //       </div>

// //       {/* Mobile Menu */}
// //       <div
// //         className={`${
// //           showMenu ? 'fixed' : 'hidden'
// //         } top-0 right-0 w-full h-full bg-white z-20 transition-transform`}
// //       >
// //         <div className="flex items-center justify-between px-5 py-6">
// //           <img className="w-36" src={logo} alt="Logo" />
// //           <img
// //             className="w-7 cursor-pointer"
// //             onClick={() => setShowMenu(false)}
// //             src={crossicon}
// //             alt="Close Icon"
// //           />
// //         </div>
// //         <ul className="flex flex-col items-center gap-5 text-lg font-medium text-gray-700 mt-10">
// //           <NavLink
// //             to="/"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary"
// //           >
// //             HOME
// //           </NavLink>
// //           <NavLink
// //             to="/doctors"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary"
// //           >
// //             ALL DOCTORS
// //           </NavLink>
// //           <NavLink
// //             to="/about"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary"
// //           >
// //             ABOUT
// //           </NavLink>
// //           <NavLink
// //             to="/contact"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary"
// //           >
// //             CONTACT
// //           </NavLink>
// //           <NavLink
// //             to="/admin"
// //             onClick={() => setShowMenu(false)}
// //             className="hover:text-primary text-blue-500"
// //           >
// //             ADMIN
// //           </NavLink>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;




// import React, { useContext, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.svg';
// import profilepic from '../assets/profile_pic.png';
// import dropdown from '../assets/dropdown_icon.svg';
// import menuicon from '../assets/menu_icon.svg';
// import crossicon from '../assets/cross_icon.png';
// import { AppContext } from '../context/AppContext';






// const Navbar = () => {
//   const navigate = useNavigate();
//   const { token, setToken,userData } = useContext(AppContext);
//   const [showMenu, setShowMenu] = useState(false);

//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 border-b border-gray-400 bg-white">
//       <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={logo} alt="Logo" />

//       <ul className="hidden md:flex items-center gap-5 font-medium text-gray-700">
//         <NavLink to="/" className="py-1 hover:text-primary"><li>HOME</li></NavLink>
//         <NavLink to="/doctors" className="py-1 hover:text-primary"><li>ALL DOCTORS</li></NavLink>
//         <NavLink to="/about" className="py-1 hover:text-primary"><li>ABOUT</li></NavLink>
//         <NavLink to="/contact" className="py-1 hover:text-primary"><li>CONTACT</li></NavLink>
//         <button onClick={() => navigate('/admin')} className="bg-blue-500 text-white px-6 py-2 rounded-full font-light">Admin</button>
//       </ul>

//       <div className="flex items-center gap-4">
//         {token  && userData ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 h-8 rounded-full" src={userData.image} alt="" />
//             <img className="w-2.5" src={dropdown} alt="Dropdown Icon" />
//             <div className="absolute top-12 right-0 text-base font-medium text-gray-600 bg-stone-100 rounded shadow-md hidden group-hover:block z-20">
//               <div className="min-w-48 p-4 flex flex-col gap-4">
//                 <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
//                 <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
//                 <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button onClick={() => navigate('/login')} className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block">Create Account</button>
//         )}
//         <img onClick={() => setShowMenu(true)} className="w-6 cursor-pointer md:hidden" src={menuicon} alt="Menu Icon" />
//       </div>

//       {showMenu && (
//         <div className="fixed top-0 right-0 w-full h-full bg-white z-20">
//           <div className="flex items-center justify-between px-5 py-6">
//             <img className="w-36" src={logo} alt="Logo" />
//             <img className="w-7 cursor-pointer" onClick={() => setShowMenu(false)} src={crossicon} alt="Close Icon" />
//           </div>
//           <ul className="flex flex-col items-center gap-5 text-lg font-medium text-gray-700 mt-10">
//             <NavLink to="/" onClick={() => setShowMenu(false)} className="hover:text-primary">HOME</NavLink>
//             <NavLink to="/doctors" onClick={() => setShowMenu(false)} className="hover:text-primary">ALL DOCTORS</NavLink>
//             <NavLink to="/about" onClick={() => setShowMenu(false)} className="hover:text-primary">ABOUT</NavLink>
//             <NavLink to="/contact" onClick={() => setShowMenu(false)} className="hover:text-primary">CONTACT</NavLink>
//             {/* <NavLink to="/admin" onClick={() => setShowMenu(false)} className="hover:text-primary text-blue-500">ADMIN</NavLink> */}
//             {/* <a onClick={() => setShowMenu(false)}  href="http://localhost:5174">Admin</a> */}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Navbar;




// // import React, { useContext, useState } from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import logo from '../assets/logo.svg';
// // import profilepic from '../assets/profile_pic.png';
// // import dropdown from '../assets/dropdown_icon.svg';
// // import menuicon from '../assets/menu_icon.svg';
// // import crossicon from '../assets/cross_icon.png';
// // import { AppContext } from '../context/AppContext';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { token, setToken, userData } = useContext(AppContext);
//   const [showMenu, setShowMenu] = useState(false);

//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 border-b border-gray-400 bg-white">
//       <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={logo} alt="Logo" />

//       <ul className="hidden md:flex items-center gap-5 font-medium text-gray-700">
//         <NavLink to="/" className="py-1 hover:text-primary"><li>HOME</li></NavLink>
//         <NavLink to="/doctors" className="py-1 hover:text-primary"><li>ALL DOCTORS</li></NavLink>
//         <NavLink to="/about" className="py-1 hover:text-primary"><li>ABOUT</li></NavLink>
//         <NavLink to="/contact" className="py-1 hover:text-primary"><li>CONTACT</li></NavLink>
//       </ul>

//       <div className="flex items-center gap-4">
//         {token && userData ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 h-8 rounded-full" src={userData.image} alt="" />
//             <img className="w-2.5" src={dropdown} alt="Dropdown Icon" />
//             <div className="absolute top-12 right-0 text-base font-medium text-gray-600 bg-stone-100 rounded shadow-md hidden group-hover:block z-20">
//               <div className="min-w-48 p-4 flex flex-col gap-4">
//                 <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
//                 <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
//                 <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button onClick={() => navigate('/login')} className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block">Create Account</button>
//         )}
//         <img onClick={() => setShowMenu(true)} className="w-6 cursor-pointer md:hidden" src={menuicon} alt="Menu Icon" />
//       </div>

//       {showMenu && (
//         <div className="fixed top-0 right-0 w-full h-full bg-white z-20">
//           <div className="flex items-center justify-between px-5 py-6">
//             <img className="w-36" src={logo} alt="Logo" />
//             <img className="w-7 cursor-pointer" onClick={() => setShowMenu(false)} src={crossicon} alt="Close Icon" />
//           </div>
//           <ul className="flex flex-col items-center gap-5 text-lg font-medium text-gray-700 mt-10">
//             <NavLink to="/" onClick={() => setShowMenu(false)} className="hover:text-primary">HOME</NavLink>
//             <NavLink to="/doctors" onClick={() => setShowMenu(false)} className="hover:text-primary">ALL DOCTORS</NavLink>
//             <NavLink to="/about" onClick={() => setShowMenu(false)} className="hover:text-primary">ABOUT</NavLink>
//             <NavLink to="/contact" onClick={() => setShowMenu(false)} className="hover:text-primary">CONTACT</NavLink>
//             <a onClick={() => setShowMenu(false)} href="http://localhost:5174">Admin</a>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import profilepic from '../assets/profile_pic.png';
import dropdown from '../assets/dropdown_icon.svg';
import menuicon from '../assets/menu_icon.svg';
import crossicon from '../assets/cross_icon.png';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 border-b border-gray-400 bg-white">
      <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={logo} alt="Logo" />

      <ul className="hidden md:flex items-center gap-5 font-medium text-gray-700">
        <NavLink to="/" className="py-1 hover:text-primary"><li>HOME</li></NavLink>
        <NavLink to="/doctors" className="py-1 hover:text-primary"><li>ALL DOCTORS</li></NavLink>
        <NavLink to="/about" className="py-1 hover:text-primary"><li>ABOUT</li></NavLink>
        <NavLink to="/contact" className="py-1 hover:text-primary"><li>CONTACT</li></NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 h-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={dropdown} alt="Dropdown Icon" />
            <div className="absolute top-12 right-0 text-base font-medium text-gray-600 bg-stone-100 rounded shadow-md hidden group-hover:block z-20">
              <div className="min-w-48 p-4 flex flex-col gap-4">
                <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block">Create Account</button>
        )}
        <img onClick={() => setShowMenu(true)} className="w-6 cursor-pointer md:hidden" src={menuicon} alt="Menu Icon" />
      </div>

      {showMenu && (
        <div className="fixed top-0 right-0 w-full h-full bg-white z-20">
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={logo} alt="Logo" />
            <img className="w-7 cursor-pointer" onClick={() => setShowMenu(false)} src={crossicon} alt="Close Icon" />
          </div>
          <ul className="flex flex-col items-center gap-5 text-lg font-medium text-gray-700 mt-10">
            <NavLink to="/" onClick={() => setShowMenu(false)} className="hover:text-primary">HOME</NavLink>
            <NavLink to="/doctors" onClick={() => setShowMenu(false)} className="hover:text-primary">ALL DOCTORS</NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)} className="hover:text-primary">ABOUT</NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(false)} className="hover:text-primary">CONTACT</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

