import React from "react";
import { Button, Card, Image, Grid, Icon } from "semantic-ui-react";

const HorizontalCard = props => {
return <Card fluid>
    <Grid divided="vertically">
        <Grid.Row>
        <Grid.Column width={6}>
            <Image src={props.src} />
        </Grid.Column>
        <Grid.Column width={10}>
            <Card.Content>
            <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                <Card.Header>
                <h3>{props.name}</h3>
                </Card.Header>
                </Grid.Column>
                <Grid.Column width={8}>
                <Icon name="dollar" />
                <Icon name="dollar" />
                <Icon name="dollar" />
                </Grid.Column>
            </Grid.Row>
            </Grid>
            <Grid.Row>
                <Card.Meta>
                <span>
                    <p><Icon name="marker" />
                    {props.location}</p>
                </span>
                </Card.Meta>
            </Grid.Row>
            <Card.Description>
                <p>{props.description}</p>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div>
                <p>7 of your Facebook friends likes this company</p>
                <Button basic color="green" href={props.website}>View Profile</Button>
                <Button color="green">Get In Touch</Button>
            </div>
            </Card.Content>
        </Grid.Column>
        </Grid.Row>
    </Grid>
    </Card>;
}

export default HorizontalCard;
