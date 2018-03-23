import './index.scss';
import React from 'react';

export default class extends React.Component {

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