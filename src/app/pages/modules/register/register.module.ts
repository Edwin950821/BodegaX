import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ]
})
export class RegisterModule { }
