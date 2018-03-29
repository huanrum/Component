import './index.scss';
import { Component, OnChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'TextboxControl',
    templateUrl : 'app/component/Textbox/index.html'
      
})
export default class {
    @Input()
    @Output()
    value: String = 'ContentText'

    //声明事件发射器
    @Output() 
    change = new EventEmitter<string>();
}