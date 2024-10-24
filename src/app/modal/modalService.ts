import { Injectable, NgModule } from '@angular/core';
// Importa los decoradores Injectable y NgModule de Angular.

import { Subject } from 'rxjs';
// Importa Subject de la biblioteca RxJS para trabajar con flujos de datos reactivos.

import { AppComponent } from '../app.component';
// Importa AppComponent desde su ruta relativa.

import { BrowserModule } from '@angular/platform-browser';
// Importa BrowserModule, necesario para ejecutar la aplicación en un navegador.

@Injectable({
  providedIn: 'root'
})
// Decorador Injectable: Indica que la clase puede ser inyectada en otras partes de la aplicación.
// providedIn: 'root' hace que el servicio sea singleton y accesible en toda la aplicación.

@NgModule({
  declarations: [AppComponent], // Declara el componente principal de la aplicación.
  imports: [BrowserModule], // Importa BrowserModule, necesario para las aplicaciones web.
  providers: [[ModalService()]], // Proveedor de servicios, que incluye la función ModalService.
  bootstrap: [AppComponent] // Indica el componente que debe cargarse al iniciar la aplicación.
})
export class AppModule { }
// Define el módulo principal de la aplicación con sus declaraciones, importaciones y proveedores.

export function ModalService(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}
// Define una función ModalService que, actualmente, lanza un error indicando que la función no está implementada.

export class AppService { }
// Define una clase vacía AppService.
