import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {

    render(){
        return (
            <input defaultValue={this.props.value} onChange={e=>this.props.onChange(e.target.value)}></input>
        );
    }
    
}