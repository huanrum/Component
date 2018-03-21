import React from 'react';
import ReactDOM from 'react-dom';

export default class Image extends React.Component {

    render(){
        return (
            <img className="component-image" src={this.props.src}>{this.props.children}</img>
        );
    }
    
}