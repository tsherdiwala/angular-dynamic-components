import { Component, Input } from '@angular/core';
import { TemplateComponent } from './template.component';

@Component({
    selector: 'dynamic2',
    template: `
        <b>
            {{data}}
        </b>
    `
})
export class Dynamic2Component implements TemplateComponent{
    @Input() data : any;
}