import React from 'react';
import { useState } from 'react';
import {HiOutlineMenu} from 'react-icons/hi'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import '../Navbar2/navbar2.css'

function Nav2() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar2'>
            <div className="container">
              <a href="/"><img className='logo' src={require('../../media/logo_paving_white_text.png')} alt="" /></a>  
                <ul className={click ? 'nav-menu2 active2' : 'nav-menu2'}>
                    <li className='nav-li'><a onClick={handleClick} href="/">Home</a></li>
                    
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<HiOutlineMenuAlt1 className='icon'/>): (<HiOutlineMenu className='icon'/>)}
                   
                </div>
            </div>
        </div>
    );
}

export default Nav2;