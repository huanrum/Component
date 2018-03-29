import './index.scss';
import { Component, OnChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'ListControl',
    templateUrl : 'app/component/List/index.html'
      
})
export default class {
    constructor() {
        this.items = ['111','2222'];
    }
    @Input()
    items: Array<string>

    @Input()
    value: string

    //声明事件发射器
    @Output() 
    change = new EventEmitter<string>();
}