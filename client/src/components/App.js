import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header';
import CoverImage from './common/CoverImage';
import ParallaxImage from './common/ParallaxImage';
import Footer from './common/Footer';
import img12 from "../assets/images/img12.jpg";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          {/* <CoverImage src={img12} alt="Tom" /> */}
          <ParallaxImage bgImage={img12} title="Rhiz" alt="parallaximg" />
          <h1>Rhiz</h1>
          <a href="/auth/google">Log in with Google</a>
          <a href="/api/logout">Logout</a>
          <div style={{ height: "600px" }} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
