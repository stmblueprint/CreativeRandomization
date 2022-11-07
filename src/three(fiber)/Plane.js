
import {useFrame } from "@react-three/fiber";
import {PerspectiveCamera, useTexture } from '@react-three/drei';
// import { Controls, useControl } from 'react-three-gui';

import { useRef } from "react";
import { LinearEncoding, Mesh } from "three";
import { folder, useControls } from "leva";
// import img1 from "/Users/tulloch64/Documents/GitHub/CreativeRandomization/src/assets/textures/painted_concrete_diff_1k.jpg";
// import img2 from "/Users/tulloch64/Documents/GitHub/CreativeRandomization/src/assets/textures/painted_concrete_disp_1k.jpg";
// import img3 from "/Users/tulloch64/Documents/GitHub/CreativeRandomization/src/assets/textures/painted_concrete_arm_1k.jpg";
// import img4 from "/Users/tulloch64/Documents/GitHub/CreativeRandomization/src/assets/textures/painted_concrete_nor_gl_1k.jpg";




export default function Plane() {
  // const img1 = "";
  const texture = useTexture({
    // map: img1, 
    // displacementMap: img2,
    // aoMap: img3, 
    // normalMap: img4,
  
  });
  const meshRef = useRef(Mesh);
  const {scaleX,scaleY, X, Y, Z,rotationX,rotationY,
     color, wireframe, position} = useControls("Plane", {
    transform: folder({
      scaleX: {
       value: 0.3, 
       min: 0.4,
       max: 5,
       step: 0.2,
      },
      scaleY: {
        value: 0.3, 
        min: 0.4,
        max: 5,
        step: 0.2,
       },
      rotationX: -26.20,
      rotationY: 0.26,
      position: [0.18, 0.03, -0.03],
    }),
    material: folder({
      color: "white",
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
    // meshRef.current.rotation.y += 0.01;
     meshRef.current.rotation.z += 0.001;
  });
    
  return(
     <>
        <PerspectiveCamera makeDefault position={[X, Y, Z]}/>
        <mesh ref={meshRef} rotation-x={rotationX} rotation-y={rotationY} >
          <planeGeometry args={[scaleX, scaleY, 10, 10]} />
          <meshStandardMaterial {...texture} color={color} normalMap-encoding={LinearEncoding}/>
        </mesh>
        
        {/* <mesh ref={meshRef}  rotation-x={rotationX} rotation-y={rotationY} position-y={0.1}>
          <planeBufferGeometry args={[scaleX, scaleY]} position={position}/>
          <meshStandardMaterial {...texture} wireframe color={"white"} map={null}/>
        </mesh> */}

     
     </>
   
  );
    
}