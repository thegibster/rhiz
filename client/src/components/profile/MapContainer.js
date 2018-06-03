import React, { Component } from "react";
import { Embed } from 'semantic-ui-react';

class MapContainer extends Component {
  render() {
    let googleUrl = "https://www.google.com/maps/embed/v1/place?key=" + process.env.GOOGLE_MAPS_API_KEY + "&q=Eiffel+Tower,Paris+France";
    return <div>
        <Embed active url={googleUrl}/>
      </div>;
  }
}


export default MapContainer;