import { NgModule } from '@angular/core';
// Importa el decorador NgModule de Angular, utilizado para definir módulos.

import { RouterModule, Routes } from '@angular/router';
// Importa RouterModule y Routes de Angular Router para configurar rutas en la aplicación.

import { ViewComponent } from './view.component';
// Importa el componente ViewComponent desde su ruta relativa.

const routes: Routes = [{ path: '', component: ViewComponent }];
// Define una constante llamada routes, que es un array de objetos de tipo Routes.
// Configura una única ruta con un path vacío ('') que carga el componente ViewComponent.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // Importa RouterModule con las rutas configuradas usando forChild(routes) para registrar rutas hijas.

  exports: [RouterModule]
  // Exporta RouterModule para que las rutas configuradas estén disponibles en otros módulos que importen ViewRoutingModule.
})
export class ViewRoutingModule { }
// Define y exporta el módulo ViewRoutingModule que configura las rutas para ViewComponent.

