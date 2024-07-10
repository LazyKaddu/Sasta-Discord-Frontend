import React from 'react';
import MainBody from './components/MainBody';
// import TD from './components/TD'


const HomeElem = () =>{
    return(
        <>
            <header className="flex flex-col justify-center gap-4 items-start bg-[#5865F2] w-[100%] h-[100%]">
              {/* <TD/> */}
              <div className='flex justify-evenly items-center'>
                <div className='flex flex-col Hero items-start justify-center gap-4 text-white w-[40vw] ml-12'>
              <h1 className="text-6xl font-bold font-serif">Welcome to Mehenge Discord</h1>
              <p className='text-2xl font-mono font-thin'>A place where you connect with peoples of same intrest</p>
              </div>
              <img className='w-[30vw] border-2 border-black' src="" alt="" srcset="" />
              </div>
              <div className="flex gap-4 ml-10 text-white justify-between items-center">
              <button className='bg-transparent border-green-500 border-2 hover:bg-green-500 p-2 rounded transition-all'>Create Server</button>
              <button className='bg-transparent rounded border-green-500 border-2 transition-all hover:bg-green-500 p-2'>Join Server</button>
              </div>
            </header>
        </>
    )
}

const Home = () => {
  return (
    <MainBody data={<HomeElem/>} open={true}/>
  )
}

export default Home