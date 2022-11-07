

import {useFrame } from "@react-three/fiber";
import {PerspectiveCamera } from '@react-three/drei';
// import { Controls, useControl } from 'react-three-gui';

import { useRef } from "react";
import { Mesh } from "three";
import { folder, useControls } from "leva";


// Octahedrone Geometry
export default function Octahedrone() {
    const meshRef = useRef(Mesh);
    const {scale, color, wireframe, position} = useControls("Octa", {
       transform: folder({
         scale: {
          value: 1, 
          min: 0.4,
          max: 4,
          step: 0.2,
         },
         position: [2.5, 0, 0],
       }),
       material: folder({
         color: "#333",
         wireframe: false
       })
    });
  
    
  
    useFrame(() => { // similar to update function on the cube
      if(!meshRef.current){
        return;
      }
      // meshRef.current.rotation.x += 0.05;
      // meshRef.current.rotation.y += 0.04;
    });
  
      
    return(
      <mesh ref={meshRef}>
        {/* <PerspectiveCamera makeDefault position={[0.4, 1, 20]} /> */}
        <octahedronGeometry args={[scale]} position={position}/>
        <meshStandardMaterial color={color} wireframe={wireframe}/>
      </mesh>
     
    );
      
  }