import { Component, ViewChildren, ComponentFactoryResolver, OnInit, QueryList, AfterViewInit } from '@angular/core';
import { HostDirective } from './host.directive';
import { DynamicItem } from './dynamic-item.model';
import { Dynamic1Component } from './dynamic1.component';
import { Dynamic2Component } from './dynamic2.component';
import { TemplateComponent } from './template.component';
import { IHeader } from './IHeader';
import { ItalicTextComponent } from './ItalicText.component';
import { RoleComponent } from './role.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(HostDirective) viewChildren: QueryList<HostDirective>;

  title = 'app';

  headers: IHeader[] = [
    {
      fieldName: 'firstName',
      displayTitle: 'First Name'
    },
    {
      fieldName: 'lastName',
      displayTitle: 'Last Name',
      component: ItalicTextComponent
    },
    {
      fieldName: 'email',
      displayTitle: 'Email Address',
      component: Dynamic2Component
    },
    {
      fieldName: 'role',
      displayTitle: 'Info',
      component: RoleComponent
    },
    {
      fieldName: 'organization',
      displayTitle: 'Company'
    }
  ];

  tableData: any[] = [
    {
      role: {
        shortname: 'tsherdiwala',
        role: 'Admin'
      },
      firstName: 'Tejas',
      lastName: 'Sherdiwala',
      email: 'tsherdiwala@gmail.com',
      organization: 'knoxpo'
    },
    {
      role: {
        shortname: 'khathiwala',
        role: 'Admin'
      },
      organization: 'knoxpo',
      firstName: 'Khushboo',
      email: 'khushboo.hathiwala@gmail.com'
    }
  ]

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

    this.tableData.forEach((dataItem,rowIndex) => {

      this.headers.forEach((header, columnIndex) => {

        let viewReferenceIndex = (rowIndex * this.headers.length) + columnIndex;
        let viewContainerRef  = hostingTemplates[viewReferenceIndex].viewContainerRef;
        viewContainerRef.clear();

        let componentClass = header.component;
        if(componentClass==undefined){
          componentClass = Dynamic1Component;
        }

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        let componentRef = viewContainerRef.createComponent(componentFactory);

        const componentInstance = componentRef.instance as TemplateComponent;
        componentInstance.data = dataItem[header.fieldName];

      })

    });

    /*this.data.forEach((item, itemIndex) => {
      let viewContainerRef = hostingTemplates[itemIndex].viewContainerRef;
      viewContainerRef.clear();

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
      let componentRef = viewContainerRef.createComponent(componentFactory);

      const componentInstance = componentRef.instance as TemplateComponent;
      componentInstance.data = item.data;
    });*/
  }
}
