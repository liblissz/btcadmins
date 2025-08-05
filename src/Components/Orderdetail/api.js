import axios from 'axios';


// Pages/api.js
export function confirmOrder(orderId, pin) {
  return axios.post(`http://localhost:2500/order/updatestatus/${orderId}`, { pin });
}



export function downloadReceipt(orderId) {
  return axios.get(`http://localhost:2500/order/receipt/${orderId}`, { responseType: 'blob' }); 
}
