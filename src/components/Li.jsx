import React from "react";
import { useNavigate } from "react-router-dom";

const Li = ({ data, href, icon, style }) => {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(href);
  };
  return (
    <li
      className="list-none flex items-center justify-start gap-[2vw] text-lg bg-[#fff] 
      hover:bg-[#e5dff9] p-2 rounded-lg cursor-pointer w-full"
      onClick={Navigate}
      style={style}
    >
      <span className="w-fit text-2xl bg-[#e5dff9] p-1 rounded-lg opacity-85">
        {icon}
      </span>
      {(typeof style === 'undefined')
        ?  <span className="line-clamp-1">{data}</span>
        :  <span className="hidden"></span>}
    </li>
  );
};

export default Li;
