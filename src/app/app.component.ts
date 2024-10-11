import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root', // Define el selector para usar este componente en el HTML.
  templateUrl: './app.component.html', // Indica el archivo de plantilla HTML asociado con este componente.
  styleUrls: ['./app.component.css'] // Indica el archivo de estilos CSS asociado con este componente.
})
export class AppComponent implements OnInit{
  title = 'BodegaX-angular';
  role = 'client'
  logged = false

  constructor(private router: Router, public appSvc: AppService) { } 
  // Constructor que inyecta el servicio Router y el servicio AppService para su uso en este componente.

  ngOnInit(): void {
    // Método del ciclo de vida OnInit, que se ejecuta cuando el componente es inicializado.

    var session = sessionStorage.getItem("bodegax"); 
    // Obtiene la sesión almacenada en el sessionStorage con la clave "bodegax".

    if (session == undefined) {
      // Si no se encuentra una sesión, redirige al usuario a la página de login.
      this.router.navigate(["/login"]);
    }

    this.appSvc.role$.subscribe(r => {
      // Suscripción al observable role$ del servicio AppService para actualizar el rol del usuario.
      this.role = r; // Actualiza el rol del usuario cuando cambia.
    });

    this.appSvc.isLogged$.subscribe(r => {
      // Suscripción al observable isLogged$ del servicio AppService para actualizar el estado de inicio de sesión.
      this.logged = r; // Actualiza el estado de inicio de sesión cuando cambia.
    });
  }

  // Métodos vacíos para lógica futura

  inicio() { 
    // Método placeholder para manejar la lógica de inicio.
  }

  historial() { 
    // Método placeholder para manejar la lógica del historial de pedidos.
  }

  setting() { 
    // Método placeholder para manejar la lógica de configuraciones.
  }

  logOut() { 
    // Método para cerrar la sesión del usuario.
    this.logged = false; // Establece el estado de inicio de sesión como false.
    this.appSvc.logOut(); // Llama al método logOut del servicio AppService.
  }

  view() { 
    // Método placeholder para manejar la lógica de vista (visualización de datos).
  }
} // Fin de la clase AppComponent.




