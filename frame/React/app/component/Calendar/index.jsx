import './index.scss';
import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            year:+props.value.split('-')[0],
            month:+props.value.split('-')[1],
            day:+props.value.split('-')[2],
            show:false
        };
    }
    update(key,show){
        var data = {
            [key]:show
        };
        if(key!=='show'){
            data.show = true;
        }
        this.setState(data);
        
    }
    render() {
        var years = Array(50).fill(1).map((v,i)=>new Date().getFullYear()+i-25);
        var months = Array(12).fill(1).map((v,i)=>i+1);
        var days = Array(new Date(this.state.year,+this.state.month-1,'1').getDay()).fill(0).concat(Array(31).fill(1).map((v,i)=>i+1).filter(i=>new Date(this.state.year,+this.state.month-1,i).getMonth()+1==this.state.month));
        return (
            <div className="component-calendar">
                <button onClick={()=>this.update('show',true)}>Calendar {this.state.value}</button>
                {
                    this.state.show?(
                        <div className="show-dialog-panel">
                            <div className="show-dialog">
                                <div className="header">Color<a onClick={()=>this.update('show',false)}>&times;</a></div>
                                <div className="content">
                                    <div>Please select one calendar!</div>
                                    <div className="show-calendar-year">
                                        <span onClick={()=>this.update('show','year')}>{this.state.year}</span>
                                        {this.state.show==='year'?(<div>
                                            {
                                                years.map(i=><div key={i} onClick={()=>this.update('year',i)}>{i}</div>)  
                                            }
                                            </div>):''
                                        }
                                    </div>
                                    <div className="component-calendar-month">
                                        <span onClick={()=>this.update('show','month')}>{this.state.month}</span>
                                        {this.state.show==='month'?(<div>
                                            {
                                                months.map(i=><div key={i} onClick={()=>this.update('month',i)}>{i}</div>)  
                                            }
                                            </div>):''
                                        }
                                    </div>
                                    <div className="component-calendar-day" onClick={()=>this.update('show','day')}>
                                    {
                                        days.map((i,index)=><div key={index} className={'day ' + (i?'':'hidden ') + (this.state.day==i?'active':'')} onClick={()=>this.update('day',i)}>{i}</div>)
                                    }
                                    </div>
                                </div>
                                <div className="footer text-align-center">
                                    <button onClick={()=>{this.update('show',false);this.props.onChange([this.state.year,this.state.month,this.state.day].join('-'))}}>确定</button>
                                </div>
                            </div>
                        </div>
                    ):''
                }
            </div>
        );
    }
}