import './index.scss';
import React from 'react';

export default class extends React.Component {

    render(){
        var fields = {};
        this.props.items.forEach(item=>{
            Object.keys(item).forEach(key=>{
                fields[key] = fields[key] || {};
                fields[key][typeof item[key]] = true;
            });
        });
        return (
            <div className="component-datagrid">
                <div className="component-datagrid-header">
                {
                    Object.keys(fields).map((column,index)=><div key={index} className={'component-datagrid-column-'+index}>{column}</div>)
                }
                </div>
                {
                    this.props.items.map((item,row)=>(
                        <div key={row} className="component-datagrid-content" onClick={()=>this.props.onChange(item)}>
                        {
                            Object.keys(fields).map((column,index)=><div key={index} className={'component-datagrid-column-'+index}>{item[column]}</div>)
                        }
                        </div>
                    ))
                }
            </div>
        );
    }
    
}