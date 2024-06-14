import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsaleRoutingModule } from './hsale-routing.module';
import { HsaleComponent } from './hsale.component';


@NgModule({
  declarations: [
    HsaleComponent
  ],
  imports: [
    CommonModule,
    HsaleRoutingModule
  ]
})
export class HsaleModule { }
