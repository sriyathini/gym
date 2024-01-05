import React from "react";
import Clas1 from "../images/class1.png";
import Clas2 from "../images/class2.png";

export default function Class(){
    return(
        <div id="class">
            <h1>Classes</h1>
            <div className="row">
                <div className="col">
                <h2>Commericial classes</h2>
                    <img src={Clas1} alt="commericial" style={{height:"300px",width:"50%px"}}></img>
                    <h3><ul><li>Indoor cycling</li>
                    <li>Strength training</li>
                    <li>Cardio dance</li>
                    <li>Yoga</li>
                    <li>Aquatic fitness</li>
                    </ul></h3>
                    </div>
                <div className="col">
                    <h2>Fitness classes</h2>
                    <img src={Clas2} alt="fitness" style={{height:"300px",width:"50%px"}}></img>
                    <h3><ul>
                    <li>rowing</li>
                    <li>barre</li>
                    <li>pilates</li>
                    <li>weight training</li>
                    <li>stretching</li>
                    </ul></h3>
                </div>
            </div>
            <h4>Seperate class available for both Men and Women</h4>
        </div>
    )
}