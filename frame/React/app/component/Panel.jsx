import React from 'react';
import ReactDOM from 'react-dom';

export default class Panel extends React.Component {

    render(){
        return (
            <div className="component-panel" >{this.props.children}</div>
        );
    }
    
}