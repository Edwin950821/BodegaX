import { NgModule } from '@angular/core';
// Importa el decorador NgModule de Angular, utilizado para definir módulos.

import { CommonModule } from '@angular/common';
// Importa CommonModule, que incluye directivas comunes de Angular como ngIf y ngFor.

import { ViewRoutingModule } from './view-routing.module';
// Importa el módulo de enrutamiento personalizado para el componente View.

import { ViewComponent } from './view.component';
// Importa el componente ViewComponent desde su ruta relativa.

import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';
// Importa un módulo personalizado llamado MaterialModule que probablemente contiene componentes de Angular Material.

@NgModule({
  declarations: [
    ViewComponent
  ],
  // Declara el componente ViewComponent como parte de este módulo.

  imports: [
    CommonModule,
    // Importa CommonModule para usar directivas comunes de Angular.
    
    ViewRoutingModule,
    // Importa el módulo de enrutamiento específico para este módulo.
    
    MaterialModule,
    FormsModule
    // Importa el módulo personalizado de Material que probablemente contiene componentes de Angular Material.
  ]
})
export class ViewModule { }
// Define y exporta la clase ViewModule, que configura el módulo Angular con sus declaraciones e importaciones.
