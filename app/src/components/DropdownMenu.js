import React from 'react'
import { NavButton } from './NavButton';
import { useState, useRef } from 'react';
import MenuItem from './MenuItem';
import './css/Navbar.css';
import { useOnHover } from "./../hooks/useOnHover";


// export default function DropdownMenu() {

//     const [data, setData] = useState('');
  
//     const menuToItem = () => {
//       setData("This is data from Parent Component to the Child Component.");
//     }

//     const dropdownRef = useRef(null); // Create a reference for dropdown container
//     const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

//     // Function to close dropdown
//     const closeHoverMenu = () => {
//         setMenuDropDownOpen(false);
//     };

//   useOnHover(dropdownRef, closeHoverMenu); // Call the hook

//     return (
//         <>
//         <MenuItem menuToItem={data}/>
//             <div className='nav-item'>
//                 <NavButton primary onClick={() => menuToItem()}>Click Parent</NavButton>
//             </div>
//         </>
//     )
// }

export const DropdownMenu = (props) => {
  
    return (
        <menu className='nav-links'>{ props.text } </menu>
    );
  };