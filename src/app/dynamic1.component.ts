import { Component, Input } from '@angular/core';
import { TemplateComponent } from './template.component';

@Component({
    selector: 'dynamic1',
    template: `
         {{data || ''}}
    `
})
export class Dynamic1Component implements TemplateComponent{
    @Input() data : any;
}