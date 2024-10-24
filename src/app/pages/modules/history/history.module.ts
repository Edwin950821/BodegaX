import { NgModule } from '@angular/core';
// Importa el decorador NgModule de Angular, utilizado para definir módulos.

import { CommonModule } from '@angular/common';
// Importa CommonModule, que incluye directivas comunes de Angular como ngIf y ngFor.

import { HistoryRoutingModule } from './history-routing.module';
// Importa el módulo de enrutamiento personalizado para el componente History.

import { HistoryComponent } from './history.component';
// Importa el componente HistoryComponent desde su ruta relativa.

import { MaterialModule } from '../../../material.module';
// Importa un módulo personalizado llamado MaterialModule que probablemente contiene componentes de Angular Material.

import { HttpClientModule } from '@angular/common/http';
// Importa HttpClientModule, necesario para realizar solicitudes HTTP en Angular.

@NgModule({
  declarations: [HistoryComponent],
  // Declara el componente HistoryComponent como parte de este módulo.

  imports: [
    CommonModule,
    // Importa CommonModule para usar directivas comunes de Angular.
    
    HistoryRoutingModule,
    // Importa el módulo de enrutamiento específico para este módulo.
    
    MaterialModule,
    // Importa el módulo personalizado de Material que probablemente contiene componentes de Angular Material.
    
    HttpClientModule
    // Importa HttpClientModule para permitir solicitudes HTTP en este módulo.
  ]
})
export class HistoryModule { }
// Define y exporta la clase HistoryModule, que configura el módulo Angular con sus declaraciones e importaciones.
