import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialog } from '../../../shared/util/confirm/dialog-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = ''
  password =''

  users = [
    {name: 'El master', role: 'admin', username: 'ElMaster', password: '12345'},
    {name: 'La primavera', role: 'user', username: 'LaPrimavera', password: '12345'}
  ]
  
  constructor(private dialog: MatDialog, private router: Router){

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
    var userfound = this.users.find(user => user.username == this.username)
    if(userfound == undefined){
      this.dialog.open(MessageDialog, {
        data:{
          title: "Este usuario no existe"
        }
      })
      return
    }else{
      if(userfound.password == this.password){
        sessionStorage.setItem('bodegax', JSON.stringify(userfound))
        this.router.navigate(['/'])
      }else{
        this.dialog.open(MessageDialog, {
          data:{
            title: "Contraseña incorrecta"
          }
        })
      }
    }
  }

}
