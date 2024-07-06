import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError] = useState("");
    const navigate = useNavigate();

    const changeUsername = (e)=>{
        setUsername(e.target.value);
    }
    const changePassword = (e)=>{
        setPassword(e.target.value);
    }
    const SubmitChange = (e)=>{
        e.preventDefault();
        axios.post('/loging',
            {Username,Password})
            .then((response)=>{
                navigate("/home")
            }).catch((error)=>{
                setError(error);
            })
    }


  return (
    <form action="" onSubmit={SubmitChange} method="post">
        <label>UserName</label>
        <input value={Username} type='text' placeholder='Nikhil' onChange={changeUsername}/>
        <label>Password</label>
        <input value={Password} type='password' placeholder='Tmkc@123' onChange={changePassword}/>
        <button type='submit'>Login</button>
        <p>{Error}</p>
    </form>
  )
}

export default Login
