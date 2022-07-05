import React from 'react';
import { useState } from 'react';
import {HiOutlineMenu} from 'react-icons/hi'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import '../navBar/navBar.css'

function Nav() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
              <a href="/"><img className='logo' src={require('../../media/logo_paving_white_text.png')} alt="" /></a>  
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a onClick={handleClick} href="/">Home</a></li>
                    <li><a onClick={handleClick} href="#about">About</a></li>
                    <li><a onClick={handleClick} href="#projects">Projects</a></li>
                    <li><a onClick={handleClick} href="/pastworks">Past works</a></li>
                    <li><a onClick={handleClick} href="#form ">Contact</a></li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<HiOutlineMenuAlt1 className='icon'/>): (<HiOutlineMenu className='icon'/>)}
                   
                </div>
            </div>
        </div>
    );
}

export default Nav;