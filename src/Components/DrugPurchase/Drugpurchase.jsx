import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Drugpurchase = () => {

    
    const [allProduct, setallProduct ] = useState([])

    const [loading, setloading] = useState(false)

    useEffect(()=>{
      const fetchuser = async ()=>{
        try {
          setloading(true)
              const dataall = await axios.get("https://btcbackend-e7yt.onrender.com/purchase");

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
      <h1>All Drug Purchases </h1>
      <div className="listproduct-format-main">
<p>Name</p>
<p>Price</p>
<p>Supplier</p>
{/* <p>SupplierID</p> */}
<p>Quantity</p>
<p>Total Price</p>
{/* <p>DateOfInclusion</p> */}
      </div>

      <div className="listsproduct-allproducts">
        <hr />
        {loading && <p>loading..........</p>}
        {allProduct.map((product, index)=>{
  return  <><div key={index} className="listproduct-format-main listproduct-format">
<p>{product.Name}</p>
{console.log(product.image) }
  <p>{product.Price}</p>
  <p>{product.Supplier}</p>
  {/* <p>{product.SupplierID}</p> */}
<p>{product.Quantity}</p>
<p>{product.TotalPrice}FCFA</p>
  {/* <p>{product.DateOfInclusion}</p> */}
  
  </div>
  <hr />
  </>
        })}
      </div>
    </div>
  )
}

export default Drugpurchase
