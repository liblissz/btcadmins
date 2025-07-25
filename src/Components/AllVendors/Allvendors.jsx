import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Allvendors = () => {

   const [loading, setloading] = useState(false)

  const [allProduct, setallProduct ] = useState([])
      useEffect(()=>{
        const fetchuser = async ()=>{
          try {
            setloading(true)
                const dataall = await axios.get("https://btcbackend-e7yt.onrender.com/vendors");
     
          setallProduct(dataall.data)
          } catch (error) {
            console.error(error);
            
          }finally{
            setloading(false)
          }
      
        }
  
  fetchuser();
      }, [])

  return (
     <div className='Listproducts'>
      <h1>All Vendors Lists</h1>
      <div className="listproduct-format-main">
<p>Name: </p>
<p>Contact</p>
<p>Location</p>

      </div>

      <div className="listsproduct-allproducts">
        <hr />
        {loading && <p>loading..........</p>}
        {allProduct.map((product, index)=>{
  return  <><div key={index} className="listproduct-format-main listproduct-format">
{/* <img src={product.Picture} alt="" className="listproduct-product-icon" /> */}
{/* {console.log(product.image) } */}
  <p>{product.Name}</p>
  <p>{product.Contact}</p>
  <p>{product.Location}</p>
{/* <p>{product.Category}</p> */}
<button className='addproduct-btn' style={{height: "30px", width: "80px", marginTop: "-4px"}}>vendor {index}</button>
  </div>
  <hr />
  </>
        })}
      </div>
    </div>
  )
}

export default Allvendors
