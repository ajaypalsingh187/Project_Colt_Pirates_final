import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './SiteHeader.css';    

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    let menuRef = useRef();
    let buttonRef = useRef();

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function hideMenu() {
        setMenuOpen(false);
    }

    // useEffect below closes the menu whenever something not in the NavBar is clicked
    useEffect(() => {
        function handler(e) {
            if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                hideMenu();
            }
        }
        document.addEventListener('mousedown', handler);
    }, []);

    return (
        <div className='SiteHeader'>
            <img 
                    src={require('../assets/logo1.png')} 
                    alt='Colt Pirates Logo' 
                    style={{ width: '200px', height: 'auto', marginRight: '0px' }} // Adjust the size here
                />
                
            <div className='SiteHeader__name'>
            
                <NavLink to='/' style={{color: 'black'}}>
               
                <div className='SiteHeader__name'></div>
                    <h2>COLT PIRATES</h2>
                </NavLink>
                <p>Center of Selected Cars of Premium Brands</p>
            </div>
            

            <ul 
                className={`SiteHeader__navbar ${menuOpen ? 
                'SiteHeader__navbar--shown' : 'SiteHeader__navbar--hidden'}`}
                ref={menuRef}
                
            >
                 
                 <NavLink onClick={hideMenu} to='/offers' ><li><span>Offers</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/' ><li><span>Home</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/Sold' ><li><span>Sold</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/About' > <li><span>About Us</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/Buy' > <li><span>Purchase Form</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/Financing' > <li><span>Financing</span></li></NavLink> 
                <NavLink onClick={hideMenu} to='/Contact' > <li><span>Contact Us</span></li></NavLink>
            </ul>

            <img 
                id='SiteHeader__menuBtn' 
                src={require('../assets/menuBtn.png')}
                onClick={toggleMenu}
                ref={buttonRef}
                alt='Best used cars in Małopolska'
            />

            <div className='SiteHeader__phoneData'>
                <img src={require('../assets/phoneIcon.png')} alt="Find premium class cars" />
                <p>+1 204 894 6024</p>
            </div>
        </div>
    )
}
