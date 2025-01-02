import React from 'react'
import './Navbar.css'
import Logo from '../../assets/lifelogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="#home" className="logo">
        <img src={Logo} alt="Logo"/>
      </a>
      <ul className='navbar__ul'>
      <li><a href="#home" className="nav-link">Home</a></li>
      <li><a href="#Our_features" className="nav-link">Features</a></li>
      <li><a href="#Insights" className="nav-link">About Us</a></li>
        <li>Consult a Doctor</li>
        <li><a href="#Insights" className="nav-link">Blog</a></li>
        <li><a href="#Footer" className="nav-link">Contact Us</a></li>
        <a href="#Sign"><button className='btn1'>Sign Up</button></a>
        <a href="#"><button className='btn2'>Book Appointment</button></a>
      </ul>
      </div>
  )
}

export default Navbar



// import React, { useState } from 'react';
// import './Navbar.css';
// import Logo from '../../assets/lifelogo.png';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className={`navbar ${menuOpen ? 'open' : ''}`}>
//       <a href="#home" className="logo">
//         <img src={Logo} alt="Logo" />
//       </a>
      
//       <div className="hamburger" onClick={toggleMenu}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
      
//       <ul className='navbar__ul' onClick={toggleMenu}>
//         <li><a href="#home" className="nav-link">Home</a></li>
//         <li><a href="#Our_features" className="nav-link">Features</a></li>
//         <li><a href="#Insights" className="nav-link">About Us</a></li>
//         <li>Consult a Doctor</li>
//         <li><a href="#Insights" className="nav-link">Blog</a></li>
//         <li><a href="#Footer" className="nav-link">Contact Us</a></li>
//         <a href="#Sign"><button className='btn1'>Sign Up</button></a>
//         <a href="#"><button className='btn2'>Book Appointment</button></a>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
