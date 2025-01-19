import { ErrorHandler, NgModule } from '@angular/core';
// Importación del decorador NgModule, que se utiliza para definir un módulo en Angular
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// Importación de la función para proporcionar animaciones de forma asíncrona
import { MaterialModule } from './material.module';
// Importación de un módulo que agrupa componentes de Angular Material
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AppService } from './app.service';
import { MatDialog } from '@angular/material/dialog';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';





@NgModule({
  declarations: [ //declarations es una propiedad que contiene una lista de componentes, directivas y tuberías que pertenecen al módulo
    CheckboxComponent,
    AppComponent,
    

  ],
  imports: [ //imports es una propiedad que contiene una lista de módulos que se importan en el módulo
    BrowserModule,
    AppRoutingModule,
    MaterialModule,

  ],
  providers: [ //providers es una propiedad que contiene una lista de servicios que se proporcionan en el módulo
    provideAnimationsAsync(), AppService
  ],
  bootstrap: [AppComponent,ErrorHandler],//bootstrap es una propiedad que contiene una lista de componentes que se inician al cargar el módulo


})
export class AppModule { }

export class HomeComponent { }


