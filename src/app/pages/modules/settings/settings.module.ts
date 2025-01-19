import { NgModule } from '@angular/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MaterialModule } from '../../../material.module';
import { CheckLoginGuard } from '../../../shared/guard/check-login.guard';
import { CheckboxComponent } from '../../../checkbox/checkbox.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../../app.component';
import { RouterOutlet } from '@angular/router';
import { last } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SettingsComponent, // Declara el componente de configuración dentro del módulo.
  ],
  imports: [
    CommonModule, // Importa el módulo común que proporciona directivas comunes como ngIf y ngFor.
    SettingsRoutingModule, // Importa el módulo de enrutamiento para gestionar las rutas de configuración.
    MaterialModule, // Importa el módulo de Angular Material para utilizar componentes de diseño.
    FormsModule, // Importa el módulo de formularios de Angular para trabajar con formularios de plantilla.
    RouterOutlet, // Importa RouterOutlet para la carga dinámica de componentes basados en rutas.
    ReactiveFormsModule, // Importa el módulo de formularios reactivos para crear formularios más complejos y escalables.
    HttpClientModule // Importa el módulo HttpClient para facilitar las solicitudes HTTP.
],
providers:[// Define los proveedores de servicios para el módulo.
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    FormsModule, 
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,

  ],
})
export class SettingsModule { // Define el módulo de configuración.

  form = signal<FormGroup>( // Declara una señal que representa un formulario reactivo.
    new FormGroup( // Inicializa un nuevo FormGroup con controles individuales.
      {
        name: new FormControl(''), // Control para el nombre, inicializado como vacío.
        addres: new FormControl(''), // Control para la dirección, inicializado como vacío.
        uuid: new FormControl(''), // Control para el UUID, inicializado como vacío.
        stock: new FormControl(''), // Control para el stock, inicializado como vacío.
        password: new FormControl(''), // Control para la contraseña, inicializado como vacío.
        role: new FormControl(''), // Control para el rol del usuario, inicializado como vacío.
        deleted: new FormControl(''), // Control para indicar si está eliminado, inicializado como vacío.
        langs: new FormControl([]), // Control para los idiomas, inicializado como un array vacío.
        employeesCount: new FormControl('') // Control para el conteo de empleados, inicializado como vacío.
      }
    )
  )
}
