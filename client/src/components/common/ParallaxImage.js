import React from "react";
import { Parallax } from "react-parallax";
import { Image, Container } from 'semantic-ui-react';

const ParallaxImage = props => (
  <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={props.bgImage}
      bgImageAlt="the dog"
      strength={200}
    >
      <Container>
        <Image src={props.src} size={props.size} centered />
        <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
        <p style={{ textAlign: 'center' }}>{props.text}</p>
        <div style={ props.height } />
      </Container>
    </Parallax>
  </div>
);
export default ParallaxImage;
