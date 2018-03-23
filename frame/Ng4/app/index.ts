
 // zone 为异步任务提供hook支持，主要应用于提高脏检查效率和降低性能损耗
// reflect-metadata 为Decorator提供反应射API，注意:Decorator是ES6的提案
import 'zone.js/dist/zone';
import 'reflect-metadata';

// 引入启动器
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {APP_BASE_HREF,LocationStrategy, HashLocationStrategy} from '@angular/common';  

// 引入NgModule装饰器,引入浏览器模块
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//import component from './component';
import ButtonControl from './component/Button';

let component = {};
// 为 AppComponent 组件类添加注解
@Component({
  selector: 'app',
  template: [
            '<div>',
            '   <ButtonControl>Test</ButtonControl>',
                Object.keys(component).map(cm => {
                    return '<div><componentName>componentName</componentName></div>'.replace(/componentName/g, cm);
                }).join(''),
            '</div>'
            ].join('')
})
class AppComponent {}

console.log(component);

@NgModule({
    imports: [ CommonModule,FormsModule,BrowserModule],
    declarations: [ AppComponent,ButtonControl,...Object.values(component)],
    providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

