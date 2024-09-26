import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { MaterialModule } from '../../../material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class HistoryModule { }
