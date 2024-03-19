import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()
  let token = localStorage.getItem("TOKEN")
  console.log(token);
     let handleLogout = ()=>{
          // localStorage.clear()
          localStorage.removeItem("TOKEN")
          navigate("/login")
     }
  return (
    <nav className='navbar'>
     <p><span className='crud'>Crud</span><span className='operation'>Operation</span></p>
      
      {
        token? (
          <button onClick={handleLogout}>Logout</button>
        ) :  <div className='regilogin'>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
       </div>
      } 



    
    </nav>
  )
}

export default Navbar