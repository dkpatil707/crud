import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from '../axios'
import DisplayUsers from './DisplayUsers'
const AllUsers = () => {
      let [state, setState] = useState(null)
      let [searchTerm , setSearchTerm] = useState("")

      let fetchUsers = async()=>{
        let {data} = await axios.get("/users")
        setState(data)
      }

      let handleSearch = (term)=>{
            setSearchTerm(term)
      }
      console.log(searchTerm);

      let filteredUsers = state?.filter(value=>{
        if(searchTerm==""){
          return value;
        } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
        }
      }).map(users=> <DisplayUsers  key={users.id} {...users}/>)


      useEffect(()=>{
         fetchUsers()
      },[])

 return (
    <main className='allUsers'>
         <h1>All Users</h1>
         <Search handleSearch={handleSearch}/>
         {
          state===null ? "Loading....." : filteredUsers
         }
    </main>
  )
}

export default AllUsers
