import React from "react";
import { Parallax } from "react-parallax";

const ParallaxImage = props => (
  <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={props.bgImage}
      bgImageAlt="the dog"
      strength={200}
    >
      <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
      <div style={{ height: "300px" }} />
    </Parallax>
  </div>
);
export default ParallaxImage;
