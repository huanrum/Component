import React from 'react';

export default class Dialog extends React.Component {
    constructor(){
        super();
        this.state = {
            show:false
        };
    }
    show(show){
        this.setState({
            show:show
        });
    }
    render() {
        return (
            <div className="show-dialog">
                <button onClick={()=>this.show(true)}>{this.props.title}</button>
                {
                    this.state.show?(
                        <div className="show-dialog-panel">
                            <div className="show-dialog">
                                <div className="header">{this.props.title}<a onClick={()=>this.show(false)}>&times;</a></div>
                                <div className="content">
                                    {this.props.children}
                                </div>
                                <div className="footer text-align-center">
                                    <button onClick={()=>{this.show(false);this.props.onChange()}}>确定</button>
                                    <button onClick={()=>this.show(false)}>关闭</button>
                                </div>
                            </div>
                        </div>
                    ):''
                }
            </div>
        );
    }
}