import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './css/Navbar.css';

import { DropdownMenu } from "./DropdownMenu";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // for mobile screen
    const showButton = () => { if(window.innerWidth <= 960) { setButton(true)} else { setButton(false)}}

    useEffect(() => {showButton();}, []);

    window.addEventListener('resize', showButton)

    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
             <img className="navbar-img" src="ana-profile.jpeg"/>
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     Ana Malimpensa
                     </Link> 
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className='nav-item'>
                             <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                 About
                             </Link>
                        </li>
                        <li className='nav-item'>
                             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                 Feature Menu
                             </Link>
                             <DropdownMenu text="Feature Menu" />
                        </li>
                        <li className='nav-item'>
                             <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                 Contact
                             </Link>
                        </li>                        
                     </ul>
             </div>
         </nav>
        </>
    )
}

export default Navbar;