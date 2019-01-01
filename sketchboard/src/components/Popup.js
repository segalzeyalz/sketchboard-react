import React, { Component } from 'react';
import CSS from './style.css'

class Popup extends Component {
    render(){
            if(this.props.showSave){
                return  (<div className={CSS.Popup}>
                           <div className={CSS.Inner_popup}>
                                <h1>Save</h1>
                               <button onClick={this.props.closePopup}>close me</button>
                            </div>
                       </div>)
            }else if(this.props.showLoad){
        
            }
            return null
            };
    }


export default Popup;
