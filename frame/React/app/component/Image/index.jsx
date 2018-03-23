import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        return (
            <img className="component-image" src={this.props.src}>{this.props.children}</img>
        );
    }
    
}