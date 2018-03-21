import React from 'react';
import ReactDOM from 'react-dom';

export default class GridView extends React.Component {

    render(){
        return (
            <div className="component-gridview">
                {
                    this.props.items.map((item,row)=>(
                        <div key={row} className="component-gridview-content" onClick={()=>this.props.onChange(item)}>
                        {
                            this.props.columns.map((column,index)=><div key={index} className={'component-gridview-column-'+index}>{item[column]}</div>)
                        }
                        </div>
                    ))
                }
            </div>
        );
    }
}