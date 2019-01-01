import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import Header from '../../components/Header';
import Popup from './../../components/Popup';
import Buttons from './../buttons/Buttons';
import Canvas from './../canvas/Canvas';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Popup showSave={this.props.showSave} />
        <Buttons/>
        <Canvas shapes={this.props.shapes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shapes: state.shapes,
    selectedShapes: state.selectedShapes,
    showSave:state.showSave
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);