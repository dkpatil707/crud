import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../axios'
import toast from 'react-hot-toast';
const CreateUsers = () => {

           let navigator = useNavigate()
           let [state, setState] = useState({
            name: "",
            salary: "",
            company: ""
           })

           let {name, salary, company} = state;

           let handleChange = (e)=>{
              let {name, value} = e.target;
              setState({...state, [name]:value})
           }

           let handleSubmit = (e)=>{
                e.preventDefault();
                let payload = {name,salary,company}
                axios.post("/users", payload)
                .then(()=>{
                  console.log("Data is submitted");
                }).catch((error)=>{
                     console.log(error);
                }) 
             navigator("/datausers")
             toast.success("Successfully created new user")
           }

  return (
    <section className='content'>
       <main className="innerContent">
        <h1>Create User</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Enter name' value={name} onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="">Salary</label>
            <input type="text" name='salary' placeholder='Enter salary' value={salary} onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="">Company</label>
            <input type="text" name='company' placeholder='Enter company' value={company} onChange={handleChange}/>
          </div>

          <div className="form-group">
           <button>Create User</button>
          </div>
        </form>
       </main>
    </section>
  )
}

export default CreateUsers