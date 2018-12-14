import React, { Component } from 'react';
import { Input, Icon, Grid } from 'semantic-ui-react';

class SearchBar extends Component {
  render() {
    const { searchForName, searchForLocation, updateSearchForName, updateSearchForLocation } = this.props;
    return <div>
        <div className="home-search-bar">
          <Input placeholder="What are you looking for?"
            value={searchForName}
            onChange={(event) => updateSearchForName(event.target.value)}
          />
          <Input icon="marker" placeholder="Location"
            value={searchForLocation}
            onChange={(event) => updateSearchForLocation(event.target.value)}
          />
          <Input action={{ icon: "search" }} placeholder="Job Urgency" />
        </div>
        <div className="home-statistics">
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column />
              <Grid.Column width={1}>
                <Icon name="home" size="big" />
              </Grid.Column>
              <Grid.Column width={3}>
                <div>30,178</div>
                <div>Homes Served</div>
              </Grid.Column>
              <Grid.Column width={1}>
                <Icon name="money bill alternate outline" size="big" />
              </Grid.Column>
              <Grid.Column width={3}>
                <div>$1,870,010</div>
                <div>User Earnings</div>
              </Grid.Column>
              <Grid.Column />
            </Grid.Row>
          </Grid>
        </div>
      </div>;
  }
}

export default SearchBar;
