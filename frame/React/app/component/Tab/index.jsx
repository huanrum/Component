import './index.scss';
import React from 'react';

export default class extends React.Component {
    constructor(){
        super();
        this.state ={
            active:''
        };
    }
    update(tab){
        this.setState({
            active:tab 
        });
    }
    render(){
        return (
            <div className="component-tab">
                <div className="tab-header">
                {
                    this.props.items.map(item => <div key={item} className={this.state.active===item?'active':''} onClick={e=>{this.update(item),this.props.onClick(e,item)}}>{item}</div>)
                }
                </div>
                <div className="tab-content">{this.props.children}</div>
            </div>
        );
    }
    
}

// Control.propTypes = {
//     items: React.PropTypes.array
// }