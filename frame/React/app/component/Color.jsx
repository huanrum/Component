import React from 'react';

export default class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:props.value,
            show:false
        };
    }
    show(show){
        this.setState({
            show:show
        });
    }
    render() {
        var colors = [];
        Array(4).fill(1).forEach((v,r)=>{
            Array(4).fill(1).forEach((v,g)=>{
                Array(4).fill(1).forEach((v,b)=>{
                    colors.push('#' + (r*64+32).toString(16)+(g*64+32).toString(16)+(b*64+32).toString(16));
                });
            });
        });
        return (
            <div className="show-color">
                <button onClick={()=>this.show(true)} style={{background:this.state.value}}>Color</button>
                {
                    this.state.show?(
                        <div className="show-dialog-panel">
                            <div className="show-dialog">
                                <div className="header">Color<a onClick={()=>this.show(false)}>&times;</a></div>
                                <div className="content">
                                    <div>Please select one color!</div>
                                    {
                                        colors.map(color=><div key={color} className={'show-color-content ' + (this.state.value==color?'selected':'')} style={{background:color}} onClick={()=>this.setState({value:color})}>{color}</div>)
                                    }
                                </div>
                                <div className="footer text-align-center">
                                    <button onClick={()=>{this.show(false);this.props.onChange(this.state.value)}}>确定</button>
                                </div>
                            </div>
                        </div>
                    ):''
                }
            </div>
        );
    }
}