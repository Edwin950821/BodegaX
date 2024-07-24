import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialog } from '../../../shared/util/confirm/dialog-message';
import { AppService } from '../../../app.service';
import { Dialog } from '@angular/cdk/dialog';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';






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
  id=''

constructor(private dialog: MatDialog,private navegacion:Router, private http: HttpClient, private appSvc: AppService){
  
}

   //funciones 

  register(){
    if( this.username =='' || this.password==''  || this.conpassword=='' || this.id==''  ){
      
      this.dialog.open(MessageDialog, {
        data: {
          title: "Por Favor Rellenar Todos Los Campos"
        }
      })
      return 
    }

    if(this.password != this.conpassword){
      this.dialog.open(MessageDialog, {
        data: {
          title:"La Contraseñas no coinciden"
        }
      })
      return
    }

    this.http.post(
      "http://localhost:8080/admin/create", {
        role:"admin", 
        nombre: this.username,
        id: this.id,
        password:this.password,
        direccion: this.address,
        
      }
    ).subscribe(res=>{
      if(res){
        this.dialog.open(MessageDialog, {
          data: {
            title: "Admin Creado Con Exito"
          }
        })

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
    })
  }

  
  login(){
    
  }


}
