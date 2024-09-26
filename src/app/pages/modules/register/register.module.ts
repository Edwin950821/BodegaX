// Importa los módulos necesarios de Angular.
import { NgModule } from '@angular/core'; // Módulo base para definir un módulo en Angular.
import { CommonModule } from '@angular/common'; // Módulo que proporciona funcionalidades comunes, como ngIf y ngFor.

import { RegisterRoutingModule } from './register-routing.module'; // Módulo de enrutamiento específico para el registro.
import { RegisterComponent } from './register.component'; // Componente que maneja el registro de usuarios.
import { MaterialModule } from '../../../material.module'; // Módulo que agrupa los componentes de Angular Material utilizados en la aplicación.
import { FormsModule } from '@angular/forms'; // Módulo que permite el uso de formularios en Angular.
import { HttpClientModule } from '@angular/common/http'; // Módulo que permite realizar peticiones HTTP.

@NgModule({
  declarations: [
    RegisterComponent // Declara el componente RegisterComponent para que esté disponible en este módulo.
  ],
  imports: [
    MaterialModule, // Importa el módulo de Angular Material para usar sus componentes.
    CommonModule, // Importa funcionalidades comunes de Angular.
    RegisterRoutingModule, // Importa el módulo de enrutamiento para gestionar las rutas del registro.
    FormsModule, // Importa el módulo de formularios para gestionar formularios reactivos y basados en plantillas.
    HttpClientModule // Importa el módulo HTTP para realizar solicitudes HTTP.
  ]
})
export class RegisterModule { } // Define y exporta el módulo RegisterModule.
