import React, { Component } from "react";
import ParallaxImage from "../common/ParallaxImage";
import img12 from "../../assets/images/img12.jpg";
import Carousel from '../common/Carousel';

class Home extends Component {
  render() {
    return (
      <div>
        <ParallaxImage bgImage={img12} title="Rhiz" alt="parallaximg" />
        <Carousel />
        <div style={{ height: "400px" }} />
      </div>
    );
  }
}

export default Home;
