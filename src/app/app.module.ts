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
  declarations: [
    CheckboxComponent,
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,

  ],
  providers: [
    provideAnimationsAsync(), AppService
  ],
  bootstrap: [AppComponent,ErrorHandler],


})
export class AppModule { }

export class HomeComponent { }


