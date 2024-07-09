import React from "react";
import { useNavigate } from "react-router-dom";

const Li = ({ data, href, icon, styles }) => {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(href);
  };
  return (
    <li
      className="list-none flex items-center justify-start gap-[2vw] text-lg bg-[#fff] 
      hover:bg-[#e5dff9] p-2 rounded-lg cursor-pointer w-full"
      onClick={Navigate}
      // style={styles}
    >
      <span className="text-2xl bg-[#e5dff9] p-1 rounded-lg opacity-85">
        {icon}
      </span>
      {!styles && <span className="line-clamp-1">{data}</span>}
    </li>
  );
};

export default Li;
