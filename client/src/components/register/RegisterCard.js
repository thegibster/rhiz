import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

const RegisterCard = (props) => {
  return <Card centered style={style.cardStyle}>
      <Card.Content>
        <Card.Header style={{ textAlign: "center" }}>
          <h1>{props.header}</h1>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        {props.form}
      </Card.Content>
      <Card.Content>
        <Card.Description>
          <Button style={style.buttonStyle} fluid color="facebook" href="/auth/facebook">
            <Icon name="facebook" /> {props.hint} With Facebook
          </Button>
          <Button style={style.buttonStyle} fluid color="google plus" href="/auth/google">
            <Icon name="google plus" /> {props.hint} With Google
          </Button>
          <Button style={style.buttonStyle} fluid color="linkedin" href="/auth/linkedin">
            <Icon name="linkedin" /> {props.hint} With LinkedIn
          </Button>
        </Card.Description>
      </Card.Content>
      {props.additionalText}
    </Card>;
}

const style = {
    cardStyle: {
        marginTop: 25,
        marginBottom: 50,
        padding: 20
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10
    }
}

export default RegisterCard;
