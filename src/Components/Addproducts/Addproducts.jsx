import React, { useEffect, useState } from 'react';
import './Addproducts.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Addproducts = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(false);
useEffect(() => {
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://btcbackend-e7yt.onrender.com/allorders"); 
      console.log("Fetched:", response.data);
      setAllOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchOrders();


}, []);


  return (
    <div className='Listproducts'>
      <h1>All Orders List</h1>

      <div className="listproduct-format-main header-row">
        <p>Browser_ID</p>
        <p>Total_Amount</p>
        <p>Delivery_Status</p> 
        <p>Confirmation_Pin</p>

        <p>details</p>

      </div>

      <div className="listsproduct-allproducts">
        <hr />
{loading && <p>loading.....</p>}
 {allOrders.map((product, index)=>{
  return  <><div key={index} className="listproduct-format-main listproduct-format">
{/* <img src={product.Picture} alt="" className="listproduct-product-icon" /> */}
{/* {console.log(product.image) } */}
  <p>{product.browserId}</p>
  <p>{product.totalAmount} FCFA</p>
  <p>{product.status}</p>
<p>{product.confirmationPin}</p>
<Link to={`/orderdetail/${product._id}`}>
<button className='addproduct-btn'>Details</button>
</Link>
  </div>
  <hr />
  </>
        })}
      


        {/* {loading && <p>Loading...</p>}
        {!loading && allOrders.length === 0 && <p>No orders found.</p>}
{allOrders.map((order, orderIndex) => (
  (order.items || []).map((item, itemIndex) => (
    <React.Fragment key={`${orderIndex}-${itemIndex}`}>
      <div className="listproduct-format-main listproduct-format">
        <p>{order.confirmationPin || 'N/A'}</p>
        <p>{item.Name || 'N/A'}</p>
        <p>{item.CostPrice ? `${item.CostPrice} frs` : 'N/A'}</p>
        <p>{item.SalePrice ? `${item.SalePrice} frs` : 'N/A'}</p>
        <p>{item.Category || 'N/A'}</p>
        <button className='addproduct-btn'>Details</button>
      </div>
      <hr />
    </React.Fragment>
  ))
))} */}

      </div>
    </div>
  );
};

export default Addproducts;
