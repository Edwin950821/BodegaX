import { NgModule } from '@angular/core';
// Importa el decorador NgModule de Angular, utilizado para definir módulos.

import { RouterModule, Routes } from '@angular/router';
// Importa RouterModule y Routes de Angular Router para configurar rutas en la aplicación.

import { ManagementComponent } from './management.component';
// Importa el componente ManagementComponent desde su ruta relativa.

const routes: Routes = [{ path: '', component: ManagementComponent }];
// Define una constante llamada routes que es un array de objetos de tipo Routes.
// Configura una única ruta con un path vacío ('') que carga el componente ManagementComponent.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // Importa RouterModule con las rutas configuradas usando forChild(routes) para registrar rutas hijas.

  exports: [RouterModule]
  // Exporta RouterModule para que las rutas configuradas estén disponibles en otros módulos que importen ManagementRoutingModule.
})
export class ManagementRoutingModule { }
// Define y exporta el módulo ManagementRoutingModule que configura las rutas para ManagementComponent.
