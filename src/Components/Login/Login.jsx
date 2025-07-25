
import React, { useState } from 'react';
import './Login.css';
import register_logo from '../../assets/Admin_Assets/register.svg';
import { LoaderPinwheel, LogInIcon, User2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [role, setrole] = useState('');

  const [loading, setloading] = useState(false)

  const loginsignup = async (e) => {
    e.preventDefault();


    try {
          setloading(true);
      const response = await axios.post('https://btcbackend-e7yt.onrender.com/login', {
       Email: email,
      Password:  password,
      Role:  role,
      });
        
      const { status, data } = response;

      if(status === 404){
        toast.error(data.message)
        return;
      }
     else if (status === 200) {
        toast.success(data.message);
        localStorage.setItem('token', data.token);
        window.location.reload()
      
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Login failed');
    }finally{
        setloading(false)
    }
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={loginsignup}>
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <i>
                
              </i>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email*"
                required
              />
            </div>

            <div className="input-field">
              <i>
      
              </i>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password*"
                required
              />
            </div>

            <div className="select">
              <select value={role} onChange={(e) => setrole(e.target.value)} required>
                <option value="" disabled>
                  Select a user role
                </option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <input type="submit" value={loading? "loading...":  "Sign in"} disabled={loading} className="btn solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Login and explore the system</p>
          </div>
          <img src={register_logo} className="image" alt="Register Illustration" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
           {loading? "loading.....":  "Sign in"}
            </button>
          </div>
          <img src={register_logo} className="image" alt="Register Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
