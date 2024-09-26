// Importa el decorador NgModule desde Angular para definir un módulo
import { NgModule } from '@angular/core';
// Importa RouterModule y Routes para manejar la configuración de rutas
import { RouterModule, Routes } from '@angular/router';
// Importa el componente RegisterComponent que se va a asociar a la ruta
import { RegisterComponent } from './register.component';

// Define las rutas para el módulo de registro. En este caso, la ruta vacía ('') carga el RegisterComponent
const routes: Routes = [{ path: '', component: RegisterComponent }];

// Define un módulo de Angular usando el decorador NgModule
@NgModule({
  // Importa el RouterModule configurado con las rutas definidas
  imports: [RouterModule.forChild(routes)],
  // Exporta el RouterModule para que otros módulos puedan usar las rutas definidas aquí
  exports: [RouterModule]
})
// Exporta la clase RegisterRoutingModule para que pueda ser utilizada en otros módulos
export class RegisterRoutingModule { }

