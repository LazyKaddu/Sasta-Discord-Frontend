import React, { useState } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';

const LoginSignup = () => {
    const [isLogin, setisLogin] = useState(false);
    const changeState = (e)=>{
        setisLogin(!isLogin);
    }

  return (
    <div>
      {isLogin?<Login/>:<Signup/>}
      <button onClick={changeState}>{isLogin?"Signup":"Login"}</button>
    </div>
  )
}

export default LoginSignup
