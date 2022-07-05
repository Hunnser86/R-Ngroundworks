import React from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="content">
            <h3>Thank you for visiting</h3>
            <h4>You can also contact us using the details below</h4>
            <div className="phone">
                <FaPhoneAlt className='icon'/> 
                <p>Nick: 07730886088</p> 
                <p>Jake: 07955119058</p> 
            </div>
            <div className="email">
                 <MdEmail className='icon'/> <a rel="noopener noreferrer" target="_blank" href="https://mail.google.com"><p>Contact@R&N.com</p> </a> 
            </div>
            <div className="facebook">
                 <BsFacebook className='icon'/> <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/RandNgroundworksandutilities"><p>www.facebook.com/RandNgroundworksandutilities</p></a> 
            </div>
        </div>
    </div>
  )
}

export default Footer