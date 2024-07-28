import { NgModule } from '@angular/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MaterialModule } from '../../../material.module';
import { CheckLoginGuard } from '../../../shared/guard/check-login.guard';
import { CheckboxComponent } from '../../../checkbox/checkbox.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../../app.component';
import { RouterOutlet } from '@angular/router';
import { last } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SettingsComponent,
   
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    FormsModule, 
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule



  ]
})
export class SettingsModule { 

  form = signal <FormGroup>(
    new FormGroup(
      {
        name: new FormControl(''),
        addres: new FormControl(''),
        uuid: new FormControl(''),
        stock: new FormControl(''),
        password: new FormControl(''), 
        role: new FormControl(''),
        deleted: new FormControl(''),
        langs: new FormControl([]),
        employeesCount: new FormControl('')
      }
    )
  )
}
