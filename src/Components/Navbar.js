import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {

const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


    return (
        <nav className="navbar">
            <Link to='/' className='nvabar-logo'>
                Amrta-Yuj
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li >
                    <Link to='/doctors' className='nav-links' onClick={closeMobileMenu}>
                        Doctors
                    </Link>
                </li>
                <li>
                    <Link to='/consultancy' className='nav-links' onClick={closeMobileMenu}>
                        Consultancy
                    </Link>
                </li>
                <li>
                    <Link to='/pharmacy' className='nav-links' onClick={closeMobileMenu}>
                        Pharmacy
                    </Link>
                </li>
                <li>
                    <Link to='/diagnostics' className='nav-links' onClick={closeMobileMenu}>
                        Diagnostics
                    </Link>
                </li>
                <li>
                    <Link to='/signup' className='nav-links-mobile'>
                        Sign-up
                    </Link>
                </li>
            </ul>

            
            {button && 
                <Link to='/signup' className="btnstyle-nav">SIGN UP</Link> 
            }
            
            
            
        </nav>

    )
}

export default Navbar
