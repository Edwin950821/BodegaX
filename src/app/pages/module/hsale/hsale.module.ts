import { NgModule } from '@angular/core';// Importa el decorador NgModule de Angular.
import { CommonModule } from '@angular/common';// Importa el módulo CommonModule para tener acceso a directivas como *ngIf y *ngFor.
import { HsaleRoutingModule } from './hsale-routing.module';// Importa el módulo de rutas HsaleRoutingModule.
import { HsaleComponent } from './hsale.component';// Importa el componente HsaleComponent.


@NgModule({
  declarations: [// Declara el componente HsaleComponent.
    HsaleComponent
  ],
  imports: [// Importa el módulo CommonModule y HsaleRoutingModule.
    CommonModule,
    HsaleRoutingModule
  ]
})
export class HsaleModule { } // Define y exporta el módulo HsaleModule.
