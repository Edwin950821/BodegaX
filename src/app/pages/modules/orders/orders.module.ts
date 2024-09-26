// Importa el decorador NgModule desde Angular
import { NgModule } from '@angular/core';
// Importa CommonModule que proporciona directivas y funcionalidades comunes de Angular
import { CommonModule } from '@angular/common';

// Importa el módulo de enrutamiento específico para las órdenes
import { OrdersRoutingModule } from './orders-routing.module';
// Importa el componente de órdenes que se va a declarar en este módulo
import { OrdersComponent } from './orders.component';
// Importa el módulo de Material que contiene componentes de Angular Material
import { MaterialModule } from '../../../material.module';

// Define un módulo de Angular usando el decorador NgModule
@NgModule({
  declarations: [
    OrdersComponent // Declara el componente OrdersComponent que forma parte de este módulo
  ],
  imports: [
    CommonModule, // Importa CommonModule para usar directivas como ngIf, ngFor, etc.
    OrdersRoutingModule, // Importa el módulo de enrutamiento para manejar la navegación relacionada con las órdenes
    MaterialModule // Importa MaterialModule para utilizar componentes de Angular Material
  ]
})
// Exporta la clase OrdersModule, que puede ser importada en otros módulos
export class OrdersModule { }
