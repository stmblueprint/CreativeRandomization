
import {useFrame } from "@react-three/fiber";
import {PerspectiveCamera } from '@react-three/drei';
// import { Controls, useControl } from 'react-three-gui';

import { useRef } from "react";
import { Mesh } from "three";
import { folder, useControls } from "leva";




// Box Geometry
 export default function Cube() {
    const meshRef = useRef(Mesh);
    
  
    useFrame(() => { // similar to update function on the cube
      if(!meshRef.current){
        return;
      }
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    });
      
    return(
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 3, 2]} />
        <meshStandardMaterial color="#8EF5AB"/>

      </mesh>
      
    );
      
  }