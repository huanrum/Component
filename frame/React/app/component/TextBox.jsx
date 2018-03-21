import React from 'react';
import ReactDOM from 'react-dom';

export default class Textbox extends React.Component {

    render(){
        return (
            <textarea defaultValue={this.props.value} onChange={e=>this.props.onChange(e.target.value)}></textarea>
        );
    }
    
}