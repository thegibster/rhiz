import React from "react";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";
import VerticalCard from "../common/VerticalCard";
import featuredInteriorDesign from "../../constants/featuredInteriorDesign";

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

class FeaturedCarousel2 extends React.Component {
  renderVerticalCards() {
    const verticalCards = featuredInteriorDesign.map(featuredInteriorDesign => {
      return (
        <div>
          <VerticalCard
            name={featuredInteriorDesign.name}
            bio={featuredInteriorDesign.bio}
            src={featuredInteriorDesign.src}
            location={featuredInteriorDesign.location}
            description={featuredInteriorDesign.description}
            facebook={featuredInteriorDesign.facebook}
            instagram={featuredInteriorDesign.instagram}
            pricing={featuredInteriorDesign.pricing}
            website={featuredInteriorDesign.website}
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
    return (
      <Container>
        <Slider {...settings}>{this.renderVerticalCards()}</Slider>
      </Container>
    );
  }
}

export default FeaturedCarousel2;
