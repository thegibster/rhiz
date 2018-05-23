import React from "react";
import { Parallax } from "react-parallax";
import { Image, Container } from 'semantic-ui-react';

const ParallaxImage = props => (
  <div>
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={props.bgImage}
      bgImageAlt="profile pic"
      strength={200}
    >
      <Container>
        <Image src={props.src} size={props.size} centered />
        <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>{props.title}</h1>
        <p style={{ textAlign: 'center', paddingBottom: '10px' }}>{props.text}</p>
        <div style={{ textAlign: 'center' }}>{ props.search }</div>
        <div style={ props.height } />
      </Container>
    </Parallax>
  </div>
);
export default ParallaxImage;
