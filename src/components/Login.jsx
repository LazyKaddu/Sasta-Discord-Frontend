import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ isLogin, changeState }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate();

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const setCookies = (data) => {
    Cookies.set("userId", data.user._id);
    Cookies.set("userName", username);
    navigate("/home");
  };

  const SubmitChange = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/api/user/login",
        {
          username,
          password,
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
        response.data.user
          ? setCookies(response.data)
          : setError(response.data.message);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 grid place-items-center">
      <form
        className="w-[30vw] h-fit py-3 px-6 flex flex-col bg-slate-900 MorphismShadow 
        items-center gap-4 rounded-2xl text-white"
        onSubmit={SubmitChange}
        method="post"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold tracking-wide py-2 mt-4 opacity-90 text-center">
            Welcome back!
          </h1>
          <h3 className="font-light opacity-90 tracking-wide text-center">
            We're so excited to see you again!
          </h3>
          <h3 className="font-semibold mt-2 text-red-500 text-center opacity-90 tracking-wide">
            {Error}
          </h3>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold text-sm tracking-wider opacity-95 text-zinc-400 uppercase">
            UserName{" "}
            {!username && <span className="text-red-500 text-md">*</span>}
          </label>
          <input
            className="text-lg px-3 py-2 rounded text-white bg-[#1f1e1e] outline-none tracking-wide"
            value={username}
            type="text"
            onChange={changeUsername}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold text-sm tracking-wider opacity-95 text-zinc-400 uppercase">
            Password{" "}
            {!password && <span className="text-red-500 text-md">*</span>}
          </label>
          <input
            className="text-lg px-3 py-2 rounded text-white bg-[#1f1e1e] outline-none tracking-wide"
            value={password}
            type="password"
            onChange={changePassword}
          />
        </div>
        <button
          className="w-full px-5 py-4 bg-indigo-500 hover:bg-indigo-600
           text-white rounded font-semibold tracking-wide"
          type="submit"
        >
          Login
        </button>
        {!Error && <p className="text-red-600">{Error}</p>}
        <button
          onClick={changeState}
          className="w-full py-1 mb-3 text-blue-500 tracking-wide text-start"
        >
          {isLogin ? (
            <p>
              <span className="text-zinc-400">Need an account?</span> Register
            </p>
          ) : (
            "Already have an account?"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
