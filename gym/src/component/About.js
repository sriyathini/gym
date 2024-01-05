import React from "react";
import Aboutimg from "../images/about.png";

function About(){
    return(
        <div id="about">
            <div className="row">
                <div className="col">
            <img src={Aboutimg} alt="About"/>
            </div>
            <div className="col">
            <div className="aboutcontent">
                <h1>About Us</h1>
                <h3>Workouts can sometimes feel like a drag. 
                    Some variation in the workout routine or introducing a new piece of equipment 
                    can help spice things up a little. You can use this idea to give your audience information
                     about how they can use a piece of equipment differently or for the first time in the
                      workout routine.</h3>
            </div>
            </div>
            </div>
        </div>
    )
}
export default About;