import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import ParallaxImage from "../common/ParallaxImage";
import img12 from "../../assets/images/img12.jpg";
import FeaturedCarousel from './FeaturedCarousel';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <ParallaxImage bgImage={img12} title="Rhiz" alt="parallaximg" />
        <div style={{ height: "80px" }}/>
        <Container>
          <h1 className="title">Featured Landscaping Listings</h1>
          <FeaturedCarousel />
        </Container>
        <div style={{ height: "200px" }} />
      </div>
    );
  }
}

export default Home;
