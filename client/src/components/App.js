import React, { Component } from 'react';
import Header from './Header';
import CoverImage from './common/CoverImage';
import ParallaxImage from './common/ParallaxImage';
import img12 from "../assets/images/img12.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <CoverImage src={img12} alt="Tom" /> */}
        <ParallaxImage bgImage={img12} title="Rhiz" alt="parallaximg" />
        <h1>Rhiz</h1>
        <a href="/auth/google">Log in with Google</a>
        <a href="/api/logout">Logout</a>
        <div style={{ height: "2000px" }} />
      </div>
    );
  }
}

export default App;
