import React from "react";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";
import VerticalCard from '../common/VerticalCard';
import featuredLandscaping from '../../constants/featuredLandscaping';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}


class FeaturedCarousel extends React.Component {

  renderVerticalCards() {
    const verticalCards = featuredLandscaping.map(featuredLandscaping => {
      return (
        <div>
          <VerticalCard 
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
        </div>
      );
    });
    return verticalCards;
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SampleNextArrow />,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return <Container>
        <Slider {...settings}>
          {this.renderVerticalCards()}
        </Slider>
      </Container>;
  }
}

export default FeaturedCarousel;
