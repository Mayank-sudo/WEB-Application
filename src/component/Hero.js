import React from "react";
import image from "../images/Group.jpg";
import Form from "./Form";
import "./Hero.css";




const Hero = () => {
  return (
      <div className="content" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
      <div className="container">
      <h1>WebDevlopment Company</h1>
        <p >
        <strong>  Lorem dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
          maiestatis persequeris pro, pri ponderum tractatos ei.</strong>
        </p>
      </div>
      </div>
    
  );
};

export default Hero;
