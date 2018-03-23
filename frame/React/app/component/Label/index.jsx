import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        return (
            <label className="component-label">{this.props.children}</label>
        );
    }
    
}