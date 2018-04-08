import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ParallaxImage from "../common/ParallaxImage";
import landscape1 from "../../assets/images/landscape1.jpeg";
import donovan from '../../assets/images/donovan.jpg';
import HorizontalCard from '../common/HorizontalCard';
import featuredLandscaping from '../../constants/featuredLandscaping.js';

class Profile extends Component {
  renderCards() {
    let cards = featuredLandscaping.map(featuredLandscaping => {
      return (
        <HorizontalCard 
            name={featuredLandscaping.name}
            bio={featuredLandscaping.bio}
            src={featuredLandscaping.src}
            location={featuredLandscaping.location}
            description={featuredLandscaping.description}
            facebook={featuredLandscaping.facebook}
            instagram={featuredLandscaping.instagram}
            pricing={featuredLandscaping.pricing}
            website={featuredLandscaping.website}
        />
      )
    })
    return cards;
  }
  render() {
    return (
      <div>
        <ParallaxImage 
          src={donovan}
          size='small'
          height={{ height: "15px" }}
          bgImage={landscape1} 
          title="Donovan Lowkeen" 
          text="lorem ipsum Ea consequat sunt ut sunt esse veniam qui incididunt laborum exercitation. Incididunt ipsum sint do esse anim reprehenderit sit ipsum sint minim incididunt laborum commodo sint. Nulla elit occaecat est Lorem voluptate proident quis est elit nulla nisi exercitation. Aliqua nisi sunt reprehenderit nulla consequat ad voluptate mollit esse et in aliqua dolor." 
          alt="parallaximg" />
        <Container>
          {this.renderCards()}
        </Container>
      </div>
    );
  }
}

export default Profile;
