import React, { useState } from 'react';
import MainBody from './components/MainBody';
import CreateServerForm from './components/CreateServer';
// import TD from './components/TD'


const HomeElem = () => {

  const [createServer, setcreateServer] = useState(false)

  const join = ()=>{
    setcreateServer(!createServer);
  }

  return (
    <>
      <header className="flex flex-col justify-center gap-4 items-start bg-[#5865F2] min-h-[83vh] w-full">
        {/* <TD/> */}
        <div className='flex justify-evenly items-center'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col Hero items-start justify-center gap-4 text-white w-[40vw] ml-10'>
              <h1 className="text-6xl font-bold font-serif">Welcome to Mehenge Discord</h1>
              <p className='text-2xl font-mono font-thin'>A place where you connect with peoples of same intrest</p>
            </div>

            <div className="flex gap-4 ml-10 text-white justify-start items-center">
              <button className='bg-transparent border-green-500 border-2 hover:bg-green-500 p-2 rounded transition-all' onClick={join}>Create Server</button>
              <button className='bg-transparent rounded border-green-500 border-2 transition-all hover:bg-green-500 p-2'>Join Server</button>
            </div>
          </div>

          {!createServer?<img className='w-[30vw] h-full border-2 border-black' src="" alt="" srcset="" />
          :<CreateServerForm/>}
        </div>
      </header>
      <main>
        <div className='w-full bg-[#5865F2] h-[100vh]'>

        </div>
        <div className="w-full bg-[#5865F2] h-[100vh]"></div>
      </main>
    </>
  ) 
}

const Home = () => {
  return (
    <MainBody data={<HomeElem/>} open={true} />
  )
}

export default Home