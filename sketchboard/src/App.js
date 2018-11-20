import React, { Component } from 'react';
import Header from './Header';
import Buttons from './buttons/Buttons';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Buttons />
      </div>
    );
  }
}

export default App;
