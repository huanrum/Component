import './index.scss';


 // zone 为异步任务提供hook支持，主要应用于提高脏检查效率和降低性能损耗
// reflect-metadata 为Decorator提供反应射API，注意:Decorator是ES6的提案
import 'zone.js/dist/zone';
import 'reflect-metadata';

// 引入启动器
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {APP_BASE_HREF,LocationStrategy, HashLocationStrategy} from '@angular/common';  

// 引入NgModule装饰器,引入浏览器模块
import { Component, NgModule, EventEmitter, PACKAGE_ROOT_URL, Input } from '@angular/core';
 
import { HttpModule,Http } from "@angular/http";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import * as pipe from './pipe';
import component from './component';
import Service from './service';

// 为 AppComponent 组件类添加注解
@Component({
  selector: 'app',
  template: `
            <div class="index-page">
                <div><LabelControl>Label{{entity.Input}} {{'Label {Input}'|language:entity}}</LabelControl></div>
                <div><ButtonControl (click)="handleEvent('Button')">Button</ButtonControl></div>
                <div><InputControl [value]="entity.Input" (change)="handleEvent('Input',$event)">Input</InputControl></div>
                <div><TextboxControl [value]="entity.Textbox" (change)="handleEvent('Textbox',$event)">Textbox</TextboxControl></div>
                <div><CheckboxControl [value]="entity.Checkbox" (change)="handleEvent('Checkbox',$event)">Checkbox</CheckboxControl></div>
                <div><ImageControl [value]="entity.Image">Image</ImageControl></div>
                <div><PanelControl>Panel</PanelControl></div>
                <div><RadioControl [value]="entity.Radio" (change)="handleEvent('Radio',$event)">Radio</RadioControl></div>
                <div><SelectControl [items]="option.Select" [value]="entity.Select" (change)="handleEvent('Select',$event)">Select</SelectControl></div>
                <div><SlideControl>Slide</SlideControl></div>
                <div><ProgressControl>Progress</ProgressControl></div>
                <div><ListControl [items]="option.List" [value]="entity.List" (change)="handleEvent('List',$event)">List</ListControl></div>
                <div><ListViewControl>ListView</ListViewControl></div>
                <div><MenuControl>Menu</MenuControl></div>
                <div><TreeControl>Tree</TreeControl></div>
                <div><TabControl>Tab</TabControl></div>
                <div><DataGridControl>DataGrid</DataGridControl></div>
                <div><GridViewControl>GridView</GridViewControl></div>
                <div><DialogControl>Dialog</DialogControl></div>
                <div><ColorControl>Color</ColorControl></div>
                <div><CalendarControl>Calendar</CalendarControl></div>
                <div><ToolbarControl>Toolbar</ToolbarControl></div>
  
            </div>
  `
})
class AppComponent {
    constructor(service:Service){
        this.entity = new component.Entity();
        this.option = new component.Entity();
        this.extend = new component.Entity();
        this.extend.Label = {abc:111};
        this.option.List = [111,222,333];
        this.option.Select = [1110,2220,3330];
        this.entity.Input = '0123456789';
        this.entity.Image = 'http://www.iconpng.com/png/go-shopping/down88.png';

        this.service = service;

        this.service.List.get().subscribe(req=>{
            this.option.List = req.json().data.list;
            console.log(this.option.List);
        })
    }
    service:Service
    entity:component.Entity
    extend:component.Entity
    option:component.Entity
    handleEvent(control:string, e:EventEmitter<any>){
        if(e && !(e instanceof Event)){
            this.entity[control] = e;
            console.log(control,this.entity);
        }
    }
}

@NgModule({
    imports: [ HttpModule,CommonModule,FormsModule,BrowserModule],
    declarations: [ AppComponent,...Object.keys(pipe).map(i=>pipe[i]),...Object.keys(component).map(i=>component[i])],
    providers: [
        Service,
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

