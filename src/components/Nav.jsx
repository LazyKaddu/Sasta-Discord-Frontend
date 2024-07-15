import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Li from "../components/Li";
import {
  HiOutlineChat,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLogout,
  HiOutlineSupport,
  HiSupport,
  HiOutlinePhone,
} from "react-icons/hi";
import Cookies from "js-cookie";
import axios from "axios";

const Nav = ({ styles }) => {

  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  const RemoveCookies = () => {
    Cookies.remove();
    navigate("/");
  };

  const LogoutUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/logout")
      .then((response) => {
        console.log('logout response- ', response.data);
        RemoveCookies()
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <nav
      className="w-full h-fit bg-white rounded-md flex justify-center items-center overflow-hidden"
      style={styles}
    >
      <ul className="flex items-start flex-col py-3 px-2 gap-1 w-[100%] h-[100%] overflow-hidden">
        <Li
          data={"HOME"}
          href={"/home"}
          icon={<HiOutlineHome />}
        />
        <Li
          data={"CHAT"}
          href={"/chat"}
          icon={<HiOutlineChat />}

        />
        <Li
          data={"ABOUTUS"}
          href={"/about"}
          icon={<HiOutlineInformationCircle />}

        />
        <Li
          data={"CONTACTUS"}
          href={"/contact-us"}
          icon={<HiOutlinePhone />}

        />
        <Li data={"DEV COM"} href={"/"} icon={<HiSupport />}/>
        <Li
          data={"SUPPORT"}
          href={"/support"}
          icon={<HiOutlineSupport />}

        />
        <li
          className="list-none flex items-center justify-start gap-[2vw] text-lg bg-[#fff] 
      hover:bg-[#e5dff9] p-2 rounded-lg cursor-pointer w-full"
          onClick={LogoutUser}
        >
          <span className="text-2xl bg-[#e5dff9] p-1 rounded-lg opacity-85">
            <HiOutlineLogout />
          </span>
          {!styles && <span className="line-clamp-1">LOGOUT</span>}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
