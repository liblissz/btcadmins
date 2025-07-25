import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product from '../../assets/Admin_Assets/Product_Cart.svg'
import listproduct from '../../assets/Admin_Assets/Product_list_icon.svg'
import { AirVentIcon, BoxIcon, BusIcon, MessageCircleIcon, PiIcon, SignatureIcon } from 'lucide-react'
const Sidebar = () => {

  const logout = ()=>{
    localStorage.removeItem("token")
    window.location.reload()
  }
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
      <div className="sidebar-item">
        <img src={add_product} alt="" />
        <p>All Orders</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
      <div className="sidebar-item">
        <img src={listproduct} alt="" />
        <p>Product List</p>
      </div>
      </Link>
          <Link to={'/vendors'} style={{textDecoration: 'none'}}>
      <div className="sidebar-item">
        <BusIcon size={30}/>
        <p>All Vendors</p>
      </div>
      </Link>
       <Link to={'/pending'} style={{textDecoration: 'none'}}>
       <div className="sidebar-item">
         <BusIcon size={30}/>
         <p>Push_Notification</p>
       </div>
       </Link>
      
      <Link to={'/purchases'} style={{textDecoration: 'none'}}>
      <div className="sidebar-item">
        <BoxIcon size={30}/>
        <p>DrugPurchases</p>
      </div>
      </Link>

       <Link to={'/pending'} style={{textDecoration: 'none'}}>
      <div className="sidebar-item">
        <AirVentIcon size={30}/>
        <p>AI_Suggestions</p>
      </div>
      </Link>
      
     <a href="https://bc-ai.vercel.app/">
      <div className="sidebar-item">
        <MessageCircleIcon size={30}/>
        <p>Message AI</p>
      </div>
  </a>


      <div className="sidebar-item end" onClick={logout}>
        <SignatureIcon size={30}/>
        <p>log_out </p>
      </div>
    </div>
  )
}

export default Sidebar
