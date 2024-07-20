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

    axios
      .post("http://localhost:4000/api/user/logout")
      .then((response) => {
        console.log("logout response- ", response.data);
        RemoveCookies();
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
      <ul className="flex items-start flex-col py-3 px-3 gap-1 w-[100%] h-[100%] overflow-hidden">
        <Li
          data={"HOME"}
          href={"/home"}
          icon={<HiOutlineHome />}
          style={styles}
        />
        <Li
          data={"CHAT"}
          href={"/chat"}
          icon={<HiOutlineChat />}
          style={styles}
        />
        <Li
          data={"DEV COM"}
          href={"/dev-com"}
          icon={<HiSupport />}
          style={styles}
        />
        <Li
          data={"CONTACTUS"}
          href={"/contact-us"}
          icon={<HiOutlinePhone />}
          style={styles}
        />
        <Li
          data={"ABOUTUS"}
          href={"/about"}
          icon={<HiOutlineInformationCircle />}
          style={styles}
        />
        <Li
          data={"SUPPORT"}
          href={"/support"}
          icon={<HiOutlineSupport />}
          style={styles}
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
