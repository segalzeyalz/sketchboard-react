import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import Header from '../../components/Header';
import Popup from './../Popup/Popup';
import Buttons from './../buttons/Buttons';
import Canvas from './../canvas/Canvas';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Popup showSave={this.props.showSave} showLoad={this.props.showLoad}/>
        <Buttons/>
        <Canvas shapes={this.props.shapes} onSelect = {this.props.onSelect}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shapes: state.shapes,
    selectedShapes: state.selectedShapes,
    showSave:state.showSave,
    showLoad:state.showLoad
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: dispatch({type: actionTypes.SELECT})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);