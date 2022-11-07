
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import Carousel from "./Carousel";
import Slide from "./Carousel";

export default function Header(){


    return(
        <>
          <div className="header-container-container">
            <div className="header-container">
                <div className="header-content center">

                <a href=" "><h3 className="title">Creative Randomization</h3></a>
                    <span className="header-links-grid">
                        {/* <a href="https://github.com/stmblueprint/CreativeRandomization"><span><FontAwesomeIcon className="header-icon" icon={faCircleInfo} /></span></a> */}
                        {/* <a href="https://instagram.com/stmblueprint"><span><FontAwesomeIcon className="header-icon" icon={faInstagram} /></span></a> */}
                        <a href="https://github.com/stmblueprint/CreativeRandomization"><span><FontAwesomeIcon className="header-icon" icon={faGithub} /></span></a>
                    </span>

                </div>
            </div>
            
          </div>
           
         </>
    )
}