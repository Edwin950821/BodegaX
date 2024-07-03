import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialog } from '../../../shared/util/confirm/dialog-message';
import { AppService } from '../../../app.service';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username=''
  address=''
  password=''
  conpassword=''
  confirm=''
  home=''
  id=''
  
  login(){
    
  }


}
