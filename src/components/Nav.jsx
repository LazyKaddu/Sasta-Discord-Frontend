import React from "react";
import Li from "../components/Li";
import {
  HiOutlineChat,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLogout,
  HiOutlineSupport,
  HiSupport,
  HiOutlinePhone
} from "react-icons/hi";

import Cookies from "js-cookie";



const Nav = () => {

  const Remove = ()=>{
    Cookies.remove('userName');
    Cookies.remove('userId');
  }

  return (
    <nav className="w-[16vw] h-fit bg-white rounded-md flex justify-center items-center">
      <ul className="flex items-start flex-col py-5 px-3 gap-2 w-[100%] h-[100%]">
        <Li data={"HOME"} href={"/home"} icon={<HiOutlineHome />} />
        <Li data={"CHAT"} href={"/chat"} icon={<HiOutlineChat />} />
        <Li data={"ABOUTUS"} href={"/about"} icon={<HiOutlineInformationCircle />} />
        <Li data={"CONTACTUS"} href={"/"} icon={<HiOutlinePhone />} />
        <Li data={"DEV COM"} href={"/"} icon={<HiSupport />} />
        <Li data={"SUPPORT"} href={"/"} icon={<HiOutlineSupport />} />
        <Li data={"LOGOUT"} href={"/"} onClick={Remove} icon={<HiOutlineLogout />} />
      </ul>
    </nav>
  );
};

export default Nav;
