import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        return (
            <button className="component-button">{this.props.children}</button>
        );
    }
    
}