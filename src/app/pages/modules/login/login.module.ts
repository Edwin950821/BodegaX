// Importaciones necesarias para crear un módulo en Angular
import { NgModule } from '@angular/core'; // Importa el decorador NgModule para definir un módulo
import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular que contiene directivas esenciales

import { LoginRoutingModule } from './login-routing.module'; // Importa el módulo de enrutamiento para el inicio de sesión
import { LoginComponent } from './login.component'; // Importa el componente de inicio de sesión
import { MaterialModule } from '../../../material.module'; // Importa un módulo que encapsula componentes de Angular Material
import { FormsModule } from '@angular/forms'; // Importa el módulo de formularios de Angular para manejar formularios reactivos
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HTTP para realizar solicitudes HTTP

// Define el módulo LoginModule
@NgModule({
  declarations: [
    LoginComponent // Declara el componente LoginComponent que pertenece a este módulo
  ],
  imports: [
    MaterialModule, // Importa el módulo de Material Design
    CommonModule, // Importa el módulo común de Angular
    LoginRoutingModule, // Importa el módulo de enrutamiento para gestionar las rutas relacionadas con el inicio de sesión
    FormsModule, // Importa el módulo de formularios para manejar la vinculación de datos
    HttpClientModule // Importa el módulo HTTP para realizar solicitudes de red
  ]
})
// Exporta la clase LoginModule
export class LoginModule { }
