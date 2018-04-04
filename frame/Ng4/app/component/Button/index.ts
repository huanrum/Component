import './index.scss';
import { Component, Injectable, OnInit, OnDestroy,OnChanges, SimpleChange, Input, ChangeDetectionStrategy } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'ButtonControl',
    templateUrl : 'app/component/Button/index.html'
})
export default class  implements OnInit,OnDestroy{
    constructor() {
        this.ContentText = 'ContentText';
    }
    @Input()
    ContentText: String

    ngOnInit(){
        console.log('ngOnInit被Angular调用');
    }
    ngOnDestroy(){
        console.log('ngOnDestroy被Angular调用');
    }
}