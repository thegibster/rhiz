import React, { Component } from "react";
import ParallaxImage from "../common/ParallaxImage";
import PriceCard from './PriceCards';
import landscape2 from "../../assets/images/landscape2.jpeg";

class Pricing extends Component {
  render() {
    return (
      <div>
        <ParallaxImage
          height={{ height: "100px" }}
          bgImage={landscape2}
          title="Pricing Options"
          text="Access your needs and goals; we've got you covered! Start your free trial with one of our options below."
          alt="parallaximg"
        />
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>

    );
  }
}

export default Pricing;
