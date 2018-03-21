

import React from 'react';
import ReactDOM from 'react-dom';

import component from './component';
import './index.scss';

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
            color:'',
            calendar:'',
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
                <div><component.Label>Label</component.Label></div>
                <div><component.Button>Button</component.Button></div>
                <div><component.Input value={this.state.input} onChange={value=>this.onChange('input',value)}></component.Input></div>
                <div><component.Textbox value={this.state.textbox} onChange={value=>this.onChange('textbox',value)}></component.Textbox></div>
                <div><component.Checkbox value={this.state.checkbox} onChange={value=>this.onChange('checkbox',value)}>Checkbox</component.Checkbox></div>
                <div><component.Image src={this.state.image}></component.Image></div>
                <div><component.Panel>Panel</component.Panel></div>
                <div><component.Radio value={this.state.radio} onChange={value=>this.onChange('radio',value)}>Radio</component.Radio></div>
                <div><component.Select options={this.options.select} value={this.state.select} onChange={value=>this.onChange('select',value)}>Select</component.Select></div>
                <div><component.Slide value={this.state.slide} onChange={value=>this.onChange('slide',value)}>Slide</component.Slide></div>
                <div><component.Slide value={this.state.progress} onChange={value=>this.onChange('progress',value)}>Slide</component.Slide></div>
                <div><component.Progress value={this.state.progress} onChange={value=>this.onChange('progress',value)}>Progress</component.Progress></div>
                <div><component.List items={this.options.list} childItem={item=><div onClick={()=>this.onChange('list',item)}>{item}</div>}>List</component.List></div>
                <div><component.ListView items={this.options.listview} childItem={item=>(<div key={item.id} onClick={()=>this.onChange('listview',item)}><div>{item.id}</div><div>{item.name}</div></div>)}>ListView</component.ListView></div>
                <div><component.Menu items={this.options.menu} childItem={item=><div className={this.state.menu===item?'active':''} onClick={e=>this.onChange('menu',item)}>{item}</div>}>Menu</component.Menu></div>
                <div><component.Tree items={this.options.tree} childItem={item=>(<div onClick={e=>this.onChange('tree',item)}><input type="checkbox" defaultValue={item.checked} onChange={e=>item.checked=e.target.value}></input><div>{item.name}</div></div>)}>Tree</component.Tree></div>
                <div><component.Tab items={this.options.tab} onClick={(e,value)=>this.onChange('tab',value)}>Tab
                    <div className="tab-full">
                        {this.options.tab.filter(tab=>this.state.tab===tab).map(tab=><div key={tab}>{tab}</div>)}
                    </div>
                </component.Tab></div>
                <div><component.DataGrid items={this.options.datagrid} onChange={value=>this.onChange('datagrid',value)}>Slide</component.DataGrid></div>
                <div><component.GridView items={this.options.gridview.items} columns={this.options.gridview.columns} onChange={value=>this.onChange('gridview',value)}>Slide</component.GridView></div>
                <div><component.Dialog title="Show Dialog" onChange={()=>{}}>{
                    this.options.dialog.map(value=><div key={value.id} onClick={()=>this.onChange('dialog',value)}>Contnet Row {JSON.stringify(value)}</div>)
                }</component.Dialog></div>
                <div><component.Color value="#123456" onChange={value=>this.onChange('color',value)}>Color</component.Color></div>
                <div><component.Calendar value="2018-03-22" onChange={value=>this.onChange('calendar',value)}>Calendar</component.Calendar></div>
                <div><component.Toolbar title={this.state.toolbar}>Toolbar</component.Toolbar></div>
                
            </div>
        );
    }
    
}

ReactDOM.render(<Index>Index</Index>, document.getElementById('app'));