import { Component, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogContent } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from "../../../../material.module";


// Definición de un tipo para las orientaciones, puede ser "p", "portrait", "l" o "landscape"
export type orietations = "p" | "portrait" | "l" | "landscape";

@Component({
  selector: 'RecibirCaja', // Selector del componente, se puede usar en HTML como <recibirCaja></recibirCaja>
  templateUrl: 'recibir-caja.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./recibir-caja.css'], // Rutas a los archivos de estilos CSS del componente
  standalone: true, // Indica que el componente es independiente y no necesita un módulo Angular
  imports: [MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MaterialModule,
    CommonModule,
    HttpClientModule

  ] // Importa módulos necesarios para el componente


})

export class RecibirCaja {
  title = ''; // Título del diálogo, inicializado como una cadena vacía
  color = 'pink'; // Color por defecto del diálogo
  bColor = ''; // Clase de color adicional, se establece más adelante
  mini = false; // Indica si el diálogo es pequeño
  class = ''; // Clase que se aplicará al contenedor del diálogo

  // Variables para almacenar datos ingresados
  conpassword: any; // Confirmación de contraseña
  username: any; // Nombre de usuario
  id: any; // ID del usuario
  address: any; // Dirección del usuario
  password: any; // Contraseña del usuario
  producto = '';
  quantity = 0;

  productos: any[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Inyección de datos pasados al diálogo
    private fb: FormBuilder, // Servicio para construir formularios reactivos
    private http: HttpClient,
    private mydialog: MatDialogRef<RecibirCaja>,// Referencia al diálogo actual
    private dialog: MatDialog,


  ) {
    // Inicializa propiedades del componente usando los datos inyectados
    this.title = data.title; // Asigna el título del diálogo desde los datos
    this.color = data.color; // Asigna el color desde los datos
    this.class += data.color; // Añade el color a la clase del diálogo
    this.bColor = 'b' + data.color; // Establece la clase de color adicional

    this.productos = data.productos

    console.log(data)

    // Verifica si se debe aplicar una clase para un diálogo pequeño
    if (data.size) {
      this.class += ' dialog-mini'; // Clase para diálogos mini
    } else {
      this.class += ' dialog'; // Clase para diálogos normales
    }


  }



  // Método para cancelar el diálogo
  cancel() {
    this.mydialog.close(false); // Cierra el diálogo y devuelve false
  }

  // Método para confirmar la acción en el diálogo
  confirmar() {
    if(this.producto){
      var selected = this.productos.find(p=> p.uuid == this.producto)
      selected.stock = selected.stock + this.quantity
      this.http.put("http://localhost:8080/productos/edit", selected).subscribe(res=>{
        this.mydialog.close(selected); // Cierra el diálogo y devuelve true
      })
    }else{
      this.mydialog.close(false); // Cierra el diálogo y devuelve false

    }
    
    
  }



}


