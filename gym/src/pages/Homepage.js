import React from "react";
import Home2 from '../images/homebg2.png';
import Carousel from 'react-bootstrap/Carousel';

function Homepage(){
  return(
    <div id="home">
           <Carousel>
      <Carousel.Item >
       <img src={Home2} alt="1st slide" className="img-fluid" style={{height:"820px",width:"100%"}}/>
        <Carousel.Caption>
          <h3>Decide</h3> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
       <img src={Home2} alt="2nd slide" className="img-fluid" style={{height:"820px",width:"100%"}}  />
        <Carousel.Caption>
          <h3>commit</h3> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={Home2} alt="3d slide" className="img-fluid" style={{height:"820px",width:"100%"}} />
      <Carousel.Caption>
          <h3>succed</h3>   
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
export default Homepage;