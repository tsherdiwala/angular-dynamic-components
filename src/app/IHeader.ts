import { Type } from "@angular/core";
import { TemplateComponent } from "./template.component";

export class IHeader{
    fieldName: string;
    displayTitle: string;
    component?: Type<TemplateComponent>
}