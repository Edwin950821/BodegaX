// Importaciones necesarias para definir un módulo de enrutamiento
import { NgModule } from '@angular/core'; // Importa el decorador NgModule para crear un módulo
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes para definir rutas
import { OrdersComponent } from './orders.component'; // Importa el componente OrdersComponent que se vinculará a la ruta

// Define las rutas del módulo
const routes: Routes = [{ path: '', component: OrdersComponent }]; // Define una ruta que asigna el componente OrdersComponent a la ruta raíz

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa RouterModule y configura las rutas definidas para este módulo
  exports: [RouterModule] // Exporta RouterModule para que otros módulos puedan usar estas rutas
})
// Exporta la clase OrdersRoutingModule
export class OrdersRoutingModule { }
