import React, { Component } from 'react';
import CSS from './style.css';
import * as actionTypes from './../../store/actions';
import { connect } from 'react-redux';

class Popup extends Component {
    render(){
            if(this.props.showSave){
                return  (<div className={CSS.Popup}>
                           <div className={CSS.Inner_popup}>
                                <h1 className={CSS.Title}>Save</h1>
                                <div className={CSS.FormContainer}>
                                    <label>Project Name: </label>
                                    <input type="text" onChange={(event)=>this.props.updateName(event.target.value)}/>
                                </div>
                               <button className={CSS.Button} onClick={this.props.onSave}>Save</button>
                            </div>
                       </div>)
            }else if(this.props.showLoad){
                return  (<div className={CSS.Popup}>
                    <div className={CSS.Inner_popup}>
                         <h1 className={CSS.Title}>Load</h1>
                         <div className={CSS.FormContainer}>
                            <label>Select Project: </label>
                            <select onChange={(event)=>this.props.updateName(event.target.value)}>}>
                            {this.props.loadOptions.map(elem => <option key={elem}>{elem}</option>)}</select>
                        </div>
                        <div className={CSS.ButtonsContainer}>
                            <button className={CSS.Button} onClick={this.props.onLoad}>Load</button>
                            
                        </div>
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
