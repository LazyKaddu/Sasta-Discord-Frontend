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
    Cookies.remove("userId");
    Cookies.remove("userName");
  }

  const LogoutUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/logout")
      .then((response) => {
        console.log(response.data);
        response.data.success ? RemoveCookies() : setError(response.data.error);
        navigate('/');
      })
      .catch(err => {
        setError(err);
      })
  };

  return (
    <nav
      className="w-[16vw] h-fit bg-white rounded-md flex justify-center items-center overflow-hidden"
      style={styles}
    >{Error}
      <ul className="flex items-start flex-col py-5 px-3 gap-2 w-[100%] h-[100%] overflow-hidden">
        <Li data={"HOME"} href={"/home"} icon={<HiOutlineHome />} />
        <Li data={"CHAT"} href={"/chat"} icon={<HiOutlineChat />} />
        <Li
          data={"ABOUTUS"}
          href={"/about"}
          icon={<HiOutlineInformationCircle />}
        />
        <Li data={"CONTACTUS"} href={"/"} icon={<HiOutlinePhone />} />
        <Li data={"DEV COM"} href={"/"} icon={<HiSupport />} />
        <Li data={"SUPPORT"} href={"/support"} icon={<HiOutlineSupport />} />
        <Li
          data={"LOGOUT"}
          href={''}
          onClick={LogoutUser}
          icon={<HiOutlineLogout />}
        />
      </ul>
    </nav>
  );
};

export default Nav;
