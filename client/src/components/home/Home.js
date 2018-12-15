import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import ParallaxImage from "../common/ParallaxImage";
import landscape1 from "../../assets/images/banner-background.jpg";
import FeaturedCarousel from './FeaturedCarousel';
import FeaturedCarousel2 from "./FeaturedCarousel2";
import SearchBar from './SearchBar';
import VerticalCard from '../common/VerticalCard';
import featuredLandscaping from '../../constants/featuredLandscaping';
import featuredInteriorDesign from "../../constants/featuredInteriorDesign";
import escapeRegExp from 'escape-string-regexp';
import './home.css';

class Home extends Component {
  state = {
    featuredLandscaping: featuredLandscaping,
    featuredInteriorDesign: featuredInteriorDesign,
    searchForName: '',
    searchForLocation:'',
    jobUrgency:''
  }

  updateSearchForName = (value) => {
    this.setState({
      searchForName: value
    });
  }

  updateSearchForLocation = (value) => {
    this.setState({
      searchForLocation: value
    });
  }

  updateJobUrgency = (value) => {
    this.setState({
      jobUrgency: value
    });
  }

  render() {
    // Destructure the state values
    // use spread to prevent mutations
    let { featuredLandscaping, featuredInteriorDesign, searchForName, searchForLocation } = this.state;
    const match =  new RegExp(escapeRegExp(searchForName), 'i');
    // should do the multi filtering here
    // so there can be a few lines for a filter that repeat and apply the filter
    // const createFilter = (filterParm) =>
    if(searchForName) {
      featuredLandscaping = featuredLandscaping.filter(
      (landscapeItem) => landscapeItem.name.toLowerCase().indexOf(this.state.searchForName.toLowerCase()) !== -1
        );
      featuredInteriorDesign = featuredInteriorDesign.filter(
      (interiorDesignItem) => interiorDesignItem.name.toLowerCase().indexOf(this.state.searchForName.toLowerCase()) !== -1
        );
    }


    if(searchForLocation) {
      featuredLandscaping = featuredLandscaping.filter(
        (landscapeItem) => {
            return landscapeItem.location.toLowerCase().indexOf(this.state.searchForLocation.toLowerCase()) !== -1
           }
          );
      featuredInteriorDesign = featuredInteriorDesign.filter(
        (interiorDesignItem) => {
            return interiorDesignItem.location.toLowerCase().indexOf(this.state.searchForLocation.toLowerCase()) !== -1
           }
          );
    }




    return <div>
        <ParallaxImage
          bgImage={landscape1}
          height={{ height: "50px" }}
          title="Rhiz Marketplace"
          text="Let's get started! Simply choose your category, location, and urgency."
          alt="parallaximg"
          search={<SearchBar searchForName={this.state.searchForName}
          updateSearchForName={this.updateSearchForName}
          updateSearchForLocation={this.updateSearchForLocation}
          />}
        />
        <div style={{ height: "55px" }} />
        <Container>
          <h1 className="title">Featured Landscaping Listings</h1>
          <FeaturedCarousel featuredLandscaping={featuredLandscaping}/>
          <div style={{ height: "80px" }} />
          <h1 className="title">Featured Interior Design Listings</h1>
          <FeaturedCarousel2 featuredInteriorDesign={featuredInteriorDesign}/>
          <div style={{ height: "80px" }} />
        </Container>
      </div>;
  }
}

export default Home;
