import React from 'react'
import MainBody from './components/MainBody'

const HomeElem = () =>{
    return(
        <>
            <p>Hello bro !! welcome to home page</p>
        </>
    )
}

const Home = () => {
  return (
    <MainBody data={<HomeElem/>}/>
  )
}

export default Home