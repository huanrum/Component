import React from 'react';
import ReactDOM from 'react-dom';

export default class Checkbox extends React.Component {

    render(){
        var id = Date.now();
        return (
            <div>
                <input id={id} type="checkbox" defaultChecked={this.props.value} onChange={e=>this.props.onChange(e.target.checked)}></input>
                <label htmlFor={id}>{this.props.children}</label>
            </div>
        );
    }
    
}