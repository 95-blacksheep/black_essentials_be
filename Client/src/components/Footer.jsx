import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'

const Footer = () => {
  return (
   <footer>
    <center>
    <div className="footer_logo">
        <Link to="/" className="footer_image">
          <img src={Logo} alt="Black Essentials Logo" />
        </Link>

        <div className="footer_copyright">
          <small>All Rights Reserved &copy; Copyright 2024, Black Essentials Inc. </small>
        </div>
      </div>
    </center>
   </footer>
  )
}

export default Footer
