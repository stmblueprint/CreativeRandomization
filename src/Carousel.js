
import golden from "./assets/golden.jpg";
import inferno from "./assets/inferno.png";
import gaara from "./assets/gaara1.jpg";
import leia from "./assets/leia.jpg";
import lost from "./assets/lost1.png";


import React from 'react';
import { Carousel } from "react-carousel3";

const style = {
  width: 297,
  height: 296,
};

export default function Slide(){
   
    return(

    <div className="center">
        <div >
        <h4 style={style}>Previous Artists and Ideas</h4>

        <Carousel height={520} width={1000} yOrigin={-40} yRadius={20} autoPlay={true}>
        <div className="img-slider-container" key={1} style={style}>
            <img className="img" alt="" src={golden} />
            <div className="caption">Idea: Golden haired warrior<br/>with a powers</div>
        </div>
        <div className="img-slider-container" key={2} style={style}>
            <img className="img" alt="" src={inferno} />
            <div className="caption">Idea: A fire wielding character</div>
        </div>
        <div className="img-slider-container" key={3} style={style}>
            <img className="img" alt="" src={gaara} />
            <div className="caption">Idea: Draw one of your favorite<br/>anime characters</div>
        </div>
        <div className="img-slider-container" key={4} style={style}>
            <img className="img" alt="" src={leia} />
            <div className="caption">Idea: Princess Leia from Star Wars</div>
        </div>
        <div className="img-slider-container" key={5} style={style}>
            <img className="img" alt="" src={lost} />
            <div className="caption">Idea: A character exploring a dark room</div>

        </div>
        </Carousel>
    </div>
    </div>
)
}

