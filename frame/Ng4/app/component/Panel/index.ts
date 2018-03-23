import './index.scss';
import { Component, OnChanges, SimpleChange, Input, ChangeDetectionStrategy } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'PanelControl',
    templateUrl:  './index.html'
      
})
export default class {
    constructor() {
        this.ContentText = 'ContentText';
    }
    @Input()
    ContentText: String
}