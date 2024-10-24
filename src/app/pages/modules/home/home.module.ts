import { NgModule } from '@angular/core';
// Importa el decorador NgModule de Angular, utilizado para definir módulos.

import { CommonModule } from '@angular/common';
// Importa CommonModule, que incluye directivas comunes de Angular como ngIf y ngFor.

import { HomeRoutingModule } from './home-routing.module';
// Importa el módulo de enrutamiento personalizado para el componente Home.

import { HomeComponent } from './home.component';
// Importa el componente HomeComponent desde su ruta relativa.

import { MaterialModule } from '../../../material.module';
// Importa un módulo personalizado llamado MaterialModule que probablemente contiene componentes de Angular Material.

@NgModule({
  declarations: [HomeComponent],
  // Declara el componente HomeComponent como parte de este módulo.

  imports: [
    CommonModule,
    // Importa CommonModule para usar directivas comunes de Angular.
    
    HomeRoutingModule,
    // Importa el módulo de enrutamiento específico para este módulo.
    
    MaterialModule
    // Importa el módulo personalizado de Material que probablemente contiene componentes de Angular Material.
  ]
})
export class HomeModule { }
// Define y exporta la clase HomeModule, que configura el módulo Angular con sus declaraciones e importaciones.
