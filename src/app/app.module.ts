import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HostDirective } from './host.directive';
import { Dynamic1Component } from './dynamic1.component';
import { Dynamic2Component } from './dynamic2.component';

@NgModule({
  declarations: [
    AppComponent,
    HostDirective,
    Dynamic1Component,
    Dynamic2Component
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [Dynamic1Component, Dynamic2Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
