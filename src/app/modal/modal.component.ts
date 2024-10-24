import { Component, Inject } from "@angular/core";
// Importa el decorador Component y la función Inject de Angular.

import { FormBuilder } from "@angular/forms";
// Importa FormBuilder de Angular Forms para construir formularios reactivos.

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
// Importa varias utilidades de Angular Material Dialog:
// MAT_DIALOG_DATA: Para inyectar datos en un diálogo.
// MatDialogRef: Para interactuar con un diálogo abierto.

import { CommonModule } from "@angular/common";
// Importa CommonModule que incluye directivas comunes de Angular como ngIf y ngFor.

import { ModalService } from "../pages/modules/home/home.component";
// Importa ModalService desde su ruta relativa.

export type orientations = "p" | "portrait" | "l" | "landscape";
// Define un tipo de datos llamado orientations que puede tener los valores "p", "portrait", "l" o "landscape".

@Component({
  selector: 'ModalDialog', // Define el selector del componente.
  templateUrl: 'modal.html', // Ruta al archivo HTML de la plantilla.
  styleUrls: ['./modal.css'], // Ruta al archivo CSS de los estilos.
  standalone: true, // Indica que este componente es independiente.
  imports: [CommonModule], // Importa CommonModule para el uso de directivas comunes de Angular.
  providers: [ModalService] // Proporciona el servicio ModalService al componente.
})
export class ConfirmDialog {
  // Define la clase del componente ConfirmDialog.

  title = ''; // Propiedad para el título del diálogo.
  color = 'pink'; // Propiedad para el color del diálogo, con valor predeterminado "pink".
  bColor = ''; // Propiedad para el color del borde del diálogo.
  mini = false; // Propiedad booleana que indica si el diálogo es mini.
  class = ''; // Propiedad para las clases CSS del diálogo.

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Inyecta los datos en el diálogo.
    private fb: FormBuilder, // Inyecta FormBuilder.
    private mydialog: MatDialogRef<ConfirmDialog> // Inyecta la referencia al diálogo.
  ) {
    this.title = data.title; // Asigna el título desde los datos inyectados.
    this.color = data.color; // Asigna el color desde los datos inyectados.
    this.class += data.color; // Agrega el color a las clases CSS.
    this.bColor = 'b' + data.color; // Asigna el color del borde concatenando 'b' al color.
    
    if (data.size) {
      this.class += ' dialog-mini'; // Si data.size es true, agrega la clase 'dialog-mini'.
    } else {
      this.class += ' dialog'; // Si data.size es false, agrega la clase 'dialog'.
    }
  }

  cancel() {
    this.mydialog.close(false); // Método para cerrar el diálogo y devolver 'false'.
  }

  confirm() {
    this.mydialog.close(true); // Método para cerrar el diálogo y devolver 'true'.
  }
}
