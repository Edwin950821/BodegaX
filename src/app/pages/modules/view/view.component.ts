import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Injectable, NgModule } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from '../../../app.service';
import { MatDialog } from '@angular/material/dialog';
// Importa los decoradores Injectable y NgModule de Angular.

// Importación para crear formularios reactivos en Angular

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']

})

export class ViewComponent {
  

  constructor(private appSvc: AppService, private dialog: MatDialog) { }
openSidebar() {
  
    this.appSvc.toggleSidebar()
    // Método para abrir la barra lateral utilizando AppService.
  
}
  productos: any;
  

  user4 = JSON.parse(sessionStorage.getItem("bodegax") || "{'role': ''}");
  //Metodo que se utiliza para traer el usuario se inicio de sesion en la parte superior derecha 
    
  }


  

NgModule({

  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Añade FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule{

}




