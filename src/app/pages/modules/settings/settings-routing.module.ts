// Importa los módulos necesarios de Angular.
import { NgModule } from '@angular/core'; // Módulo base que permite definir un módulo en Angular.
import { RouterModule, Routes } from '@angular/router'; // Módulos que manejan el enrutamiento en Angular.
import { SettingsComponent } from './settings.component'; // Componente que gestiona la configuración de la aplicación.

const routes: Routes = [
  { path: '', component: SettingsComponent } // Define la ruta para el componente de configuración. La ruta vacía ('') corresponde al componente SettingsComponent.
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // Configura el RouterModule para usar las rutas definidas. 'forChild' indica que son rutas hijas de un módulo existente.
  ],
  exports: [
    RouterModule // Exporta el RouterModule para que esté disponible en otros módulos que importen este módulo de enrutamiento.
  ]
})
export class SettingsRoutingModule { } // Define y exporta el módulo de enrutamiento para la configuración.

