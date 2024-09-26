import { Component, Inject } from "@angular/core"; // Importaciones necesarias para el componente.
import { FormBuilder } from "@angular/forms"; // Importación de FormBuilder para manejar formularios (aunque no se utiliza en este caso).
import { MAT_DIALOG_DATA } from "@angular/material/dialog"; // Importación para inyectar datos en el diálogo.
import { CommonModule } from "@angular/common"; // Módulo común de Angular.
import { MaterialModule } from "../../../material.module"; // Módulo de Angular Material específico para la aplicación.

// Definición de un tipo para las orientaciones posibles.
export type orietations = "p" | "portrait" | "l" | "landscape";

// Decorador de componente para definir la configuración del componente.
@Component({
  selector: 'MessageDialog', // Nombre del selector del componente.
  templateUrl: 'dialog-message.html', // Ruta del archivo de plantilla HTML.
  styleUrls: ['./dialog-message.css'], // Ruta del archivo CSS para estilos.
  standalone: true, // Marca el componente como independiente.
  imports: [MaterialModule, CommonModule] // Importaciones necesarias para este componente.
})
export class MessageDialog {
  // Propiedades del componente
  title = ''; // Título del diálogo, inicializado como una cadena vacía.
  color = 'pink'; // Color predeterminado del diálogo.
  bColor = ''; // Color de fondo del botón (se construye más adelante).
  mini = false; // Propiedad para indicar si el diálogo es de tamaño mini.
  class = ''; // Clases CSS adicionales que se aplicarán al diálogo.

  // Constructor del componente que recibe datos inyectados.
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.title = data.title; // Asigna el título del diálogo desde los datos inyectados.
    this.color = data.color; // Asigna el color del diálogo desde los datos inyectados.

    // Construcción de las clases CSS basadas en los datos inyectados.
    this.class += data.color; // Agrega el color a las clases del diálogo.
    this.bColor = 'b' + data.color; // Construye una clase para el botón basada en el color.

    // Determina el tamaño del diálogo.
    if (data.size) {
      this.class += ' dialog-mini'; // Si se especifica un tamaño, agrega la clase 'dialog-mini'.
    } else {
      this.class += ' dialog'; // De lo contrario, agrega la clase 'dialog'.
    }
  }
}
