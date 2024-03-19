import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
const EditUsers = () => {
  //  let parameters = useParams()
  //  console.log(parameters);
     let navigator = useNavigate()
  let { id } = useParams();
  let [state, setState] = useState({
    name: "",
    salary: "",
    company: "",
  });
  let { name, salary, company } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    axios.get(`/users/${id}`).then((response) => {
      console.log(response.data);
      setState({
        ...state,
        name: response.data.name,
        salary: response.data.salary,
        company: response.data.company,
      });
    });
  },[]);

  let handleSubmit = (e)=>{
    e.preventDefault();
    let payload = {name, salary, company}
    axios.put(`/users/${id}`, payload)
    .then(()=>{
      console.log("Data is updated");
    })
     navigator("/datausers")
     toast.success("Data has been updated")
  }

  return (
    <section className="content">
      <main className="innerContent">
        <h1>Edit User</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Salary</label>
            <input
              type="text"
              name="salary"
              placeholder="Enter salary"
              value={salary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Enter company"
              value={company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button>Edit User</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default EditUsers;
