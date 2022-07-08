import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <>  
          
            <nav className='navbar'>
                <div className="logo">
                     <p><span>Web</span>UiExpert</p>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>HOME</li>
                        <li>PORTFOLIO</li>
                        <li>ABOUT</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className="right">
                    <button className='btn login'>LOG IN</button>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;