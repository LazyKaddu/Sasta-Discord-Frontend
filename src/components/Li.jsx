import React from "react";
import { useNavigate } from "react-router-dom";

const Li = ({ data, href, icon, styles}) => {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(href);
  };
  console.log('styles = ', styles)
  return (
    <li
      className={
        (styles ? "justify-center" : "justify-start") +
        " list-none flex items-center gap-[2vw] text-lg bg-[#fff] hover:bg-[#e5dff9] transition-all py-2 px-1 rounded-lg cursor-pointer w-full"
      }
      onClick={Navigate}
    >
      <span
        className={
          (styles ? "w-full" : "w-fit") +
          " flex justify-center text-2xl bg-[#e5dff9] p-1 rounded-lg opacity-85"
        }
      >
        {icon}
      </span>

      {(typeof styles === 'undefined') && <span className="line-clamp-1">{data}</span>}
    </li>
  );
};

export default Li;

