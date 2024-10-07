import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { MatDialog } from '@angular/material/dialog';
import { SolicitarCaja } from '../../../shared/util/solicitar-caja/solicitar-caja';
import { Title } from '@angular/platform-browser';

@Component({
  selector: '/app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  role = ''

constructor(private appSvc:AppService, private dialog: MatDialog){
  appSvc.role$.subscribe(r =>{
    this.role = r
    console.log(this.role)
  })
}

  solicitarCajas(){
    this.dialog.open(SolicitarCaja, {data: {
      title: 'Hola' 
    }})
  }

  terminar(){
    
  } 

  openSidebar(){
    this.appSvc.toggleSidebar()
  }

  icon(){
    
  }
}






