
import { render } from "@testing-library/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"






 export default function About(){


    return(
    <>
    <div className="about-container">
        <h3 className="center">About &nbsp;<FontAwesomeIcon className="header-icon-about" icon={faCircleInfo} /></h3>

        <p>
            This website was developed for artists and creatives who might need fresh ideas to spark their creativity.<br/><br/>
            Be on the lookout for future additions and updates!
        </p>
        Developer:      &nbsp;<a href="https://instagram.com/stmblueprint"><span><FontAwesomeIcon className="header-icon" icon={faInstagram} /></span></a>&nbsp;&nbsp;
                        <a href="https://github.com/stmblueprint"><span><FontAwesomeIcon className="header-icon" icon={faGithub} /></span></a>
     </div>
    </> )
}