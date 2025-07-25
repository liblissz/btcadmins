import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Addproducts from '../../Components/Addproducts/Addproducts'
import Listproducts from '../../Components/Listproducts/Listproducts'
import Allvendors from '../../Components/AllVendors/Allvendors'
import Drugpurchase from '../../Components/DrugPurchase/Drugpurchase'
import OrderDetail from '../../Components/Orderdetail/OrderDetail'
import Analytics from '../../Components/Analitics/Analytics'
import PushNotification from '../../Components/Pushnotification/PushNotification'
//import RateLimit from '../../Components/pending/RateLimit'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
                     <Route path='/' element={<Analytics/>}/>
       
        <Route path='/addproduct' element={<Addproducts/>}/>
        <Route path='/listproduct' element={<Listproducts/>}/>
                <Route path='/vendors' element={<Allvendors/>}/>
                 <Route path='/purchases' element={<Drugpurchase/>}/>
                  <Route path='/orderdetail/:id' element={<OrderDetail/>}/>
                  <Route path='/pushnotification' element={<PushNotification/>}/>
        {/* <Route path='/pending' element={<RateLimit/>}/>*/}
      </Routes>
    </div>
  )
}

export default Admin







