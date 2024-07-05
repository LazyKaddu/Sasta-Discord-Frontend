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

const Nav = () => {
  return (
    <nav className="w-[16vw] h-fit bg-white rounded-md flex justify-center items-center">
      <ul className="flex items-start flex-col py-5 px-3 gap-2 w-[100%] h-[100%]">
        <Li data={"HOME"} href={"/"} icon={<HiOutlineHome />} />
        <Li data={"CHAT"} href={"/chat"} icon={<HiOutlineChat />} />
        <Li data={"ABOUTUS"} href={"/"} icon={<HiOutlineInformationCircle />} />
        <Li data={"CONTACTUS"} href={"/"} icon={<HiOutlinePhone />} />
        <Li data={"DEV COM"} href={"/"} icon={<HiSupport />} />
        <Li data={"SUPPORT"} href={"/"} icon={<HiOutlineSupport />} />
        <Li data={"LOGOUT"} href={"/"} icon={<HiOutlineLogout />} />
      </ul>
    </nav>
  );
};

export default Nav;
