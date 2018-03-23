import './index.scss';
import { Component, OnChanges, SimpleChange, Input, ChangeDetectionStrategy } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'LabelControl',
    template: `<div><ng-content></ng-content></div>`
})
export default class {
    constructor() {
        this.ContentText = 'ContentText';
    }
    @Input()
    ContentText: String
}