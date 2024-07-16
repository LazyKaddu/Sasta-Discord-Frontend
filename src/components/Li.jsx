import React from "react";
import { useNavigate } from "react-router-dom";

const Li = ({ data, href, icon}) => {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(href);
  };
  return (
    <li
      className="list-none flex items-center justify-start gap-[2vw] text-lg bg-[#fff] 
      hover:bg-[#e5dff9] p-2 rounded-lg cursor-pointer w-full"
      onClick={Navigate}
    >
      <span className="w-fit text-2xl bg-[#e5dff9] p-1 rounded-lg opacity-85">
        {icon}
      </span>

      <span className="line-clamp-1">{data}</span>

    </li>
  );
};

export default Li;
