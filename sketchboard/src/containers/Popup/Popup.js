import React, { Component } from 'react';
import CSS from './style.css';
import * as actionTypes from './../../store/actions';
import { connect } from 'react-redux';

class Popup extends Component {
    render(){
            if(this.props.showSave){
                return  (<div className={CSS.Popup}>
                           <div className={CSS.Inner_popup}>
                                <h1>Save</h1>
                                <input type="text" onChange={(event)=>this.props.updateName(event.target.value)}/>
                               <button onClick={this.props.closePopup}>close me</button>
                               <button onClick={this.props.onSave}>Save</button>
                            </div>
                       </div>)
            }else if(this.props.showLoad){
                return  (<div className={CSS.Popup}>
                    <div className={CSS.Inner_popup}>
                         <h1>Load</h1>
                         <select onChange={(event)=>this.props.updateName(event.target.value)} select>}>{this.props.loadOptions.map(elem => <option>{elem}</option>)}</select>
                               <button onClick={this.props.onLoad}>Load</button>
                        <button onClick={this.props.closePopup}>close me</button>
                     </div>
                </div>)
            }
            return null
            };
    }

    const mapStateToProps = state => {
        return {
          showSave:state.showSave,
          loadOptions:state.loadOptions,
          showLoad:state.showLoad,
          savedNames: '',
          selectedName:''
        };
      };
      
      const mapDispatchToProps = dispatch => {
        return {
            closePopup: ()=> dispatch({type: actionTypes.CLOSE_POPUP}),
            updateName: (name) =>dispatch({type: actionTypes.UPDATE_SAVE_NAME, chosenName:name}),
            onSave: () =>dispatch({type:actionTypes.SAVE}),
            onLoad: () =>dispatch({type:actionTypes.LOAD, chosenName:"b"})
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
