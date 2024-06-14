import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

constructor(private appSvc:AppService){

}

  solicitarCajas(){
    
  }

  terminar(){
    
  } 

  openSidebar(){
    this.appSvc.toggleSidebar()
  }

  icon(){
    
  }
}






