import { Component, Inject } from "@angular/core";
// Importa el decorador Component y la función Inject de Angular.

import { FormBuilder } from "@angular/forms";
// Importa FormBuilder de Angular Forms para construir formularios reactivos.

import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
// Importa varias utilidades de Angular Material Dialog:
// MAT_DIALOG_DATA: Para inyectar datos en un diálogo.
// MatDialog: Servicio para abrir diálogos.
// MatDialogModule: Módulo para manejar diálogos de Angular Material.
// MatDialogRef: Referencia a un diálogo abierto para interactuar con él.

import { CommonModule } from "@angular/common";
// Importa CommonModule que incluye directivas comunes de Angular como ngIf y ngFor.

import { MatToolbarModule } from '@angular/material/toolbar';
// Importa MatToolbarModule para usar la barra de herramientas de Angular Material.

import { MatDialogContent } from '@angular/material/dialog';
// Importa MatDialogContent para manejar el contenido dentro de los diálogos de Angular Material.

import { HttpClient, HttpClientModule } from "@angular/common/http";
// Importa HttpClient para hacer solicitudes HTTP y HttpClientModule para configurar HttpClient en Angular.

import { NgModule } from '@angular/core';
// Importa NgModule que permite definir un módulo en Angular.

import { MatFormFieldModule } from '@angular/material/form-field';
// Importa MatFormFieldModule para utilizar campos de formulario de Angular Material.

import { FormsModule } from '@angular/forms';
// Importa FormsModule para trabajar con formularios template-driven.

import { MatSelectModule } from '@angular/material/select';
// Importa MatSelectModule para utilizar selectores de Angular Material.

import { MaterialModule } from "../../../../material.module";
// Importa un módulo personalizado MaterialModule desde una ruta relativa.



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
    if (this.producto) {
      var selected = this.productos.find(p => p.uuid == this.producto)
      selected.stock = selected.stock + this.quantity
      this.http.put("http://localhost:8080/productos/edit", selected).subscribe(res => {
        this.mydialog.close(selected); // Cierra el diálogo y devuelve true
      })
    } else {
      this.mydialog.close(false); // Cierra el diálogo y devuelve false

    }


  }



}


