import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Segment,
  Container,
  Grid,
  Header,
  List
} from "semantic-ui-react";

class Footer extends Component {
  render() {
    return <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Segment inverted vertical style={{ padding: "2em 0em" }}>
          <Container>
            <Grid divided inverted>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted as="h1" content="Rhiz" />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Company" />
                  <List link>
                    <List.Item>
                      <Link to="/about">About</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/team">Team</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/careers">Careers</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/terms-of-service">Terms of Service</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Contact" />
                  <List link>
                    <List.Item>
                      <Link to="/help">Help</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/faq">FAQ</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/contact">Contact</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/partnerships">Partnerships</Link>
                    </List.Item>
                    <a className="email" href="mailto:lowkeendonovan@gmail.com?subject=Feedback">
                      Email
                    </a>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4">
                    Business Tools
                  </Header>
                  <List link>
                    <List.Item>
                      <Link to="/pricing">Pricing</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/starting-out">Starting Out</Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/self-awareness">Self-Awareness</Link>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="centered">© Rhiz</Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Container>;
  }
}

export default Footer;
