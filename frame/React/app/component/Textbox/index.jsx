import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        return (
            <textarea defaultValue={this.props.value} onChange={e=>this.props.onChange(e.target.value)}></textarea>
        );
    }
    
}