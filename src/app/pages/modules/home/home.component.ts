import { Component, Inject } from '@angular/core';
import { AppService } from '../../../app.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialog } from '../../../shared/util/dialog/dialog-message';

let modal:any;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
modal: any;
  appSvc: any;

constructor(private dialog: MatDialog){

}

  solicitarCajas(){
    this.dialog.open(MatDialog)
    }

  terminar(){
    
  } 

  openSidebar(component: any){
    this.appSvc.toggleSidebar();
  }

  icon(){
    
  }
}






