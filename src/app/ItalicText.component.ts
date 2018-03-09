import { Component, Input } from '@angular/core';
import { TemplateComponent } from './template.component';

@Component({
    template: `
        <i>
            {{data}}
        </i>
    `
})
export class ItalicTextComponent implements TemplateComponent{
    @Input() data : any;
}