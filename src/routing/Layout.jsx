import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../crud/Navbar';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Toaster/>
    <main className='sidebar'>
        <div className="layout">
            <ul>
                <li>
                    <Link to='/'>Create User</Link>
                </li>
                <li>
                    <Link to='/datausers'>Users</Link>
                </li>
                <li>
                    <Link to='/allusers'>AllUsers</Link>
                </li>
            </ul>
        </div>
         <hr />
      <Outlet/>

    </main>
    </>
    
  )
}

export default Layout;   