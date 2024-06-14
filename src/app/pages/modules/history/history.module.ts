import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MaterialModule,
  ]
})
export class HistoryModule { }
