import { NgModule } from '@angular/core';
// Importación del decorador NgModule, que se utiliza para definir un módulo en Angular
import { BrowserModule } from '@angular/platform-browser';
// Importación del módulo BrowserModule, necesario para cualquier aplicación Angular que se ejecute en un navegador

import { AppRoutingModule } from './app-routing.module';
// Importación del módulo de rutas para manejar la navegación en la aplicación
import { AppComponent } from './app.component';
// Importación del componente principal de la aplicación
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// Importación de la función para proporcionar animaciones de forma asíncrona
import { MaterialModule } from './material.module';
// Importación de un módulo que agrupa componentes de Angular Material
import { CheckboxComponent } from './checkbox/checkbox.component';
// Importación de un componente personalizado Checkbox

@NgModule({
  declarations: [
    AppComponent, // Declaración del componente principal de la aplicación
    CheckboxComponent // Declaración del componente Checkbox
  ],
  imports: [
    BrowserModule, // Importación del módulo de navegador
    AppRoutingModule, // Importación del módulo de rutas
    MaterialModule // Importación del módulo de Angular Material
  ],
  providers: [
    provideAnimationsAsync() // Provisión de animaciones de forma asíncrona para la aplicación
  ],
  bootstrap: [AppComponent] // Componente raíz que se inicializará al arrancar la aplicación
})
export class AppModule { }
