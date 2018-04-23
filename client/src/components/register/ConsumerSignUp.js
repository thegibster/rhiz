import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

class ConsumerSignUp extends Component {
  render() {
    return <Card centered style={ style.cardStyle }>
        <Card.Content>
          <Card.Header>
            <h1>Create Your Account</h1>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <Button style={style.buttonStyle} fluid color="facebook">
              <Icon name="facebook" /> Sign Up With Facebook
            </Button>
            <Button style={style.buttonStyle} fluid color="google plus" href="/auth/google">
              <Icon name="google plus" /> Sign Up With Google
            </Button>
            <Button style={style.buttonStyle} fluid color="linkedin">
              <Icon name="linkedin" /> Sign Up With LinkedIn
            </Button>
          </Card.Description>
        </Card.Content>
      </Card>;
  }
}

const style = {
    cardStyle: {
        marginTop: 25,
        marginBottom: 50
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10
    }
}

export default ConsumerSignUp;
