import React from 'react';
import ReactDOM from 'react-dom';

export default class Select extends React.Component {

    render(){
        return (
            <select defaultValue={this.props.value} onChange={e=>this.props.onChange(e.target.value)}>
            {
                this.props.options.map((op,index)=><option key={index} value={op.id||op.value||op.code||op}>{op.label||op.name||op.title||op}</option>)
            }
            </select>
        );
    }
    
}