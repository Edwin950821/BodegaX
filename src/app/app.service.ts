import { Injectable } from '@angular/core';
// Importación del decorador Injectable, que permite inyectar el servicio en otros componentes o servicios

import { Router } from '@angular/router';
// Importación de Router para poder navegar entre diferentes rutas en la aplicación

import { BehaviorSubject, Observable } from 'rxjs';
// Importación de BehaviorSubject y Observable de RxJS para manejar estados reactivos

@Injectable({
  providedIn: 'root' // El servicio estará disponible en toda la aplicación
})
export class AppService {
  private showSidebar = new BehaviorSubject<boolean>(true);
  // BehaviorSubject para manejar el estado de visibilidad de la barra lateral, inicializado como visible (true)

  private isLogged = new BehaviorSubject<boolean>(true);
  // BehaviorSubject para el estado de inicio de sesión, inicializado como verdadero (true)

  private role = new BehaviorSubject<string>('client');
  // BehaviorSubject para manejar el rol del usuario, inicializado como 'client'

  constructor(private router: Router) {
    var session = sessionStorage.getItem("bodegax");
    // Recuperación de la sesión del usuario del sessionStorage

    if (session) {
      this.isLogged.next(true);
      // Si hay una sesión activa, se actualiza el estado de inicio de sesión a verdadero
      this.role.next(JSON.parse(session).role);
      // También se establece el rol del usuario a partir de la información de la sesión
    } else {
      this.isLogged.next(false);
      // Si no hay sesión, el estado de inicio de sesión se establece como falso
    }
  }

  // Observable para observar el estado de inicio de sesión
  get isLogged$(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  // Observable para observar el rol del usuario
  get role$(): Observable<string> {
    return this.role.asObservable();
  }

  // Observable para observar la visibilidad de la barra lateral
  get showSidebar$(): Observable<boolean> {
    return this.showSidebar.asObservable();
  }

  // Método para alternar la visibilidad de la barra lateral
  toggleSidebar() {
    if (this.showSidebar.getValue()) {
      this.showSidebar.next(false); // Si está visible, se oculta
    } else {
      this.showSidebar.next(true); // Si está oculta, se muestra
    }
  }

  // Método para abrir la barra lateral
  openSidebar() {
    this.showSidebar.next(true);
  }

  // Método para cerrar la barra lateral
  closeSidebar() {
    this.showSidebar.next(false);
  }

  // Método para cerrar la sesión del usuario
  logOut() {
    sessionStorage.removeItem('bodegax'); // Se elimina la sesión del sessionStorage
    this.isLogged.next(false); // Actualiza el estado de inicio de sesión a falso
    this.role.next('client'); // Reinicia el rol a 'client'
    this.router.navigate(['/login']); // Navega a la página de inicio de sesión
  }

  // Método para iniciar sesión
  logIn(user: any) {
    sessionStorage.setItem('bodegax', JSON.stringify(user));
    // Guarda la información del usuario en sessionStorage
    this.isLogged.next(true); // Actualiza el estado de inicio de sesión a verdadero
    this.role.next(user.role); // Establece el rol del usuario basado en la información proporcionada
    this.router.navigate(['/']); // Navega a la página principal
  }
}
