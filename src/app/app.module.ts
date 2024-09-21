import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ModalService } from './modal/modalService';



@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule],
  bootstrap: [MainComponent]
})
export class AppModule {}
