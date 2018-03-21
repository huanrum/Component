import React from 'react';
import ReactDOM from 'react-dom';

export default class ListView extends React.Component {

    render(){
        return (
            <div className="component-listview">
            {
                this.props.items.map((item,index)=>this.props.childItem(item,index))
            }
            </div>
        );
    }
    
}