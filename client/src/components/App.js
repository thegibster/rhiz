import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Rhiz App Working</h1>
        <a href="/auth/google">Log in with Google</a>
        <a href="/api/logout">Logout</a>
      </div>
    );
  }
}

export default App;
