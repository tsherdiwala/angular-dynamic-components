import { Component, Input } from '@angular/core';
import { TemplateComponent } from './template.component';

@Component({
    selector: 'dynamic1',
    template: `
        <div class="blue-background">
            This is dynamic component1 with title {{data.title}}
        </div>
    `
})
export class Dynamic1Component implements TemplateComponent{
    @Input() data : any;
}