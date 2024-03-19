import React from 'react'

const DisplayUsers = (props) => {
    console.log(props);
    let {name, salary, company} = props;
  return (
    <div className='list'>
        <h1>{name}</h1>
        <p>{salary}</p>
        <p>{company}</p>
    </div>
  )
}

export default DisplayUsers