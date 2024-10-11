import { Component, Inject } from '@angular/core';
import { AppService } from '../../../app.service';
import { MatDialog } from '@angular/material/dialog';

import { DespacharCaja } from '../../../shared/util/despachar-caja/despachar-caja';

@Component({
  selector: '/app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  role = ''
  constructor(private dialog: MatDialog, private appSvc: AppService) {
  }

  solicitarCajas() {
    this.dialog.open(DespacharCaja, {data: { title: ''}})
  }


    terminar() {

    }

    openSidebar() {
      this.appSvc.toggleSidebar();
    }

    icon() {
    }



}

