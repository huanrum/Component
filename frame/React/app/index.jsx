import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import component from './component';


class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            input:'input value',
            textbox:'textbox value',
            checkbox:true,
            radio:true,
            select:0,
            slide:25,
            progress:30,
            image:'http://www.iconpng.com/png/go-shopping/down88.png',
            list:'',
            listview:'',
            menu:'',
            tree:'',
            tab:'',
            datagrid:'',
            gridview:'',
            dialog:'',
            color:'#123456',
            calendar:'2018-03-22',
            toolbar:'http://www.iconpng.com/png/go-shopping/down88.png'
        };

        this.options = {
            select:Array(10).fill(1).map((v,i)=>({id:i,name:'Name-' + i})),
            list:['a','b','c','d'],
            listview:Array(5).fill(1).map((v,i)=>({id:i,name:'N'+i})),
            menu:['Shop','Book','Self','Go'],
            tree:Array(5).fill(1).map((v,i)=>({id:i,name:'N'+i,children:Array(Math.floor(Math.random()*5)).fill(1).map((v,j)=>({id:i*1000+j,name:'C'+j,children:[]}))})),
            tab:['Vue','React','Angular'],
            datagrid:Array(5).fill(1).map((v,i)=>({id:i,name:'N'+i,code:'Code-'+Date.now()})),
            gridview:{
                items:Array(5).fill(1).map((v,i)=>({id:i,name:'N'+i,code:'Code-'+i,date:Date.now()})),
                columns:['id','name','date']
            },
            dialog:Array(5).fill(1).map((v,i)=>({id:i,name:'N'+i,code:'Code-'+Date.now()})),
        };
    }
    onChange(name,value){
        this.setState({
            [name]:value
        });

        clearTimeout(this.timeout);
        this.timeout = setTimeout(()=>{
            console.log(name,value,this.state);
        },1000);
    }
    render(){
        
        return (
            <div className="index-page">
                <div><component.LabelControl>Label</component.LabelControl></div>
                <div><component.ButtonControl>Button</component.ButtonControl></div>
                <div><component.InputControl value={this.state.input} onChange={value=>this.onChange('input',value)}></component.InputControl></div>
                <div><component.TextboxControl value={this.state.textbox} onChange={value=>this.onChange('textbox',value)}></component.TextboxControl></div>
                <div><component.CheckboxControl value={this.state.checkbox} onChange={value=>this.onChange('checkbox',value)}>Checkbox</component.CheckboxControl></div>
                <div><component.ImageControl src={this.state.image}></component.ImageControl></div>
                <div><component.PanelControl>Panel</component.PanelControl></div>
                <div><component.RadioControl value={this.state.radio} onChange={value=>this.onChange('radio',value)}>Radio</component.RadioControl></div>
                <div><component.SelectControl options={this.options.select} value={this.state.select} onChange={value=>this.onChange('select',value)}>Select</component.SelectControl></div>
                <div><component.SlideControl value={this.state.slide} onChange={value=>this.onChange('slide',value)}>Slide</component.SlideControl></div>
                <div><component.SlideControl value={this.state.progress} onChange={value=>this.onChange('progress',value)}>Slide</component.SlideControl></div>
                <div><component.ProgressControl value={this.state.progress} onChange={value=>this.onChange('progress',value)}>Progress</component.ProgressControl></div>
                <div><component.ListControl items={this.options.list} childItem={item=><div onClick={()=>this.onChange('list',item)}>{item}</div>}>List</component.ListControl></div>
                <div><component.ListViewControl items={this.options.listview} childItem={item=>(<div key={item.id} onClick={()=>this.onChange('listview',item)}><div>{item.id}</div><div>{item.name}</div></div>)}>ListView</component.ListViewControl></div>
                <div><component.MenuControl items={this.options.menu} childItem={item=><div className={this.state.menu===item?'active':''} onClick={e=>this.onChange('menu',item)}>{item}</div>}>Menu</component.MenuControl></div>
                <div><component.TreeControl items={this.options.tree} childItem={item=>(<div onClick={e=>this.onChange('tree',item)}><input type="checkbox" defaultValue={item.checked} onChange={e=>item.checked=e.target.value}></input><div>{item.name}</div></div>)}>Tree</component.TreeControl></div>
                <div><component.TabControl items={this.options.tab} onClick={(e,value)=>this.onChange('tab',value)}><div className="tab-full">{this.options.tab.filter(tab=>this.state.tab===tab).map(tab=><div key={tab}>{tab}</div>)}</div></component.TabControl></div>
                <div><component.DataGridControl items={this.options.datagrid} onChange={value=>this.onChange('datagrid',value)}>Slide</component.DataGridControl></div>
                <div><component.GridViewControl items={this.options.gridview.items} columns={this.options.gridview.columns} onChange={value=>this.onChange('gridview',value)}>Slide</component.GridViewControl></div>
                <div><component.DialogControl title="Show Dialog" onChange={()=>{}}>{this.options.dialog.map(value=><div key={value.id} onClick={()=>this.onChange('dialog',value)}>Contnet Row {JSON.stringify(value)}</div>)}</component.DialogControl></div>
                <div><component.ColorControl value={this.state.color} onChange={value=>this.onChange('color',value)}>Color</component.ColorControl></div>
                <div><component.CalendarControl value={this.state.calendar} onChange={value=>this.onChange('calendar',value)}>Calendar</component.CalendarControl></div>
                <div><component.ToolbarControl title={this.state.toolbar}>Toolbar</component.ToolbarControl></div>
                
            </div>
        );
    }
    
}

ReactDOM.render(<Index>Index</Index>, document.getElementById('app'));