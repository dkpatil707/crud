import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  let navigate= useNavigate()
  let [loginData, setLoginData] = useState({
    email:"",
    password:"",
     token: uuidv4()
  })
  let {email, password, token} = loginData;

  let handleChange = (e)=>{
    let {name, value} = e.target;
    setLoginData({...loginData, [name]:value}) 
  }

  let handleSubmit = async (e)=>{
     e.preventDefault();
     let {data} = await axios.get("http://localhost:8000/registeruser")
     let filteredData = data.filter((emp)=>{
             return(
               emp.email===loginData.email && emp.password ===loginData.password
             )
     })
      if(filteredData.length>0){
            navigate("/datausers")
            localStorage.setItem("TOKEN", token)
            setLoginData({})
            toast.success("LOGGED IN SUCCESSFULLY")
      } else {
             navigate("/register")
             toast.error("SOMETHING WENT WRONG")
      }

  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
             value={email}
             onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
             value={password}
             onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
