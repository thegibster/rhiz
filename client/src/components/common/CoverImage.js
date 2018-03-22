import React from "react";
import { Container } from "semantic-ui-react";

const CoverImage = (props) => {
  return (
    <Container fluid>
      <img className="coverImage" src={props.src} alt={props.alt} />
      <Container />
    </Container>
  );
};

export default CoverImage;
