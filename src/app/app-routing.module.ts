import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './shared/guard/check-login.guard';
import { CheckNotLoginGuard } from './shared/guard/check-not-login.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/modules/login/login.module').then(m => m.LoginModule), canActivate: [CheckNotLoginGuard], },
  { path: '', loadChildren: () => import('./pages/modules/home/home.module').then(m => m.HomeModule), canActivate: [CheckLoginGuard] }, 
  { path: 'home', loadChildren: () => import('./pages/modules/home/home.module').then(m => m.HomeModule), canActivate: [CheckLoginGuard] },
  { path: 'management', loadChildren: () => import('./pages/modules/management/management.module').then(m => m.ManagementModule) },
  { path: 'orders', loadChildren: () => import('./pages/modules/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'settings', loadChildren: () => import('./pages/modules/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'history', loadChildren: () => import('./pages/modules/history/history.module').then(m => m.HistoryModule) },
  { path: 'view', loadChildren: () => import('./pages/modules/view/view.module').then(m => m.ViewModule) },
  { path: 'hsale', loadChildren: () => import('./pages/module/hsale/hsale.module').then(m => m.HsaleModule) },
  { path: 'register', loadChildren: () => import('./pages/modules/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
