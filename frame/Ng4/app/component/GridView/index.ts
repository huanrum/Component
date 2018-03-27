import './index.scss';
import { Component, OnChanges, SimpleChange, Input, ChangeDetectionStrategy } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'GridViewControl',
    templateUrl : 'app/component/GridView/index.html'
      
})
export default class {
    constructor() {
        this.ContentText = 'ContentText';
    }
    @Input()
    ContentText: String
}