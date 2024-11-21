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

  sidebarOpen: boolean = true;  // Inicializa 'sidebarOpen' en 'true', indicando que el sidebar está abierto de forma predeterminada. Se utilizará para alternar la visibilidad del sidebar.
  isMobile: boolean = window.innerWidth <= 768; // Inicializa 'isMobile' en función del ancho actual de la pantalla. Si el ancho es menor o igual a 768px, se considera una pantalla móvil (true); de lo contrario, será false.

  user4 = JSON.parse(sessionStorage.getItem("bodegax") || "{'role': ''}");

  constructor(private appSvc: AppService, private dialog: MatDialog) {

    // Detecta cambios en el tamaño de la pantalla
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;



      checkScreenSize(); {
        this.isMobile = window.innerWidth <= 768;
      }

    });


  }





  get shouldShowUserName(): boolean {
    return !this.sidebarOpen || !this.isMobile || window.innerWidth > 768;
  }

  logged: any; // Variable que puede almacenar información sobre el estado de inicio de sesión (no inicializada)

  // Método que se llama para finalizar un proceso o jornada
  terminar() {
    throw new Error('Method not implemented.'); // Lanza un error indicando que el método no está implementado
  }

  openSidebar() {
    // Método para abrir la barra lateral utilizando AppService.
    this.appSvc.toggleSidebar();
    this.sidebarOpen = !this.sidebarOpen;

  }




  // Método que puede ser utilizado para ver detalles o información adicional
  ver() {

  }
}

function checkScreenSize() {
  throw new Error('Function not implemented.');
}

