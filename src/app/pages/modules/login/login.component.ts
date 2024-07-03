import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialog } from '../../../shared/util/confirm/dialog-message';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
home() {
throw new Error('Method not implemented.');
}

  username = ''
  password =''
 
  
  constructor(private dialog: MatDialog, private router: Router, private appSvc: AppService, private http:HttpClient){

  }
  
  login (){
    if(this.username=='' || this.password==''){
      this.dialog.open(MessageDialog, {
        data:{
          title: "Los campos no pueden estar vacios"
        }
      })
      return
    }
    
    this.http.post("http://localhost:8080/admin/login", {
      username: this.username,
      password: this.password
    }).subscribe(res=>{
      if(res){
        this.appSvc.logIn(res)
      }
    }, error=>{
      console.log(error)
      this.dialog.open(MessageDialog, {
        data:{
          title: "Credenciales invalidas"
        }
      })
    })
  }

  register (){
    if(this.username=='' || this.password=='' ){
      this.dialog.open(MessageDialog, {
        data:{
          title: "Hay campos vacios"
        }
      })
      return
    }
  

   
  
  }

}
