import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
import Logo from '../../images/logo.jpg'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='nav__container'>
        <div className="nav__row">
            <div className="nav__col_contact_link">
                <div className="nav__col_contact_link_email">
                <AiOutlineMail/>
                <p>admin@hacker.com</p>
                </div>

                <div className="nav__col_contact_link_phone">
                <AiOutlinePhone/>
                <p>+91-234567383</p>
                </div>
               
            </div>
            <div className="nav__col_logo">
             <img src={Logo} alt="Website Logo" className='nav__logo' />
            </div>
            <div className="nav__col_social_icons">
                <BsFacebook/>
                <BsFacebook/>
                <BsFacebook/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar