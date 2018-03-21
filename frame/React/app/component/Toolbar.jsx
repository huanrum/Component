import React from 'react';
import ReactDOM from 'react-dom';

export default class Toolbar extends React.Component {
    constructor(){
        super();
        this.state = {
            show:false
        };
    }
    update(show){
        this.setState({
            show:show
        });
    }
    render(){
        return (
            <div className="component-toolbar" onMouseEnter={()=>this.update(true)} onMouseLeave={()=>this.update(false)}>
                {this.props.children}
                {
                    this.state.show?(<div className="component-toolbar-title">{this.props.title}</div>):''
                }
            </div>
        );
    }
    
}