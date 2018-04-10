import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import construction from '../../assets/images/construction.jpg';
import people from '../../assets/images/people.jpg';

class SignUp extends Component {
  render() {
    return (//   <Card.Group centered items={items} />
      <Card.Group centered>
        <Card>
          <Image src={construction} />
          <Card.Content>
            <Card.Header>Business</Card.Header>
            <Card.Description>
              <ul>
                <li>Acquire New Customers</li>
                <li>Display Your Work</li>
                <li>Access Business Partnerships</li>
              </ul>
            </Card.Description>
            <Button positive fluid>Sign Up</Button>
          </Card.Content>
        </Card>
        <div>or</div>
        <Card>
          <Image src={people} />
          <Card.Content>
            <Card.Header>Consumer</Card.Header>
            <Card.Description>
              <ul>
                <li>Find Trusted Businesses</li>
                <li>View Network of Local Companies</li>
                <li>Transparent Buying Process</li>
              </ul>
            </Card.Description>
            <Button positive fluid>Sign Up</Button>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default SignUp;
