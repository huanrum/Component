import React from 'react';
import ReactDOM from 'react-dom';

export default class Menu extends React.Component {
    init(items){
        return (
            <ul>
            {
                items.map((item,index)=>(
                    <li key={index} >
                        <div>{this.props.childItem(item,index)}</div>
                        {
                            item.children ? this.init(item.children) :''
                        }
                    </li>
                ))
            }
            </ul>
        );
    }
    render(){
        return <div className="component-menu">{this.init(this.props.items)}</div>;
    }
    
}