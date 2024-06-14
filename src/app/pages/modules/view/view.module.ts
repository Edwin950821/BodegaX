import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MaterialModule
  ]
})
export class ViewModule { }
