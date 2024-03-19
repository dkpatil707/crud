import React from 'react'
import Login from './Login'

const PrivateRoute = (props) => {
    const token = localStorage.getItem("TOKEN")
  return (
    
        token ? props.children : <Login/>
     
  )
}

export default PrivateRoute; 