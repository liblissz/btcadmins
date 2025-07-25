import React from 'react'
import './Listproducts.css'
import { useState } from 'react'
// import { data } from 'react-router-dom'
import { useEffect } from 'react'
import crossicon from '../../assets/Admin_Assets/cross_icon.png'
import axios from 'axios'
const Listproducts = () => {

    const [allProduct, setallProduct ] = useState([])

    const [loading, setloading] = useState(false)

    useEffect(()=>{
      const fetchuser = async ()=>{
        try {
          setloading(true)
              const dataall = await axios.get("https://btcbackend-e7yt.onrender.com/drugs");

        setallProduct(dataall.data)
        } catch (error) {
          console.error(error);
          
        }finally{
          setloading(false)
        }
    
      }

fetchuser();
    }, [])

    // const remove_product = async (id)=>{
    //     await fetch('https://holyconceptsbackend.onrender.com/removeproduct', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //               'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({id:id})
    //     })
    //   await  fetchinfo()
    // }
    
  return (
    <div className='Listproducts'>
      <h1>All Products Lists</h1>
      <div className="listproduct-format-main">
<p>Medicine</p>
<p>Tittle</p>
<p>Cost price</p>
<p>Sale Price</p>
<p>Category</p>
<p>Remove</p>
      </div>

      <div className="listsproduct-allproducts">
        <hr />
        {loading && <p>loading..........</p>}
        {allProduct.map((product, index)=>{
  return  <><div key={index} className="listproduct-format-main listproduct-format">
<img src={product.Picture} alt="" className="listproduct-product-icon" />
{console.log(product.image) }
  <p>{product.Name}</p>
  <p>{product.CostPrice}frs</p>
  <p>{product.SalePrice}frs</p>
<p>{product.Category}</p>
<button className='addproduct-btn' style={{height: "30px", width: "70px", marginTop: "-4px"}}>details</button>
  </div>
  <hr />
  </>
        })}
      </div>
    </div>
  )
}

export default Listproducts
