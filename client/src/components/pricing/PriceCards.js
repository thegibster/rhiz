import React from "react";
import { Container, Card, Button } from "semantic-ui-react";

const PriceCard = props => {
  return <Container>
      <Card className="price-card-container">
        <Card.Content className="price-card-title">
          <h2 className="price-title">{props.title}</h2>
        </Card.Content>
        <Card.Content>
          <Card.Header className="price-card-header">
            <p className="price-text">{props.header}</p>
          </Card.Header>
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
