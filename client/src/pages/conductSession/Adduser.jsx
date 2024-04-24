import React, { useState } from 'react'

const Adduser = (props) => {
    const [user,setuser]=useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(questions);
    };
  return (
    <div>Adduser</div>
  )
}

export default Adduser