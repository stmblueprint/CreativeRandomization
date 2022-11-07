
import {useFrame } from "@react-three/fiber";
import {PerspectiveCamera, PointsBuffer, Torus, useTexture } from '@react-three/drei';
// import { Controls, useControl } from 'react-three-gui';

import { useRef } from "react";
import { BufferGeometry, LinearEncoding, Mesh, Points } from "three";
import { folder, useControls } from "leva";
// import img1 from "/Users/tulloch64/Documents/GitHub/CreativeRandomization/src/assets/textures/sun_uv_map.jpeg";




export default function Sphere() {
  // const img1 = "";
  const texture = useTexture({
    // map: img1, 
    // displacementMap: img2,
    // aoMap: img3, 
    // normalMap: img4,
  
  });
  const meshRef = useRef(Points);
  const {scaleX,scaleY, X, Y, Z,rotationX,rotationY,
     color, wireframe, position} = useControls("Sphere", {
    transform: folder({
      scaleX: {
       value: 0.2, 
       min: 0.1,
       max: 5,
       step: 0.2,
      },
      scaleY: {
        value: 0.1, 
        min: 0.1,
        max: 5,
        step: 0.2,
       },
      rotationX: -26.20,
      rotationY: 0.26,
      position: [3, 0.03, -0.03],
      particlesCount: 5000, particles: 0
    }),
    material: folder({
      color: "#5197a0",
      wireframe: false
    }),
    camera: folder({
      X: 2.0,
      Y: 1.33, 
      Z: -0.07,

    }),



 });

  
  useFrame(() => { // similar to update function on the cube
    if(!meshRef.current){
      return;
    }
    // meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
     meshRef.current.rotation.z += 0.01;
  });
    
  return(
     <>
        <PerspectiveCamera makeDefault position={[X, Y, Z]}/>
        <points ref={meshRef} rotation-x={rotationX} rotation-y={rotationY}>
          <torusGeometry args={[scaleX, scaleY, 100, 100]} />
        
          <pointsMaterial {...texture} color={color} size={0.010}/>
        </points>
        
        {/* <mesh ref={meshRef}  rotation-x={rotationX} rotation-y={rotationY} position-y={0.1}>
          <planeBufferGeometry args={[scaleX, scaleY]} position={position}/>
          <meshStandardMaterial {...texture} wireframe color={"white"} map={null}/>
        </mesh> */}

     
     </>
   
  );
    
}