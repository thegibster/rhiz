import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Visibility,
  Transition
} from "semantic-ui-react";
// import "./footer.css";

class Footer extends Component {

  state = {
    animation: null,
    visible: false,
    pass: "slide up",
    reverse: "slide down"
  };

  render() {
    const { animation, visible, pass, reverse } = this.state;

    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Segment inverted vertical style={{ padding: "2em 0em" }}>
            <Container>
              <Grid divided inverted>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Company" />
                    <List link>
                      <List.Item>
                        <Link to="/meet-the-team">Meet the Team</Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header as="h4" content="Events" />
                    <List link>
                      <List.Item>
                        <Link to="/event-page/ATX">Austin</Link>
                      </List.Item>
                      <List.Item>
                        <Link to="/event-page/LA">Los Angeles</Link>
                      </List.Item>
                      <List.Item>
                        <Link to="/event-page/NY">New York</Link>
                      </List.Item>
                      <List.Item>
                        <Link to="/event-page/SF">San Francisco</Link>
                      </List.Item>
                      <List.Item>
                        <Link to="/event-page/SEA">Seattle</Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h4">Contact Us</Header>
                    <a
                      className="email"
                      href="mailto:lowkeendonovan@gmail.com?subject=Feedback"
                    >
                      Send us a message
                    </a>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className="centered">© Rhiz</Grid.Row>
              </Grid>
            </Container>
          </Segment>
      </Container>
    );
  }
}

export default Footer;
