import React from "react";
import Slider from "react-slick";
import { Container, Card, Icon, Image } from "semantic-ui-react";
import VerticalCard from "../common/VerticalCard";

class PriceCard extends React.Component {
  render() {
    return <Container>
        <Card>
          <Image src="../../assets/images/interior1.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </Container>;
  }
}

export default PriceCard;
