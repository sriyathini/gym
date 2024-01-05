import React from "react";
import Img1 from "../images/img1.png";
import Img2 from "../images/img2.png"
import Img3 from "../images/img3.png"
import Img4 from "../images/img4.png"
import Img5 from "../images/img5.png";
import Img6 from "../images/img6.png";
import Img7 from "../images/img7.png";
import Img8 from "../images/img8.png";
export default function App() {
  
    return (
        <div className="gallery">
          <h1>Gallery</h1>
          <div className="first-row">
         <div className="row">
          <div className="col"><img src={Img1} alt="galary" style={{height:"200px",width:"100%"}}/></div>
          <div className="col"><img src={Img2} alt="galary"style={{height:"200px",width:"100%"}}/></div>
          <div className="col"><img src={Img3} alt="galary"style={{height:"200px",width:"100%"}}/></div>
          <div className="col"><img src={Img4} alt="galary"style={{height:"200px",width:"100%"}}/></div>
         </div>
         </div>
         <div className="second-row">
         <div className="row">
          <div className="col"><img src={Img5} alt="galary"style={{height:"200px",width:"100%"}}/></div>
          <div className="col"><img src={Img6} alt="galary"style={{height:"200px",width:"100%"}}/></div>
          <div className="col"><img src={Img7} alt="galary"style={{height:"200px",width:"100%"}}/></div>
          <div className="col"><img src={Img8} alt="galary"style={{height:"200px",width:"100%"}}/></div>
         </div>
         </div>
        </div>
    );
  }