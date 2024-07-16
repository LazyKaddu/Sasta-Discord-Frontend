import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServerItem = ({ server }) => {
    const [joined, setjoined] = useState(false);
    const success = () => toast.success("successfully joined the server!");
    const error = () => toast.error("sorry an error occured!");
    const changejoined = (e) => {
        setjoined(true)
        if (!joined) {

            axios.post("http://localhost:4000/api/server/join", {
                serverId: server._id,
            }).then(() => {
                success();
            }).catch((e) => {
                console.log(e)
                error();
            })
        }
    }

    return (
        <div className='bg-slate-200 rounded my-2 flex justify-around items-center w-full h-[20%] '>
            <p className='w-[40%]'>{server.name}</p>
            <p>{server.members.length}/{server.maxMembers}</p>

            <button className={joined ? "bg-gray-500 rounded w-[6vw] h-[2vw]" : "bg-green-500 rounded w-[6vw] h-[2vw]"} onClick={changejoined}>{!joined ? "join" : "joined"}</button>
            <ToastContainer position='top-right' />
        </div>
    )
}

export default ServerItem
