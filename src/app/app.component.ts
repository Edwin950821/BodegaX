import { Component, OnInit } from '@angular/core';
// Importación de Component y OnInit desde Angular core
import { Router } from '@angular/router';
// Importación del Router para la navegación
import { AppService } from './app.service';
// Importación del servicio de la aplicación para manejar la lógica de negocio

@Component({
  selector: 'app-root', // Selector para usar este componente en el HTML
  templateUrl: './app.component.html', // Archivo de plantilla HTML para este componente
  styleUrls: ['./app.component.css'] // Estilos CSS para este componente
})
export class AppComponent implements OnInit {
  title = 'BodegaX-angular'; // Título de la aplicación
  role = 'client'; // Rol del usuario, por defecto se establece como 'client'
  logged = false; // Estado de inicio de sesión, inicialmente se establece como false

  constructor(private router: Router, public appSvc: AppService) { }
  // Constructor que inyecta el Router y el servicio de la aplicación

  ngOnInit(): void {
    // Método del ciclo de vida que se ejecuta al inicializar el componente
    var session = sessionStorage.getItem("bodegax");
    // Se intenta obtener la sesión del almacenamiento de sesión

    if (session == undefined) {
      // Si no hay sesión, redirige al usuario a la página de login
      this.router.navigate(["/login"]);
    }

    // Suscripción al observable de rol del servicio para actualizar el rol del usuario
    this.appSvc.role$.subscribe(r => {
      this.role = r; // Actualiza el rol del usuario
    });

    // Suscripción al observable de estado de inicio de sesión del servicio
    this.appSvc.isLogged$.subscribe(r => {
      this.logged = r; // Actualiza el estado de inicio de sesión
    });
  }

  // Métodos vacíos para funcionalidades futuras
  inicio() {
    // Método para manejar la lógica de inicio
  }

  historial() {
    // Método para manejar la lógica del historial
  }

  setting() {
    // Método para manejar la lógica de configuración
  }

  logOut() {
    // Método para cerrar sesión
    this.logged = false; // Actualiza el estado de inicio de sesión a false
    this.appSvc.logOut(); // Llama al método de cierre de sesión del servicio
  }

  view() {
    // Método para manejar la lógica de vista
  }
}
