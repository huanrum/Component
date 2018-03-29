import './index.scss';
import { Component, OnChanges, SimpleChange, Input, ChangeDetectionStrategy } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'ImageControl',
    templateUrl : 'app/component/Image/index.html'
      
})
export default class {
    @Input()
    value: String
}