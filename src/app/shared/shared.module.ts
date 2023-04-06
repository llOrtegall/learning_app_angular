import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavAppComponent } from './nav-app/nav-app.component';



@NgModule({
  declarations: [
    NavAppComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavAppComponent
  ]
})
export class SharedModule { }
