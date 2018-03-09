import { Component, Input } from '@angular/core';
import { TemplateComponent } from './template.component';

@Component({
    template: `
        <div>
            {{data.shortname}}
        </div>
        <div>
            {{data.role}}
        </div>
    `
})
export class RoleComponent implements TemplateComponent{
    @Input() data : any;
}