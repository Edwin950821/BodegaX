import { NgModule } from '@angular/core';
// Importa el decorador NgModule de Angular, utilizado para definir módulos.

import { RouterModule, Routes } from '@angular/router';
// Importa RouterModule y Routes de Angular Router para configurar rutas en la aplicación.

import { HsaleComponent } from './hsale.component';
// Importa el componente HsaleComponent desde su ruta relativa.

const routes: Routes = [{ path: '', component: HsaleComponent }];
// Define una constante llamada routes que es un array de objetos de tipo Routes.
// Aquí se configura una única ruta con un path vacío ('') que carga el componente HsaleComponent.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // Importa RouterModule con las rutas configuradas usando forChild(routes) para registrar rutas hijas.
  exports: [RouterModule]
  // Exporta RouterModule para que las rutas configuradas estén disponibles en otros módulos que importen HsaleRoutingModule.
})
export class HsaleRoutingModule { }
// Define y exporta el módulo HsaleRoutingModule que configura las rutas para HsaleComponent.
