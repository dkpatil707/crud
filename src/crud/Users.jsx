import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
const Users = () => {
       let [content, setContent] = useState([])

       function getData(){
        axios.get("/users")
           .then((response)=>{
            console.log(response);
            console.log(response.data);
                setContent(response.data)
           })
       }
        
       useEffect(()=>{
           getData()
       },[])  

       let handleDelete = (id)=>{
          axios.delete(`/users/${id}`)
          .then(()=>{
            getData()
          })
          toast.success("User has been deleted")
       }

  return (
    <section className='userBlock'>
          <article className='container'>
             <h1>Users</h1>

             <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>SALARY</th>
                  <th>COMPANY</th>
                  <th>UPDATE</th>
                  <th>DELETE</th>
                </tr>
              </thead>

              <tbody>
               {content.map((user)=>{
                  return <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.salary}</td>
                      <td>{user.company}</td>
                      <td><Link to={`/editusers/${user.id}`}>EditUser</Link></td>
                      <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
                   </tr>
               })}

              </tbody>
             </table>
          </article>
    </section>
  )
}

export default Users