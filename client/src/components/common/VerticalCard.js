import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const VerticalCard = props => (
  <Card>
    <Image src={props.src} alt="img" />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.bio}</Card.Meta>
      <br />
      <Card.Description>
        {props.description}
        <br />
        {props.location}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div>
        <div className="card-icons">
          <img
            style={{ height: "20px", width: "20px" }}
            src={require("../../assets/images/facebook.png")}
            alt="facebook"
          />
          <img
            style={{ height: "20px", width: "20px" }}
            src={require("../../assets/images/instagram.png")}
            alt="instagram"
          />
          <Icon name="dollar" />
          <Icon name="dollar" />
          <Icon name="dollar" />
        </div>
      </div>
      <div className="ui two buttons">
        <Button href={props.website} positive>
          View
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default VerticalCard;

