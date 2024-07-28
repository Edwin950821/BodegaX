import { Component, Inject } from "@angular/core";
import { FormBuilder, FormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../../material.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { AppService } from "../../../app.service";
import { MessageDialog } from "../confirm/dialog-message";


export type orietations = "p" | "portrait" | "l" | "landscape"
@Component({
  selector: 'MessageDialog',
  templateUrl: 'user-form-message.html',
  styleUrls: ['./user-form-message.css'],
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule, HttpClientModule]
})
export class UserFormDialog {
  username=''
  address=''
  password=''
  conpassword=''
  id=''

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, 
  private dialog: MatDialog,private navegacion:Router, private http: HttpClient, 
  private appSvc: AppService, private mydialog:MatDialogRef<UserFormDialog>) {
   

    
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
        role:"user", 
        nombre: this.username,
        id: this.id,
        password:this.password,
        direccion: this.address,
        
      }
    ).subscribe(res=>{
      if(res){
        this.dialog.open(MessageDialog, {
          data: {
            title: "Cliente Creado Con Exito"
          }
        })

        this.mydialog.close()
      }
    })
  }

}


