import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        return (
            <div className="component-select">
                <select defaultValue={this.props.value} onChange={e=>this.props.onChange(e.target.value)}>
                {
                    this.props.options.map((op,index)=><option key={index} value={op.id||op.value||op.code||op}>{op.label||op.name||op.title||op}</option>)
                }
                </select>
            </div>
        );
    }
    
}