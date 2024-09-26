// Importaciones necesarias desde Angular.
import { NgModule } from '@angular/core'; // Se importa el decorador NgModule para definir un módulo.
import { RouterModule, Routes } from '@angular/router'; // Se importa RouterModule para gestionar las rutas y Routes para definir las rutas específicas.
import { LoginComponent } from './login.component'; // Se importa el componente LoginComponent, que se utilizará en esta configuración de rutas.


// Se define un array de rutas para el módulo de Login.
const routes: Routes = [
  { path: '', component: LoginComponent } // Ruta vacía ('') que cargará el LoginComponent cuando la URL coincida con el módulo. 
];

// Decorador NgModule que define las propiedades del módulo.
@NgModule({
  // Se importa el RouterModule configurado con las rutas específicas para este módulo.
  imports: [RouterModule.forChild(routes)], // `forChild` indica que este es un módulo de enrutamiento hijo. Se define dentro de un contexto de enrutamiento mayor (generalmente AppRoutingModule).

  // Se exporta el RouterModule para que las rutas estén disponibles en otros módulos que importen este módulo.
  exports: [RouterModule]
})
// Definición de la clase del módulo de enrutamiento para la funcionalidad de login.
export class LoginRoutingModule { }
