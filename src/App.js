import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, PositionalAudio } from '@react-three/drei';
import "./index.css";
import { Leva } from "leva";
import twoD from "./assets/twoD_ellipse.png";
import threeD from "./assets/threeD_ellipse.png";
import golden from "./assets/golden.jpg";
import gaara from "./assets/gaara1.jpg";
import inferno from "./assets/inferno.png";
import Cube from "./three(fiber)/Cube";
import Plane from "./three(fiber)/Plane";
import Octahedrone from "./three(fiber)/Octahedrone";
import Footer from "./Footer";
import Sphere from "./three(fiber)/Sphere";
import Slide from "./Carousel";
import Header from "./Header";
import About from "./About";
import SubmitIdeas from "./SubmitIdeas";



// import { Controls, useControl } from 'react-three-gui';
// import { folder, useControls, Leva } from "leva";
// import { useRef } from "react";
// import { Mesh } from "three";

/** Links 
 *   https://threejs.org/docs/#api/en/geometries/OctahedronGeometry
 * 
 * 
**/

const root = ReactDOM.createRoot(document.getElementById('root'));



export default function App (){

  // window.addEventListener('scroll', () =>{
  //   const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  //   const scrolled = window.screenY;

  //   if (Math.ceil(scrolled) === scrollable){
  //      document.getElementById('oct').style.translate = 40;
  //   }

  // });

  // useState hooks for button clicks
  const [twoDimensional, setTwoDimensional] = useState("Waiting for action..");
  const [threeDimensional, setThreeDimensional] = useState("Waiting for action..");
  
  // fetch data from api
  const [data, setData] = React.useState([]); //store fetched data
  const [info, setInfo] = React.useState([]); //store fetched data
  
  useEffect(() => {

  // fetch data with useEffect hook
    // async to avoid interruption of other information
    const fetchTwoDimensional = async () => {

      // 2D API endpoint
      await fetch("https://www.devtulloch.com/two-dimensional")
        .then((res) => res.json()) // convert info to json format
        .then((data) => { // data is the variable used to return api data ex. data.idea or data.id
          setData(data); // store data in previously decleared state and
          // display data in the console
          // console.log(data);
        }, []);
    };
    const fetchThreeDimensional = async () => {

      // 2D API endpoint
      await fetch("https://www.devtulloch.com/three-dimensional")
        .then((res) => res.json()) // convert info to json format
        .then((data) => { // data is the variable used to return api data ex. data.idea or data.id
          setInfo(data); // store data in previously decleared state and
          // display data in the console
          // console.log(data);
        }, []);
    };
      fetchTwoDimensional();
      fetchThreeDimensional();
  })
    //  fetchTwoDimensional(); // run the function
   // [] means the use effect hook with only run once
      



  // React.useEffect(() => {
  //   // async to avoid interruption of other information
  //   const fetchThreeDimensional= async () => {

  //     // 2D API endpoint
  //     await fetch("https://devtulloch.com/two-dimensional")


  //       .then((res) => res.json()) // convert info to json format
  //       .then((data) => { // data is the variable used to return api data ex. data.idea or data.id
  //         setInfo(data); // store data in previously decleared state and
  //         // display data in the console
  //         // console.log(data);
  //       }, []);
  //   };
  //   fetchThreeDimensional();
  // }); // [] means the use effect hook with only run once

   



    return(
        <>

     <div className="body-container">
     <Leva hidden/>

        {/* Header with green background */}
          
          <div>
            < Header/>
          </div>


            {/* React three fiber scene */}
           <Canvas>
            {/* Lighting */}
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
             <Cube />
           </Canvas>
           <div className="center">
              <table> 
              <tr><th style={{color:"black"}}>Previous ideas & artist result</th></tr> 
                <tr className="center main-container-1">
                
                <div className='featured-imgs center'>
                  <Slide/>
                

                    {/* <figure className="figure-2">
                    <td className="display-ideas-container">
                     
                    <a href={inferno}><img className="display-ideas-container" 
                          src={inferno} alt="golden" width='20'/></a>

                      <figcaption style={{
                        fontWeight: "bold",
                        color: "white"
                      }}>
                        A fire wielding character holding a sword
                      </figcaption>  
                      
                      </td>
                    </figure> */}

                     
                   
                    </div>
                </tr>
                
              </table>
            </div>

            <div className="center">
             <h3 className="center idea-header" style={{color: "black"}}>Click a sphere below to receive your idea</h3>
            </div>

            <div className="center">
              <div className="dimension-idea-name">
                <div className="center tip">Tip: Click until you're satisfied with the idea.<br/>
      
                </div>
                <div className="center name-position">{twoDimensional}</div>
                <div className="dimension-ellipse">
                <button style={{
                  backgroundColor: "transparent",
                  border: "none"
                
                 }}
                  type="button" onClick={() => setTwoDimensional(data.ids)}>
                 
                 <img src={twoD} height='120' alt="ellipse" width='100'
                  className="category-button" />
                 </button>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="dimension-idea-name">
                <div className="center name-position">{threeDimensional}</div>
                <div className="dimension-ellipse">
                <button style={{
                  backgroundColor: "transparent",
                  border: "none"
          
                 }} type="button" onClick={() => setThreeDimensional(info.ids)}>
                 <img src={threeD} height='120' alt="ellipse" width='100'
                  className="category-button" />
                 </button>
                </div>
              </div>
            </div>
            <div><SubmitIdeas/></div>
            <section>
                <About/>
            </section>
            <div className="main-bg" style={{ width: "100vw", height: "100vh" }}>
           <Canvas makeDefault  className="bg" id="oct">

            {/* Lighting */}
            <ambientLight/>
              <pointLight position={[0, 5, 4]}/>             
              {/* <Octahedrone/> */}
              {/* <OrbitControls/> */}
           </Canvas>


           {/* <div>
            <div style={{
              backgroundColor: "grey",
              height: 100,
              width: 100

            }}>

            </div>
           </div> */}
          </div>



          <div className="main-bg" style={{ width: "100vw", height: "220vh"}}>
           <Canvas makeDefault  className="bg" id="oct" >
            
            {/* Lighting */}
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
              <Sphere/>           
              <OrbitControls/>
           </Canvas>

          </div>

         
          {/* <div><Footer/></div> */}
          </div>
        </>
        
         );
}

root.render(< App/>);

