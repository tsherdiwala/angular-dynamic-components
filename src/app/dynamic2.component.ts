import { Component, Input } from '@angular/core';
import { TemplateComponent } from './template.component';

@Component({
    selector: 'dynamic2',
    template: `
        <div class="yellow-background">
            This is dynamic component2 with title: {{data.title}}
        </div>
    `
})
export class Dynamic2Component implements TemplateComponent{
    @Input() data : any;
}