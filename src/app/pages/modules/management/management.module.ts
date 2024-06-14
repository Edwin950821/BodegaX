import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MaterialModule
  ]
})
export class ManagementModule { }
