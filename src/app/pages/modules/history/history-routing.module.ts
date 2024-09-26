// Importaciones necesarias para configurar las rutas y el módulo de Angular
import { NgModule } from '@angular/core'; // 'NgModule' es el decorador que define un módulo en Angular
import { RouterModule, Routes } from '@angular/router'; // 'RouterModule' para manejar el enrutamiento, 'Routes' para definir las rutas
import { HistoryComponent } from './history.component'; // Se importa el componente 'HistoryComponent' que se utilizará en las rutas

// Definición de las rutas del módulo. 
// En este caso, la ruta raíz ('') carga el 'HistoryComponent'
const routes: Routes = [{ path: '', component: HistoryComponent }];

@NgModule({
  // Se importan las rutas definidas usando 'RouterModule.forChild' 
  // 'forChild' se usa en módulos que no son el módulo de enrutamiento principal de la aplicación
  imports: [RouterModule.forChild(routes)],

  // Se exporta 'RouterModule' para que las rutas estén disponibles en otros módulos
  exports: [RouterModule]
})
// Definición del módulo 'HistoryRoutingModule', encargado de manejar el enrutamiento 
// para el componente 'HistoryComponent'
export class HistoryRoutingModule { }

