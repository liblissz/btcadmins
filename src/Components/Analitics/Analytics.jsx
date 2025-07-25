import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './Analytics.css'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,PieChart,Pie, Cell, Legend
} from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CF0', '#FF6699'];
const Analytics = () => {
  const [loading, setloading] = useState(false);
  const [orders, setorders] = useState([]);

  useEffect(() => {
    const fetchall = async () => {
      try {
        const allorders = await axios.get("https://btcbackend-e7yt.onrender.com/allorders");
        setorders(allorders.data);
      } catch (error) {
        toast.error("Failed to fetch orders");
        console.log(error);
      }
    };
    fetchall();
  }, []);

  const formdata = orders.map(item => ({
    CustomerName: item.customer?.name || "Unknown",
    Amount: item.totalAmount
  }));
const dataByCompletion = [
  { name: 'Completed', value: orders.filter(p => p.status === "CONFIRMED").length },
  { name: 'Pending', value: orders.filter(p => p.status === "PENDING").length }
];

  const totalBudget = orders.reduce((sum, p) => sum + (p.totalAmount || 0), 0);
 const averageBudget = orders.length ? (totalBudget / orders.length).toFixed(2) : 0;
  return (
    <div className='boddy'>
         <h2 className="mj">Customer Order Analytics</h2>
    <div className="analytics-container">
      

      <div className="analytics-grid">
        <div className="chart-card">
      <h2 className="mj">Customer Order Amounts</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={formdata}>
          <XAxis dataKey="CustomerName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Amount" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
       <div className="analytics-grid">
        <div className="chart-card">
           <h2 className="text-xl font-bold mb-4">Customer Order Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataByCompletion}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {dataByCompletion.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        </div>
    </div>
        <div className="stats-summary">
        <p><strong>Total Orders:</strong> <span>{orders.length}</span> </p>
        <p><strong>Total Amount:</strong>  <span> {totalBudget.toLocaleString()}frs</span> </p>
        <p><strong>Average Budget:</strong> <span> {averageBudget}frs</span></p>
      </div>
    </div>
  );
};

export default Analytics;
