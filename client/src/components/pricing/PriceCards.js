import React from "react";
import { Container, Card, Icon, Divider, Button } from "semantic-ui-react";

const PriceCard = props => {
  return <Container>
      <Card className="price-card-container">
        <Card.Content style={{ height: "100px" }}>
          <h2>{props.title}</h2>
        </Card.Content>
        <Card.Content>
          <Card.Header>{props.header}</Card.Header>
          <Card.Description>
            {props.description}
          </Card.Description>
          <Button 
            fluid basic color="green"
            href={props.link}
          >
            Subscribe
          </Button>
        </Card.Content>
      </Card>
    </Container>;
}

export default PriceCard;
