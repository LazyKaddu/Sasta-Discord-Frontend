import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';



const Model = ({url,scale,rotate})=>{
    const  {scene } = useGLTF(url);
    return <primitive 
    object={scene}
    scale={[scale,scale,scale]}
    rotation={rotate}
    />;
}

const TD = ({url,scale,rotate,movable}) => {
    useEffect(() => {
    //   first
    
      return () => {
        // second
      }
    }, [])
    
  return (
    <Canvas style={{width:"30vw",height:"30vw",margin:"auto",cursor:"grab"}}>
        <ambientLight intensity = {0.5} />
        <directionalLight position = {[0,0,5]} />
        <Model url = {url} scale = {scale} rotate = {rotate}/>
        {movable&&<OrbitControls/>}
    </Canvas>
  )
}

export default TD
