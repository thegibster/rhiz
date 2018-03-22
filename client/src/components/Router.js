import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './home/Home';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;
