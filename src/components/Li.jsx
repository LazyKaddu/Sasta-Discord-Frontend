import React from 'react';
import { useNavigate } from 'react-router-dom';

const Li = ({data,href,icon}) => {
    const navigate = useNavigate();
    const Navigate = ()=>{
      navigate(href)
    }
  return (
    <li className='list-none flex items-center justify-start gap-[0.5vw] ml-[3vw] text-[1.4vw] text-white hover:bg-[#343A50] w-[60%] p-2 rounded-lg cursor-pointer' onClick={Navigate}>
        {icon} {data}
    </li>
  )
}

export default Li
