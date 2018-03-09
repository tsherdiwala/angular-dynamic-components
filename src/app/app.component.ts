import { Component, ViewChildren, ComponentFactoryResolver, OnInit, QueryList, AfterViewInit } from '@angular/core';
import { HostDirective } from './host.directive';
import { DynamicItem } from './dynamic-item.model';
import { Dynamic1Component } from './dynamic1.component';
import { Dynamic2Component } from './dynamic2.component';
import { TemplateComponent } from './template.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(HostDirective) viewChildren: QueryList<HostDirective>;

  title = 'app';

  data: DynamicItem[] = [
    new DynamicItem(Dynamic1Component, {title: 'Title1'}),
    new DynamicItem(Dynamic2Component, {title: 'Hello World'}),
    new DynamicItem(Dynamic2Component, {title: 'New Title'})
  ]

  constructor(private componentFactoryResolver: ComponentFactoryResolver){

  }

  ngAfterViewInit(){
    console.log("viewChildren",this.viewChildren.toArray());
    setTimeout(() => {
      this.loadComponents();
    },1);
    
  }

  private loadComponents(){
    const hostingTemplates = this.viewChildren.toArray();

    this.data.forEach((item, itemIndex) => {
      let viewContainerRef = hostingTemplates[itemIndex].viewContainerRef;
      viewContainerRef.clear();

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
      let componentRef = viewContainerRef.createComponent(componentFactory);

      const componentInstance = componentRef.instance as TemplateComponent;
      componentInstance.data = item.data;
    });
  }
}
