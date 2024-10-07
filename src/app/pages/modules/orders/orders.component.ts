// Importa el decorador Component desde Angular
import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { MatDialog } from '@angular/material/dialog';

// Define el componente OrdersComponent con su selector, plantilla y estilos
@Component({
  selector: 'app-orders', // Selector que se utilizará en el HTML para incluir este componente
  templateUrl: './orders.component.html', // Ruta del archivo HTML que define la vista del componente
  styleUrls: ['./orders.component.css'] // Ruta del archivo CSS que contiene los estilos del componente
})
export class OrdersComponent {

  constructor(private appSvc: AppService, private dialog: MatDialog) { }

  openSidebar() {
    this.appSvc.toggleSidebar()
  } // Clase del componente

  logged: any; // Variable que puede almacenar información sobre el estado de inicio de sesión (no inicializada)

  // Método que se llama para finalizar un proceso o jornada
  terminar() {
    throw new Error('Method not implemented.'); // Lanza un error indicando que el método no está implementado
  }

  // Método que puede ser utilizado para ver detalles o información adicional
  ver() {

  }
}
