import { Component, OnChanges, SimpleChange, Input, ChangeDetectionStrategy } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'Button',
    template: `<button>{{children}}</button>`,
    styles: [
        `
        button{
            background:#d3d3d3;
        }
        `
    ]
})
export class Button {
    constructor() {
        this.ContentText = 'ContentText';
    }
    @Input()
    ContentText: String
}