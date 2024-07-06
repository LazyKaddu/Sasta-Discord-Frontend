import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Error, setError] = useState("");
    const [ProfilePic, setProfilePic] = useState(null);
    const navigate = useNavigate();

    const changeUsername = (e)=>{
        setUsername(e.target.value);
    }
    const changePassword = (e)=>{
        setPassword(e.target.value);
    }
    const changeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const updateProfilePic = (e)=>{
        setProfilePic(e.target.files[0])
    }
    const SubmitChange = (e)=>{
        e.preventDefault();
        axios.post('/signing',
            {Username,Password,Email,ProfilePic})
            .then((response)=>{
                navigate("/home")
            }).catch((error)=>{
                setError(error)
            })
    }


  return (
    <form action="" onSubmit={SubmitChange} method="post">
        <label>UserName</label>
        <input value={Username} type='text' placeholder='Nikhil' onChange={changeUsername}/>
        <label>E-mail</label>
        <input value={Email} type='text' placeholder='aashishnegi0000@gmail.com' onChange={changeEmail}/>
        <label>Password</label>
        <input value={Password} type='password' placeholder='Tmkc@123' onChange={changePassword}/>
        <label>Upload</label>
        <input type='file' onChange={updateProfilePic}/>
        <button type='submit'>Signup</button>
    </form>
  )
}

export default Signup
