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
                                <input type="text"/>
                               <button onClick={this.props.closePopup}>close me</button>
                            </div>
                       </div>)
            }else if(this.props.showLoad){
                return  (<div className={CSS.Popup}>
                    <div className={CSS.Inner_popup}>
                         <h1>Load</h1>
                         <select></select>
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
          showLoad:state.showLoad
        };
      };
      
      const mapDispatchToProps = dispatch => {
        return {
            closePopup: ()=> dispatch({type: actionTypes.CLOSE_POPUP}) 
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
