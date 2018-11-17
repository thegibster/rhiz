import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import ParallaxImage from "../common/ParallaxImage";
import landscape1 from "../../assets/images/banner-background.jpg";
import FeaturedCarousel from './FeaturedCarousel';
import FeaturedCarousel2 from "./FeaturedCarousel2";
import SearchBar from './SearchBar';
import './home.css';

class Home extends Component {
  render() {
    return <div>
        <ParallaxImage 
          bgImage={landscape1} 
          height={{ height: "50px" }} 
          title="Rhiz Marketplace" 
          text="Let's get started! Simply choose your category, location, and urgency."
          alt="parallaximg" 
          search={<SearchBar />} 
        />
        <div style={{ height: "55px" }} />
        <Container>
          <h1 className="title">Featured Landscaping Listings</h1>
          <FeaturedCarousel />
          <div style={{ height: "80px" }} />
          <h1 className="title">Featured Interior Design Listings</h1>
          <FeaturedCarousel2 />
          <div style={{ height: "80px" }} />
        </Container>
      </div>;
  }
}

export default Home;
