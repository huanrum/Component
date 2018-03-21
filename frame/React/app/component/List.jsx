import React from 'react';
import ReactDOM from 'react-dom';

export default class List extends React.Component {

    render(){
        return (
            <ul>
            {
                this.props.items.map((item,index)=>(
                    <li key={index}>{this.props.childItem(item,index)}</li>
                ))
            }
            </ul>
        );
    }
    
}