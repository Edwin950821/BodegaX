import { NgModule } from '@angular/core';
// Importa el decorador NgModule de Angular, utilizado para definir módulos.

import { RouterModule, Routes } from '@angular/router';
// Importa RouterModule y Routes de Angular Router para configurar rutas en la aplicación.

import { HomeComponent } from './home.component';
// Importa el componente HomeComponent desde su ruta relativa.

import { HttpClientModule } from '@angular/common/http';
// Importa HttpClientModule, necesario para realizar solicitudes HTTP en Angular.

const routes: Routes = [{ path: '', component: HomeComponent }];
// Define una constante llamada routes que es un array de objetos de tipo Routes.
// Configura una única ruta con un path vacío ('') que carga el componente HomeComponent.

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  // Importa RouterModule con las rutas configuradas usando forChild(routes) para registrar rutas hijas.
  // También importa HttpClientModule para permitir solicitudes HTTP en este módulo.

  exports: [RouterModule]
  // Exporta RouterModule para que las rutas configuradas estén disponibles en otros módulos que importen HomeRoutingModule.
})
export class HomeRoutingModule { }
// Define y exporta el módulo HomeRoutingModule que configura las rutas para HomeComponent.
