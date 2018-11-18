import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import ParallaxImage from "../common/ParallaxImage";
import landscape1 from "../../assets/images/landscape1.jpeg";
import FeaturedCarousel from './FeaturedCarousel';
import FeaturedCarousel2 from "./FeaturedCarousel2";
import SearchBar from './SearchBar';
import VerticalCard from '../common/VerticalCard';
import featuredLandscaping from '../../constants/featuredLandscaping';
import featuredInteriorDesign from "../../constants/featuredInteriorDesign";
import './home.css';

class Home extends Component {
  state = {
    featuredLandscaping: featuredLandscaping,
    featuredInteriorDesign: featuredInteriorDesign
  }

  render() {
    return <div>
        <ParallaxImage
          bgImage={landscape1}
          height={{ height: "35px" }}
          title="Rhiz Marketplace"
          text="Let's get started! Simply choose your category, location, and urgency."
          alt="parallaximg"
          search={<SearchBar />}
        />
        <div style={{ height: "55px" }} />
        <Container>
          <h1 className="title">Featured Landscaping Listings</h1>
          <FeaturedCarousel featuredLandscaping={this.state.featuredLandscaping}/>
          <div style={{ height: "80px" }} />
          <h1 className="title">Featured Interior Design Listings</h1>
          <FeaturedCarousel2 featuredInteriorDesign={this.state.featuredInteriorDesign}/>
          <div style={{ height: "80px" }} />
        </Container>
      </div>;
  }
}

export default Home;
