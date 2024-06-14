import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HsaleComponent } from './hsale.component';

const routes: Routes = [{ path: '', component: HsaleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HsaleRoutingModule { }
