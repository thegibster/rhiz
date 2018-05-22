import React, { Component } from 'react';
import { Container, Item, Icon, Label } from 'semantic-ui-react';
import ParallaxImage from '../common/ParallaxImage';
import landscape1 from "../../assets/images/landscape1.jpeg";
import TeamProfiles from './TeamProfiles';

class Team extends Component {
  constructor(props) {
    super(props);

    this.renderProfiles = this.renderProfiles.bind(this);
  }
  renderProfiles() {
    let teamProfiles = TeamProfiles.map(profile => {
      return (
        <Item>
          <Item.Image size="small" alt={profile.alt} src={profile.src} />
          <Item.Content>
            <Item.Header as="a">{profile.name}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{profile.position}</span>
            </Item.Meta>
            <Item.Description>
              <p>{profile.bio}</p>
            </Item.Description>
            <Item.Extra>
              <Label color='linkedin' href={profile.linkedin}>
                <Icon name='linkedin' /> LinkedIn
              </Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    });
    return teamProfiles;
  }

  render () {
    return <div>
        <ParallaxImage bgImage={landscape1} height={{ height: "35px" }} title="Team" alt="parallaximg" />
        <Container style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <Item.Group>
            {this.renderProfiles()}
          </Item.Group>
        </Container>
      </div>;
  }
}

export default Team;