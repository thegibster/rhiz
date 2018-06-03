import React, { Component } from "react";
import { Embed } from 'semantic-ui-react';

class MapContainer extends Component {
  render() {
    return <div>
        <Embed active url="https://www.google.com/maps/embed/v1/place?key=AIzaSyBnwpbLJU6xN2xDKaCvYE_QmtoHyzW9DnI&q=Eiffel+Tower,Paris+France" />
      </div>;
  }
}


export default MapContainer;