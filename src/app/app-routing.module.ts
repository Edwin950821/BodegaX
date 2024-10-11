import { NgModule } from '@angular/core';
// Importación de NgModule para definir un módulo en Angular
import { RouterModule, Routes } from '@angular/router';
// Importación de RouterModule y Routes para la configuración de rutas
import { CheckLoginGuard } from './shared/guard/check-login.guard';
// Importación de un guard para verificar si el usuario ha iniciado sesión
import { CheckNotLoginGuard } from './shared/guard/check-not-login.guard';
// Importación de un guard para verificar si el usuario no ha iniciado sesión

// Definición de las rutas de la aplicación
const routes: Routes = [
  // Ruta para el login
  {
    path: 'login',
    loadChildren: () => import('./pages/modules/login/login.module').then(m => m.LoginModule),
    canActivate: [CheckNotLoginGuard], // Solo se puede acceder si el usuario NO ha iniciado sesión
  },
  // Ruta para la página de inicio, redirige a home
  {
    path: '',
    loadChildren: () => import('./pages/modules/home/home.module').then(m => m.HomeModule),
    canActivate: [CheckLoginGuard] // Solo se puede acceder si el usuario ha iniciado sesión
  },
  // Ruta para la página de home
  {
    path: 'home',
    loadChildren: () => import('./pages/modules/home/home.module').then(m => m.HomeModule),
    canActivate: [CheckLoginGuard] // Solo se puede acceder si el usuario ha iniciado sesión
  },
  // Rutas para diferentes módulos de la aplicación
  { path: 'management', loadChildren: () => import('./pages/modules/management/management.module').then(m => m.ManagementModule) },
  { path: 'orders', loadChildren: () => import('./pages/modules/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'settings', loadChildren: () => import('./pages/modules/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'history', loadChildren: () => import('./pages/modules/history/history.module').then(m => m.HistoryModule) },
  { path: 'view', loadChildren: () => import('./pages/modules/view/view.module').then(m => m.ViewModule) },
  { path: 'hsale', loadChildren: () => import('./pages/module/hsale/hsale.module').then(m => m.HsaleModule) },
  { path: 'register', loadChildren: () => import('./pages/modules/register/register.module').then(m => m.RegisterModule) },
  { path: 'home', loadChildren: () => import('./pages/modules/home/home.module').then(m => m.HomeModule) }

];

// Definición del módulo de enrutamiento de la aplicación
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración de rutas en el módulo raíz
  exports: [RouterModule] // Exportación del RouterModule para su uso en otros módulos
})
export class AppRoutingModule { }
