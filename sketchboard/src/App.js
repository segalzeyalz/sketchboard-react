import React, { Component } from 'react';
import Header from './Header';
import Buttons from './buttons/Buttons';
import Canvas from './canvas/Canvas';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Buttons />
        <Canvas />
      </div>
    );
  }
}

export default App;
