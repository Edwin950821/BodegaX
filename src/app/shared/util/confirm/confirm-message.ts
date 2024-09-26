import { Component, Inject } from "@angular/core";
// Importaciones necesarias para crear un componente en Angular y para la inyección de dependencias.

import { FormBuilder } from "@angular/forms";
// Importa el FormBuilder, que ayuda a crear formularios reactivos.

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
// Importaciones para trabajar con diálogos de Angular Material. MAT_DIALOG_DATA permite recibir datos en el diálogo y MatDialogRef permite controlar el diálogo.

import { CommonModule } from "@angular/common";
// Módulo común de Angular que proporciona funcionalidades básicas.

import { MaterialModule } from "../../../material.module";
// Importa un módulo de Material personalizado que puede contener otros componentes de Angular Material.

import { UserFormDialog } from "../user-form/user-form-message";
// Importación de un diálogo de formulario de usuario que no se utiliza directamente en este fragmento, pero puede ser relevante en otros contextos.


export type orietations = "p" | "portrait" | "l" | "landscape";
// Define un tipo que puede ser utilizado para especificar orientaciones de diseño.

@Component({
  selector: 'ConfirmDialog',
  templateUrl: 'confirm-message.html',
  styleUrls: ['./confirm-message.css'],
  standalone: true,
  imports: [MaterialModule, CommonModule]
  // Se define el componente ConfirmDialog, indicando su selector, la plantilla HTML, los estilos CSS,
  // que es un componente independiente (standalone), y los módulos que necesita.
})
export class ConfirmDialog {
  title = '';
  color = 'pink'; // Establece un color por defecto para el diálogo.
  bColor = ''; // Almacena una clase de color para botones.
  mini = false; // Bandera para indicar si el diálogo es de tamaño mini.
  class = ''; // Almacena clases CSS adicionales.

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private mydialog: MatDialogRef<ConfirmDialog>) {
    // Constructor que inyecta datos, el FormBuilder y la referencia del diálogo.

    this.title = data.title; // Asigna el título del diálogo desde los datos inyectados.
    this.color = data.color; // Asigna el color desde los datos inyectados.
    this.class += data.color; // Añade el color a las clases del diálogo.
    this.bColor = 'b' + data.color; // Define una clase de botón basada en el color.

    // Ajusta las clases según el tamaño especificado.
    if (data.size) {
      this.class += ' dialog-mini'; // Si se proporciona un tamaño, añade la clase para diálogos pequeños.
    } else {
      this.class += ' dialog'; // De lo contrario, añade la clase estándar para diálogos.
    }
  }

  cancel() {
    this.mydialog.close(false); // Método que cierra el diálogo y retorna false para indicar cancelación.
  }

  confirm() {
    this.mydialog.close(true); // Método que cierra el diálogo y retorna true para indicar confirmación.
  }
}
