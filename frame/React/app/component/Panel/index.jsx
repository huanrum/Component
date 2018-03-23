import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        return (
            <div className="component-panel" >{this.props.children}</div>
        );
    }
    
}