import React from "react";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";
import VerticalCard from './VerticalCard';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return <Container>
        <Slider {...settings}>
          <div>
            <VerticalCard 
              name="Blades of Glory Landscaping"
              bio="Sustainable Landscaping"
              src={require("../../assets/images/facebook.png")}
              location="Los Angeles, CA"
              description="Palapas, patio accouterments style"
              facebook="Currently Attending"
              instagram="left"
              pricing="Come enjoy an evening with Girls in Tech!"
              website="https://wwww.google.com"
            />
          </div>
          <div>
            <VerticalCard />
          </div>
          <div>
            <VerticalCard />
          </div>
          <div>
            <VerticalCard />
          </div>
          <div>
            <VerticalCard />
          </div>
          <div>
            <VerticalCard />
          </div>
        </Slider>
      </Container>;
  }
}

export default Carousel;
