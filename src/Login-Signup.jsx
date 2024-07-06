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
      { isLogin
        ? <Login isLogin={isLogin} changeState={changeState}/>
        : <Signup isLogin={isLogin} changeState={changeState}/>
      }
    </div>
  )
}

export default LoginSignup
