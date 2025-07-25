import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/Admin_Assets/logo.png'
import navprofile from '../../assets/Admin_Assets/dropdown_icon.png'
import adminimage from '../../assets/Admin_Assets/product_13.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
<div className="navbarlogo">
      <img src={navlogo} alt="" className="nava-logo" />
 <h1>BTC PHARMACY <p>ADMIN PANNEL</p></h1>
</div>

      <div className="profile">
        <img src="https://res.cloudinary.com/dbq5gkepx/image/upload/v1753095928/u4lds8txvd9shgnncaqj.jpg" alt="" className='adminimage' />
      <img src={navprofile} alt=""  className='nav-profile'/>
      </div>
    </div>
  )
}

export default Navbar
