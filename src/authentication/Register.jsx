import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  let navigate = useNavigate()
        let [registerData, setRegisterData] = useState({
          email:"",
          password: "",
          prof_pic: ""
        })

        let {email, password, prof_pic} = registerData;

        let handleChange = (e)=>{
          let {name, value} = e.target;
          setRegisterData({...registerData, [name]:value})
        }

        let handleSubmit = async (e)=>{
          e.preventDefault();
          let payload = {email,password,prof_pic}
           await axios.post("http://localhost:8000/registeruser",payload)
           navigate("/login")
           toast.success("Successfully registered")
          }
         
  return (
    <section>
       <h1>Register</h1>
       <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' name='email' value={email} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id='password' name='password' value={password} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="image">Profile Pic:</label>
          <input type="text" id='image' name='prof_pic' value={prof_pic} onChange={handleChange}/>
        </div>

        <div className="form-group">
          
          <button>Register</button>
        </div>
        
       </form>
    </section>
  )
}

export default Register