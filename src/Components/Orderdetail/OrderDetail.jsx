import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import './order.css';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://btcbackend-e7yt.onrender.com/allorders/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order:', error);
        toast.error(
          error.response?.data?.error ||
          error.response?.data?.message ||
          'Failed to load order'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <p>Loading order details…</p>;
  if (!order) return <p>No order found.</p>;

  return (
    <div className="body">
      <div className="heder">
        <div className="seperate">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Browser ID:</strong> {order.browserId}</p>
        </div>
        <div className="seperate">
          <p><strong>Confirmation PIN:</strong> {order.confirmationPin}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
        <div className="seperate">
          <p><strong>Placed On:</strong> {new Date(order.createdAt).toLocaleString()}</p>
          <p><strong>Total Amount:</strong> {order.totalAmount} FCFA</p>
        </div>
            <div className="seperate">
          <p><strong>Customer Name:</strong> {order.customer.name} </p>
          <p><strong>Address:</strong> {order.customer.address}</p>
        </div>
           <div className="seperate">
          <p><strong>Number:</strong> {order.customer.number}</p>
          <p><strong>Illness:</strong> {order.customer.illness} </p>
        </div>
      </div>
<div className="fruit-basket">
  <section>
    <div className="banana-box">
      <div className="banana-row">
        {(order.items || []).map((item, index) => (
          <div key={index} className="banana">
            <div className="mango">
              <a href="#none">
                <img src={item.Picture} alt={item.Name || 'Product'} />
              </a>
              <div className="grape">{index + 1}</div>
              <div className="apple" />
            </div>
            <div className="orange">
              <small>{item.Category || 'INFO'}</small>
              <span>{item.Name || 'No name'}</span>
              <h5>
                {item.discount ? `${item.discount}%` : 'No Discount'}
                <b>{item.SalePrice} FCFA</b>
              </h5>
              <em>Qty: {item.quantity || 1}</em>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

    </div>
  );
};

export default OrderDetail;
