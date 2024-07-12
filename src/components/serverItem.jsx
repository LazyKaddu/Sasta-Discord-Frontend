import React, { useEffect, useState } from 'react'

const ServerItem = ({ userId, server }) => {
    const [joined, setjoined] = useState(false);

    const changejoined = () => {
        setjoined(true)
    }
    useEffect(() => {
        axios.get("./api/", {
            params: {
                id: server.id,
                user: userId,
            }
        }).catch((e) => {
            console.log(e)
        })
    }, [joined])

    return (
        <div className='bg-slate-200 rounded my-2 flex justify-around items-center w-full aspect-auto-[1/10]'>
            <p className=''>{server.name}</p>
            <p>{server.members.length}</p>
            {joined ?
                <button className='border-none bg-green-500 w-[3vw] aspect-auto-[3/1]' onClick={changejoined}>join</button>
                : <button className='border-none bg-gray-500 w-[3vw] aspect-auto-[3/1]' onClick={changejoined}>joined</button>
            }
        </div>
    )
}

export default ServerItem
