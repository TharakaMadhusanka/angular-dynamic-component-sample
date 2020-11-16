import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DynamicComponentService } from './dynamic/dynamic-component.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    DynamicComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DynamicComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
