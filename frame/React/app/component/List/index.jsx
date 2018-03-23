import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        return (
            <ul className="component-list">
            {
                this.props.items.map((item,index)=>(
                    <li key={index}>{this.props.childItem(item,index)}</li>
                ))
            }
            </ul>
        );
    }
    
}