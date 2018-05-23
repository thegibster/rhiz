import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Container, Image, Grid, Header } from 'semantic-ui-react';
import ParallaxImage from "../common/ParallaxImage";
import landscape1 from "../../assets/images/landscape1.jpeg";
import HorizontalCard from '../common/HorizontalCard';
import featuredLandscaping from '../../constants/featuredLandscaping.js';
import Slider from 'react-slick';

class Profile extends Component {
  renderCards() {
    let cards = featuredLandscaping.map(featuredLandscaping => {
      return (
        <HorizontalCard key={featuredLandscaping.name}
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

  renderImage() {
    if (this.props.auth) {
      return (
        <Container>
          <Image size="small" centered src={this.props.auth.bigPhotoURL} />
        </Container>
      );
    }
  }

  renderName() {
    if (this.props.auth) {
      return (
        <Header as='h3' textAlign='center'>
          {this.props.auth.displayName}
        </Header>
      )
    }
  }

  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <Image size="big" src={landscape1} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    console.log("this.props", this.props);
    return (
      <div>
        {/* {this.renderParallax()} */}
        <ParallaxImage
          bgImage={landscape1} 
          height={{ height: "75px" }}
          alt="parallaximg"
        />
        <Container style={{ paddingTop: '20px', paddingBottom: '60px'}}>
          <Grid>
            <Grid.Column width={4}>
              {this.renderName()}
              <Slider {...settings}>
                <div>
                  {this.renderImage()}
                </div>
                {/* <div>
                  {this.renderImage()}
                </div> */}
              </Slider>
            </Grid.Column>
            <Grid.Column width={12}>
              <div />
            </Grid.Column>
          </Grid>
        </Container>
        <Container>
          {this.renderCards()}
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
