import React from 'react';
import MainBody from './components/MainBody';
import EatingMonster from './assets/eatingMonster.png';
import RedMonster from './assets/redmonster.png';

const SupportSec = () => {
    return (
        <div className='bg-[#5865F2] h-full w-full flex'>
            <div className='w-[30%]'>
                <img className='relative left-[18vw] top-[5vw] rotate-[-45deg] w-[10vw] h-[auto] z-[1]' src={EatingMonster} alt="" srcset="" />
                <img className='relative fill-transparent' src={RedMonster} alt="" srcset="" />
            </div>
            <div className='w-[70%] h-[80%] flex flex-col justify-center z-[2]'>
                <div className='text-6xl text-black mb-14 font-serif'>Support</div>
                <div className='h-[60%] bg-white rounded-l-xl p-5'>
                    <h1 className='text-[#5865F2] text-6xl w-[70%] font-mono m-4'>Enjoyed Using Mhenga Discord</h1>
                    <p className='text-blue-400 text-lg m-4'>you can follow us on linkedin and instagram as <a href="http://">@an_aashish_negi</a> and <a href="http://">@nikhilbhat</a></p>
                </div>
            </div>
        </div>
    )
}



const Support = () => {
    return (
        <MainBody data={<SupportSec />} open={true} />
    )
}

export default Support
