import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        var id = Date.now();
        return (
            <div className="component-radio"> 
                <input id={id} type="radio" defaultChecked={this.props.value} onChange={e=>this.props.onChange(e.target.checked)}></input>
                <label htmlFor={id}>{this.props.children}</label>
            </div>
        );
    }
    
}